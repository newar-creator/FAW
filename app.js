/* ==========================================================================
   FAW (Frutiger Aero Wiki) - Core Application & Logic Engine
   ========================================================================== */

// ==========================================================================
// 1. Comprehensive Aesthetic Encyclopedia Database (11 Movements)
// ==========================================================================
const aestheticsDatabase = {
  "frutiger-aero": {
    id: "frutiger-aero",
    name: "Frutiger Aero",
    originYear: "2004",
    peakPopularity: "2007 - 2011",
    visuals: "Glossy glass, floating bubbles, vibrant green grass, clear blue skies, water droplets, glass orbs, solar panels, aurora light streaks, swimming Koi fish, Earth graphics.",
    colors: "Teal, Sky Blue, Lime Green, Emerald, Bright White, Translucent Silver",
    description: "Frutiger Aero is an internet aesthetic and design movement that dominated advertising, operating system interfaces, technology, and branding from roughly 2004 to 2013. Named after the designer Adrian Frutiger and Windows Vista's 'Aero' interface, it imagined a clean, high-tech, and ecologically sustainable future where human technology and natural ecosystems live in perfect harmony. It is characterized by highly glossy textures, skeuomorphic physical materials, glassy panels, transparent bubbles, lush green fields, and clear blue skies layered with lens flares and glowing light beams.",
    history: "Following the metallic, industrial, and somewhat cybernetic techno-optimism of the Y2K era, tech companies sought a friendlier, cleaner, and more reassuring design language. Apple introduced glossy glass buttons in OS X, and Microsoft began development on Windows Vista's glass-heavy Aero UI. Frutiger Aero emerged as the universal language of computing, representing a period of immense growth in consumer internet, digital cameras, and smartphones. The design language declined around 2013, replaced by the modern flat, minimalist corporate design (such as Windows 8 Metro and iOS 7).",
    timeline: [
      { year: "2004", event: "Apple releases Mac OS X Tiger and Microsoft showcases early Windows Longhorn (Vista) builds, establishing the glass-and-reflection design guidelines." },
      { year: "2006", event: "Windows Vista is officially released to manufacturing, cementing 'Aero Glass' as the dominant aesthetic standard worldwide." },
      { year: "2008", event: "The aesthetic peaks in global marketing: consumer packaging, eco-friendly branding, and tech advertisements feature glossy floating bubbles and clear blue skies." },
      { year: "2012", event: "Release of Windows 8 (with flat Metro tiles) and the transition towards flat minimalism begins, bringing the Frutiger Aero era to a close." }
    ],
    music: "Aquatic ambient synth, bubbly new age, early vaporwave, liquid drum & bass, corporate chillout, electronic lounge.",
    musicArtist: "Daisuke Tanabe, Global Communication, Biosphere, early carbon-based lifeforms.",
    related: ["frutiger-aqua", "frutiger-eco", "aurora", "technozen", "skeuomorphism", "dark-aero"]
  },
  "frutiger-aqua": {
    id: "frutiger-aqua",
    name: "Frutiger Aqua",
    originYear: "2002",
    peakPopularity: "2004 - 2008",
    visuals: "Deep ocean waters, wet glassy surfaces, bubbles under pressure, condensation droplets, marine life, swimming pools, glass slabs, neon cyan light beams.",
    colors: "Deep Blue, Aqua Blue, Turquoise, Ice White, Neon Cyan",
    description: "Frutiger Aqua is a sub-aesthetic of Frutiger Aero focusing heavily on marine, aquatic, and underwater elements. Rather than land-based grassy environments, Frutiger Aqua sets its glossy technology inside or beneath clear, glowing water. It evokes feelings of refreshing, clean hydration, oceanic depth, and high-tech digital aquariums. Glass panels appear submerged, with light beams piercing through water surfaces to cast organic caustics and soft glowing outlines on floating UI components.",
    history: "Originating in early 2000s tech concepts, Aqua was heavily inspired by Apple's 'Aqua' user interface introduced in OS X in 2000, which Steve Jobs famously said looked 'so good you'd want to lick it.' It merged with early 3D liquid rendering technologies, becoming popular in screensavers, MP3 player skins, and beverage marketing (such as VitaminWater and mineral water brands) before being absorbed into mainstream Frutiger Aero.",
    timeline: [
      { year: "2000", event: "Steve Jobs unveils the Mac OS X Aqua user interface, featuring glossy, liquid-like scroll bars, jelly buttons, and translucent dropdowns." },
      { year: "2004", event: "Aesthetic surges in popularity as desktop wallpapers of realistic 3D swimming pools, ocean reefs, and glossy floating water droplets become highly popular." },
      { year: "2007", event: "Aesthetic begins blending into the broader, grass-and-earth-oriented Frutiger Aero movement, though retaining a strong aquatic core in audio player designs." }
    ],
    music: "Sub-aquatic ambient, chill-out lounge, trip-hop, wet resonant synthesizer arpeggios, water soundscapes.",
    musicArtist: "Boards of Canada, William Orbit, Tycho, Biosphere.",
    related: ["frutiger-aero", "skeuomorphism", "y2k"]
  },
  "frutiger-eco": {
    id: "frutiger-eco",
    name: "Frutiger Eco",
    originYear: "2005",
    peakPopularity: "2007 - 2011",
    visuals: "Green leaves, dew droplets, solar panels made of glass, white wind turbines, eco-cities, clear running water, recycling symbols, wind paths, grassy fields.",
    colors: "Lime Green, Grass Green, Emerald, Bright White, Sky Blue",
    description: "Frutiger Eco is a sub-aesthetic of Frutiger Aero that emphasizes green energy, eco-optimism, and sustainable technology. The visuals typically present clean white futuristic infrastructure (like wind turbines or solar-powered glass skyscrapers) integrated seamlessly into lush, pristine green fields under bright blue skies. It represents an era when technology was viewed not as a threat to nature, but as the key to preserving and restoring the global ecosystem.",
    history: "During the mid-to-late 2000s, environmentalism entered mainstream consumer culture. Companies began heavily rebranding as 'green' or 'sustainable.' Frutiger Eco was born as the design language for this ecological push, extensively used in hybrid car ads, corporate social responsibility reports, eco-friendly detergent packaging, and green technology prototypes.",
    timeline: [
      { year: "2005", event: "Surge in corporate 'Green' branding; companies start replacing industrial motifs with green leaves, glossy wind turbines, and eco-friendly slogans." },
      { year: "2008", event: "The height of the eco-aesthetic: hybrid cars (like the Toyota Prius) and green initiatives dominate tech expos, styled with shiny green-and-white layouts." },
      { year: "2011", event: "Transitions slowly into minimalist flat eco-designs as skeuomorphism declines, losing the signature glassy sheen." }
    ],
    music: "Acoustic-electronic fusion, clean synthesizer pads combined with organic guitar plucks, nature sounds (birds, wind, rain), soft acoustic ambient.",
    musicArtist: "Tycho, Kiasmos, Helios, Ulrich Schnauss.",
    related: ["frutiger-aero", "technozen", "cleancore"]
  },
  "metro": {
    id: "metro",
    name: "Metro",
    originYear: "2010",
    peakPopularity: "2012 - 2015",
    visuals: "Flat colored blocks, sharp corners, bold sans-serif typography, grid layouts, minimalist icons, high contrast text, digital-first focus.",
    colors: "Cobalt Blue, Bright Red, Teal, Magenta, Deep Purple, Pitch Black, Solid White",
    description: "Metro is a design language developed by Microsoft, characterized by flat colorful tiles, sharp 90-degree corners, and a massive focus on typography (specifically Segoe UI). Unlike Frutiger Aero's rich 3D skeuomorphism, Metro completely rejected reflections, gradients, and realistic shadows, opting for a 'digital-first' philosophy where interface elements are simple, flat, and behave like physical signs found in public transit systems.",
    history: "Microsoft originally experimented with Metro in Microsoft Encarta and Windows Media Center. It was fully fleshed out in Zune HD and Windows Phone 7 as a counter-strategy to Apple's glossy iOS skeuomorphism. It became Microsoft's primary design language with the release of Windows 8 in 2012, triggering the global collapse of Frutiger Aero and the industry-wide transition towards flat design.",
    timeline: [
      { year: "2009", event: "Microsoft releases the Zune HD, featuring an elegant, typography-focused typography interface that lays the groundwork for the Metro language." },
      { year: "2010", event: "Windows Phone 7 is launched, introducing the iconic 'Live Tiles' grid layout and high-contrast typography." },
      { year: "2012", event: "Windows 8 is released to the public, replacing the traditional Vista/7 Aero glass interface with the full Metro start screen, sparking heated user debates." }
    ],
    music: "Chiptune, minimalist techno, glitch hop, early synthwave, precise electronic loops.",
    musicArtist: "Daft Punk, Kraftwerk, disasterpeace, early deadmau5.",
    related: ["cleancore", "frutiger-aero"]
  },
  "aurora": {
    id: "aurora",
    name: "Aurora",
    originYear: "2005",
    peakPopularity: "2006 - 2009",
    visuals: "Wavy multi-colored light ribbons, glowing particles, deep color gradients, slow moving cosmic dust, lens flares, glass reflections, floating soft lights.",
    colors: "Teal, Emerald, Purple, Orange, Magenta, Deep Navy Blue",
    description: "The Aurora aesthetic revolves around waves of colorful glowing light that resemble the Northern Lights (Aurora Borealis). It represents energy, computation, and digital connectivity imagined as a fluid, ethereal cosmic light. Visually, it is composed of curved, soft-edged light waves that swirl slowly across dark screens, throwing colorful glows onto surrounding surfaces and text.",
    history: "Aurora was highly popularized by Microsoft as the default background style for Windows Vista (specifically the 'Windows Aurora' screensaver and wallpapers) and the Xbox 360 dashboard interface. It was also used extensively in PlayStation 3's floating 'wave' crossbar screen. It provided a sense of calming motion and digital luxury to high-definition displays entering living rooms in the late 2000s.",
    timeline: [
      { year: "2005", event: "Microsoft introduces the Xbox 360 dashboard featuring a floating, glowing green-and-white Aurora wave ribbon." },
      { year: "2006", event: "Windows Vista launches with the iconic 'Aurora' wallpapers, defining the high-definition computer screen aesthetic." },
      { year: "2009", event: "Windows 7 replaces the organic Aurora lines with geometric light streaks, shifting the aesthetic towards sleeker, more corporate lines." }
    ],
    music: "Ambient space music, cinematic electronic, futuristic chillout, glowing synthesizer soundscapes.",
    musicArtist: "Jean-Michel Jarre, Vangelis, carbon-based lifeforms, Hammock.",
    related: ["frutiger-aero", "dark-aero", "technozen"]
  },
  "technozen": {
    id: "technozen",
    name: "Technozen",
    originYear: "2004",
    peakPopularity: "2006 - 2010",
    visuals: "Minimalist silver electronics, polished white plastics, bamboo plants, pristine zen gardens, soft ambient lighting, smooth rounded corners, clean desks.",
    colors: "Pure White, Silver Grey, Soft Beige, Bamboo Green, Frosted Glass",
    description: "Technozen is a design philosophy and aesthetic that combines sleek, futuristic consumer electronics with Eastern Zen philosophy. It imagines technology as a tool for calm mindfulness and mental clarity. Visually, it features polished white or silver gadgets (reminiscent of mid-2000s Apple designs) surrounded by natural elements like smooth river stones, trickling water fountains, and green bamboo shoots, reflecting an optimistic and peaceful relationship with digital media.",
    history: "Born alongside the rise of personal MP3 players, sleek notebooks, and wireless computer accessories in the mid-2000s, Technozen sought to counteract the stressful clutter of early PC setups. It was heavily visible in consumer electronic marketing (especially Apple's iPod advertisements and Sony's compact designs) and corporate office catalogs advocating for paperless, organized workspaces.",
    timeline: [
      { year: "2004", event: "Apple releases the iPod Mini and iMac G5, introducing pristine white plastics and sandblasted silver aluminum as the premium tech materials." },
      { year: "2006", event: "Surge in wellness technology; lifestyle magazines showcase minimalist home offices with white laptops, glossy glass desks, and desktop bamboo gardens." },
      { year: "2010", event: "The aesthetic fades as gadgets become ultra-thin black glass slabs (like the iPad and modern smartphones), replacing the playful white plastic pods." }
    ],
    music: "Minimal ambient, soft acoustic, acoustic guitar with lo-fi beats, warm organic chillout, harp and wooden flutes mixed with soft synthesizers.",
    musicArtist: "Nujabes, Kitaro, Deuter, Brian Eno, Haruomi Hosono.",
    related: ["frutiger-aero", "frutiger-eco", "cleancore"]
  },
  "dorfic": {
    id: "dorfic",
    name: "DORfic",
    originYear: "2007",
    peakPopularity: "2008 - 2012",
    visuals: "Dreamy blue skies, surreal digital structures, floating stone steps, neon gateways, soft white clouds, glowing orbs, low-poly natural environments, digital nostalgic architecture.",
    colors: "Dream Blue, Cloud White, Pastel Cyan, Soft Lavender, Glowing Yellow",
    description: "DORfic (also known as Dreamy Optimistic Realism) is a surrealist, nostalgic aesthetic set in vast, calm digital spaces. It usually features empty green hills, infinite blue oceans, or floating platforms under dreamlike skies. It feels like an early 3D video game world or an empty CGI tech demo that is deeply peaceful, empty, and optimistic—evoking a sense of wandering through the digital heavens imagined in the late 2000s.",
    history: "DORfic emerged from early 3D rendering art, video game design, and screensavers (such as Microsoft's classic maze and landscape screensavers). It grew as a distinct net-art movement on platforms like deviantART and Tumblr as people looked back with nostalgia at the simple, blocky, yet beautifully bright 3D virtual spaces of the Wii, early Xbox 360 games, and software demonstration videos.",
    timeline: [
      { year: "2006", event: "The Nintendo Wii launches with Mii Plaza and the Weather Channel, showcasing a dreamy, clean 3D virtual sky aesthetic." },
      { year: "2008", event: "DeviantART artists begin publishing stylized 3D landscape renders featuring glowing orbs, floating grass steps, and endless oceans, creating the 'DORfic' style." },
      { year: "2012", event: "Blends into modern vaporwave and liminal space aesthetics, shifting from pure optimism to a more eerie, melancholic nostalgia." }
    ],
    music: "Virtual plaza, Wii channel music, soft video game soundtracks, nostalgic synth pads, dreamy MIDI arrangements.",
    musicArtist: "Toshio Masuda, Kazumi Totaka, C418, luxury elite.",
    related: ["frutiger-aero", "y2k", "aurora"]
  },
  "skeuomorphism": {
    id: "skeuomorphism",
    name: "Skeuomorphism",
    originYear: "2007",
    peakPopularity: "2007 - 2013",
    visuals: "Realistic physical textures, stitched leather, wooden panels, glass lenses, metallic dials, paper textures, 3D buttons with deep shadows, glossy gel capsules.",
    colors: "Mahogany Brown, Leather Tan, Slate Grey, Glass Teal, Silver, Brass Gold",
    description: "Skeuomorphism is a design concept where digital interface elements mimic their real-world counterparts in extreme, high-fidelity detail. Rather than using abstract icons, a skeuomorphic calendar looks like a physical desk calendar with paper pages and leather binding; a music player looks like a physical turntable or metallic amplifier. It relies heavily on drop shadows, gradients, realistic textures, and lighting reflections to make the screen feel tactile and physical.",
    history: "Skeuomorphism was heavily pushed by Apple under Steve Jobs and Scott Forstall. When the iPhone was introduced in 2007, users were unfamiliar with multi-touch screens. Mimicking real physical objects made the software intuitive and easy to understand. The style was famously used across iOS (iOS 1 to 6) and Mac OS X. However, by 2013, it was criticized as cluttered and tacky, leading Apple to completely flatten its design system in iOS 7.",
    timeline: [
      { year: "2007", event: "Apple launches the original iPhone. The interface is filled with glassy, reflective icons, metallic bars, and highly realistic physical sliders." },
      { year: "2010", event: "Apple releases the iPad, showcasing extreme skeuomorphism with the iBooks wooden bookshelf and the Find My Friends leather-stitched radar dashboard." },
      { year: "2013", event: "Apple releases iOS 7 under Jony Ive, stripping away all skeuomorphic textures in favor of neon gradients, thin fonts, and flat panels, marking the death of the style." }
    ],
    music: "Early pop-electronic, organic acoustic instruments blended with crisp digital drums, acoustic folk-tronica.",
    musicArtist: "The Postal Service, Owl City, Imogen Heap, early Coldplay.",
    related: ["frutiger-aero", "frutiger-aqua", "y2k"]
  },
  "cleancore": {
    id: "cleancore",
    name: "Cleancore",
    originYear: "2012",
    peakPopularity: "2014 - 2018",
    visuals: "Pristine white laboratories, glossy floors, organized medical clinics, laundry rooms, soap bubbles, fresh towels, mineral water bottles, white plastic storage containers.",
    colors: "Hospital Blue, Soap White, Pale Grey, Transparent Cyan",
    description: "Cleancore is an aesthetic centered around absolute cleanliness, hygiene, organization, and bright, clinical spaces. Visually, it features immaculate white environments, light blue soap bubbles, freshly washed laundry, clinical laboratories, and rows of pristine plastic containers. It represents a sterilized, germ-free future, invoking feelings of safety, quiet organization, and fresh, domestic comfort.",
    history: "Cleancore developed as an internet aesthetic on platforms like Tumblr and Pinterest around 2013. It drew heavily from laundry advertisements, clinical medical designs, soap packaging, and Japanese organizational minimalism. It represents a desire to escape the dirty, chaotic clutter of the modern world in favor of an organized, clinical, and brightly lit sanctuary.",
    timeline: [
      { year: "2012", event: "Tumblr blogs dedicated to laundry rooms, clean white bedsheets, and aesthetic medical supplies start gaining a cult following." },
      { year: "2015", event: "Cleancore merges with organizational trends (such as Marie Kondo's minimalist tidying method), promoting pristine, clutter-free white living rooms." },
      { year: "2020", event: "The global pandemic revitalizes Cleancore, shifting it into a vital cultural symbol of safety, sanitization, and sterile hygiene." }
    ],
    music: "Lo-fi ambient, clean hums, washing machine white noise, soft water trickles, quiet minimal piano chords.",
    musicArtist: "Celer, William Basinski, Ryuichi Sakamoto, Harold Budd.",
    related: ["technozen", "frutiger-eco"]
  },
  "dark-aero": {
    id: "dark-aero",
    name: "Dark Aero",
    originYear: "2006",
    peakPopularity: "2007 - 2011",
    visuals: "Deep charcoal/black glass panels, neon blue and cyan glow lines, digital circuit patterns, carbon fiber textures, glowing dashboard dials, dark aurora background waves.",
    colors: "Coal Black, Graphite Grey, Neon Blue, Emerald Green, Electric Cyan",
    description: "Dark Aero (also known as Vista Ultimate Gothic or Tech-Aero) is a darker, edgier sub-aesthetic of Frutiger Aero. Instead of bright blue skies and green grass, Dark Aero sets the glossy, glassy Aero panels against dark, nocturnal backgrounds. High-contrast neon lines (usually cyan, green, or orange) run along glass borders, resembling glowing cybernetic circuits or premium digital sports car dashboards.",
    history: "Dark Aero was popularized by Microsoft's premium operating system edition, 'Windows Vista Ultimate,' which featured a dark, sleek Aero interface, black glass taskbars, and dark aurora backdrops. It was also heavily used in early PC gaming rigs (like Alienware), high-end media players (Windows Media Player 11's dark skin), and gaming software interfaces of the late 2000s, appealing to tech enthusiasts and PC gamers.",
    timeline: [
      { year: "2006", event: "Microsoft introduces Windows Vista Ultimate edition. It includes the exclusive dark 'Windows Ultimate Extras' and black glass interfaces." },
      { year: "2008", event: "Gaming hardware brands like Alienware, Razer, and ASUS Republic of Gamers adopt the dark glass and neon color scheme for gaming laptops and towers." },
      { year: "2011", event: "The aesthetic transitions into flat dark modes as modern dark UI patterns take over mobile applications, losing the glassy 3D reflection layers." }
    ],
    music: "Progressive trance, dark ambient synth, futuristic tech-house, gaming menu soundtracks, electronic cyberpunk loops.",
    musicArtist: "Paul van Dyk, Sasha & John Digweed, Solar Fields, Trentemøller.",
    related: ["frutiger-aero", "aurora", "y2k"]
  },
  "y2k": {
    id: "y2k",
    name: "Y2K Aesthetic",
    originYear: "1997",
    peakPopularity: "1999 - 2002",
    visuals: "Chrome textures, metallic silver clothing, CD reflections, clear inflatable plastics, bubble-visor helmets, cyber-futuristic visors, console interfaces, low-poly 3D grids.",
    colors: "Metallic Silver, Chrome, Translucent Purple, Neon Orange, Hot Pink, Lime Yellow",
    description: "The Y2K aesthetic is a futuristic design movement that spanned from roughly 1997 to 2002. Named after the Year 2000 computer bug, it represents a period of extreme optimism, cyber-futurism, and excitement for the new millennium. Visually, it is dominated by reflective chrome, metallic textures, translucent colored plastics (such as the iMac G3), early low-poly 3D CGI, CD-ROM rainbow reflections, and clothing inspired by futuristic space travel and computer hacking.",
    history: "As the year 2000 approached, the explosion of the consumer internet and mobile phones created a massive cultural wave of digital optimism. Tech was seen as incredibly cool and futuristic. Pop music videos (like TLC's 'No Scrubs' or Britney Spears' 'Oops!... I Did It Again') featured metallic silver spaceships, and hardware designs adopted translucent colorful shells. The aesthetic collapsed around 2002 following the dot-com bubble crash and 9/11, giving way to grungier mid-2000s designs before evolving into Frutiger Aero.",
    timeline: [
      { year: "1998", event: "Apple releases the iMac G3 in Bondi Blue, sparking a worldwide design revolution of translucent, colored plastic consumer electronics." },
      { year: "1999", event: "Release of 'The Matrix' movie and Sony's PlayStation 2 design showcase, solidifying dark leather, cybernetic grids, and blue-glowing hardware." },
      { year: "2001", event: "Microsoft releases Windows XP, featuring the bright, colorful, and plastic 'Luna' interface, bridging Y2K and early Frutiger Aero design." },
      { year: "2003", event: "Aesthetic declines sharply as metallic chrome and neon colors are replaced by minimalist brushed aluminum and neutral colors." }
    ],
    music: "Y2K pop, futuristic R&B, bubblegum dance, eurodance, cyber-trance, intelligent drum & bass, early ambient jungle.",
    musicArtist: "Daft Punk, Prodigy, Aphex Twin, Bomfunk MC's, Craig David.",
    related: ["frutiger-aqua", "skeuomorphism", "dark-aero"]
  }
};

