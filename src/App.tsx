import { Routes, Route } from 'react-router-dom';

// Icons as simple SVG components
const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const IconArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const IconShield = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconServer = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const IconLock = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Beanzoom" className="h-10 md:h-12 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-gray-300 hover:text-brand-shine transition-colors">The Gap</a>
            <a href="#solution" className="text-sm text-gray-300 hover:text-brand-shine transition-colors">Our Approach</a>
            <a href="#case-study" className="text-sm text-gray-300 hover:text-brand-shine transition-colors">Results</a>
            <a href="#industries" className="text-sm text-gray-300 hover:text-brand-shine transition-colors">Industries</a>
          </div>
          <a href="#contact" className="btn-metallic text-sm rounded-md">
            Get Audit
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />

      {/* Animated connection lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0055A4" stopOpacity="0" />
              <stop offset="50%" stopColor="#A0E4FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#0055A4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${30 + i * 12}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <p className="text-brand-shine font-semibold tracking-wide uppercase text-sm md:text-base">
            End-to-End Business Intelligence
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
            Your Data Lives in Silos.<br />
            <span className="text-gradient">Your Truth Lives in a Spreadsheet.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            QuickBooks. Your CRM. That Excel file only you understand.
            We connect them into <span className="text-white font-semibold">one system</span> — so you see real margins in real time, not at month-end.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="btn-metallic rounded-md text-center">
              Get a Workflow Audit
            </a>
            <a href="#how-it-works" className="px-8 py-4 font-semibold text-gray-300 hover:text-white border border-white/20 hover:border-brand-shine/50 rounded-md transition-all text-center">
              See How It Works
            </a>
          </div>

          {/* Visual: The Silo Problem */}
          <div className="pt-12 md:pt-20">
            <div className="grid grid-cols-3 md:grid-cols-7 gap-3 md:gap-4 items-end max-w-4xl mx-auto">
              {/* Silo 1: Accounting */}
              <div className="glass-panel p-3 md:p-4 text-center space-y-2 opacity-60">
                <div className="text-2xl md:text-3xl">📊</div>
                <p className="text-[10px] md:text-xs text-gray-400">QuickBooks</p>
              </div>

              {/* Broken connection */}
              <div className="hidden md:flex items-center justify-center text-red-400/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              {/* Silo 2: CRM */}
              <div className="glass-panel p-3 md:p-4 text-center space-y-2 opacity-60">
                <div className="text-2xl md:text-3xl">👥</div>
                <p className="text-[10px] md:text-xs text-gray-400">CRM</p>
              </div>

              {/* Broken connection */}
              <div className="hidden md:flex items-center justify-center text-red-400/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              {/* Silo 3: The Spreadsheet */}
              <div className="glass-panel p-3 md:p-4 text-center space-y-2 border-yellow-500/50 relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
                <div className="text-2xl md:text-3xl">📁</div>
                <p className="text-[10px] md:text-xs text-yellow-400 font-semibold">"The File"</p>
              </div>

              {/* Arrow to Solution */}
              <div className="hidden md:flex items-center justify-center text-brand-shine">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Solution: Unified Platform */}
              <div className="glass-panel p-3 md:p-4 text-center space-y-2 border-brand-shine/50 bg-brand-blue/10 col-span-3 md:col-span-1">
                <div className="text-2xl md:text-3xl">🧠</div>
                <p className="text-[10px] md:text-xs text-brand-shine font-semibold">One Truth</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 italic">
              "One login. One truth. Real-time operations."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// The Gap Section - "The Silo Trap"
