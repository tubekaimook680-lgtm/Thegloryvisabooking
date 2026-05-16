import { Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useState } from 'react';
import { useSettings } from '../lib/useSettings';

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { settings } = useSettings();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contact_requests'), {
        ...data,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error adding contact request: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Contact Us</span>
            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              แอด LINE เพื่อให้เจ้าหน้าที่ <br />
              <span className="text-blue-600 tracking-tight">ช่วยเช็กราคาและวางแผนฟรี</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
              ทีมงานของเราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง ไม่ว่าจะเป็นการหาไฟลท์ ยื่นวีซ่า หรือแก้ปัญหาหน้างาน 
              เราดูแลคุณตั้งแต่เริ่มต้นจนถึงวันเดินทางกลับ
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <a
                href={settings.lineUrl || `https://line.me/ti/p/${settings.lineId.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 rounded-[32px] bg-blue-600 p-6 text-white shadow-2xl shadow-blue-200 transition-all hover:bg-blue-700 hover:translate-y-[-2px]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="Line" className="h-10 w-10 invert brightness-0" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight">LINE ID: {settings.lineId}</h4>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Add friend for free consultation</p>
                </div>
              </a>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col">
                  <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Phone Support</h5>
                  <p className="text-lg font-black text-slate-900 leading-none">{settings.phone}</p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col">
                  <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Email</h5>
                  <p className="text-lg font-black text-slate-900 leading-none">{settings.email}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200 md:p-12"
          >
            <h3 className="text-2xl font-black text-slate-900">ส่งคำขอเช็คราคา</h3>
            <p className="mt-2 text-sm text-slate-500">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับโดยเร็วที่สุด</p>

            {isSuccess ? (
              <div className="mt-10 rounded-2xl bg-green-50 p-6 text-center text-green-600">
                <p className="font-bold">ส่งข้อมูลสำเร็จ!</p>
                <p className="text-sm">เราจะรีบติดต่อกลับหาคุณโดยเร็วที่สุด</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Full Name</label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition-all focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Phone / Line ID</label>
                    <input
                      {...register('phone', { required: true })}
                      type="text"
                      placeholder="08X-XXX-XXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition-all focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">Message / Destination</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    placeholder="รายละเอียดเส้นทางที่คุณสนใจ..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition-all focus:border-blue-600 focus:bg-white"
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-black text-white transition-all hover:bg-blue-700 disabled:opacity-50 shadow-xl shadow-blue-100"
                >
                  {isSubmitting ? 'SENDING...' : (
                    <>
                      SEND REQUEST <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