// Map generated image file endings to our aesthetics
const aestheticImages = {
  "frutiger-aero": "faw_hero_banner_1779320687374.png",
  "frutiger-aqua": "frutiger_aqua_1779320763934.png",
  "frutiger-eco": "frutiger_eco_1779320789130.png",
  "dark-aero": "dark_aero_1779320836180.png"
};

// Fallback high-fidelity CSS gradient graphics for other aesthetics
const fallbackGradients = {
  "metro": "linear-gradient(135deg, #00458e 0%, #0091ea 100%)",
  "aurora": "linear-gradient(135deg, #091c3f 0%, #7b2cbf 50%, #e0aaff 100%)",
  "technozen": "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)",
  "dorfic": "linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%)",
  "skeuomorphism": "linear-gradient(135deg, #653b1b 0%, #8d5d34 100%)",
  "cleancore": "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
  "y2k": "linear-gradient(135deg, #845ec2 0%, #d65db1 30%, #ff6f91 60%, #ff9671 100%)"
};

// ==========================================================================
// 2. Zero-Dependency Procedural Web Audio Synth Engine
// ==========================================================================
let audioCtx = null;
let masterGain = null;
let currentSynthTrack = null;
let synthSequenceInterval = null;
let analyserNode = null;
let isSynthPlaying = false;
let activeTrackIdx = 0;

