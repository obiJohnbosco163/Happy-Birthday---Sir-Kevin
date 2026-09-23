/**
 * TRIBUTE DATA & CONTENT REPOSITORY
 * 
 * Edit this file to update milestones, testimonials, dates, photos,
 * prayers, birthday letters, and verified community links.
 * 
 * All facts grounded strictly in verified and supplied information.
 */

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period?: string;
  badge?: string;
  leadQuote: string;
  narrative: string[];
  keyHighlights: string[];
  links?: { label: string; url: string; handle: string }[];
  image?: string;
  imageCaption?: string;
}

export interface ImpactCard {
  id: string;
  archetype: string;
  headline: string;
  description: string;
  reflection: string;
  tag: string;
}

export interface TributeMessage {
  id: string;
  sender: string;
  role: string;
  date: string;
  preview: string;
  fullMessage: string;
  colorTheme: 'gold' | 'cyan' | 'emerald' | 'amber';
}

export interface OfficialLink {
  name: string;
  handle: string;
  url: string;
  role: string;
  description: string;
}

export const TRIBUTE_DATA = {
  subject: {
    fullName: "Okoye Kevin Chibuoyim",
    shortName: "Kevin",
    honorific: "Sir Kevin",
    brandAlias: "Ezemmuo Blockchain",
    motto: "Build in Public",
    title: "THE JOURNEY OF A BUILDER",
    subtitles: [
      "Founder & CEO, Ginakev Digital Academy (GIDA)",
      "Founder, The Block Hive (Nsukka, Enugu)",
      "Catalyst & Community Architect, BlockchainUNN",
      "Lead Organizer, Southeast Blockchain & Games Week (SEBGW) 2026",
    ],
    rolesSummary: "Founder · Builder · Mentor · Community Architect",
    portraitUrl: "/images/sir-kevin-portrait.jpg",
    coverUrl: "/images/build-in-public-banner.jpg",
    blockHiveUrl: "/images/the-block-hive.jpg",
  },

  intro: {
    lines: [
      "Every great story begins somewhere…",
      "This one began with a dream.",
      "To a Builder.\nTo a Mentor.\nTo a Man who chose to create.",
    ],
    revealName: "OKOYE KEVIN CHIBUOYIM",
    revealSubtitle: "Founder · Builder · Mentor · Community Architect",
    ctaText: "BEGIN THE JOURNEY",
  },

  officialLinks: [
    {
      name: "Ginakev Digital Academy (GIDA)",
      handle: "@Official_GIDA",
      url: "https://x.com/Official_GIDA",
      role: "Founder & CEO",
      description: "Technology & Web3 academy driving bootcamps, structured training, scholarships, and ecosystem empowerment.",
    },
    {
      name: "The Block Hive",
      handle: "@theblock_hive",
      url: "https://x.com/theblock_hive",
      role: "Founder",
      description: "A physical blockchain & technology hub in Nsukka, Enugu — providing co-working sanctuary, power, internet, and mentorship.",
    },
    {
      name: "BlockchainUNN",
      handle: "@BlockchainUNN",
      url: "https://x.com/BlockchainUNN",
      role: "Ecosystem Pioneer",
      description: "Premier student and campus blockchain community fostering research, technical skillsets, and peer-to-peer growth at UNN.",
    },
    {
      name: "Southeast Blockchain & Games Week 2026",
      handle: "@SEBchainGamesWK",
      url: "https://x.com/SEBchainGamesWK",
      role: "Regional Host & Convener",
      description: "Flagship regional conference and gaming hackathon uniting Web3 developers, studios, and pioneers across Eastern Nigeria.",
    },
    {
      name: "Ethereum Enugu",
      handle: "@Eth_Enugu",
      url: "https://x.com/Eth_Enugu",
      role: "Regional Community Partner",
      description: "Grassroots Ethereum and smart contract builders network across Enugu state and surrounding hubs.",
    },
    {
      name: "InBlockchain HQ",
      handle: "@inblockchainHQ",
      url: "https://x.com/inblockchainHQ",
      role: "Ecosystem Partner",
      description: "Media and research channel covering verified frontier technology and Web3 developments across Africa.",
    },
  ] as OfficialLink[],

  chapters: [
    {
      id: "beginnings",
      number: "01",
      title: "Humble Beginnings",
      subtitle: "The decision to build, step by honest step",
      leadQuote: "“Great things in technology do not start in luxury; they start with someone refusing to accept obscurity.”",
      narrative: [
        "Before the titles, the academies, and the buzzing physical hubs, there was simply a young man with deep curiosity and an unrelenting conviction.",
        "In an environment where many were content to wait for external help, Kevin embraced the builder's mindset: learn relentlessly, share generously, and build in public.",
        "Every line of understanding was earned, and every step was taken with quiet resolve to open doors for others as he walked through them himself.",
      ],
      keyHighlights: [
        "A commitment to learning emerging technologies from first principles",
        "The early adoption of the 'Build in Public' philosophy",
        "A conviction that geographical location should never limit talent",
      ],
      image: "/images/build-in-public-banner.jpg",
      imageCaption: "The core ethos: Build in public, regardless of where you start.",
    },
    {
      id: "blockchainunn",
      number: "02",
      title: "BlockchainUNN",
      subtitle: "Igniting curiosity inside the university community",
      leadQuote: "“When you educate a student with a future-proof skill, you rewrite the economic trajectory of a whole generation.”",
      narrative: [
        "The journey took root deeply within the academic and student ecosystem of the University of Nigeria, Nsukka (UNN).",
        "Recognizing that campus students possessed boundless energy but often lacked access to frontier tech guidance, Kevin became intimately associated with the growth of BlockchainUNN.",
        "The community gathered curious undergraduates, demystified distributed ledger technology, organized study sessions, and transformed passive observers into active builders.",
      ],
      keyHighlights: [
        "Fostered student peer-to-peer technical development",
        "Built a bridge between classroom theory and real Web3 engineering",
        "Cultivated one of the most vibrant university blockchain communities in Nigeria",
      ],
      links: [
        { label: "Follow BlockchainUNN", url: "https://x.com/BlockchainUNN", handle: "@BlockchainUNN" },
        { label: "Ethereum Enugu", url: "https://x.com/Eth_Enugu", handle: "@Eth_Enugu" },
      ],
    },
    {
      id: "gida",
      number: "03",
      title: "Ginakev Digital Academy (GIDA)",
      subtitle: "From an idea to an institution of empowerment",
      leadQuote: "“Education is the only scalable equalizer. GIDA was born to make world-class tech education accessible to every hungry mind.”",
      narrative: [
        "As Founder & CEO of Ginakev Digital Academy (GIDA), Okoye Kevin Chibuoyim formalized the vision of systematic digital empowerment.",
        "GIDA was structured to deliver comprehensive technology and Web3 education — conducting hands-on bootcamps, structured curriculum tracks, mentorship cohorts, and merit-based scholarships.",
        "The model is simple yet transformative: IDEA → EDUCATION → COMMUNITY → OPPORTUNITY → IMPACT. Through GIDA, students transition from complete beginners to industry-ready developers, community managers, and digital leaders.",
      ],
      keyHighlights: [
        "Founder & CEO leadership driving tech & Web3 bootcamps",
        "Merit scholarships provided to underserved youths and university students",
        "Bridging African tech talent to global ecosystem opportunities",
      ],
      links: [
        { label: "GIDA Official", url: "https://x.com/Official_GIDA", handle: "@Official_GIDA" },
        { label: "InBlockchain HQ", url: "https://x.com/inblockchainHQ", handle: "@inblockchainHQ" },
      ],
    },
    {
      id: "community-impact",
      number: "04",
      title: "Community & Impact",
      subtitle: "Nurturing the people behind the code",
      leadQuote: "“A true mentor does not count how many followers he has; he counts how many leaders he has helped build.”",
      narrative: [
        "For Kevin, community has never been a marketing buzzword. It is a sacred responsibility.",
        "He understood that code alone does not sustain a builder through power cuts, failed transactions, and self-doubt. People need a sense of belonging, constructive feedback, and an older brother who believes in their raw talent.",
        "Through countless late-night reviews, one-on-one counsel, and open office hours, he became the anchor that kept aspiring developers grounded and inspired.",
      ],
      keyHighlights: [
        "Active mentorship that addresses human resilience alongside technical skills",
        "Fostering an inclusive, supportive environment where questions are welcomed",
        "Instilling integrity and long-term values into young African builders",
      ],
    },
    {
      id: "the-block-hive",
      number: "05",
      title: "The Block Hive",
      subtitle: "A physical sanctuary for builders in Nsukka, Enugu",
      leadQuote: "“Every builder deserves a place where the lights stay on, the internet flows, and ideas can breathe freely.”",
      narrative: [
        "Recognizing that virtual mentorship can only go so far when students face chronic infrastructure deficits, Kevin founded The Block Hive.",
        "Situated in Nsukka, Enugu State, The Block Hive was created as a physical blockchain and technology hub. It solves the critical bottleneck: providing reliable electricity, stable high-speed connectivity, and an inspiring collaborative workspace.",
        "Here, builders, entrepreneurs, creatives, and students sit side by side to learn, debate, prototype, and ship real products.",
      ],
      keyHighlights: [
        "Physical tech incubator and co-working sanctuary in Nsukka, Enugu",
        "Uninterrupted workspace for Web3 developers, creatives, and entrepreneurs",
        "A physical node connecting Southeast Nigeria to global decentralization",
      ],
      image: "/images/the-block-hive.jpg",
      imageCaption: "The Block Hive: The physical sanctuary where ideas become tangible realities.",
      links: [
        { label: "The Block Hive Hub", url: "https://x.com/theblock_hive", handle: "@theblock_hive" },
      ],
    },
    {
      id: "ecosystems",
      number: "06",
      title: "Building Ecosystems",
      subtitle: "Connecting grassroots talent to the global frontier",
      leadQuote: "“When you build alone, you go fast. When you build ecosystems, you build institutions that outlast you.”",
      narrative: [
        "Ecosystem architecture requires connecting disparate dots: campus communities, independent devs, protocol foundations, and local enterprises.",
        "Through partnerships, hackathons, and regional meetups, Kevin positioned Southeast Nigeria as an undeniable hotbed for Web3 talent.",
        "His consistent motto — 'Build in Public' — became a cultural beacon for youth across the region, encouraging them to document their journey and showcase their progress openly.",
      ],
      keyHighlights: [
        "Championing the 'Build in Public' cultural movement",
        "Bridging grassroots Nigerian talent with global protocol ecosystems",
        "Fostering transparent, collaborative development practices",
      ],
    },
    {
      id: "sebgw-2026",
      number: "07",
      title: "SEBGW 2026",
      subtitle: "The vision expands across the Southeast",
      leadQuote: "“The Southeast is not waiting for permission to lead in blockchain and gaming; we are building the stage ourselves.”",
      narrative: [
        "The latest milestone in this journey is the Southeast Blockchain & Games Week (SEBGW) 2026.",
        "As an associated leader and with The Block Hive actively participating, Kevin is helping steer an unprecedented convergence of gaming, digital art, distributed finance, and interactive software across the Southeast.",
        "SEBGW 2026 is proof of an expanding vision: taking the grassroots energy cultivated at GIDA, BlockchainUNN, and The Block Hive onto the premier regional and continental stage.",
      ],
      keyHighlights: [
        "Southeast Blockchain & Games Week 2026 leadership and participation",
        "Spotlighting Web3 gaming, digital arts, and developer bounties",
        "Catalyzing cross-state collaboration across Eastern Nigeria",
      ],
      links: [
        { label: "SEBGW 2026", url: "https://x.com/SEBchainGamesWK", handle: "@SEBchainGamesWK" },
      ],
    },
    {
      id: "next-chapter",
      number: "08",
      title: "The Next Chapter",
      subtitle: "A legacy still in active construction",
      leadQuote: "“Everything built so far is just the foundation. The real structure is only beginning to rise.”",
      narrative: [
        "Milestones are not destinations; they are vantage points from which to see greater possibilities.",
        "As Kevin marks this new year of life, the horizon widens: deeper educational reach through GIDA, expanded infrastructure at The Block Hive, and more young lives elevated through tech.",
        "The story of this builder is not a retrospective; it is a live broadcast of purpose in motion.",
      ],
      keyHighlights: [
        "Expanding educational scholarships and technical training cohorts",
        "Deepening regional infrastructure for builders and researchers",
        "A lifelong dedication to mentorship, integrity, and servant leadership",
      ],
    },
  ] as Chapter[],

  gidaPipeline: [
    {
      step: "01",
      name: "IDEA",
      detail: "Identifying potential and curiosity in raw talent across university campuses and communities.",
      icon: "Lightbulb",
    },
    {
      step: "02",
      name: "EDUCATION",
      detail: "Intensive, structured bootcamps in Web3, smart contracts, frontends, and ecosystem tools.",
      icon: "GraduationCap",
    },
    {
      step: "03",
      name: "COMMUNITY",
      detail: "Fostering peer collaboration, hackathon teams, and a supportive brotherhood of builders.",
      icon: "Users",
    },
    {
      step: "04",
      name: "OPPORTUNITY",
      detail: "Unlocking scholarships, international bounties, remote roles, and project grants.",
      icon: "Briefcase",
    },
    {
      step: "05",
      name: "IMPACT",
      detail: "Graduates who become mentors themselves, elevating their families and communities.",
      icon: "Sparkles",
    },
  ],

  peopleCards: [
    {
      id: "student",
      archetype: "The Student",
      headline: "A student who found direction.",
      description: "Entering university with uncertainty and curiosity, given structured mentorship, hands-on guidance, and a clear path toward modern technology.",
      reflection: "“Before meeting Sir Kevin, blockchain felt like an abstract buzzword. Through his patience and guidance, it became a career, a craft, and a purpose.”",
      tag: "Purpose & Clarity",
    },
    {
      id: "builder",
      archetype: "The Builder",
      headline: "A builder who found community.",
      description: "Coding alone late into the night, battling unreliable electricity and loneliness, until discovering a tribe of fellow creators at The Block Hive.",
      reflection: "“Building alone is exhausting. Having a mentor who created a physical hub where you can walk in, plug in, and build with brothers changed everything.”",
      tag: "Sanctuary & Tribe",
    },
    {
      id: "opportunity",
      archetype: "The Young Person",
      headline: "A young person who found opportunity.",
      description: "Someone from an ordinary background who received a GIDA scholarship or bootcamp seat, opening doors to global Web3 bounties and work.",
      reflection: "“He didn't just teach code. He taught us how to present ourselves, how to build in public, and how to stand tall on global stages.”",
      tag: "Empowerment",
    },
    {
      id: "encouragement",
      archetype: "The Dreamer",
      headline: "A person who found encouragement.",
      description: "When projects failed, hackathon submissions fell short, or impostor syndrome struck, finding a mentor who said: ‘Dust yourself off; we build again tomorrow.’",
      reflection: "“When I was ready to quit, his words reminded me that failure is just data in the builder's lifecycle. He believed in me before I believed in myself.”",
      tag: "Unwavering Belief",
    },
  ] as ImpactCard[],

  birthdayLetter: {
    salutation: "Dearest Mentor, Leader, and Brother,",
    paragraphs: [
      "On this milestone day, we pause to celebrate not just the accomplishments written on official websites, but the character of the man behind them all.",
      "In a world where many seek the limelight for themselves, you have consistently chosen the harder, nobler path: building the stage upon which hundreds of others can shine.",
      "Through Ginakev Digital Academy, you gave thousands of young people their first real glimpse into technological sovereignty. Through BlockchainUNN, you showed students that world-class excellence can bloom right here in Nsukka. Through The Block Hive, you gave weary builders a home, power, and an unshakeable belief that their dreams are worth fighting for.",
      "You have lived the gospel of ‘Build in Public’ — showing us that humility, diligence, and service are not signs of weakness, but the very hallmarks of genuine greatness.",
      "May this birthday usher in a season of supernatural favor, quiet peace, profound clarity, and joy that overflows. The seeds you have planted in the lives of countless young Africans will grow into towering oaks that shelter generations to come.",
    ],
    closing: "Happy Birthday, Okoye Kevin Chibuoyim!",
    signature: "With deepest honor, respect, and love — From your mentee, and the entire builder community you inspired.",
  },

  prayer: {
    title: "A PRAYER FOR THE NEXT CHAPTER",
    subtitle: "A quiet moment of thanksgiving and petition for the journey ahead",
    body: [
      "Heavenly Father, we bring before You Your son, servant, and leader, Okoye Kevin Chibuoyim, on this special day.",
      "We thank You for the breath of life, for the sound mind You have gifted him, and for the courageous heart that refuses to shrink back in the face of hard challenges.",
      "Grant him, O Lord, the wisdom of Solomon to navigate the complexities of leadership, enterprise, and mentorship. In every boardroom, in every strategic decision, and in every personal counsel, let divine discernment be his constant guide.",
      "Encircle him with Your hedge of supernatural protection. Guard his health, his mind, his spirit, and all that pertains to him against every arrow of discouragement, fatigue, and distraction.",
      "Strengthen his hands for greater works. As he expands GIDA, nurtures The Block Hive, and leads ecosystems into 2026 and beyond, open doors that no human institution can shut. Connect him with loyal, visionary, and faithful companions who will lift his hands in times of battle.",
      "Above all, Lord, fill his heart with deep, abiding peace. May he always know that his labor is not in vain, and may Your countenance shine upon him all the days of his life.",
      "In Jesus' name, Amen.",
    ],
  },

  initialMessages: [
    {
      id: "msg-1",
      sender: "Johnbosco (Your Mentee)",
      role: "Student & Web3 Builder",
      date: "September 24",
      colorTheme: "gold",
      preview: "To the man who taught me that building is an act of service...",
      fullMessage: "Sir Kevin, having you as a mentor has been one of the greatest blessings of my technical journey. You never judged where I started; you only saw where I could go. Thank you for answering late questions, for providing honest criticism, and for showing me what genuine servant-leadership looks like. Happy Birthday, Boss! The best is yet to come!",
    },
    {
      id: "msg-2",
      sender: "GIDA Bootcamp Alumni",
      role: "Class of 2024 / Smart Contract Dev",
      date: "September 24",
      colorTheme: "cyan",
      preview: "GIDA gave me my first tech breakthrough...",
      fullMessage: "Happy Birthday, CEO! Before GIDA, I had no laptop and no direction. Through the scholarship program and community encouragement, I wrote my first smart contract. Today I earn, build, and teach others. You changed my life trajectory, Sir. God bless your new age immensely!",
    },
    {
      id: "msg-3",
      sender: "The Block Hive Resident",
      role: "Product Designer, Nsukka",
      date: "September 24",
      colorTheme: "emerald",
      preview: "Thank you for giving us a home to build...",
      fullMessage: "When NEPA took light for 5 days in Nsukka, The Block Hive kept our project alive. You sacrificed your personal resources so people like us could have stable internet and power to deliver on international contracts. You are more than a founder — you are an elder brother to all of us. Happy Birthday, Ezemmuo!",
    },
    {
      id: "msg-4",
      sender: "BlockchainUNN Core Team",
      role: "Campus Ambassador",
      date: "September 24",
      colorTheme: "amber",
      preview: "The spirit of UNN blockchain builders...",
      fullMessage: "To our pioneer and catalyst! Thank you for laying the tracks that we now run on. Your vision proved that greatness isn't confined to Lagos or Silicon Valley; it starts right here on the hills of Nsukka. Wishing you long life, boundless joy, and extraordinary health!",
    },
  ] as TributeMessage[],

  wallNodes: [
    { id: 1, label: "First Hackathon Win", category: "Milestone", desc: "Mentored 4 undergraduates to place at national hackathon" },
    { id: 2, label: "Nsukka Power & Hub", category: "Sanctuary", desc: "Kept 24/7 solar power alive during university outages" },
    { id: 3, label: "GIDA Bootcamps", category: "Academy", desc: "Structured cohorts turning students into Web3 developers" },
    { id: 4, label: "BlockchainUNN Meetups", category: "Community", desc: "Filled auditoriums with curious young researchers" },
    { id: 5, label: "Build In Public Ethos", category: "Culture", desc: "Inspiring over 500+ builders to share progress openly" },
    { id: 6, label: "SEBGW 2026 Vision", category: "Future", desc: "Uniting Southeast tech & gaming developers" },
    { id: 7, label: "Undergraduate Scholarships", category: "Empowerment", desc: "Sponsored hungry minds who couldn't afford training" },
    { id: 8, label: "Safe Haven for Creatives", category: "Sanctuary", desc: "Welcoming 3D artists, writers, and software engineers" },
    { id: 9, label: "Late Night Mentorship", category: "Mentorship", desc: "Quiet 1-on-1 calls calming anxiety before big interviews" },
    { id: 10, label: "Ethereum Enugu Bridge", category: "Network", desc: "Strengthening grassroots ties across Eastern Nigeria" },
  ],
};
