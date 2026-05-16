import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const promos = [
  {
    city: 'Tokyo, Japan',
    price: '18,XXX THB',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop',
    tags: ['Best Seller', 'Flight + Hotel'],
  },
  {
    city: 'Seoul, South Korea',
    price: '14,XXX THB',
    img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2130&auto=format&fit=crop',
    tags: ['Promotion', 'Visa Support'],
  },
  {
    city: 'London, UK',
    price: '32,XXX THB',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
    tags: ['Luxury', 'Student Deal'],
  },
  {
    city: 'Paris, France',
    price: '35,XXX THB',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    tags: ['Romantic', 'Free Itinerary'],
  },
];

export default function Promotions() {
  return (
    <section id="promotions" className="bg-white py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">เส้นทางยอดนิยม & โปรโมชั่น</h2>
            <p className="mt-4 text-slate-500 md:text-lg">Special offers for your next dream destination.</p>
          </div>
          <button className="flex items-center gap-2 font-black text-blue-600 transition-colors hover:text-blue-700 uppercase tracking-widest text-xs">
            VIEW ALL PROMOTIONS <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((promo, idx) => (
            <motion.div
              key={promo.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
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
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-base font-medium text-slate-300">Starts from</span>
                    <span className="text-xl font-black text-blue-400">{promo.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
