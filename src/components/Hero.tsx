import { useState, useEffect } from 'react';
import { Plane, Hotel, Search, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';
import { useSettings } from '../lib/useSettings';

const DEFAULT_SLIDES = [
  {
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/e03c14c4-819e-4804-8f09-214653cf66e1.png',
    title: 'Global Destinations',
    accent: 'เปิดโลกกว้างกับเรา'
  },
  {
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/f79e6b85-f29d-4b19-83f9-5baf7053dac9.png',
    title: 'World-Class Resorts',
    accent: 'พักผ่อนอย่างเหนือระดับ'
  },
  {
    image: 'https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/c7d75c6b-d22f-4c97-95b2-4df92a56ce11.png',
    title: 'Expert Travel Agency',
    accent: 'เดินทางอุ่นใจ'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<any[]>(DEFAULT_SLIDES);
  const { settings } = useSettings();

  useEffect(() => {
    const q = query(collection(db, 'slides'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setSlides(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        setSlides(DEFAULT_SLIDES);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (slides.length === 0) return null;

  return (
    <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.8, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 w-full text-left flex flex-col md:flex-row items-center gap-12">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-blue-300 border border-blue-500/30 backdrop-blur-md">
            🌏 {slides[currentSlide].title}
          </span>
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl drop-shadow-2xl">
            {slides[currentSlide].accent} <br/><span className="text-blue-400">ไปกับผู้เชี่ยวชาญตัวจริง</span>
          </h1>
          <p className="mt-6 text-lg font-medium text-blue-100 max-w-xl leading-relaxed opacity-90 drop-shadow-lg">
             บางครั้ง “ตั๋วที่ถูกที่สุด” อาจไม่ใช่ “ตั๋วที่เหมาะที่สุด” <br/>
             ให้ทีมงานช่วยดูแลคุณตั้งแต่เริ่มต้นจนถึงวันเดินทาง
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-white text-blue-900 font-black rounded-xl shadow-2xl transition-all hover:bg-blue-50 hover:translate-y-[-2px]">
              เช็กราคาฟรี
            </button>
            <a 
              href={settings.lineUrl || `https://line.me/ti/p/${settings.lineId.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 text-white font-black rounded-xl shadow-2xl transition-all hover:bg-blue-700 hover:translate-y-[-2px] flex items-center gap-2"
            >
              ปรึกษาเราฟรี!
            </a>
          </div>
        </motion.div>

        {/* Featured Promo Card - Stays Static or Dynamic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden w-full max-w-sm rounded-[32px] bg-white/10 p-8 backdrop-blur-xl border border-white/20 lg:block"
        >
          <div className="text-[10px] uppercase tracking-widest mb-2 opacity-50 text-white font-black text-center">Featured Offer</div>
          <div className="text-3xl font-black text-white mb-1 text-center">Swiss Alps</div>
          <div className="text-lg font-bold text-blue-400 mb-6 text-center">Starts 45,XXX.-</div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-base font-bold text-white/80">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                ช่วยเลือกไฟลท์สำหรับยื่นวีซ่า
             </div>
             <div className="flex items-center gap-3 text-base font-bold text-white/80">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                จองโรงแรม ประกันเดินทาง
             </div>
             <div className="flex items-center gap-3 text-base font-bold text-white/80">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                ดูแลตลอด 24 ชั่วโมง
             </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between px-4 -translate-y-1/2 hidden md:flex">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={cn(
              "h-1 transition-all rounded-full",
              currentSlide === idx ? "w-8 bg-blue-400" : "w-2 bg-white/30"
            )}
          />
        ))}
      </div>
    </section>
  );
}
