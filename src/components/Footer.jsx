export default function Footer() {
  return (
    <footer className="w-full bg-[#2E63A3] text-white pt-16 pb-6 mt-24">

      {/* ==== CONTAINER ==== */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm">

        {/* ========== LEFT COLUMN : LOGO + TEXT ========== */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/assets/LogoFooter.png"
              className="h-10 sm:h-12 object-contain"
              alt="Logo"
            />
            <img
              src="/assets/RuangEkspresiFooter.png"
              className="h-7 sm:h-8 object-contain"
              alt="Ruang Ekspresi"
            />
          </div>

          <p className="leading-relaxed text-gray-200 max-w-xs">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
            mengembangkan potensi melalui ideation, creation,
            collaboration, dan guidance.
          </p>

          <div className="mt-6 space-y-4 text-gray-200">
            <div className="flex items-start gap-3">
              <img src="/assets/MapsFooter.png" className="w-5 mt-1" alt="Maps" />
              <p className="leading-snug">
                Jl. Ringroad Selatan, Kragilan, Tamanan,
                Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img src="/assets/EmailFooter.png" className="w-5 mt-1" alt="Email" />
              <p>ruang_ekspresi@webmail.uad.ac.id</p>
            </div>

            <div className="flex items-center gap-3">
              <img src="/assets/ContactFooter.png" className="w-5" alt="Phone" />
              <p>(0274) 511830</p>
            </div>
          </div>
        </div>

        {/* ========== QUICK LINKS ========== */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Program</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* ========== PROGRAMS ========== */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Programs</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:underline cursor-pointer">Career Talks</li>
            <li className="hover:underline cursor-pointer">Extra Classes</li>
            <li className="hover:underline cursor-pointer">Project Work</li>
            <li className="hover:underline cursor-pointer">Mentoring</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/40 mt-10 pt-4 w-full" />

      {/* Copyright */}
      <p className="text-center text-gray-200 text-xs">
        © 2025 Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}