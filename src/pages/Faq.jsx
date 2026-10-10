import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleQuestionMark, Minus, Plus } from "lucide-react";
import { FAQ_ITEMS } from "../data/faq.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1657e8] px-4 py-2 rounded-full font-bold text-sm">
              <CircleQuestionMark size={18} /> Centro Assistenza
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Domande <span className="text-[#1657e8]">Frequenti</span>
            </h1>
            <p className="text-lg text-gray-600">
              Tutto quello che devi sapere sulla gestione fiscale e contabile
              con Fisco3.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors ${
                      isOpen ? "bg-blue-50" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg font-bold text-gray-900 pr-8">
                      {item.question}
                    </span>
                    <div
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="text-[#1657e8]" />
                      ) : (
                        <Plus className="text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 md:p-8 pt-0 bg-blue-50 text-gray-600 text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] text-center space-y-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900">
              Hai altre domande?
            </h3>
            <p className="text-gray-600">
              Siamo a tua disposizione per chiarire ogni dubbio.
            </p>
            <Link
              to="/consulenze"
              className="inline-block bg-[#1657e8] text-white px-10 py-4 rounded-2xl font-bold transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
            >
              Scrivici ora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
