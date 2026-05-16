import { motion } from 'motion/react';
import { 
  Globe, 
  Search, 
  FileCheck, 
  Clock, 
  ShieldCheck, 
  PlaneTakeoff, 
  BookOpen, 
  Users 
} from 'lucide-react';
import { cn } from '../lib/utils';

const SERVICES = [
  {
    icon: Globe,
    title: 'Tourist & Business Visa',
    description: 'ปรึกษาและดำเนินการขอวีซ่าท่องเที่ยวและธุรกิจทั่วโลก ไม่ว่าจะเป็น USA, UK, Europe (Schengen), Australia และอื่นๆ',
    color: 'blue'
  },
  {
    icon: BookOpen,
    title: 'Student Visa',
    description: 'แนะแนวการศึกษาต่อต่างประเทศ พร้อมดูแลขั้นตอนการยื่นวีซ่านักเรียนอย่างครบวงจร ให้คุณโฟกัสกับการเรียนได้อย่างเต็มที่',
    color: 'indigo'
  },
  {
    icon: Users,
    title: 'Family & Spouse Visa',
    description: 'เชื่อมความสัมพันธ์ครอบครัวด้วยบริการวีซ่าคู่หมั้น วีซ่าติดตามครอบครัว และวีซ่าแต่งงาน ด้วยทีมงานที่เข้าใจทุกรายละเอียด',
    color: 'purple'
  },
  {
    icon: Search,
    title: 'Visa Consultation',
    description: 'วิเคราะห์โปรไฟล์ วางแผนการเตรียมเอกสาร และประเมินโอกาสการันตีความพร้อมก่อนยื่นจริง เพื่อลดความเสี่ยงในการถูกปฏิเสธ',
    color: 'cyan'
  },
  {
    icon: FileCheck,
    title: 'Document Prep',
    description: 'บริการแปลเอกสาร รับรองเอกสารกระทรวงต่างประเทศ (Legalization) และเตรียมแบบฟอร์มคำร้องอย่างถูกต้องแม่นยำ',
    color: 'teal'
  },
  {
    icon: Clock,
    title: 'Express Booking',
    description: 'จองคิวสัมภาษณ์ด่วน (หากมี) และช่วยอำนวยความสะดวกในการนัดหมายกับศูนย์รับคำร้องวีซ่าต่างๆ (VFS, TLS, etc.)',
    color: 'emerald'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description: 'บริการซื้อประกันการเดินทางที่ตรงตามข้อกำหนดของสถานทูต เพื่อความคุ้มครองสูงสุดและเป็นหลักประกันในการยื่นวีซ่า',
    color: 'rose'
  },
  {
    icon: PlaneTakeoff,
    title: 'Flight & Hotel Booking',
    description: 'บริการจองตั๋วเครื่องบินและโรงแรมเพื่อใช้ประกอบการยื่นวีซ่า โดยไม่ต้องชำระเงินจริงในบางกรณี เพื่อเซฟต้นทุนของคุณ',
    color: 'amber'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-8 bg-white selection:bg-blue-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4"
            >
              Our Solutions
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              บริการที่ครอบคลุม <br/>
              <span className="text-blue-600 whitespace-nowrap">เพื่อทุกการเดินทางของคุณ</span>
            </motion.h2 >
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-right"
          >
            <p className="text-slate-500 font-medium max-w-xs leading-relaxed italic">
              "เพราะทุกเคสมีความหมาย เราจึงใส่ใจ <br/> ในทุกรายละเอียดอย่างมืออาชีพ"
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className={cn(
                "w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                service.color === 'blue' && "bg-blue-50 text-blue-600",
                service.color === 'indigo' && "bg-indigo-50 text-indigo-600",
                service.color === 'purple' && "bg-purple-50 text-purple-600",
                service.color === 'cyan' && "bg-cyan-50 text-cyan-600",
                service.color === 'teal' && "bg-teal-50 text-teal-600",
                service.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                service.color === 'rose' && "bg-rose-50 text-rose-600",
                service.color === 'amber' && "bg-amber-50 text-amber-600",
              )}>
                <service.icon size={30} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-base font-medium text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-slate-900 rounded-[48px] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Globe size={150} className="text-white" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <h4 className="text-3xl font-black text-white">ต้องการปรึกษาเคสของคุณเป็นพิเศษ?</h4>
               <p className="text-blue-300 font-bold mt-2">ประเมินโอกาสผ่านวีซ่าฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</p>
            </div>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
            >
               CONTACT EXPERT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
