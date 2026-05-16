import { Play } from 'lucide-react';
import { motion } from 'motion/react';

const VIDEOS = [
  { id: '1', videoId: 'icaY45fJ0L4', title: 'Happy Customer Review 1' },
  { id: '2', videoId: 'dW1EYzNOUDI', title: 'Happy Customer Review 2' },
  { id: '3', videoId: 'Gl5oPls7N0k', title: 'Happy Customer Review 3' },
  { id: '4', videoId: 'ErSDnhTglNw', title: 'Happy Customer Review 4' },
];

export default function VideoReviews() {
  return (
    <section className="py-24 px-8 bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400"
          >
            Video Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4"
          >
            รีวิวความประทับใจจากลูกค้าจริง
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[9/16] rounded-[32px] overflow-hidden bg-slate-800 border border-white/10"
            >
              {/* Note: In a real app, you would use actual YouTube IDs from your shorts */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=0&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none group-hover:from-slate-900/40 transition-all" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                   <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Play size={14} fill="currentColor" />
                   </div>
                   {video.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
            href="https://www.youtube.com/@TheGloryWorldVisa/shorts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl font-black text-base border border-white/20 hover:bg-white/20 transition-all"
           >
             VIEW MORE ON YOUTUBE
           </a>
        </div>
      </div>
    </section>
  );
}