function GapSection() {
  return (
    <section id="problem" className="section-padding bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-shine font-semibold mb-4">THE PROBLEM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            The "Silo Trap"
          </h2>
          <p className="text-xl text-gray-300">
            You have data in your accounting software. Data in your CRM. And the <span className="text-white font-semibold">real truth</span> lives in a fragile spreadsheet that requires manual entry to update.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* The Pain */}
          <div className="glass-panel p-8 space-y-4">
            <div className="text-4xl font-bold text-yellow-400">The Pain</div>
            <h3 className="text-xl font-semibold">Data Everywhere, Answers Nowhere</h3>
            <p className="text-gray-400">
              Your team spends hours copying numbers between systems. By the time your "report" is ready, the data is already stale. You're making decisions on last week's reality.
            </p>
          </div>

          {/* The Cost */}
          <div className="glass-panel p-8 space-y-4">
            <div className="text-4xl font-bold text-red-400">The Cost</div>
            <h3 className="text-xl font-semibold">Operating on a Delay</h3>
            <p className="text-gray-400">
              You can't see your real margins until end of month — or worse, end of quarter. By then, the job that lost money is long finished. The opportunity to course-correct? Gone.
            </p>
          </div>

          {/* The Risk */}
          <div className="glass-panel p-8 space-y-4 border-brand-shine/30">
            <div className="text-4xl font-bold text-brand-shine">The Risk</div>
            <h3 className="text-xl font-semibold">The "Bus Factor"</h3>
            <p className="text-gray-400">
              One person understands that master spreadsheet. If they go on vacation, get sick, or leave — <span className="text-white font-semibold">your operational visibility goes with them.</span>
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-display font-semibold text-gray-300">
            You're not just wasting time.<br />
            <span className="text-red-400">You're flying blind.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Solution Section - "End-to-End Visibility"
function SolutionSection() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-shine font-semibold mb-4">THE SOLUTION</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            End-to-End Visibility
          </h2>
          <p className="text-xl text-gray-300">
            We don't just replace Excel. We create a <span className="text-brand-shine font-semibold">brain for your business</span> — connecting your tools, automating your logic, and giving you one source of truth.
          </p>
        </div>

        {/* What We Connect */}
        <div className="glass-panel p-8 md:p-12 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Connect the Dots</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">📊</div>
              <p className="font-semibold">Pull Financial Actuals</p>
              <p className="text-sm text-gray-400">QuickBooks, Wave, Xero — real numbers, not guesses</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">👥</div>
              <p className="font-semibold">Sync Client Details</p>
              <p className="text-sm text-gray-400">Your CRM data flows in automatically</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <p className="font-semibold">Automate Your Logic</p>
              <p className="text-sm text-gray-400">Those spreadsheet formulas? Now they run themselves.</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg text-brand-shine font-semibold">
            One login. One truth. Real-time operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="glass-panel p-8 space-y-4 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center font-display font-bold text-xl">1</div>
            <h3 className="text-xl font-semibold pt-4">Rapid Prototyping</h3>
            <p className="text-gray-400">
              We don't take 6 months. We prototype your core workflow in as little as <span className="text-brand-shine font-semibold">1-2 days</span>. You see working software before you commit — before any agreement is even signed.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-8 space-y-4 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center font-display font-bold text-xl">2</div>
            <h3 className="text-xl font-semibold pt-4">Custom Fit</h3>
            <p className="text-gray-400">
              We tailor the software to <span className="text-brand-shine font-semibold">your process</span>, not the other way around. Your expertise drives the design; we just make it digital.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-8 space-y-4 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center font-display font-bold text-xl">3</div>
            <h3 className="text-xl font-semibold pt-4">Tiered Scalability</h3>
            <p className="text-gray-400">
              Pricing that respects your cash flow. We bill based on <span className="text-brand-shine font-semibold">capacity</span> (active jobs/clients), not per-seat. You grow, we grow.
            </p>
          </div>
        </div>

        {/* The Asset Argument */}
        <div className="glass-panel p-8 md:p-12 border-brand-shine/40 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 space-y-4">
              <p className="text-brand-shine font-semibold">THE REAL VALUE</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Turn Your Operations Into Intellectual Property
              </h3>
              <p className="text-gray-300">
                Your unique workflow is your competitive advantage. Off-the-shelf software forces you to work <em>their</em> way. We codify <span className="font-semibold text-white">your specific secret sauce</span> into a scalable platform that runs without you.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400"><IconCheck /></span>
                  Your process, digitized and systematized
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400"><IconCheck /></span>
                  Institutional knowledge that doesn't walk out the door
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400"><IconCheck /></span>
                  A business that scales beyond the founder
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact" className="btn-metallic rounded-md inline-flex items-center gap-2">
                Let's Talk <IconArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study Section
function CaseStudySection() {
  return (
    <section id="case-study" className="section-padding bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-shine font-semibold mb-4">CASE STUDY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            The "Vault" Effect
          </h2>
          <p className="text-xl text-gray-300">
            How one professional services firm eliminated spreadsheet chaos and reclaimed 500+ hours per year.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="space-y-8">
            <div className="glass-panel p-6">
              <p className="text-sm text-gray-400 mb-2">Industry</p>
              <p className="text-xl font-semibold">Professional Services / Grant Consulting</p>
            </div>

            <div className="glass-panel p-6">
              <p className="text-sm text-gray-400 mb-2">The Problem</p>
              <p className="text-gray-300">
                High-volume repeat business managed on spreadsheets. Every new project required re-assembling old data manually. Staff spent hours hunting for information that should have been instant.
              </p>
            </div>

            <div className="glass-panel p-6">
              <p className="text-sm text-gray-400 mb-2">The Solution</p>
              <p className="text-gray-300">
                A Custom ERP acting as a "Client Vault" — every client interaction, document, and data point in one searchable system. Repeat engagements auto-populate from history.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-center mb-8">The Results</h3>

            <div className="glass-panel p-8 border-emerald-500/30 text-center">
              <div className="text-5xl md:text-6xl font-display font-bold text-emerald-400">90%</div>
              <p className="text-xl text-gray-300 mt-2">Reduction in Data Entry</p>
              <p className="text-sm text-gray-500">for repeat clients</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-brand-shine">500+</div>
                <p className="text-gray-300 mt-2">Hours Returned</p>
                <p className="text-xs text-gray-500">per year to staff</p>
              </div>

              <div className="glass-panel p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-brand-shine">15 min</div>
                <p className="text-gray-300 mt-2">Break-Even</p>
                <p className="text-xs text-gray-500">saved per employee/day</p>
              </div>
            </div>

            <div className="glass-panel p-6 bg-brand-blue/20 border-brand-blue/40">
              <p className="text-center text-lg">
                <span className="font-semibold text-white">ROI:</span>{' '}
                <span className="text-gray-300">The system paid for itself by saving just 15 minutes per employee per day.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Industries Section
function IndustriesSection() {
  const industries = [
    {
      name: 'Specialty Trades',
      examples: 'General Contractor, Flooring, Roofing, HVAC',
      problem: 'Solving the "Estimates vs. Actuals" gap',
      icon: '🔧',
    },
    {
      name: 'Wholesale & Distribution',
      examples: 'B2B Sales, Inventory, Multi-Channel',
      problem: 'Order management, pricing tiers, and inventory sync chaos',
      icon: '📦',
    },
    {
      name: 'Transportation & Fleet',
      examples: 'Logistics, Delivery, Vehicle Management',
      problem: 'Route optimization, maintenance tracking, and driver coordination',
      icon: '🚚',
    },
    {
      name: 'Craft Brewing',
      examples: 'Breweries, Distilleries',
      problem: 'TTB Compliance and Batch Tracking',
      icon: '🍺',
    },
    {
      name: 'Commercial Cleaning',
      examples: 'Janitorial, Facilities',
      problem: 'Decentralized staff logistics and inventory burn rates',
      icon: '🧹',
    },
    {
      name: 'Property Management',
      examples: 'Multi-family, Commercial',
      problem: 'The "Owner Payout" calculation nightmare',
      icon: '🏢',
    },
    {
      name: 'Event Production',
      examples: 'AV, Staging, Catering',
      problem: 'Multi-vendor budget reconciliation',
      icon: '🎪',
    },
  ];

  return (
    <section id="industries" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-shine font-semibold mb-4">NOW SEEKING</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Founding Partners in These Verticals
          </h2>
          <p className="text-xl text-gray-300">
            We've done our research. These industries are ripe for transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <div key={i} className="glass-panel p-6 hover:border-brand-shine/40 transition-colors group cursor-pointer">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-brand-shine transition-colors">{industry.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{industry.examples}</p>
              <p className="text-gray-300">
                <span className="text-brand-shine font-semibold">Solving:</span> {industry.problem}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="glass-panel p-6 border-brand-shine/40 flex flex-col justify-center items-center text-center">
            <p className="text-lg font-semibold mb-2">Don't see your industry?</p>
            <p className="text-gray-400 mb-4">We're always looking for the next "Unicorn" opportunity.</p>
            <a href="#contact" className="text-brand-shine font-semibold hover:underline flex items-center gap-2">
              Tell us about it <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Technical Trust Section
function TechTrustSection() {
  return (
    <section className="section-padding bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-shine font-semibold mb-4">NOT AI HYPE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Built for Stability, Not Headlines
          </h2>
          <p className="text-xl text-gray-300">
            We use boring, proven, bank-grade technology. Because your business can't afford "move fast and break things."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Hosting */}
          <div className="glass-panel p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-shine">
              <IconServer />
            </div>
            <h3 className="text-xl font-semibold">Enterprise Hosting</h3>
            <p className="text-gray-400">
              Vercel + Supabase (AWS). The same infrastructure trusted by <span className="text-white">Notion, Adobe, and Uber</span>.
            </p>
            <p className="text-sm text-gray-500">99.99% uptime SLA</p>
          </div>

          {/* Security */}
          <div className="glass-panel p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-shine">
              <IconShield />
            </div>
            <h3 className="text-xl font-semibold">Bank-Grade Security</h3>
            <p className="text-gray-400">
              SOC2 Compliant infrastructure. HIPAA ready. <span className="text-white">AES-256 encryption</span> at rest and in transit.
            </p>
            <p className="text-sm text-gray-500">Your data stays your data</p>
          </div>

          {/* Continuity */}
          <div className="glass-panel p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-shine">
              <IconLock />
            </div>
            <h3 className="text-xl font-semibold">Source Code Escrow</h3>
            <p className="text-gray-400">
              If anything happens to us, <span className="text-white">you own the keys</span> to your platform. You're never locked out of your business.
            </p>
            <p className="text-sm text-gray-500">Full business continuity</p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400"><IconCheck /></span>
            <span>SOC2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400"><IconCheck /></span>
            <span>HIPAA Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400"><IconCheck /></span>
            <span>AES-256 Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400"><IconCheck /></span>
            <span>US-Based Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer / Contact CTA
function FooterSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brand-shine font-semibold mb-4">TAKE THE FIRST STEP</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          Apply for a Workflow Audit
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Tell us what industry you're in and send us a screenshot of the spreadsheet that keeps you up at night. We'll tell you if it's a candidate for a Beanzoom ERP.
        </p>

        <div className="glass-panel p-8 md:p-12 border-brand-shine/40">
          <form
            action="https://formspree.io/f/mkgdpvpr"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-navy-dark border border-white/20 rounded-md focus:border-brand-shine focus:outline-none focus:ring-1 focus:ring-brand-shine transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-navy-dark border border-white/20 rounded-md focus:border-brand-shine focus:outline-none focus:ring-1 focus:ring-brand-shine transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="text-left">
              <label htmlFor="industry" className="block text-sm text-gray-400 mb-2">Industry / Business Type</label>
              <input
                type="text"
                id="industry"
                name="industry"
                required
                className="w-full px-4 py-3 bg-navy-dark border border-white/20 rounded-md focus:border-brand-shine focus:outline-none focus:ring-1 focus:ring-brand-shine transition-colors"
                placeholder="e.g., Commercial Flooring, Property Management, Event Production"
              />
            </div>

            <div className="text-left">
              <label htmlFor="pain_point" className="block text-sm text-gray-400 mb-2">What's Your Biggest Operational Pain Point?</label>
              <textarea
                id="pain_point"
                name="pain_point"
                rows={4}
                required
                className="w-full px-4 py-3 bg-navy-dark border border-white/20 rounded-md focus:border-brand-shine focus:outline-none focus:ring-1 focus:ring-brand-shine transition-colors resize-none"
                placeholder="Describe the spreadsheet nightmare, the process that breaks, or the thing that keeps you up at night..."
              />
            </div>

            {/* Honeypot for spam prevention */}
            <input type="text" name="_gotcha" className="hidden" />

            <button type="submit" className="btn-metallic rounded-md w-full md:w-auto">
              Request Workflow Audit
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Beanzoom" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Beanzoom. Rescuing businesses from Spreadsheet Purgatory.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

// Main Landing Page
function LandingPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Navigation />
      <HeroSection />
      <GapSection />
      <SolutionSection />
      <CaseStudySection />
      <IndustriesSection />
      <TechTrustSection />
      <FooterSection />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
