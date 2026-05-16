import { useState } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', text: 'ขออภัยค่ะ ระบบขัดข้องชั่วคราว กรุณาลองใหม่อีกครั้ง' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-900 p-6 text-white text-center">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  AI Travel Consultant
                </h4>
                <p className="text-[10px] opacity-60">iBookingMaster Intelligence</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-6 space-y-4">
              <div className="rounded-2xl bg-white p-4 text-xs font-medium text-slate-600 shadow-sm leading-relaxed">
                สวัสดีค่ะ! iBookingMaster AI พร้อมช่วยเหลือคุณในการวางแผนการเดินทาง เช็คไฟลท์ หรือสอบถามเรื่องวีซ่าได้เลยค่ะ 🙏
              </div>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'max-w-[85%] rounded-2xl p-4 text-xs font-semibold leading-relaxed shadow-sm',
                    m.role === 'user'
                      ? 'ml-auto bg-blue-600 text-white'
                      : 'bg-white text-slate-700'
                  )}
                >
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400">
                  <Loader2 size={12} className="animate-spin" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">AI is thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="สอบถามข้อมูล..."
                  className="flex-1 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-900 outline-none transition-all focus:bg-white focus:ring-1 focus:ring-blue-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="rounded-xl bg-blue-600 p-3 text-white transition-all hover:bg-blue-700 disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <MessageSquare size={32} />
      </button>
    </div>
  );
}
