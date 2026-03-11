import React from 'react';
import { LayoutDashboard, BookOpen, MessageSquare, TrendingUp, Settings, LogOut, ChevronRight } from 'lucide-react';
import { courses } from '../data/courses';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] border-r border-gray-800 hidden lg:flex flex-col">
        <div className="p-8">
           <div className="flex items-center gap-2">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/logo-0a93bce9-1773229492677.webp" alt="Logo" className="h-8" />
            <span className="text-[#D4AF37] font-bold text-lg">FAMU FX</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: 'Overview', active: true },
            { icon: BookOpen, label: 'My Courses' },
            { icon: TrendingUp, label: 'Market Analysis' },
            { icon: MessageSquare, label: 'Community' },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto pt-24 lg:pt-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Student!</h1>
            <p className="text-gray-400">Track your progress and continue your trading journey.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
              <span className="text-gray-400 text-sm block mb-1">Courses Completed</span>
              <span className="text-3xl font-bold text-white">2 / 5</span>
              <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] w-[40%]" />
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
              <span className="text-gray-400 text-sm block mb-1">Total Study Time</span>
              <span className="text-3xl font-bold text-white">12.5 hrs</span>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
              <span className="text-gray-400 text-sm block mb-1">Quiz Average</span>
              <span className="text-3xl font-bold text-white">92%</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Current Courses</h2>
          <div className="space-y-4">
            {courses.slice(0, 2).map((course) => (
              <div key={course.id} className="bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 flex items-center gap-6">
                <img src={course.image} alt={course.title} className="w-24 h-24 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">{course.lessons.length} Lessons</span>
                    <span className="text-[#D4AF37] text-sm font-medium">80% Complete</span>
                  </div>
                </div>
                <button className="bg-[#1E3A8A] text-white p-3 rounded-full hover:bg-blue-700 transition-all">
                  <ChevronRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;