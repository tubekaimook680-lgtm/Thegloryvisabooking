import { motion } from 'motion/react';
import { ShieldCheck, Award } from 'lucide-react';

export default function CompanyCert() {
  return (
    <section className="py-24 px-8 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4"
              >
                Verification & Trust
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                มั่นใจด้วยการจดทะเบียนนิติบุคคล <br/>
                <span className="text-blue-600">ถูกต้องตามกฎหมาย</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              เดอะ กลอรี่ เวิลด์ วีซ่า แอนด์ แทรเวล จดทะเบียนในรูปแบบบริษัทจำกัด มีสถานะตัวตนชัดเจน 
              ตรวจสอบได้ พร้อมให้การดูแลทุกท่านด้วยความซื่อสัตย์และเป็นมืออาชีพสูงสุด
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ShieldCheck size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 uppercase">จดทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.20)</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">ดำเนิกิจการโปร่งใส เสียภาษีถูกต้องตามระเบียบของกรมสรรพากร</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Award size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 uppercase">ใบอนุญาตประกอบธุรกิจนำเที่ยว</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">ได้รับความไว้วางใจและผ่านการตรวจสอบมาตรฐานการให้บริการ</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[48px] blur-2xl group-hover:bg-blue-600/20 transition-all duration-500" />
            <div className="relative bg-white p-4 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
              <img 
                src="https://thegloryworldvisatravel.com/wp-content/uploads/2025/06/%E0%B8%A0%E0%B8%9E.20-%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3_0.jpg" 
                alt="ภ.พ.20 Company Registration Certificate" 
                className="w-full h-auto rounded-[32px] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
