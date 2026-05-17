import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useSettings } from '../lib/useSettings';

export default function Footer() {
  const { settings } = useSettings();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-black">The Glory World Visa</span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-500 italic">
              Professional travel agency with comprehensive support. 
              We believe the best flight is the one that fits your life perfectly.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-blue-600 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-blue-600 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-blue-600 hover:text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Website Menu</h4>
            <ul className="mt-6 space-y-4 text-base font-semibold text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600">Our Services</a></li>
              <li><a href="#promotions" className="hover:text-blue-600">Travel Packages</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Contact Us</h4>
            <ul className="mt-6 space-y-6 text-base font-semibold text-slate-500">
              <li className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-blue-600" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="shrink-0 text-blue-600" />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-blue-600" />
                <span>{settings.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Official Status</h4>
            <div className="mt-6 rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">TAT LICENSE</p>
              <p className="mt-1 text-lg font-black text-slate-900">{settings.tatNo}</p>
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex flex-col items-start gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Accredited Agent</span>
                <img 
                  src="https://aircargoweek.com/wp-content/uploads/2015/06/IATA_Logo.svg_-768x494.png.webp" 
                  alt="IATA Accredited" 
                  className="h-10 w-auto object-contain brightness-0 opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-100 pt-10 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 {settings.siteName}. All Rights Reserved. Professional Travel Agent.
          </p>
        </div>
      </div>
    </footer>
  );
}
