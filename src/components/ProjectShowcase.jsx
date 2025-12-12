import { useState } from "react";

export default function ProjectShowcase() {
  const slides = [
    {
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      img: "/assets/ShowCase.png",
      bg: "bg-pink-50",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
      ],
    },

    {
      category: "Web Development",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      img: "/assets/ShowCase.png",
      bg: "bg-green-50",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
      ],
    },

    {
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      img: "/assets/ShowCase.png",
      bg: "bg-yellow-50",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[index];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
      <h2 className="text-center text-2xl font-semibold">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>
      <p className="text-center text-gray-500 text-sm mt-1">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
      </p>

      {/* SLIDER CARD */}
      <div
        className={`relative mt-10 rounded-2xl p-10 shadow overflow-hidden transition-all duration-500 ${current.bg}`}
      >
        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
        >
          <span className="text-xl">←</span>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
        >
          <span className="text-xl">→</span>
        </button>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-medium">
              {current.category}
            </span>

            <h3 className="font-bold text-2xl mt-4">{current.title}</h3>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-sm">
              {current.desc}
            </p>

            <div className="mt-5">
              <p className="font-semibold text-sm mb-2">Tim Pembuat :</p>

              <div className="space-y-3">
                {current.team.map((m, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <img
                      src="/assets/TimPembuat.png"
                      className="w-10 h-10 rounded-full object-cover"
                      alt="Profile"
                    />
                    <div>
                      <p className="font-semibold text-sm">{m.name}</p>
                      <p className="text-gray-500 text-xs">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
              <img src="/assets/Vector.png" className="w-4" alt="Arrow" />
              Live Demo
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={current.img}
              className="rounded-2xl border-4 border-white w-full object-cover"
              alt="Project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}