// Synth Track Metadata
const synthTracks = [
  { name: "Aquatic Dreams", style: "aqua", tempo: 72 },
  { name: "Aurora Borealis", style: "aurora", tempo: 60 },
  { name: "Sustainable Future", style: "eco", tempo: 80 }
];

// Initialize Audio Context (requires user interaction)
function initAudio() {
  if (audioCtx) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
    
    // Setup master volume limiter
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.3, audioCtx.currentTime); // Soft master volume
    
    // Setup Analyser for WMP Visualizer
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 128;
    
    // Connect chain: Synth -> masterGain -> Analyser -> Output
    masterGain.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);
    
    console.log("FAW Audio System Initialized successfully!");
    
    // Synth a sweet success startup chime!
    synthSuccessChime();
  } catch (err) {
    console.error("Failed to initialize Web Audio API:", err);
  }
}

// Ensure Audio Context is active (browser security unlock)
function resumeAudioContext() {
  initAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

/* --- Sound Effect 1: Glass Navigation Click (Vista style) --- */
function playClickSound() {
  resumeAudioContext();
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  
  // High-pass glassy sound
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.12);
  
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(800, audioCtx.currentTime);
  
  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
  
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

/* --- Sound Effect 2: Water Droplet Pop (For bubbles) --- */
function playBubblePopSound() {
  resumeAudioContext();
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  
  // Wet organic resonant pop sweep: pitch bends rapidly upwards
  osc.type = 'sine';
  osc.frequency.setValueAtTime(140, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(850, audioCtx.currentTime + 0.08);
  
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(600, audioCtx.currentTime);
  filter.Q.setValueAtTime(6, audioCtx.currentTime);
  
  gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);
  
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

/* --- Sound Effect 3: Glass Vista Chime (Startup success) --- */
function synthSuccessChime() {
  if (!audioCtx) return;
  
  const now = audioCtx.currentTime;
  
  // Two-tone glassy chime: E5 followed quickly by B5 with long decay
  const playTone = (freq, delay, vol) => {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Rich crystalline glassy timber: combine sine and triangle oscillators
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now + delay);
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.5, now + delay); // Crystalline harmonic fifth
    
    gainNode.gain.setValueAtTime(0, now + delay);
    gainNode.gain.linearRampToValueAtTime(vol, now + delay + 0.05); // Soft fade-in
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + 1.2); // Long glassy decay
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(masterGain);
    
    osc1.start(now + delay);
    osc2.start(now + delay);
    osc1.stop(now + delay + 1.4);
    osc2.stop(now + delay + 1.4);
  };
  
  playTone(659.25, 0, 0.06);     // E5
  playTone(987.77, 0.15, 0.05);  // B5
}

