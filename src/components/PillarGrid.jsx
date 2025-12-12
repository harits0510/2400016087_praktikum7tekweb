export default function PillarGrid() {
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      img: "/assets/PilarIdeation.png",
      color: "bg-yellow-200",
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      img: "/assets/PilarCreation.png",
      color: "bg-green-200",
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      img: "/assets/PilarCollaboration.png",
      color: "bg-blue-200",
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      img: "/assets/PilarGuidance.png",
      color: "bg-pink-200",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold">
          Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2 mb-12 max-w-2xl mx-auto">
          Komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`${p.color} p-6 rounded-xl shadow-md text-center h-full`}
            >
              <img src={p.img} className="w-14 md:w-16 mx-auto mb-4" alt={p.title} />
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}