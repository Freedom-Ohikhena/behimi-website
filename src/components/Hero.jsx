export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#29ABE2]/8 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-[#29ABE2]/6 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#29ABE2]/5 blur-3xl" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #29ABE2 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

        {/* Left — copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#29ABE2]/10 border border-[#29ABE2]/20 text-[#29ABE2] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-8">
            <span className="w-2 h-2 bg-[#29ABE2] rounded-full animate-pulse" />
            Technology Solutions Partner
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0F172A] leading-[1.05] tracking-tight mb-6">
            Transforming{' '}
            <span className="text-[#29ABE2]">Businesses</span>{' '}
            Through Smart Technology
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
            BEHIMI Global Solutions LTD delivers cutting-edge software, AI-powered
            solutions, IT consulting, and reliable contracting services — everything
            you need to grow and compete in a digital-first world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#services"
              className="text-center bg-[#29ABE2] hover:bg-[#1E96CB] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#29ABE2]/30 hover:-translate-y-0.5"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="text-center border-2 border-[#29ABE2] text-[#29ABE2] hover:bg-[#29ABE2] hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-8 border-t border-gray-100">
            {[
              { value: '50+', label: 'Projects Done', icon: '🚀' },
              { value: '3+', label: 'Years Experience', icon: '📅' },
              { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#F0FBFF] border border-[#29ABE2]/15 rounded-2xl px-3 py-4 flex flex-col items-center text-center">
                <span className="text-lg mb-1">{stat.icon}</span>
                <div className="text-xl sm:text-2xl font-black text-[#0F172A] leading-none">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[480px] h-[480px]">

            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#29ABE2]/15 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-[#29ABE2]/10 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Center orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#29ABE2] to-[#1E78C8] flex items-center justify-center shadow-2xl shadow-[#29ABE2]/40">
                <span className="text-white font-black text-5xl tracking-[0.1em]">B</span>
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute top-6 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-48">
              <div className="w-9 h-9 bg-[#29ABE2]/10 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#29ABE2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Software & AI</p>
              <p className="text-xs text-gray-400 mt-0.5">Custom Solutions Built for You</p>
            </div>

            {/* Floating card — left middle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44">
              <div className="w-9 h-9 bg-[#29ABE2]/10 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#29ABE2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">IT Consulting</p>
              <p className="text-xs text-gray-400 mt-0.5">Expert Guidance & Training</p>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute bottom-6 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44">
              <div className="w-9 h-9 bg-[#29ABE2]/10 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#29ABE2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Contracting</p>
              <p className="text-xs text-gray-400 mt-0.5">Build & Deliver On Time</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
