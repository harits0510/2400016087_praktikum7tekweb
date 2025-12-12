export default function ScheduleSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>

        <p className="text-center text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran 
          dan pengembangan skill setiap Sabtu.
        </p>

        {/* Card Container */}
        <div className="bg-white mt-12 rounded-2xl shadow-xl p-6 md:p-10">

          {/* Label */}
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold mb-10">
            <img src="src/assets/Kalender.png" className="w-5 md:w-6" alt="Kalender" />
            Setiap Sabtu
          </div>

          {/* Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Morning Session */}
            <div className="p-6 rounded-xl bg-gradient-to-b md:bg-gradient-to-r from-yellow-200 to-green-200 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2">
                <img src="src/assets/Jam.png" className="w-5 md:w-6" alt="Jam" />
                Sesi Pagi
              </h3>

              <p className="text-blue-900 font-semibold mt-1 text-sm">
                09.00 - 12.00 WIB
              </p>

              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Workshop, Career Talks, dan Extra Classes intensif.
              </p>
            </div>

            {/* Evening Session */}
            <div className="p-6 rounded-xl bg-gradient-to-b md:bg-gradient-to-r from-yellow-200 to-green-200 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2">
                <img src="src/assets/Jam.png" className="w-5 md:w-6" alt="Jam" />
                Sesi Sore
              </h3>

              <p className="text-blue-900 font-semibold mt-1 text-sm">
                16.00 - 19.00 WIB
              </p>

              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Project Work, Mentoring, dan Collaboration Session.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}