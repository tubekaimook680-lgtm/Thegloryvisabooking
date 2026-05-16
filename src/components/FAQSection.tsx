import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useSettings } from '../lib/useSettings';

const FAQS = [
  {
    question: "บริการทำวีซ่าครอบคลุมประเทศไหนบ้าง?",
    answer: "เราให้บริการทำวีซ่าครอบคลุมทั่วโลกครับ ทั้งโซนยุโรป (Schengen), อเมริกา, แคนาดา, อังกฤษ, ออสเตรเลีย, นิวซีแลนด์ รวมถึงประเทศในเอเชียที่ต้องขอวีซ่า เช่น จีน อินเดีย และญี่ปุ่น (สำหรับบางประเภท) โดยเรามีผู้เชี่ยวชาญเฉพาะทางในแต่ละภูมิภาค"
  },
  {
    question: "ใช้เวลานานแค่ไหนในการดำเนินการขอวีซ่า?",
    answer: "ระยะเวลาขึ้นอยู่กับประเทศที่ยื่นและคิวของสถานทูตครับ โดยปกติขั้นตอนการเตรียมเอกสารกับเราจะใช้เวลา 3-5 วันทำการ และเมื่อยื่นเข้าสถานทูตแล้ว จะใช้เวลาพิจารณาประมาณ 7-15 วันทำการ ทั้งนี้เราแนะนำให้เริ่มดำเนินการล่วงหน้าอย่างน้อย 1-2 เดือนก่อนเดินทาง"
  },
  {
    question: "กรณีวีซ่าไม่ผ่าน มีนโยบายคืนเงินหรือไม่?",
    answer: "ค่าธรรมเนียมสถานทูตและค่าบริการดำเนินการจะไม่สามารถเรียกคืนได้เมื่อมีการยื่นเอกสารแล้ว อย่างไรก็ตาม หากวิเคราะห์แล้วว่าโอกาสผ่านน้อย เราจะแจ้งให้ทราบตรงๆ ก่อนรับงานเพื่อลดความเสี่ยงของคุณลูกค้า หรือแนะนำแนวทางที่ถูกต้องเพื่อเพิ่มโอกาสผ่านให้มากที่สุด"
  },
  {
    question: "ต้องเตรียมเอกสารส่วนตัวอะไรบ้างในการเริ่มขอวีซ่า?",
    answer: "เอกสารพื้นฐานคือ พาสปอร์ต (อายุเหลือมากกว่า 6 เดือน), รูปถ่าย, หลักฐานการเงิน (Statement), และหลักฐานการทำงานครับ ส่วนเอกสารเฉพาะทางอื่นๆ ทีมงานของเราจะจัดส่ง Checklist แบบละเอียดที่ปรับให้เข้ากับโปรไฟล์ส่วนตัวของคุณลูกค้าหลังจากตอบตกลงรับบริการ"
  },
  {
    question: "มีบริการจองตั๋วเครื่องบินและที่พักเพื่อประกอบการยื่นวีซ่าไหม?",
    answer: "มีครับ! เรามีบริการจองตั๋วเครื่องบิน (Flight Reservation) และจองโรงแรม (Hotel Confirmation) ที่เป็นใบจองจริงเพื่อใช้ยื่นวีซ่าโดยเฉพาะ โดยที่คุณลูกค้ายังไม่ต้องชำระค่าตั๋วเต็มจำนวนในวันยื่น"
  },
  {
    question: "ทางบริษัทมีบริการแปลเอกสารให้ด้วยหรือไม่?",
    answer: "ใช่ครับ เรามีทีมงานแปลเอกสารราชการที่จำเป็นสำหรับการยื่นวีซ่าโดยเฉพาะ เช่น ทะเบียนบ้าน, ใบเปลี่ยนชื่อ, สูติบัตร พร้อมประทับตราจากบริษัทเพื่อรับรองคำแปลให้ถูกต้องตามมาตรฐานสถานทูต"
  },
  {
    question: "สามารถยื่นวีซ่าแบบเร่งด่วนได้ไหม?",
    answer: "ได้ในบางกรณีครับ ขึ้นอยู่กับนโยบายของแต่ละสถานทูตว่ามีบริการ 'Fast Track' หรือ 'Priority Service' หรือไม่ เราจะเช็คคิวที่เร็วที่สุดและแนะนำตัวเลือกที่เร็วที่สุดให้คุณลูกค้าเสมอเพื่อให้ทันกำหนดการเดินทาง"
  },
  {
    question: "บริษัทมีการจดทะเบียนถูกต้องตามกฎหมายหรือไม่?",
    answer: "The Glory World Visa Travel จดทะเบียนบริษัทและมีใบอนุญาตประกอบธุรกิจนำเที่ยวอย่างถูกต้องตามกฎหมาย คุณลูกค้าสามารถตรวจสอบเลขทะเบียนได้ และเรามีสำนักงานสาขาชัดเจนเพื่อความมั่นใจสูงสุด"
  },
  {
    question: "ถ้าไม่มีงานประจำ หรือประกอบอาชีพอิสระ สามารถขอวีซ่าได้ไหม?",
    answer: "ขอได้ครับ เรามีประสบการณ์ดูแลกลุ่ม Freelance, ค้าขายออนไลน์ หรือเจ้าของกิจการมามากมาย เราจะช่วยวางแผนการแสดงที่มาของรายได้และหลักฐานความผูกพันให้สถานทูตเชื่อมั่นในโปรไฟล์ของคุณ"
  },
  {
    question: "ช่องทางการชำระค่าบริการมีทางไหนบ้าง?",
    answer: "คุณลูกค้าสามารถชำระผ่านการโอนเงินเข้าบัญชีบริษัท, ชำระผ่านบัตรเครดิต (มีค่าธรรมเนียมตามที่ธนาคารกำหนด) หรือเข้ามาชำระด้วยเงินสดได้ที่สำนักงานทุกสาขาครับ โดยจะมีการออกใบเสร็จรับเงินให้ทุกครั้ง"
  }
];

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`border-b border-slate-100 last:border-0 transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left focus:outline-none"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-8 pb-8 text-slate-600 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { settings } = useSettings();

  return (
    <section id="faq" className="py-24 bg-slate-50/30">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
             <HelpCircle className="text-blue-600" size={24} />
             <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Questions & Answers</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            คำถามที่พบบ่อย
          </motion.h2>
          <p className="text-slate-500 font-medium text-lg">
            รวบรวมข้อสงสัยเบื้องต้น เพื่อช่วยให้คุณเริ่มต้นวางแผนการเดินทางได้อย่างมั่นใจ
          </p>
        </div>

        <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold mb-1">ยังคงมีข้อสงสัยเพิ่มเติม?</h4>
            <p className="text-blue-50/80">ทักแชทสอบถามพูดคุยกับผู้เชี่ยวชาญของเราได้ทันที ฟรี!</p>
          </div>
          <a 
            href={settings.lineUrl || `https://line.me/ti/p/${settings.lineId.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
          >
            ปรึกษาเราฟรี!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
