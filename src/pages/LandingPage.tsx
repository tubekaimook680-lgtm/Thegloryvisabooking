import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceBanner from '../components/ServiceBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Promotions from '../components/Promotions';
import ServicesSection from '../components/ServicesSection';
import BookingShowcase from '../components/BookingShowcase';
import CompanyCert from '../components/CompanyCert';
import Branches from '../components/Branches';
import VideoReviews from '../components/VideoReviews';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ChatWidget from '../components/ChatWidget';
import { useSettings } from '../lib/useSettings';

export default function LandingPage() {
  const { settings } = useSettings();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-600">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <BookingShowcase />
        <ServiceBanner />
        <WhyChooseUs />
        <Promotions />
        <CompanyCert />
        <Branches />
        <VideoReviews />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Widgets */}
      <ChatWidget />
      
      <a
        href={settings.lineUrl || `https://line.me/ti/p/${settings.lineId?.replace('@', '') || ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-[#06C755] px-6 py-4 text-white shadow-2xl transition-all hover:scale-105 active:scale-95 group"
      >
        <img src="https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/LINE_New_App_Icon_2020-12.png" alt="Line" className="h-6 w-6" />
        <span className="font-black text-sm whitespace-nowrap">ปรึกษาเราฟรี!</span>
      </a>
    </div>
  );
}
