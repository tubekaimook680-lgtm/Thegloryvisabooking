import { CheckCircle, Search, Percent, Layout, Scissors, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'ค้นหาไฟลท์ที่เหมาะที่สุด',
    desc: 'Finding the best flight options for your specific needs.',
    icon: Search,
  },
  {
    title: 'เปรียบเทียบสายการบิน',
    desc: 'Side-by-side comparison of airlines for the best value.',
    icon: Percent,
  },
  {
    title: 'จัดเส้นทางเดินทาง',
    desc: 'Optimal routing to save you time and hassle.',
    icon: Layout,
  },
  {
    title: 'ช่วยเลือกไฟลท์สำหรับยื่นวีซ่า',
    desc: 'Expert guidance on visa-compliant bookings.',
    icon: Scissors,
  },
  {
    title: 'จองโรงแรม ประกันเดินทาง',
    desc: 'Completing your travel package in one place.',
    icon: CheckCircle,
  },
  {
    title: 'ช่วยแก้ปัญหาก่อนบินและหลังบิน',
    desc: 'Proactive support at every stage of your journey.',
    icon: HelpCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="overflow-hidden bg-slate-50 py-24 text-slate-900 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl text-slate-900">
              ทำไมต้องจองกับเรา? <br />
              <span className="text-blue-600">พร้อมดูแลคุณตลอด 24 ชั่วโมง</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-slate-600">
              <p>📍 ไม่ต้องนั่งหาไฟลท์เองจนปวดหัว เราคัดสรรสิ่งที่ดีที่สุดให้คุณ</p>
              <p>📍 ไม่ต้องกังวลเรื่องการต่อเครื่อง หรือขั้นตอนการเตรียมตัวเดินทาง</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h4 className="flex items-center gap-2 font-black text-blue-600 mb-2 uppercase text-xs tracking-widest">
                  <CheckCircle size={16} /> เหมาะสำหรับ:
                </h4>
                <ul className="space-y-3 text-base font-bold text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> เที่ยวต่างประเทศแบบอุ่นใจ</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> เดินทางยกครอบครัวหรือกลุ่มใหญ่</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> นักเรียน / วีซ่า / ธุรกิจ</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-blue-600 p-6 shadow-xl shadow-blue-100 text-white">
                 <p className="italic text-base leading-relaxed font-bold">
                  "บางครั้ง ตั๋วที่ถูกที่สุด อาจไม่ใช่ ตั๋วที่เหมาะที่สุด"
                 </p>
                 <p className="mt-4 font-black">ให้ทีมงานช่วยดูแลคุณ</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {benefits.map((benefit, i) => (
              <div key={benefit.title} className="group relative overflow-hidden rounded-2xl bg-white p-5 transition-all hover:shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold transition-transform group-hover:scale-110">
                  <benefit.icon size={24} />
                </div>
                <div>
                   <h3 className="text-base font-black text-slate-900">{benefit.title}</h3>
                   <p className="text-sm text-slate-500 leading-tight mt-1">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
