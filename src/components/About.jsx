const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.296.038-.59.07-.882A9 9 0 1010.07 13.12 9.003 9.003 0 0012 14z" />
      </svg>
    ),
    title: 'Innovation First',
    desc: 'We stay ahead of the curve, integrating the latest in AI, cloud, and digital technologies into every solution we build.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    title: 'End-to-End Service',
    desc: 'From strategy and design to deployment and support — we handle every phase so you can focus on your core business.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Seasoned professionals across software engineering, data science, IT infrastructure, and project management.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Client-Focused',
    desc: "Your success is our metric. We listen, adapt, and deliver solutions that align with your goals — not just a scope document.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Quality Assured',
    desc: 'Every deliverable goes through rigorous quality checks. We do not ship until we are confident it meets the highest standard.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Global Perspective',
    desc: 'Based in Nigeria, delivering globally. We bring a broad worldview to every project, serving clients across diverse industries.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — text */}
          <div>
            <span className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
              Built to Deliver.<br />
              <span className="text-[#29ABE2]">Driven by Results.</span>
            </h2>
            <div className="space-y-5 text-gray-500 text-base leading-relaxed">
              <p>
                BEHIMI Global Solutions LTD is a registered technology and solutions company
                headquartered in Nigeria. We were founded with one mission — to bridge the gap
                between business ambition and technology capability.
              </p>
              <p>
                We are a multidisciplinary team that combines deep technical expertise with
                real-world industry knowledge. Whether you need a smart software system,
                an IT overhaul, expert consulting, or hands-on contracting work, we bring
                the same level of professionalism and dedication to every engagement.
              </p>
              <p>
                Our diverse portfolio spans three core service areas, allowing us to serve
                startups, SMEs, and enterprises with equal effectiveness.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#0F172A] hover:bg-[#29ABE2] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#29ABE2] to-[#1A78C8] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="text-6xl font-black opacity-10 leading-none mb-2">BEHIMI</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  To empower businesses with innovative technology solutions that drive
                  growth, improve efficiency, and create lasting competitive advantage.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  {[
                    { v: 'A', label: 'Software Dev & AI' },
                    { v: 'B', label: 'IT Solutions & Training' },
                    { v: 'C', label: 'General Contracting' },
                    { v: '3+', label: 'Years in Business' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-3xl font-black">{item.v}</div>
                      <div className="text-white/70 text-xs font-medium mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-3">
            Why Choose <span className="text-[#29ABE2]">BEHIMI?</span>
          </h3>
          <p className="text-gray-400 text-base">Six reasons clients trust us with their most critical work.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#F0FBFF] hover:bg-[#29ABE2]/10 p-6 rounded-2xl transition-colors duration-200 group"
            >
              <div className="w-10 h-10 bg-[#29ABE2]/15 group-hover:bg-[#29ABE2] text-[#29ABE2] group-hover:text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200">
                {p.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] mb-1">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
