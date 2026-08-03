const products = [
  {
    name: 'Crestd',
    tag: 'Featured Product',
    description:
      "An e-commerce platform for shopping and fully customising merch to rep your identity, with curated collections for states of origin, alma maters, and more. One of our recent builds. Explore it.",
    url: 'https://www.crestd.online',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#132038] to-[#1E3A5F] overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#29ABE2]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#29ABE2]/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-white/10 text-[#29ABE2] text-xs font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            What We've Built
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Our <span className="text-[#29ABE2]">Products</span>
          </h2>
          <p className="text-gray-300 text-lg font-semibold leading-relaxed">
            Platforms and applications we've designed and built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <a
              key={product.url}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56 bg-gray-50 border-b border-gray-100 overflow-hidden">
                <iframe
                  src={product.url}
                  title={`${product.name} preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#0F172A]/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#0F172A] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    Visit Site ↗
                  </span>
                </div>
              </div>

              <div className="p-8">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#29ABE2] mb-3 block">
                  {product.tag}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#29ABE2] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
