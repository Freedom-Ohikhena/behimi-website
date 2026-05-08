export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#29ABE2]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#29ABE2]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #29ABE2 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — CTA copy */}
          <div>
            <span className="inline-block bg-[#29ABE2]/15 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Ready to Transform<br />
              <span className="text-[#29ABE2]">Your Business?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Let's talk about how BEHIMI Global Solutions LTD can help you build
              smarter systems, upskill your team, and deliver your next project with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@behimi.com"
                className="flex items-center justify-center gap-2 bg-[#29ABE2] hover:bg-[#1E96CB] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#29ABE2]/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Us an Email
              </a>
              <a
                href="tel:+2347073479345"
                className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#29ABE2] text-white hover:text-[#29ABE2] px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Right — contact info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                ),
                label: 'Email',
                value: 'info@behimi.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                label: 'Phone',
                value: '+234 707 347 9345',
                sub: 'Mon–Fri, 9am–6pm WAT',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                label: 'Location',
                value: 'Nigeria',
                sub: 'Serving clients globally',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                ),
                label: 'Response Time',
                value: '< 24 Hours',
                sub: 'Average first response',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#29ABE2]/50 transition-colors duration-200">
                <div className="w-11 h-11 bg-[#29ABE2]/10 text-[#29ABE2] rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-bold text-base mb-1">{item.value}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