/* --- Sound Effect 4: Warning Error Beep --- */
function playWarningSound() {
  resumeAudioContext();
  if (!audioCtx) return;
  
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(261.63, now); // C4
  
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
  
  osc.connect(gain);
  gain.connect(masterGain);
  
  osc.start(now);
  osc.stop(now + 0.45);
}

/* --- Procedural Ambient Music Player Logic --- */
function startAmbientSynth(style) {
  resumeAudioContext();
  if (!audioCtx) return;
  
  // Stop existing tracks
  stopAmbientSynth();
  isSynthPlaying = true;
  document.getElementById("wmp-play-btn").innerText = "⏸";
  
  const tempo = style === 'aqua' ? 72 : (style === 'aurora' ? 60 : 80);
  const beatDuration = 60 / tempo;
  let beatCounter = 0;
  
  // Custom synth chord bank based on Y2K / Aero nostalgic pads
  // Chords represented as arrays of MIDI note numbers
  const chords = {
    aqua: [
      [48, 55, 60, 64, 67, 74], // Cmaj9
      [41, 48, 55, 59, 64, 71], // Fmaj9
      [45, 52, 57, 60, 64, 71], // Amin9
      [43, 50, 55, 59, 62, 69]  // Gsus4
    ],
    aurora: [
      [50, 57, 62, 66, 69, 76], // Dmaj9
      [46, 53, 58, 62, 65, 72], // A#maj9
      [48, 55, 60, 64, 67, 74], // Cmaj9
      [45, 52, 57, 60, 64, 71]  // Amin9
    ],
    eco: [
      [48, 55, 60, 64, 67, 72], // Cmaj7
      [46, 53, 58, 62, 65, 70], // A#maj7
      [41, 48, 53, 57, 60, 65], // Fmaj7
      [43, 50, 55, 59, 62, 67]  // Gmajor
    ]
  };
  
  const activeChords = chords[style] || chords.aqua;
  
  // Synthesize chord pad note
  const synthPadNote = (midiNote, startTime, duration, vol) => {
    if (!audioCtx || !isSynthPlaying) return;
    
    const freq = Math.pow(2, (midiNote - 69) / 12) * 440;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gainNode = audioCtx.createGain();
    
    // Detuned sawtooth wave for a rich, warm analog pad sound
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(freq - 1.5, startTime);
    
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(freq + 1.5, startTime);
    
    // High-cut filter to smooth the sawtooth bite
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(150, startTime);
    // Slow LFO filter sweeping
    filter.frequency.exponentialRampToValueAtTime(1100, startTime + duration * 0.4);
    filter.frequency.exponentialRampToValueAtTime(250, startTime + duration);
    filter.Q.setValueAtTime(3, startTime);
    
    // Attack and decay envelopes
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(vol, startTime + 1.5); // Warm slow attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // Slow release
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(masterGain);
    
    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  };
  
  // Periodically synthesize cool arpeggiators or bubble droplet notes
  const synthBubblingMelodyNote = (midiNote, startTime, vol) => {
    if (!audioCtx || !isSynthPlaying) return;
    const freq = Math.pow(2, (midiNote - 69) / 12) * 440;
    
    const osc = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    
    // Quick bubbling chirp envelope
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.5, startTime);
    filter.Q.setValueAtTime(8, startTime);
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(vol, startTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);
    
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(masterGain);
    
    osc.start(startTime);
    osc.stop(startTime + 0.7);
  };
  
  // Main scheduling timer loop
  const scheduleNextMeasures = () => {
    if (!isSynthPlaying) return;
    
    const now = audioCtx.currentTime;
    const currentChord = activeChords[beatCounter % activeChords.length];
    const measureDuration = beatDuration * 8; // 8 beats per chord swap
    
    // Trigger Pad chord
    currentChord.forEach((note) => {
      // Play lower notes louder, higher notes softer
      const velocity = note < 50 ? 0.05 : (note < 65 ? 0.03 : 0.015);
      synthPadNote(note, now, measureDuration, velocity);
    });
    
    // Add arpeggiator or random water drop blips inside the measure
    for (let i = 0; i < 8; i++) {
      const stepTime = now + (i * beatDuration);
      
      // Random water droplet trigger
      if (Math.random() > 0.4) {
        // Pick note from the active chord scale
        const scaleNode = currentChord[Math.floor(Math.random() * currentChord.length)] + 12; // Transpose up 1 octave
        synthBubblingMelodyNote(scaleNode, stepTime, 0.02);
      }
    }
    
    // WMP Progress bar mock synchronization
    const timelineProgress = document.getElementById("wmp-progress");
    if (timelineProgress) {
      const step = 100 / activeChords.length;
      let w = (beatCounter % activeChords.length) * step;
      timelineProgress.style.width = `${w}%`;
    }
    
    beatCounter++;
    
    // Schedule next measure sequence
    const delayMs = measureDuration * 1000;
    synthSequenceInterval = setTimeout(scheduleNextMeasures, delayMs - 50); // slight buffer window
  };
  
  // Kickstart scheduling loop
  scheduleNextMeasures();
}

function stopAmbientSynth() {
  isSynthPlaying = false;
  document.getElementById("wmp-play-btn").innerText = "▶";
  if (synthSequenceInterval) {
    clearTimeout(synthSequenceInterval);
    synthSequenceInterval = null;
  }
}

function toggleWMPMusic() {
  if (isSynthPlaying) {
    stopAmbientSynth();
    playClickSound();
  } else {
    playClickSound();
    const activeTrack = synthTracks[activeTrackIdx];
    startAmbientSynth(activeTrack.style);
    document.getElementById("wmp-track-name").innerText = activeTrack.name;
  }
}

function changeTrack(direction) {
  playClickSound();
  if (direction === 'next') {
    activeTrackIdx = (activeTrackIdx + 1) % synthTracks.length;
  } else {
    activeTrackIdx = (activeTrackIdx - 1 + synthTracks.length) % synthTracks.length;
  }
  const activeTrack = synthTracks[activeTrackIdx];
  document.getElementById("wmp-track-name").innerText = activeTrack.name;
  
  if (isSynthPlaying) {
    startAmbientSynth(activeTrack.style);
  }
}

// ==========================================================================
// 3. WMP 11 Canvas-Based Audio Visualizer Rendering
// ==========================================================================
let visualizerModeIdx = 0;
const visualizerModes = ["wave", "bars", "orbital"];

