import { HeadphonesIcon, FileText, Languages, Clock, Map, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'มีทีมช่วยเหลือ',
    desc: 'Support team ready to assist',
    icon: HeadphonesIcon,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'คำปรึกษายื่นวีซ่า',
    desc: 'Visa consultation service',
    icon: FileText,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Support ภาษาไทย',
    desc: 'Native Thai language support',
    icon: Languages,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'ทีมคอยแก้ปัญหา 24 ชม.',
    desc: '24/7 Problem solving team',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'ออก Itinerary แผนการเดินทาง',
    desc: 'Professional itinerary planning',
    icon: Map,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'มีคนดูแลหลังการขาย',
    desc: 'Dedicated after-sales care',
    icon: UserCheck,
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function ServiceBanner() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">ดูแลคุณตลอดการเดินทาง</h2>
          <p className="mt-4 text-slate-500">ทีมงานคุณภาพคอย support คุณทุกขั้นตอนทั้งก่อนและหลังเดินทาง</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-slate-100 p-6 text-center transition-shadow hover:shadow-xl"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${service.color} shadow-sm border border-black/5`}>
                <service.icon size={26} />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">{service.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 font-bold">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
