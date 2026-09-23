import React, { useState } from 'react';
import { Download, Check, FileCode, Share2 } from 'lucide-react';

export const StandaloneHtmlExporter: React.FC = () => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = async () => {
    try {
      // Fetch the standalone static HTML version
      const res = await fetch('/kevin-birthday-tribute-standalone.html');
      let htmlText = '';
      if (res.ok) {
        htmlText = await res.text();
      } else {
        // Fallback: create standalone template
        htmlText = `<!DOCTYPE html><html><head><title>The Journey of a Builder</title></head><body><h1>Okoye Kevin Chibuoyim Tribute</h1></body></html>`;
      }

      const blob = new Blob([htmlText], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Okoye-Kevin-Chibuoyim-Birthday-Tribute.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch {
      window.open('/kevin-birthday-tribute-standalone.html', '_blank');
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-amber-300 text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-amber-500/10"
        title="Download complete standalone HTML file to send to Kevin"
      >
        {downloaded ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300">Downloaded Single-File HTML!</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Standalone .HTML File to Send Him</span>
          </>
        )}
      </button>

      <a
        href="/kevin-birthday-tribute-standalone.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs transition-colors"
      >
        <FileCode className="w-3.5 h-3.5 text-slate-400" />
        <span>Preview Offline HTML</span>
      </a>
    </div>
  );
};
