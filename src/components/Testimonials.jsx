export default function Testimonials() {
  const testi = [
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      img: "/assets/Profile.png",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      img: "/assets/Profile.png",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      img: "/assets/Profile.png",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      img: "/assets/Profile.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ===== ROW 1 ===== */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...testi, ...testi].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex gap-4 md:gap-5 min-w-[260px] md:min-w-[350px]"
              >
                <img
                  src={t.img}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-blue-600">{t.role}</p>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-right">
            {[...testi, ...testi].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex gap-4 md:gap-5 min-w-[260px] md:min-w-[350px]"
              >
                <img
                  src={t.img}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-blue-600">{t.role}</p>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}