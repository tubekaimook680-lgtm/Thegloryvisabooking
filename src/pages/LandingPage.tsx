import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceBanner from '../components/ServiceBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Promotions from '../components/Promotions';
import ServicesSection from '../components/ServicesSection';
import CompanyCert from '../components/CompanyCert';
import Branches from '../components/Branches';
import VideoReviews from '../components/VideoReviews';
import Testimonials from '../components/Testimonials';
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
        <ServiceBanner />
        <WhyChooseUs />
        <Promotions />
        <CompanyCert />
        <Branches />
        <VideoReviews />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Widgets */}
      <ChatWidget />
      
      <a
        href={settings.lineUrl || "https://line.me"}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="Line" className="h-10 w-10 invert brightness-0" />
      </a>
    </div>
  );
}