function setupVisualizer() {
  const canvas = document.getElementById("visualizer-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  
  // Resize canvas based on widget layout sizing
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  
  // Toggle visualization style on clicking the visualizer screen
  document.getElementById("wmp-stage").addEventListener("click", () => {
    playClickSound();
    visualizerModeIdx = (visualizerModeIdx + 1) % visualizerModes.length;
  });
  
  // Visualizer Animation Loop
  const drawVisualizer = () => {
    requestAnimationFrame(drawVisualizer);
    
    // Clear screen with custom Vista dark glass fade background
    ctx.fillStyle = "rgba(2, 1, 10, 0.22)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (!analyserNode || !isSynthPlaying) {
      // Draw quiet standby flat line with subtle glassy wobble
      ctx.strokeStyle = "rgba(0, 180, 216, 0.4)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      return;
    }
    
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const activeMode = visualizerModes[visualizerModeIdx];
    
    if (activeMode === "wave") {
      // Time-domain glowing waveform curve lines
      analyserNode.getByteTimeDomainData(dataArray);
      
      ctx.strokeStyle = "rgba(0, 245, 255, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      
      const sliceWidth = canvas.width / bufferLength;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      
      ctx.lineTo(canvas.width, canvas.height / 2);
      // Soft bloom drop shadow
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0, 180, 216, 0.8)";
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
      
    } else if (activeMode === "bars") {
      // Rounded 3D Equalizer bars with neon shades
      analyserNode.getByteFrequencyData(dataArray);
      
      const barWidth = (canvas.width / 16) - 3;
      let barHeight;
      let x = 2;
      
      for (let i = 0; i < 16; i++) {
        // Average audio bin data
        const val = dataArray[i * 3];
        barHeight = (val / 255) * canvas.height * 0.85;
        
        // Dynamic glossy color mapping: green at bottom, cyan at top
        const grad = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        grad.addColorStop(0, "rgba(57, 255, 20, 0.75)"); // Lime Neon green
        grad.addColorStop(0.6, "rgba(0, 180, 216, 0.85)"); // Cyan Blue
        grad.addColorStop(1, "rgba(255, 255, 255, 0.95)"); // Crystalline highlight
        
        ctx.fillStyle = grad;
        // Rounded glossy bar tops
        ctx.beginPath();
        ctx.roundRect(x, canvas.height - barHeight, barWidth, barHeight, [4, 4, 0, 0]);
        ctx.fill();
        
        x += barWidth + 3;
      }
      
    } else if (activeMode === "orbital") {
      // Rotating ring of glowing bubble particles expanding with the synth energy
      analyserNode.getByteFrequencyData(dataArray);
      
      // Calculate energy density average
      let sum = 0;
      for (let i = 0; i < 32; i++) sum += dataArray[i];
      const avgVolume = sum / 32;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = 25 + (avgVolume / 255) * 20;
      
      // Draw inner glowing core
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, baseRadius);
      coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.7)");
      coreGrad.addColorStop(0.4, "rgba(0, 180, 216, 0.35)");
      coreGrad.addColorStop(1, "transparent");
      
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw outer orbiting particle dots
      const numDots = 18;
      const nowTime = Date.now() * 0.002;
      
      ctx.fillStyle = "rgba(0, 245, 255, 0.8)";
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * Math.PI * 2 + nowTime;
        const volumeFactor = dataArray[i * 2] || 0;
        const r = baseRadius + 10 + (volumeFactor / 255) * 12;
        
        const dotX = centerX + Math.cos(angle) * r;
        const dotY = centerY + Math.sin(angle) * r;
        const dotSize = 2 + (volumeFactor / 255) * 5;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };
  
  // Kickstart animation loop
  drawVisualizer();
}

// ==========================================================================
// 4. Physical Bubble Generator Engine
// ==========================================================================
function spawnBubble() {
  const container = document.getElementById("bubble-container");
  if (!container) return;
  
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  
  // Random size from 15px to 55px
  const size = Math.floor(Math.random() * 40) + 15;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  // Random horizontal starting position (0% - 95%)
  const startX = Math.random() * 95;
  bubble.style.left = `${startX}%`;
  
  // Random vertical speed and wobble delay
  const speed = Math.floor(Math.random() * 10) + 12; // 12s - 22s
  bubble.style.animationDuration = `${speed}s, ${3 + Math.random() * 3}s`;
  bubble.style.animationDelay = `0s, ${Math.random() * 2}s`;
  
  // Interact triggers (Pop on hover/click)
  const popBubble = () => {
    if (bubble.classList.contains("popping")) return;
    bubble.classList.add("popping");
    playBubblePopSound();
    
    // Clean bubble node from DOM after pop animation finished
    setTimeout(() => {
      bubble.remove();
    }, 200);
  };
  
  bubble.addEventListener("click", popBubble);
  bubble.addEventListener("mouseover", popBubble);
  
  container.appendChild(bubble);
  
  // Garbage collection: clean element if it floated off the top unsaved
  setTimeout(() => {
    bubble.remove();
  }, speed * 1000);
}

// Keep spawning bubbles periodically
function initBubbleEngine() {
  // Spawn 1 bubble every 1.5 seconds automatically
  setInterval(spawnBubble, 1500);
  
  // Spawn 6 bubbles initially
  for (let i = 0; i < 6; i++) {
    setTimeout(spawnBubble, Math.random() * 3000);
  }
}

// ==========================================================================
// 5. Portal Theme Selector Widget
// ==========================================================================
function setupThemeManager() {
  const buttons = document.querySelectorAll(".theme-opt-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedTheme = btn.dataset.theme;
      playClickSound();
      
      // Update body classes
      document.body.className = `theme-${selectedTheme}`;
      
      // Update button visual active classes
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Persist user selection
      localStorage.setItem("faw-theme", selectedTheme);
    });
  });
  
  // Read persistent settings on boot
  const cachedTheme = localStorage.getItem("faw-theme") || "aero";
  document.body.className = `theme-${cachedTheme}`;
  const activeBtn = document.querySelector(`.theme-opt-btn[data-theme="${cachedTheme}"]`);
  if (activeBtn) {
    buttons.forEach((b) => b.classList.remove("active"));
    activeBtn.classList.add("active");
  }
}

// ==========================================================================
// 6. SPA Routing & Content Dynamic Templates
// ==========================================================================
let activePage = 'home';

