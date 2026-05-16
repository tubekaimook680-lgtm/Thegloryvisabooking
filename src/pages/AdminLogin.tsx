import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { LogIn, ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200 md:p-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-200 mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Admin Access</h1>
          <p className="mt-2 text-slate-500 font-bold text-xs uppercase tracking-widest opacity-50">Authorized personnel only</p>
        </div>

        {error && (
          <div className="mt-8 rounded-xl bg-red-50 p-4 text-center text-sm font-bold text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <div className="mt-10">
          <button
            onClick={handleLogin}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-black text-white transition-all hover:bg-blue-700 shadow-xl shadow-blue-100"
          >
            <LogIn size={20} />
            LOGIN WITH GOOGLE
          </button>
        </div>
        
        <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
          Powered by iBookingMaster Infrastructure
        </p>
      </div>
    </div>
  );
}
