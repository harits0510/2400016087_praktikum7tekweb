export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            <span className="text-blue-600">RUANG EKSPRESI</span> : <br />
            Wadah kreatif & Kompetitif <br />
            Mahasiswa
          </h1>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-5 py-2 bg-yellow-200 text-gray-900 rounded-full text-sm font-medium">
              Ideation
            </span>
            <span className="px-5 py-2 bg-green-200 text-gray-900 rounded-full text-sm font-medium">
              Creation
            </span>
            <span className="px-5 py-2 bg-blue-200 text-gray-900 rounded-full text-sm font-medium">
              Collaboration
            </span>
            <span className="px-5 py-2 bg-red-200 text-gray-900 rounded-full text-sm font-medium">
              Guidance & Support
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="src/assets/HeroSection.png"
            className="w-64 sm:w-72 md:w-96 lg:w-[26rem] max-w-full rounded-xl shadow-lg object-cover"
            alt="Hero"
          />
        </div>

      </div>
    </section>
  );
}