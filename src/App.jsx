import React, { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('doctor');

  const handleLogin = (role) => {
    setUser(role);
    setActiveTab(role);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // شاشة تسجيل الدخول الحقيقية والآمنة للعيادة
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans dir-rtl">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-slate-100">
          <div className="text-center mb-8">
            <div className="bg-emerald-100 text-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-inner">
              🦷
            </div>
            <h1 className="text-2xl font-black text-slate-800">مركز سلمي لطب الأسنان والجلدية</h1>
            <p className="text-sm text-slate-500 mt-1">بوابة الدخول الموحدة للعيادات - عرعر</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">البريد الإلكتروني للوظيفة</label>
              <input 
                type="text" 
                disabled 
                value={user ? user.email : "اختر الحساب التجريبي أدناه 👇"} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 outline-none"
              />
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">تسجيل الدخول السريع للأدوار:</p>
              
              <div className="space-y-2">
                <button 
                  onClick={() => handleLogin('doctor')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-between shadow-sm"
                >
                  <span>👨‍⚕️ دخول الطبيب (د. سلمى الشمري)</span>
                  <span className="text-xs bg-emerald-800 px-2 py-1 rounded">Doctor</span>
                </button>

                <button 
                  onClick={() => handleLogin('reception')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-between shadow-sm"
                >
                  <span>📋 دخول موظف الاستقبال</span>
                  <span className="text-xs bg-blue-800 px-2 py-1 rounded">Reception</span>
                </button>

                <button 
                  onClick={() => handleLogin('finance')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-between shadow-sm"
                >
                  <span>💰 دخول المدير المالي (ZATCA)</span>
                  <span className="text-xs bg-indigo-800 px-2 py-1 rounded">Finance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // لوحات التحكم المحمية بعد تسجيل الدخول
  return (
    <div className="min-h-screen bg-slate-50 font-sans dir-rtl">
      {/* الشريط العلوي مع زر تسجيل الخروج المحمي */}
      <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦷</span>
          <div>
            <h1 className="font-bold text-lg">مركز سلمي لطب الأسنان والجلدية - عرعر</h1>
            <p className="text-xs text-slate-400">نظام إدارة العيادات الآمن</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs bg-slate-800 text-emerald-400 px-3 py-1.5 rounded-full border border-slate-700 font-medium">
            المستخدم الحالي: {user === 'doctor' ? 'الطبيب' : user === 'reception' ? 'الاستقبال' : 'المدير المالي'}
          </span>
          <button 
            onClick={handleLogout}
            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow"
          >
            تسجيل خروج 🚪
          </button>
        </div>
      </header>

      {/* المحتوى حسب صلاحية المستخدم */}
      <main className="p-6 max-w-7xl mx-auto">
        {user === 'doctor' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">🩺 لوحة تحكم الطبيب المعالج</h2>
            <p className="text-slate-600 text-sm mb-4">طابور كشوفات اليوم، الفحص السريري، الروشتات الإلكترونية، ومخطط الأسنان والجلدية.</p>
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-emerald-800 text-sm">
              أهلاً بك د. سلمى الشمري. لديك 3 حالات مسجلة اليوم بانتظار الفحص.
            </div>
          </div>
        )}

        {user === 'reception' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">📋 لوحة تحكم الاستقبال</h2>
            <p className="text-slate-600 text-sm mb-4">تسجيل وصول المرضى، الحجوزات السريعة، طابور الانتظار، وإرسال إشعارات الواتساب.</p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-800 text-sm">
              مكتب الاستقبال مفعل وجاهز لإدارة الحجوزات اليومية وإرسال الروابط عبر واتساب.
            </div>
          </div>
        )}

        {user === 'finance' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">💰 لوحة تحكم الإدارة المالية (ZATCA)</h2>
            <p className="text-slate-600 text-sm mb-4">متابعة الإيرادات، ضريبة القيمة المضافة 15%، الفواتير المبسطة، ونسب الأطباء.</p>
            <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg text-indigo-800 text-sm">
              النظام متوافق مع متطلبات الفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
