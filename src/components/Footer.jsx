import logo from '../assets/behimi1.png'

const serviceLinks = [
  'Software Development',
  'AI & Data Solutions',
  'IT Solutions Delivery',
  'IT Training & Consulting',
  'General Contracting',
]

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080E1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="BEHIMI Global Solutions LTD" className="h-14 w-auto max-w-[200px]" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering businesses with innovative software, AI, IT, and contracting
              solutions. We deliver technology that creates lasting competitive advantage.
            </p>
            <div className="flex items-center gap-3">
              {/* Placeholder social icons */}
              {[
                <path key="li" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />,
                <path key="tw" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
                <><rect key="ig-r" x="2" y="2" width="20" height="20" rx="5" ry="5" /><path key="ig-p" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line key="ig-l" x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-[#29ABE2] rounded-xl flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-[#29ABE2] text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-[#29ABE2] text-sm transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BEHIMI Global Solutions LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Registered in Nigeria</span>
            <span className="mx-2 text-gray-700">·</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              behimi.com
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