function switchPage(pageId, recordHistory = true) {
  playClickSound();
  
  const mainStage = document.getElementById("main-stage");
  if (!mainStage) return;
  
  // Transition fade animation
  mainStage.style.opacity = 0;
  mainStage.style.transform = "translateY(15px)";
  
  setTimeout(() => {
    activePage = pageId;
    
    // Highlight Active Link in Navigation Ribbon
    const navItems = document.querySelectorAll("#main-navigation li");
    navItems.forEach((li) => {
      li.classList.remove("active");
      if (li.dataset.page === pageId) {
        li.classList.add("active");
      }
    });
    
    // Render dynamic page template
    if (pageId === 'home') {
      mainStage.innerHTML = renderHomePage();
      initHeroCarousel();
    } else if (pageId === 'aesthetics') {
      mainStage.innerHTML = renderAestheticsListPage();
    } else if (pageId === 'gallery') {
      mainStage.innerHTML = renderGalleryPage();
    } else if (pageId === 'wallpapers') {
      mainStage.innerHTML = renderWallpapersPage();
    } else if (pageId === 'music') {
      mainStage.innerHTML = renderMusicRecsPage();
    } else if (pageId === 'timeline') {
      mainStage.innerHTML = renderTimelinePage();
    } else if (pageId === 'about') {
      mainStage.innerHTML = renderAboutPage();
    } else if (aestheticsDatabase[pageId]) {
      // Detailed aesthetic article page
      mainStage.innerHTML = renderAestheticArticle(aestheticsDatabase[pageId]);
      initArticleFakeChat();
    } else {
      // 404 Fallback
      mainStage.innerHTML = `
        <div style="text-align:center; padding: 50px;">
          <h2 style="font-size:36px; margin-bottom:15px; color:var(--accent-main)">404 File Not Found</h2>
          <p style="color:var(--text-muted); margin-bottom:20px;">The aesthetic portal could not resolve this route.</p>
          <button class="hero-btn" onclick="switchPage('home')">Return Home</button>
        </div>
      `;
      playWarningSound();
    }
    
    // Animate panel back in
    mainStage.style.opacity = 1;
    mainStage.style.transform = "translateY(0)";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 350);
}

// --------------------------------------------------------------------------
// SPA Content Renderers
// --------------------------------------------------------------------------

function renderHomePage() {
  // Build slide panels dynamically
  let carouselSlidesHTML = '';
  let carouselIndicatorsHTML = '';
  
  const aestheticsKeys = Object.keys(aestheticsDatabase);
  
  aestheticsKeys.forEach((key, index) => {
    const data = aestheticsDatabase[key];
    const isActive = index === 0 ? 'active' : '';
    
    // Match appropriate background
    const bgUrl = aestheticImages[key] || '';
    const fallbackBg = fallbackGradients[key] || 'var(--accent-glow)';
    
    const inlineBgStyle = bgUrl 
      ? `src="${bgUrl}"` 
      : `style="background: ${fallbackBg};"`;
      
    carouselSlidesHTML += `
      <div class="hero-slide ${isActive}" data-slide="${index}">
        ${bgUrl 
          ? `<img src="${bgUrl}" alt="${data.name}" class="hero-bg-img">` 
          : `<div class="hero-bg-img" style="background: ${fallbackBg}; width:100%; height:100%;"></div>`
        }
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h2>${data.name}</h2>
          <p>${data.description.substring(0, 160)}...</p>
          <button class="hero-btn" onclick="switchPage('${data.id}')">Explore Wiki</button>
        </div>
      </div>
    `;
    
    carouselIndicatorsHTML += `
      <span class="indicator-dot ${isActive}" data-slide="${index}" onclick="setCarouselSlide(${index})"></span>
    `;
  });

  // Build grid of popular elements
  let gridCardsHTML = '';
  aestheticsKeys.slice(0, 6).forEach((key) => {
    const data = aestheticsDatabase[key];
    const bgUrl = aestheticImages[key];
    const fallbackBg = fallbackGradients[key] || 'var(--accent-main)';
    
    gridCardsHTML += `
      <div class="glass-panel aesthetic-card shine-hover" onclick="switchPage('${data.id}')">
        <div class="card-img-wrapper">
          ${bgUrl 
            ? `<img src="${bgUrl}" alt="${data.name}" class="card-img">` 
            : `<div class="card-img" style="background: ${fallbackBg}; width:100%; height:100%;"></div>`
          }
        </div>
        <div class="card-info">
          <h4 class="card-title">${data.name}</h4>
          <span class="card-subtitle">Peak: ${data.peakPopularity}</span>
        </div>
      </div>
    `;
  });

  return `
    <!-- Large Rotating Carousel -->
    <div class="hero-banner-container">
      ${carouselSlidesHTML}
      <div class="hero-indicators">
        ${carouselIndicatorsHTML}
      </div>
    </div>
    
    <div class="home-intro-grid">
      <div class="intro-panel">
        <h3>Welcome to the Future of 2008</h3>
        <p>
          FAW is a living visual encyclopedia dedicated to preserving the rich, glassy, and optimistic digital design movements of the internet. From the sub-aquatic deep teals of **Frutiger Aqua** to the sustainable wind pastures of **Frutiger Eco**, explore technology imagined as beautiful, clean, and alive.
        </p>
      </div>
      <div class="intro-panel">
        <h3>Wiki Statistics & Status</h3>
        <p style="margin-bottom: 6px;">🟢 <strong>Database Status</strong>: Fully loaded & active</p>
        <p style="margin-bottom: 6px;">📂 <strong>Indexed Aesthetics</strong>: 11 movements cataloged</p>
        <p style="margin-bottom: 6px;">🔊 <strong>Audio Engine</strong>: Procedural synthesis online</p>
        <p>🫧 <strong>Interaction</strong>: Click floating bubbles to pop them!</p>
      </div>
    </div>
    
    <h3 class="section-title">Popular Design Movements</h3>
    <div class="aesthetic-grid">
      ${gridCardsHTML}
    </div>
  `;
}

function renderAestheticsListPage(filterQuery = "") {
  let listHTML = '';
  
  Object.keys(aestheticsDatabase).forEach((key) => {
    const data = aestheticsDatabase[key];
    
    // Text search matching filter logic
    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      const match = data.name.toLowerCase().includes(q) || 
                    data.description.toLowerCase().includes(q) || 
                    data.visuals.toLowerCase().includes(q);
      if (!match) return;
    }
    
    const bgUrl = aestheticImages[key];
    const fallbackBg = fallbackGradients[key] || 'var(--accent-main)';
    
    listHTML += `
      <div class="glass-panel aesthetic-card shine-hover" onclick="switchPage('${data.id}')">
        <div class="card-img-wrapper">
          ${bgUrl 
            ? `<img src="${bgUrl}" alt="${data.name}" class="card-img">` 
            : `<div class="card-img" style="background: ${fallbackBg}; width:100%; height:100%;"></div>`
          }
        </div>
        <div class="card-info">
          <h4 class="card-title">${data.name}</h4>
          <span class="card-subtitle">Created: ${data.originYear} | Peak: ${data.peakPopularity}</span>
        </div>
      </div>
    `;
  });

  if (!listHTML) {
    listHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-muted);">
        <p>No aesthetics match your search criteria. Try another term!</p>
      </div>
    `;
  }

  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:5px;">Aesthetics Directory</h2>
    <p style="color:var(--text-muted); margin-bottom:20px;">Browse the complete database of digital aesthetics. Click any card to explore the full wiki article.</p>
    
    <div class="aesthetic-grid">
      ${listHTML}
    </div>
  `;
}

function renderAestheticArticle(data) {
  const bgUrl = aestheticImages[data.id];
  const fallbackBg = fallbackGradients[data.id] || 'var(--accent-main)';
  
  // Construct Timeline items
  let milestonesHTML = '';
  data.timeline.forEach((milestone) => {
    milestonesHTML += `
      <div class="timeline-milestone">
        <div class="milestone-year">${milestone.year}</div>
        <div class="milestone-text">${milestone.event}</div>
      </div>
    `;
  });

  // Construct Related Aesthetics link buttons
  let relatedLinksHTML = '';
  data.related.forEach((relId) => {
    const relData = aestheticsDatabase[relId];
    if (!relData) return;
    relatedLinksHTML += `
      <button class="back-btn" onclick="switchPage('${relId}')" style="margin-right: 8px; margin-top:5px; float:left;">
        🔗 ${relData.name}
      </button>
    `;
  });

  // Generate unique gallery grid for the article
  let articleGalleryHTML = '';
  const secondaryBgUrls = Object.values(aestheticImages).filter(url => url !== bgUrl);
  
  for (let i = 0; i < 3; i++) {
    const dummyImg = secondaryBgUrls[i % secondaryBgUrls.length];
    articleGalleryHTML += `
      <div class="glass-panel gallery-item shine-hover" onclick="openLightbox('${dummyImg}', '${data.name} Texture Detail ${i+1}')">
        <div class="gallery-img-container" style="height:90px;">
          <img src="${dummyImg}" alt="Visual piece">
        </div>
      </div>
    `;
  }

  return `
    <div class="back-btn-container">
      <button class="back-btn" onclick="switchPage('aesthetics')">⬅ Back to Portal</button>
    </div>

    <div class="article-header">
      <div class="article-banner">
        ${bgUrl 
          ? `<img src="${bgUrl}" alt="${data.name} Header">` 
          : `<div style="background: ${fallbackBg}; width:100%; height:100%;"></div>`
        }
      </div>
      
      <!-- Classic Wiki Info Box -->
      <div class="infobox">
        <div class="infobox-title">${data.name}</div>
        <div class="infobox-row">
          <span class="infobox-label">Established</span>
          <span class="infobox-value">${data.originYear}</span>
        </div>
        <div class="infobox-row">
          <span class="infobox-label">Peak Years</span>
          <span class="infobox-value">${data.peakPopularity}</span>
        </div>
        <div class="infobox-row" style="flex-direction:column; gap:4px;">
          <span class="infobox-label">Key Visuals</span>
          <span class="infobox-value" style="text-align:left; font-size:11px; color:var(--text-muted);">${data.visuals}</span>
        </div>
      </div>
    </div>

    <div class="article-section">
      <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 10px; border-bottom: 2.5px solid var(--accent-main); padding-bottom:5px;">${data.name}</h2>
      <p style="font-size:14.5px; line-height:1.6;">${data.description}</p>
    </div>

    <div class="article-section">
      <h3>Historical Origins</h3>
      <p>${data.history}</p>
    </div>

    <div class="article-section">
      <h3>History Timeline</h3>
      <div class="timeline-track">
        ${milestonesHTML}
      </div>
    </div>

    <div class="article-section">
      <h3>Visual Elements Checklist</h3>
      <ul class="traits-list">
        ${data.visuals.split(',').map(item => `<li>${item.trim()}</li>`).join('')}
      </ul>
    </div>

    <div class="article-section">
      <h3>Ambient Audio & Music Recommendations</h3>
      <div class="music-rec-box">
        <div class="music-rec-art">💿</div>
        <div class="music-rec-info">
          <h4>${data.music}</h4>
          <p><strong>Recommended Artists:</strong> ${data.musicArtist}</p>
          <p style="font-size:11px; opacity:0.8; margin-top:4px;">🎧 <em>Tip: Open the Windows Media Player in the sidebar to activate ambient synthesizer loops!</em></p>
        </div>
      </div>
    </div>

    <div class="article-section">
      <h3>Aesthetic Visual Showcase</h3>
      <div class="gallery-grid" style="grid-template-columns: repeat(3, 1fr); gap:12px;">
        ${articleGalleryHTML}
      </div>
    </div>

    <div class="article-section" style="overflow:hidden;">
      <h3>Related Design Movements</h3>
      <div style="overflow:hidden; margin-bottom:15px;">
        ${relatedLinksHTML}
      </div>
    </div>

    <div class="article-section">
      <h3>Community Chat Discussion</h3>
      <div class="fake-chat-box" id="article-chat">
        <div class="chat-msg">
          <span class="chat-user">AeroNovice99:</span>
          <span class="chat-text">Does anyone else miss the absolute glossy glassy look of Vista Aero? Everything feels so flat today.</span>
        </div>
        <div class="chat-msg">
          <span class="chat-user">EcoCrystalline:</span>
          <span class="chat-text">Yes! Specially the green grass combined with water drops. It felt so clean and positive.</span>
        </div>
        <div class="chat-msg">
          <span class="chat-user">MatrixY2K:</span>
          <span class="chat-text">Aero was cool, but Y2K metallic chrome was pure sci-fi optimism. Best era!</span>
        </div>
      </div>
    </div>
  `;
}

