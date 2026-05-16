import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { 
  LayoutDashboard, 
  LogOut, 
  Plane, 
  Hotel, 
  Package, 
  Settings, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Edit, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ChevronRight,
  Menu,
  X,
  Globe,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

// --- Sub-components for each section ---

const SidebarItem = ({ icon: Icon, label, path, active }: any) => (
  <Link
    to={path}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
      active 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    )}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

const DashboardHome = ({ requests }: any) => {
  const stats = [
    { label: 'Pending Inquiries', count: requests.filter((r: any) => r.status === 'pending').length, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'In Progress', count: requests.filter((r: any) => r.status === 'contacted').length, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Closed Deals', count: requests.filter((r: any) => r.status === 'closed').length, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
             <div className={cn("inline-flex p-3 rounded-2xl mb-4", stat.bg, stat.color)}>
                <LayoutDashboard size={24} />
             </div>
             <div className="text-4xl font-black text-slate-900">{stat.count}</div>
             <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
           <h3 className="text-xl font-black text-slate-900">Recent Customer Inquiries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <th className="px-8 py-4">Customer</th>
                <th className="px-8 py-4">Contact</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {requests.slice(0, 5).map((req: any) => (
                <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">{req.name}</td>
                  <td className="px-8 py-6 text-sm text-slate-500">{req.phone}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      req.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                    )}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-slate-400">
                    {req.createdAt ? format(req.createdAt.toDate(), 'PP') : 'Today'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const GenericManager = ({ collectionName, columns, title, icon: Icon }: any) => {
  const [items, setItems] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, [collectionName]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, collectionName, editingId), { ...formData });
    } else {
      await addDoc(collection(db, collectionName), { ...formData, createdAt: new Date() });
    }
    setFormData({});
    setShowForm(false);
    setEditingId(null);
  };

  const handleEdit = (item: any) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this item?')) {
      await deleteDoc(doc(db, collectionName, id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
             <Icon size={24} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">{title}</h2>
        </div>
        {!showForm && (
          <button 
            onClick={() => { setShowForm(true); setEditingId(null); setFormData({}); }}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            <Plus size={18} /> ADD NEW
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[32px] border-2 border-dashed border-slate-200">
           <h3 className="text-lg font-black text-slate-900 mb-6">{editingId ? 'Edit' : 'Add New'} {title}</h3>
           <div className="grid grid-cols-2 gap-4">
              {columns.map((col: any) => (
                <div key={col.key}>
                   <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">{col.label}</label>
                   <input 
                     type="text" 
                     required
                     placeholder={col.label} 
                     value={formData[col.key] || ''}
                     onChange={e => setFormData({...formData, [col.key]: e.target.value})}
                     className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                   />
                </div>
              ))}
           </div>
           <div className="flex justify-end gap-3 pt-6 border-t border-slate-50 mt-6">
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 font-bold text-slate-400">Cancel</button>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-black text-sm">
                {editingId ? 'UPDATE RECORD' : 'SAVE RECORD'}
              </button>
           </div>
        </form>
      )}

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
         <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                {columns.map((col: any) => <th key={col.key} className="px-8 py-4">{col.label}</th>)}
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  {columns.map((col: any) => (
                    <td key={col.key} className="px-8 py-6 text-sm font-bold text-slate-900">
                      {item[col.key]}
                    </td>
                  ))}
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(item)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

const SettingsManager = () => {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'settings', 'site_config'), (snapshot) => {
      if (snapshot.exists()) {
        setFormData(snapshot.data());
      } else {
        setFormData({
          siteName: 'The Glory World Visa',
          siteAccent: 'Professional Visa Service',
          logoText: 'GV',
          phone: '08x-xxx-xxxx',
          lineId: '@gloryvisa',
          lineUrl: 'https://page.line.me/thegloryworldvisa',
          email: 'agency@gloryvisa.com',
          address: '64/29 แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250',
          tatNo: '11/11073'
        });
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateDoc(doc(db, 'settings', 'site_config'), formData);
    } catch (error) {
      const { setDoc } = await import('firebase/firestore');
      await setDoc(doc(db, 'settings', 'site_config'), formData);
    }
    setSaving(false);
    alert('Settings updated!');
  };

  if (loading) return <div>Loading settings...</div>;

  const fields = [
    { key: 'siteName', label: 'Website Name' },
    { key: 'siteAccent', label: 'Site Slogan' },
    { key: 'logoText', label: 'Logo Text' },
    { key: 'phone', label: 'Phone' },
    { key: 'lineId', label: 'Line ID' },
    { key: 'lineUrl', label: 'Line URL', fullWidth: true },
    { key: 'email', label: 'Email' },
    { key: 'tatNo', label: 'TAT Registry' },
    { key: 'address', label: 'Office Address', fullWidth: true },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center">
              <Settings size={32} />
           </div>
           <div>
              <h2 className="text-3xl font-black text-slate-900">System Settings</h2>
              <p className="text-slate-500 font-medium">Global agency configuration</p>
           </div>
        </div>

        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {fields.map(field => (
             <div key={field.key} className={cn("space-y-1", field.fullWidth && "md:col-span-2")}>
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{field.label}</label>
                {field.key === 'address' ? (
                  <textarea
                    value={formData[field.key] || ''}
                    onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 text-sm font-bold outline-none transition-all resize-none h-32"
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 text-sm font-bold outline-none transition-all"
                  />
                )}
             </div>
           ))}
           <div className="md:col-span-2 pt-6">
              <button 
                disabled={saving}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-50"
              >
                {saving ? 'UPDATING...' : 'SAVE SYSTEM CONFIGURATION'}
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

// --- Main Page Implementation ---

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/admin/login');
      }
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'contact_requests'), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      setRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  if (loading && !user) return <div className="flex h-screen items-center justify-center font-bold">Checking...</div>;

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { label: 'Flights', icon: Plane, path: '/admin/flights' },
    { label: 'Hotels', icon: Hotel, path: '/admin/hotels' },
    { label: 'Packages', icon: Package, path: '/admin/packages' },
    { label: 'Slides', icon: ImageIcon, path: '/admin/slides' },
    { label: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 transition-transform duration-300 lg:static lg:translate-x-0 overflow-y-auto",
        !isSidebarOpen && "-translate-x-full"
      )}>
        <div className="p-8">
           <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">iB</div>
              <span className="font-black text-xl uppercase tracking-tight">Admin<span className="text-blue-600">Portal</span></span>
           </div>

           <nav className="space-y-2">
              {menuItems.map((item) => (
                <SidebarItem 
                  key={item.label} 
                  {...item} 
                  active={location.pathname === item.path || (item.path === '/admin' && location.pathname === '/admin/')} 
                />
              ))}
           </nav>

           <div className="mt-20 pt-8 border-t border-slate-50 space-y-2">
              <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 font-bold text-sm hover:bg-slate-50 rounded-xl transition-all">
                <Globe size={18} /> Back to Website
              </Link>
              <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Logged in as</p>
                 <p className="text-sm font-bold text-slate-900 mt-2 truncate">{user?.email}</p>
              </div>
              <button onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-3 text-red-500 font-bold text-sm hover:bg-red-50 rounded-xl transition-all">
                <LogOut size={18} /> Logout
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
         <header className="h-16 bg-white border-b border-slate-50 flex items-center justify-between px-8 shrink-0">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-slate-400 hover:text-slate-900">
               <Menu size={24} />
            </button>
            <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest block lg:hidden">
               {menuItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}
            </div>
            <div className="hidden lg:block text-[11px] font-black text-slate-400 uppercase tracking-widest">
               Management System v2.0
            </div>
            <div className="flex items-center gap-4">
               <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Settings size={16} className="text-slate-400" />
               </div>
            </div>
         </header>

         <main className="flex-1 overflow-y-auto p-8 md:p-12">
            <Routes>
              <Route path="/" element={<DashboardHome requests={requests} />} />
              <Route path="/flights" element={
                <GenericManager 
                  title="Flight Management" 
                  collectionName="flight_bookings" 
                  icon={Plane}
                  columns={[
                    { key: 'customerName', label: 'Customer' },
                    { key: 'origin', label: 'From' },
                    { key: 'destination', label: 'To' },
                    { key: 'date', label: 'Travel Date' }
                  ]}
                />
              } />
              <Route path="/hotels" element={
                <GenericManager 
                  title="Hotel Management" 
                  collectionName="hotel_bookings" 
                  icon={Hotel}
                   columns={[
                    { key: 'customerName', label: 'Customer' },
                    { key: 'hotelName', label: 'Hotel Name' },
                    { key: 'checkIn', label: 'Check In' },
                    { key: 'checkOut', label: 'Check Out' }
                  ]}
                />
              } />
              <Route path="/packages" element={
                <GenericManager 
                  title="Travel Packages" 
                  collectionName="packages" 
                  icon={Package}
                  columns={[
                    { key: 'title', label: 'Title' },
                    { key: 'price', label: 'Price' },
                    { key: 'duration', label: 'Duration' }
                  ]}
                />
              } />
              <Route path="/slides" element={
                <GenericManager 
                  title="Hero Slides" 
                  collectionName="slides" 
                  icon={ImageIcon}
                  columns={[
                    { key: 'title', label: 'Title' },
                    { key: 'accent', label: 'Accent Text' },
                    { key: 'image', label: 'Image URL' },
                    { key: 'order', label: 'Order' }
                  ]}
                />
              } />
              <Route path="/settings" element={<SettingsManager />} />
            </Routes>
         </main>
      </div>
    </div>
  );
}
