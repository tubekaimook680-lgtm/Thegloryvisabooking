import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { promos } from '../data/promos';

export default function Promotions() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(promos.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const next = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleItems = promos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="promotions" className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4">World Destinations</span>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">เส้นทางยอดนิยม & โปรโมชั่น</h2>
            <p className="mt-4 text-slate-500 md:text-lg">Special offers for your next dream destination.</p>
          </div>
          <div className="flex gap-4">
             <button 
                onClick={prev}
                className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all"
              >
                <ChevronRight size={20} />
              </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[450px]">
          <AnimatePresence mode="wait">
            {visibleItems.map((promo, idx) => (
              <motion.div
                key={`${currentPage}-${promo.city}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src={promo.img}
                    alt={promo.city}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {promo.tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-white">{promo.city}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
           {[...Array(totalPages)].map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentPage(i)}
               className={`h-1.5 transition-all rounded-full ${currentPage === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