function renderGalleryPage() {
  let imagesHTML = '';
  
  Object.keys(aestheticImages).forEach((key) => {
    const imgUrl = aestheticImages[key];
    const name = aestheticsDatabase[key].name;
    
    imagesHTML += `
      <div class="glass-panel gallery-item shine-hover" onclick="openLightbox('${imgUrl}', '${name} Showcase Wallpaper')">
        <div class="gallery-img-container">
          <img src="${imgUrl}" alt="${name}">
        </div>
        <div class="gallery-item-footer">
          <span class="gallery-item-title">${name}</span>
          <span class="download-link" onclick="event.stopPropagation(); triggerDownloadSimulation('${imgUrl}')">⬇ Download</span>
        </div>
      </div>
    `;
  });

  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:5px;">Visual Museum Gallery</h2>
    <p style="color:var(--text-muted); margin-bottom:20px;">Explore authentic high-resolution digital art celebrating the glassy reflections, neon lines, and eco-sustainable aesthetics. Click an image to view in fullscreen lightbox.</p>
    
    <div class="gallery-grid">
      ${imagesHTML}
    </div>
  `;
}

function renderWallpapersPage() {
  let listHTML = '';
  
  Object.keys(aestheticImages).forEach((key) => {
    const url = aestheticImages[key];
    const name = aestheticsDatabase[key].name;
    
    listHTML += `
      <div class="glass-panel gallery-item shine-hover" style="border-radius:10px;">
        <div class="gallery-img-container" style="height: 180px;">
          <img src="${url}" alt="${name}" style="object-fit:cover; width:100%; height:100%;">
        </div>
        <div class="gallery-item-footer" style="flex-direction:column; align-items:flex-start; gap:10px; padding:15px;">
          <div style="width:100%; display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-weight:700; font-size:14.5px;">${name} desktop background</h4>
            <span style="font-size:10px; background:rgba(0,180,216,0.15); padding:2px 6px; border-radius:10px; color:var(--accent-main)">1080p</span>
          </div>
          <p style="font-size:11.5px; color:var(--text-muted); line-height:1.4;">Official high-fidelity desktop screen background crafted for custom Windows theme suites.</p>
          <button class="hero-btn" style="width:100%; text-align:center; padding:8px 0; border-radius:6px;" onclick="triggerDownloadSimulation('${url}')">
            Download Desktop Asset (1920x1080)
          </button>
        </div>
      </div>
    `;
  });

  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:5px;">Aero Desktop wallpapers</h2>
    <p style="color:var(--text-muted); margin-bottom:20px;">Personalize your physical operating system layout! Download official high-definition glassy backgrounds matching your preferred aesthetics.</p>
    
    <div class="gallery-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
      ${listHTML}
    </div>
  `;
}

function renderMusicRecsPage() {
  let listHTML = '';
  
  Object.keys(aestheticsDatabase).forEach((key) => {
    const data = aestheticsDatabase[key];
    listHTML += `
      <div class="glass-panel" style="padding: 15px; display:flex; gap:15px; align-items:center; background:rgba(255,255,255,0.12);">
        <div style="font-size:28px; background:var(--accent-glow); padding:10px; border-radius:50%; width:50px; height:50px; display:flex; justify-content:center; align-items:center;">🎹</div>
        <div>
          <h4 style="font-weight:700; font-size:14.5px;">${data.name} Audio Profile</h4>
          <p style="font-size:12.5px; margin-bottom:3px;"><strong>Vibe:</strong> ${data.music}</p>
          <p style="font-size:11.5px; color:var(--text-muted);"><strong>Key Acts:</strong> ${data.musicArtist}</p>
        </div>
        <button class="hero-btn" style="margin-left:auto; padding:6px 12px; font-size:11px;" onclick="startSynthesizedShowcase('${data.id}')">Synth Preview</button>
      </div>
    `;
  });

  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:5px;">Sound Archive & Synthesizer Soundboard</h2>
    <p style="color:var(--text-muted); margin-bottom:20px;">Explore the musical signatures of early 2000s tech portal design! Select any category below to trigger a custom procedural synth preview sound sweep.</p>
    
    <div style="display:flex; flex-direction:column; gap:12px;">
      ${listHTML}
    </div>
  `;
}

function startSynthesizedShowcase(aestheticId) {
  playClickSound();
  
  // Custom synth mapping based on selected aesthetic!
  if (aestheticId === 'frutiger-aqua' || aestheticId === 'frutiger-aero') {
    startAmbientSynth('aqua');
    document.getElementById("wmp-track-name").innerText = "Aquatic Dreams";
    activeTrackIdx = 0;
  } else if (aestheticId === 'aurora' || aestheticId === 'dark-aero') {
    startAmbientSynth('aurora');
    document.getElementById("wmp-track-name").innerText = "Aurora Borealis";
    activeTrackIdx = 1;
  } else {
    startAmbientSynth('eco');
    document.getElementById("wmp-track-name").innerText = "Sustainable Future";
    activeTrackIdx = 2;
  }
  
  // Bubble pop success chime!
  setTimeout(synthSuccessChime, 400);
}

function renderTimelinePage() {
  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:5px;">Internet Aesthetics Historical Timeline</h2>
    <p style="color:var(--text-muted); margin-bottom:20px;">Trace the rise, fall, and legacy of modern visual design eras across computer desktop portal interfaces.</p>
    
    <div class="timeline-track" style="margin-top:25px; margin-left:15px;">
      <div class="timeline-milestone">
        <div class="milestone-year">1997 - 2002: Y2K Cyber-Optimism</div>
        <div class="milestone-text">Computing is exciting and futuristic! Transparent colorful plastics (iMac G3), chrome, metallic textures, and matrix digital rains dominate computing culture.</div>
      </div>
      
      <div class="timeline-milestone">
        <div class="milestone-year">2001: Windows XP & Colorful Plastics</div>
        <div class="milestone-text">Release of Windows XP featuring the colorful green-and-blue 'Luna' desktop theme, introducing soft rounded corners and transitioning out of cold grey metals.</div>
      </div>
      
      <div class="timeline-milestone">
        <div class="milestone-year">2004 - 2006: The Rise of Frutiger Aero</div>
        <div class="milestone-text">Development of Windows Vista Ultimate. Tech advertising adopts glossy glass frames, bubbles, green grass fields, and bright sky auroras, creating the premium 'Frutiger Aero' standard.</div>
      </div>
      
      <div class="timeline-milestone">
        <div class="milestone-year">2007 - 2011: The Golden Age of Skeuomorphism</div>
        <div class="milestone-text">iPhone and iOS launch. Tactile desktop structures, wooden shelves, digital clocks on screens, and drop shadows help people understand capacitive touchscreens via physical real-world metaphors.</div>
      </div>
      
      <div class="timeline-milestone">
        <div class="milestone-year">2012 - 2013: The Great Flat Transition</div>
        <div class="milestone-text">Microsoft launches Windows 8 Metro design, discarding reflections and shadows. Apple releases iOS 7, completely flattening glassy icons. The colorful, glossy optimism era concludes.</div>
      </div>
    </div>
  `;
}

