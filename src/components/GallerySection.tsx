export const GallerySection = () => {
  return (
    <section id="gallery" className="bg-[#0a192f] py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#c5a059] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Gallery</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#c5a059] to-[#d4af37] mb-6"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Dawat is an ambassador of gourmet dining, taking you on a visual and sensory journey through our exquisite preparations. Each dish is a masterpiece, crafted with passion and authentic flavors.
              </p>
              <a
                href="/gallery"
                className="inline-block bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-[#0a192f] font-bold px-8 py-3 hover:shadow-2xl transition-all uppercase text-xs tracking-widest hover:scale-105"
              >
                View All
              </a>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#c5a059]/40 flex-shrink-0 shadow-2xl hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] transition-all duration-500 hover:scale-105 relative z-20">
                  <img
                    src="/images/gallery/s2.jpg"
                    className="w-full h-full object-cover"
                    alt="Featured dish"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="absolute w-48 h-48 rounded-full overflow-hidden border-6 border-[#d4af37] flex-shrink-0 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105 -left-8 top-8 z-10">
                <img
                  src="/images/gallery/s1.jpg"
                  className="w-full h-full object-cover"
                  alt="Signature dish"
                />
              </div>

              <div className="absolute w-48 h-48 rounded-full overflow-hidden border-6 border-[#c5a059]/60 flex-shrink-0 shadow-xl hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-all duration-500 hover:scale-105 -right-8 bottom-8 z-10">
                <img
                  src="/images/gallery/s3.jpg"
                  className="w-full h-full object-cover"
                  alt="Culinary creation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
