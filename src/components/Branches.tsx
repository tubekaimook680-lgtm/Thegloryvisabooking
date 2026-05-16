import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

const BRANCHES = [
  {
    city: 'กรุงเทพมหานคร',
    name: 'สำนักงานใหญ่ (ประเวศ)',
    address: '64/29 แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250',
    phone: '08x-xxx-xxxx',
    hours: 'จันทร์ - ศุกร์: 09:00 - 18:00',
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/bangkok.png'
  },
  {
    city: 'เชียงใหม่',
    name: 'สาขาเชียงใหม่',
    address: 'ย่านนิมมานเหมินท์ อ.เมือง จ.เชียงใหม่',
    phone: '08x-xxx-xxxx',
    hours: 'จันทร์ - ศุกร์: 09:00 - 18:00',
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/chiang-mai.png'
  },
  {
    city: 'พัทยา',
    name: 'สาขาพัทยา',
    address: 'ถนนเลียบชายหาด อ.บางละมุง จ.ชลบุรี',
    phone: '08x-xxx-xxxx',
    hours: 'จันทร์ - ศุกร์: 09:00 - 18:00',
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/pattaya.png'
  }
];

export default function Branches() {
  return (
    <section className="py-24 px-8 bg-white" id="branches">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4"
          >
            Our Locations
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            ครอบคลุม <span className="text-blue-600">3 สาขาหลัก</span> <br/>
            พร้อมให้บริการคุณทั่วประเทศ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANCHES.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={branch.image} 
                  alt={branch.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{branch.city}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{branch.name}</h3>
                </div>
                
                <div className="space-y-4 text-slate-600 font-medium text-sm">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-blue-500 shrink-0" />
                    <p>{branch.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={18} className="text-blue-500 shrink-0" />
                    <p>{branch.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-blue-500 shrink-0" />
                    <p>{branch.hours}</p>
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
