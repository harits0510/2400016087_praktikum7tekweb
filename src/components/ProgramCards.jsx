export default function ProgramCards() {
  const programs = [
    {
      title: "Career Talks",
      desc: "Sesi sharing dari praktisi industri dan alumni sukses",
      img: "/assets/CareerTalks.png",
      color: "bg-yellow-200",
    },
    {
      title: "Extra Classes",
      desc: "Kelas tambahan skill development dan workshop teknis",
      img: "/assets/ExtraClasses.png",
      color: "bg-green-200",
    },
    {
      title: "Project Work",
      desc: "Mengerjakan project nyata dengan bimbingan mentor",
      img: "/assets/ProjectWork.png",
      color: "bg-blue-200",
    },
    {
      title: "Mentoring",
      desc: "Sesi konsultasi personal dengan mentor berpengalaman",
      img: "/assets/Mentoring.png",
      color: "bg-pink-200",
    },
  ];

  return (
    <section className="w-full mt-16 md:mt-24 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">

          {programs.map((p) => (
            <div
              key={p.title}
              className={`${p.color} p-6 rounded-xl shadow-md transition hover:shadow-lg flex flex-col h-full`}
            >
              <img src={p.img} alt={p.title} className="w-12 md:w-14 mb-4" />

              <h3 className="font-semibold text-sm">{p.title}</h3>

              <p className="text-xs text-gray-700 mt-1 leading-relaxed flex-grow">
                {p.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}