function renderAboutPage() {
  return `
    <h2 style="font-size:24px; font-weight:700; color:var(--text-main); margin-bottom:10px;">About FAW (Frutiger Aero Wiki)</h2>
    <div style="display:flex; flex-direction:column; gap:15px; line-height:1.6; font-size:14px;">
      <p>
        <strong>FAW (Frutiger Aero Wiki)</strong> is an interactive digital museum and encyclopedia dedicated to documenting and celebrating early 2000s internet design movements.
      </p>
      <p>
        Our design layout is heavily inspired by <strong>Windows Vista portal sites, Windows Live services, and early MSN design layouts (2007-2010)</strong>. In a modern web filled with flat, boxy, high-contrast black-and-white grids, FAW stands as a glassy sanctuary preserved as a living encyclopedia.
      </p>
      <p>
        We believe the 'future people imagined in 2008'—a beautiful, clean, highly tactile future where technology brings us closer to nature—is a vision worth remembering. We hope this portal brings back the optimism and glowing magic of clicking on shiny digital bubbles under a clear sky.
      </p>
      
      <div class="glass-panel" style="padding:20px; text-align:center; background:rgba(0,180,216,0.08); border-color:rgba(0,180,216,0.3)">
        <h4 style="font-weight:700; color:var(--accent-main); margin-bottom:10px;">Technology & Design Details</h4>
        <p style="font-size:12px; color:var(--text-muted)">
          FAW is built with zero modern dependencies. The Aero blur glass is rendered using high-fidelity CSS <code>backdrop-filter</code> properties. The sounds, clicks, popping noises, and ambient music tracks are synthesized in real-time using procedural oscillators via the native <strong>Web Audio API</strong>.
        </p>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Slide Carousel Controller
// --------------------------------------------------------------------------
let carouselInterval = null;
let currentSlideIdx = 0;

function initHeroCarousel() {
  if (carouselInterval) clearInterval(carouselInterval);
  
  // Rotate slides automatically every 6 seconds
  carouselInterval = setInterval(() => {
    const slides = document.querySelectorAll(".hero-slide");
    if (!slides.length) return;
    
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    setCarouselSlide(currentSlideIdx);
  }, 6000);
}

function setCarouselSlide(index) {
  currentSlideIdx = index;
  
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".indicator-dot");
  if (!slides.length) return;
  
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  
  const targetSlide = document.querySelector(`.hero-slide[data-slide="${index}"]`);
  const targetDot = document.querySelector(`.indicator-dot[data-slide="${index}"]`);
  
  if (targetSlide) targetSlide.classList.add("active");
  if (targetDot) targetDot.classList.add("active");
}

// --------------------------------------------------------------------------
// Spotlight Card Generator
// --------------------------------------------------------------------------
function setupSidebarSpotlight() {
  const spotlightCard = document.getElementById("sidebar-spotlight");
  if (!spotlightCard) return;
  
  // Pick random aesthetic as featured
  const keys = Object.keys(aestheticsDatabase);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const data = aestheticsDatabase[randomKey];
  
  const img = document.getElementById("spotlight-image");
  const title = document.getElementById("spotlight-title");
  const desc = document.getElementById("spotlight-desc");
  
  const bgUrl = aestheticImages[randomKey];
  if (img) {
    if (bgUrl) {
      img.src = bgUrl;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
  
  if (title) title.innerText = data.name;
  if (desc) desc.innerText = `Featured today: Peak popularity during ${data.peakPopularity}. Click to explore!`;
  
  spotlightCard.onclick = () => {
    switchPage(data.id);
  };
}

// --------------------------------------------------------------------------
// Wiki Navigation Clicks
// --------------------------------------------------------------------------
function setupNavigationListeners() {
  const navLinks = document.querySelectorAll("#main-navigation li");
  navLinks.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = li.dataset.page;
      switchPage(pageId);
    });
  });
  
  // Start Orb Button Synthesis trigger
  const startOrb = document.getElementById("start-orb-btn");
  if (startOrb) {
    startOrb.addEventListener("click", () => {
      resumeAudioContext();
      synthSuccessChime();
      
      // Expand orb visual shake effect
      startOrb.style.transform = "scale(1.2)";
      setTimeout(() => {
        startOrb.style.transform = "";
      }, 300);
    });
  }
}

// --------------------------------------------------------------------------
// Expandable Random Aesthetic Router
// --------------------------------------------------------------------------
function viewRandomAesthetic() {
  const keys = Object.keys(aestheticsDatabase);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  switchPage(randKey);
}

// --------------------------------------------------------------------------
// Dynamic Fake Community Chat Tick Generator
// --------------------------------------------------------------------------
let chatTimer = null;
const chatUsers = ["VistaLover86", "AquaCoreSphere", "EcoTechGuy", "MetroFlatAntifan", "AuroraBorealisFan", "Y2KChromeKid", "TactileiOS6", "SkeuoMaster"];
const chatPhrases = [
  "This aesthetic makes me feel so safe and clean.",
  "Check out that custom Windows Vista build! Beautiful glassy visual style.",
  "Nothing beat the original Windows Aero glass. Solid metallic borders in Windows Basic were also cool though.",
  "Can someone link me the 1920x1080 version of the Eco Sustainable grass wallpaper?",
  "Brings back intense memories of playing console menus in 2008.",
  "Clean, high-tech, optimistic and alive. Exactly what we need in the internet today.",
  "I popped 15 bubbles on the screen just now, such a cool popping sound!",
  "Is the WMP visualizer responsive to the arpeggiators? It looks stunning."
];

function initArticleFakeChat() {
  if (chatTimer) clearInterval(chatTimer);
  
  const chatContainer = document.getElementById("article-chat");
  if (!chatContainer) return;
  
  chatTimer = setInterval(() => {
    const user = chatUsers[Math.floor(Math.random() * chatUsers.length)];
    const text = chatPhrases[Math.floor(Math.random() * chatPhrases.length)];
    
    const messageNode = document.createElement("div");
    messageNode.className = "chat-msg";
    messageNode.innerHTML = `
      <span class="chat-user">${user}:</span>
      <span class="chat-text">${text}</span>
    `;
    
    chatContainer.appendChild(messageNode);
    
    // Auto-scroll chat box to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Maintain maximum 12 comments
    if (chatContainer.children.length > 12) {
      chatContainer.children[0].remove();
    }
  }, 5000);
}

// --------------------------------------------------------------------------
// Full-Screen Lightbox Controller
// --------------------------------------------------------------------------
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  
  if (!lightbox || !lightboxImg || !lightboxCaption || !closeBtn) return;
  
  closeBtn.addEventListener("click", () => {
    playClickSound();
    lightbox.style.display = "none";
  });
  
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      playClickSound();
      lightbox.style.display = "none";
    }
  });
}

function openLightbox(url, captionText) {
  playClickSound();
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  
  if (!lightbox || !lightboxImg || !lightboxCaption) return;
  
  lightboxImg.src = url;
  lightboxCaption.innerText = captionText;
  lightbox.style.display = "flex";
}

// --------------------------------------------------------------------------
// Download Assets Simulation
// --------------------------------------------------------------------------
function triggerDownloadSimulation(url) {
  playClickSound();
  resumeAudioContext();
  
  // Custom synthetic success chime!
  setTimeout(synthSuccessChime, 300);
  
  alert(`📥 Aero Wiki Asset Download Initiated!\nDownloading: ${url.split('/').pop()}\nEnjoy your high-fidelity Frutiger Aero wallpaper!`);
}

// --------------------------------------------------------------------------
// Wiki Search Form matching logic
// --------------------------------------------------------------------------
function setupSearchEngine() {
  const form = document.getElementById("header-search-form");
  const input = document.getElementById("search-input");
  if (!form || !input) return;
  
  input.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (activePage !== 'aesthetics') {
      // If user isn't in directory, switch to search directory page
      switchPage('aesthetics', false);
    }
    // Perform dynamic filtering on list
    const mainStage = document.getElementById("main-stage");
    mainStage.innerHTML = renderAestheticsListPage(val);
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    playClickSound();
    const val = input.value.trim();
    if (val) {
      switchPage('aesthetics', false);
      const mainStage = document.getElementById("main-stage");
      mainStage.innerHTML = renderAestheticsListPage(val);
    }
  });
}

// --------------------------------------------------------------------------
// Setup System Digital Clock Widget
// --------------------------------------------------------------------------
function startDigitalClock() {
  const clockNode = document.getElementById("digital-clock");
  if (!clockNode) return;
  
  const tickClock = () => {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    
    // Padding numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    clockNode.innerText = `${hours}:${minutes}:${seconds}`;
  };
  
  tickClock();
  setInterval(tickClock, 1000);
}

// ==========================================================================
// 7. System Boot & Initialization
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
  console.log("FAW Portal booting up...");
  
  // Kickstart system widgets
  startDigitalClock();
  setupSidebarSpotlight();
  setupNavigationListeners();
  setupThemeManager();
  setupLightbox();
  setupSearchEngine();
  
  // Kickstart Dynamic floating bubbles
  initBubbleEngine();
  
  // Load Default Page
  switchPage('home');
  
  // Setup media player buttons
  const playBtn = document.getElementById("wmp-play-btn");
  if (playBtn) playBtn.addEventListener("click", toggleWMPMusic);
  
  const prevBtn = document.getElementById("wmp-prev-btn");
  if (prevBtn) prevBtn.addEventListener("click", () => changeTrack('prev'));
  
  const nextBtn = document.getElementById("wmp-next-btn");
  if (nextBtn) nextBtn.addEventListener("click", () => changeTrack('next'));
  
  // Render canvas visualizer
  setupVisualizer();
  
  // Register click anywhere to trigger unlocking Web Audio Context
  document.body.addEventListener("click", () => {
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }, { once: true });
});
