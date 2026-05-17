import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceBanner from '../components/ServiceBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Promotions from '../components/Promotions';
import ServicesSection from '../components/ServicesSection';
import BookingShowcase from '../components/BookingShowcase';
import FlightExpertise from '../components/FlightExpertise';
import CompanyCert from '../components/CompanyCert';
import Branches from '../components/Branches';
import VideoReviews from '../components/VideoReviews';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
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
        <FlightExpertise />
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
      
      <a
        href={settings.lineUrl || `https://line.me/ti/p/${settings.lineId?.replace('@', '') || ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-white p-1.5 sm:pr-4 text-[#06C755] shadow-2xl border border-[#06C755]/10 transition-all hover:scale-105 active:scale-95 group"
      >
        <img src="https://thegloryworldvisatravel.com/wp-content/uploads/2026/05/line-app-logo-line-app-logo-transparent-line-app-icon-transparent-free-free-png.webp" alt="Line" className="h-8 w-8" />
        <span className="hidden sm:block font-black text-xs whitespace-nowrap">ปรึกษาฟรี!</span>
      </a>
    </div>
  );
}
