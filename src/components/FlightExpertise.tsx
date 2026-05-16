import { motion } from 'motion/react';
import { 
  MessageSquareText, 
  Map, 
  CalendarCheck, 
  ClipboardCheck, 
  ShieldAlert, 
  Headphones, 
  RefreshCw, 
  Globe, 
  Luggage, 
  Route, 
  Briefcase, 
  UserPlus, 
  CheckCheck
} from 'lucide-react';

const expertPoints = [
  {
    title: 'เจ้าหน้าที่คนไทย Speak Thai',
    desc: 'พูดคุยง่าย เข้าใจทุกความต้องการและขั้นตอนการเดินทาง',
    icon: MessageSquareText,
  },
  {
    title: 'แผนการเดินทางฟรี',
    desc: 'ช่วยจัดเตรียมแผนการเดินทางให้ พร้อมแนะนำเส้นทางและไฟลท์ที่เหมาะสมที่สุด',
    icon: Map,
  },
  {
    title: 'ออกตั๋วขากลับล่วงหน้า',
    desc: 'สำหรับลูกค้าที่ยังไม่กำหนดวันกลับแน่นอน เพื่อใช้ประกอบการเข้าเมืองหรือวีซ่า',
    icon: CalendarCheck,
  },
  {
    title: 'ตรวจสอบความถูกต้อง',
    desc: 'ชื่อ นามสกุล และรายละเอียดก่อนออกตั๋วอย่างถูกต้อง 100%',
    icon: ClipboardCheck,
  },
  {
    title: 'ลดความเสี่ยงการจองผิด',
    desc: 'ป้องกันปัญหาจากการจองผิดพลาดที่อาจทำให้เกิดหนี้สูญหรือเสียสิทธิ์เดินทาง',
    icon: ShieldAlert,
  },
  {
    title: 'Support ตลอด 24 ชม.',
    desc: 'มีเจ้าหน้าที่สแตนด์บายดูแลทุกปัญหาของคุณตลอดวันและคืน',
    icon: Headphones,
  },
  {
    title: 'ประสานงานกรณีมีปัญหา',
    desc: 'ช่วยประสานงานเมื่อเลื่อนไฟลท์ เปลี่ยนแผน หรือเที่ยวบินถูกยกเลิก',
    icon: RefreshCw,
  },
  {
    title: 'ติดต่อได้จากทุกที่',
    desc: 'อยู่ต่างประเทศก็ติดต่อทีมงานได้สะดวกผ่าน LINE และช่องทางออนไลน์',
    icon: Globe,
  },
  {
    title: 'เช็คเงื่อนไขสัมภาระ',
    desc: 'ดูแลเงื่อนไขกระเป๋า โหลดสัมภาระ และการ Transit ระหว่างประเทศอย่างละเอียด',
    icon: Luggage,
  },
  {
    title: 'คำแนะนำการต่อเครื่อง',
    desc: 'ให้คำแนะนำเรื่องเส้นทางและการเชื่อมต่อไฟลท์ให้ลื่นไหลที่สุด',
    icon: Route,
  },
  {
    title: 'บริการครบวงจร (One-Stop)',
    desc: 'รองรับทั้งตั๋วเครื่องบิน โรงแรม และบริการด้านวีซ่าในที่เดียวจบ',
    icon: Briefcase,
  },
  {
    title: 'ผู้ช่วยส่วนตัว (Personal)',
    desc: 'ใส่ใจทุกขั้นตอนเหมือนมีผู้ช่วยส่วนตัวในการเดินทางตลอดทริป',
    icon: UserPlus,
  }
];

export default function FlightExpertise() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-24 self-start pt-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-500 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">
                Expert Consultation
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                <span className="xl:whitespace-nowrap">ทำไมลูกค้าหลายคน</span> <br /> 
                เลือกให้เราดูแล <br/>
                <span className="text-blue-500">เรื่องตั๋วเครื่องบิน</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  เพราะการเดินทางต่างประเทศ ไม่ใช่แค่เรื่องของ <br />
                  <span className="text-white font-bold italic underline decoration-blue-500">"ราคาตั๋ว"</span> <br />
                  แต่คือความสะดวก ความถูกต้อง และการมีคนคอยดูแลเมื่อเกิดปัญหา
                </p>
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCheck className="text-blue-500" size={32} />
                  <h4 className="text-xl font-bold text-white">เพราะเราเชื่อว่า...</h4>
                </div>
                <p className="text-lg text-blue-100 font-medium italic">
                  “การเดินทางที่ดี ไม่ใช่แค่จองตั๋วได้ แต่ต้องมีคนดูแลคุณตลอดการเดินทาง”
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10"
              >
                <img 
                  src="https://aircargoweek.com/wp-content/uploads/2015/06/IATA_Logo.svg_-768x494.png.webp" 
                  alt="IATA Accredited Agent"
                  className="h-10 w-auto object-contain brightness-0 invert" 
                />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">IATA Accredited Agent</p>
                  <p className="text-sm font-bold text-slate-300 leading-snug">ตัวแทนจำหน่ายตั๋วเครื่องบิน <br/> มาตรฐานสากล</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <point.icon size={24} />
                </div>
                <h3 className="text-xl font-black mb-2 text-white">{point.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
