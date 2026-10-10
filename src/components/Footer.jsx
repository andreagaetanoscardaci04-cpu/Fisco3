import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-[#1657e8]"
            >
              Fisco<span className="text-white">3</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Il team di commercialisti che ti mette al centro. Gestione
              contabile e fiscale semplificata, per farti dormire sonni
              tranquilli.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#1657e8] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#1657e8] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#1657e8] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Link Rapidi</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/consulenze"
                  className="hover:text-white transition-colors"
                >
                  Consulenze
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contabilita"
                  className="hover:text-white transition-colors"
                >
                  Contabilità
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contatti</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#1657e8]" />
                Via Giuseppe Simili, 63, 95129 Catania CT
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1657e8]" />
                +39 095 535 298
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1657e8]" />
                studi.greco@gmail.com
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-6">Dove siamo</h4>
            <div className="rounded-3xl overflow-hidden border border-gray-800 aspect-square relative group shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.675005886616!2d15.093719476451233!3d37.5147695481955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzUzLjIiTiAxNcKwMDUnNDYuNyJF!5e0!3m2!1sit!2sit!4v1740000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Fisco3 Catania"
                className="transition-all duration-500"
              />
            </div>
            <p className="text-xs text-gray-500 italic">
              Vieni a trovarci nel cuore di Catania.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2024 Fisco3 - Studio Associato Commercialisti. Tutti i diritti
            riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
