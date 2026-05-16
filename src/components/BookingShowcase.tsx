import { motion } from 'motion/react';
import { Plane, Hotel, ChevronRight, Globe2 } from 'lucide-react';
import { useSettings } from '../lib/useSettings';

export default function BookingShowcase() {
  const { settings } = useSettings();
  const lineLink = settings.lineUrl || `https://line.me/ti/p/${settings.lineId?.replace('@', '') || ''}`;
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] inline-block mb-4"
          >
            Premium Booking Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            บริการจองระดับมืออาชีพ
          </motion.h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto">
            ไม่ได้มีแค่วีซ่า... เราดูแลทุกขั้นตอนการเดินทางให้คุณสะดวกสบายที่สุด
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Flight Booking Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[40px] overflow-hidden flex flex-col justify-end p-10"
          >
            <div className="absolute inset-0">
              <img 
                src="https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/e03c14c4-819e-4804-8f09-214653cf66e1.png" 
                alt="Global Flights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Plane size={24} />
                </div>
                <span className="text-white/80 font-black tracking-widest text-[10px] uppercase">Airline Reservation</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                รับจองตั๋วเครื่องบิน <br/> 
                <span className="text-blue-400">ทุกเส้นทางทั่วโลก</span>
              </h3>
              
              <p className="text-white/70 font-medium text-lg mb-8 max-w-md">
                เดินทางไปทุกที่ทั่วโลกด้วยตั๋วรราคาพิเศษ พร้อมบริการดูแลเส้นทางที่คุ้มค่าที่สุดสำหรับคุณ
              </p>
              
              <motion.a 
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: '1.5rem' }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm group-hover:bg-white group-hover:text-slate-900 transition-all inline-flex"
              >
                BOOK YOUR FLIGHT <ChevronRight size={18} />
              </motion.a>
            </div>
            
            {/* Decorative Globe Icon */}
            <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
               <Globe2 size={120} className="text-white animate-pulse" />
            </div>
          </motion.div>

          {/* Hotel Booking Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[40px] overflow-hidden flex flex-col justify-end p-10"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
                alt="Global Hotels"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <Hotel size={24} />
                </div>
                <span className="text-white/80 font-black tracking-widest text-[10px] uppercase">Hotel Booking</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                รับจองที่พักและโรงแรม <br/> 
                <span className="text-indigo-400">หรูหราทั่วทุกมุมโลก</span>
              </h3>
              
              <p className="text-white/70 font-medium text-lg mb-8 max-w-md">
                เราคัดสรรที่พักที่ดีที่สุดในราคาที่คุ้มค่า ตั้งแต่ระดับประหยัดไปจนถึงระดับ Luxury 5 ดาว
              </p>
              
              <motion.a 
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: '1.5rem' }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm group-hover:bg-white group-hover:text-slate-900 transition-all inline-flex"
              >
                FIND YOUR STAY <ChevronRight size={18} />
              </motion.a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="w-32 h-32 border-4 border-dashed border-white rounded-full animate-spin [animation-duration:10s]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
