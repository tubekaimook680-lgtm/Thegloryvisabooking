import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export interface SiteConfig {
  siteName: string;
  siteAccent: string;
  logoText: string;
  phone: string;
  lineId: string;
  lineUrl: string;
  email: string;
  address: string;
  tatNo: string;
}

export const defaultSettings: SiteConfig = {
  siteName: 'The Glory World Visa',
  siteAccent: 'Professional Visa Service',
  logoText: 'GV',
  phone: '08x-xxx-xxxx',
  lineId: '@gloryvisa',
  lineUrl: 'https://page.line.me/thegloryworldvisa',
  email: 'agency@gloryvisa.com',
  address: '64/29 แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250',
  tatNo: '11/11073'
};

export function useSettings() {
  const [settings, setSettings] = useState<SiteConfig>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'settings', 'site_config'), (snapshot) => {
      if (snapshot.exists()) {
        setSettings(snapshot.data() as SiteConfig);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  return { settings, loading };
}
