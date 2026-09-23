/**
 * Web Audio API synthesized "Happy Birthday" melody & party chimes
 * 100% client-side, zero external MP3 assets, zero network delay
 */

class BirthdayMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private timer: number | null = null;
  private noteIndex: number = 0;

  // Notes frequencies (Hz)
  private readonly notes: { [key: string]: number } = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.00,
    A4: 440.00,
    Bb4: 466.16,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
    REST: 0,
  };

  // Melody score: [Note, Duration in beats]
  private readonly melody: [string, number][] = [
    ['C4', 0.75], ['C4', 0.25], ['D4', 1.0], ['C4', 1.0], ['F4', 1.0], ['E4', 2.0],
    ['C4', 0.75], ['C4', 0.25], ['D4', 1.0], ['C4', 1.0], ['G4', 1.0], ['F4', 2.0],
    ['C4', 0.75], ['C4', 0.25], ['C5', 1.0], ['A4', 1.0], ['F4', 1.0], ['E4', 1.0], ['D4', 2.0],
    ['Bb4', 0.75], ['Bb4', 0.25], ['A4', 1.0], ['F4', 1.0], ['G4', 1.0], ['F4', 2.5],
    ['REST', 1.0]
  ];

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx || this.isMuted || freq === 0) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Warm, bell-like vibraphone tone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Subtle harmonic warmth
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);
    const gain2 = this.ctx.createGain();
    gain2.gain.setValueAtTime(0.08, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.95);

    osc.connect(gain);
    osc2.connect(gain2);
    gain2.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  public play() {
    this.initCtx();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;
    this.noteIndex = 0;

    const beatDurationMs = 540; // cheerful tempo

    const playNext = () => {
      if (!this.isPlaying) return;

      const [noteName, beats] = this.melody[this.noteIndex];
      const freq = this.notes[noteName] || 0;
      const durationSec = (beats * beatDurationMs) / 1000;

      if (freq > 0) {
        this.playTone(freq, durationSec);
      }

      this.noteIndex = (this.noteIndex + 1) % this.melody.length;
      this.timer = window.setTimeout(playNext, beats * beatDurationMs);
    };

    playNext();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public playChime() {
    this.initCtx();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    // celebratory arpeggio (C5, E5, G5, C6)
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.4), i * 110);
    });
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const birthdayMusic = new BirthdayMusicEngine();
