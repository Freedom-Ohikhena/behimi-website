const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Software Development & AI Solutions',
    tag: 'Core Service',
    description:
      'We design and build custom software applications, data analytics platforms, and AI-driven systems that automate processes, surface insights, and unlock new opportunities for your business.',
    features: ['Custom Software Development', 'Data Analytics Platforms', 'Artificial Intelligence & ML', 'Process Automation'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    title: 'IT Solutions, Training & Consulting',
    tag: 'Core Service',
    description:
      'End-to-end IT infrastructure delivery, expert strategic consulting, and comprehensive training programmes that equip your team with the skills and tools to thrive in a digital-first environment.',
    features: ['IT Infrastructure Delivery', 'Strategic IT Consulting', 'Technology Training', 'Digital Transformation'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
      </svg>
    ),
    title: 'General Contracting',
    tag: 'Core Service',
    description:
      'Reliable, professional general contracting services with a commitment to quality, precision, and on-time delivery. We manage and execute infrastructure and construction projects from start to finish.',
    features: ['Project Management', 'Infrastructure Development', 'Quality Assurance', 'On-Time Delivery'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F0FBFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
            Three Core <span className="text-[#29ABE2]">Service Areas</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From software to infrastructure, we offer comprehensive solutions
            that cover every aspect of your business technology needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#29ABE2]/10 group-hover:bg-[#29ABE2] text-[#29ABE2] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#29ABE2] mb-3">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
