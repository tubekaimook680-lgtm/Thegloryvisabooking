import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "คุณวิภาวรรณ K.",
    role: "Tourist Visa (UK)",
    content: "บริการดีมากค่ะ ให้คำปรึกษาละเอียดทุกขั้นตอน เตรียมเอกสารได้เป๊ะมากจนผ่านได้ในครั้งเดียว แนะนำเลยค่ะสำหรับใครที่กังวลเรื่องวีซ่า",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณสมชาย S.",
    role: "Business Visa (USA)",
    content: "ประทับใจความรวดเร็วและความเป็นมืออาชีพครับ ทีมงานคอยอัปเดตสถานะตลอดเวลา ไม่ปล่อยให้เราต้องรอแบบไร้จุดหมาย",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณณิชา P.",
    role: "Student Visa (Australia)",
    content: "จากที่เครียดๆ เรื่องคอร์สเรียนและวีซ่า พี่ๆ ที่นี่ช่วยทำให้ทุกอย่างง่ายขึ้นเยอะเลยค่ะ เป็นกันเองและใส่ใจสุดๆ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Mr. David L.",
    role: "Retirement Visa",
    content: "Excellent service. They handled my complex situation with ease and great attention to detail. Very reliable company.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณอรพรรณ M.",
    role: "Schengen Visa",
    content: "ขอวีซ่าไปยุโรปครั้งแรกผ่านฉลุยค่ะ ขอบคุณคำแนะนำเรื่องการเตรียมบัญชีธนาคารและการจองโรงแรมที่มีประโยชน์มากๆ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-11506744038136-46273834b3fb?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณเกรียงไกร T.",
    role: "Work Permit",
    content: "เชี่ยวชาญเรื่องระเบียบราชการไทยและต่างประเทศมากครับ ช่วยลดขั้นตอนยุ่งยากไปได้เยอะ คุ้มค่ากับค่าบริการจริงๆ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณรพีพรรณ J.",
    role: "Fiancé Visa (USA)",
    content: "เคสยากๆ ที่อื่นบอกว่าไม่ผ่าน มาที่นี่ทีมงานสู้จนผ่านค่ะ ตื้นตันใจมาก ขอบคุณที่ทำให้ความฝันเป็นจริงนะคะ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Mr. Tanaka H.",
    role: "Elite Visa",
    content: "The most professional agency I have worked with in Thailand. Smooth process from start to finish.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "คุณนลินทิพย์ R.",
    role: "Family Visa (Canada)",
    content: "ประทับใจมากค่ะ ดำเนินการเรื่องวีซ่าครอบครัวได้ราบรื่นมาก ข้อมูลแน่น ปรึกษาได้ตลอดเวลาจริงๆ แนะนำเพื่อนต่อแน่นอนค่ะ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&auto=format&fit=crop"
  }
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const next = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleItems = TESTIMONIALS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-24 px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
         <Quote size={200} className="text-slate-900" />
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4">Customer Trust</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">เสียงตอบรับจาก <br/><span className="text-blue-600">พาร์ทเนอร์การเดินทาง</span> ของเรา</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={`${currentPage}-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FACC15" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic grow mb-10">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-black text-slate-900">{item.name}</h4>
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-wider">{item.role}</p>
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
