
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  MessageSquare,
  Settings,
  Home,
  Users,
  FileText,
  Briefcase,
  Calendar,
  ShieldCheck,
  Clipboard,
  Clock,
  AlertCircle,
  ChevronDown,
  Download,
  Upload,
  Bookmark,
  Mail,
  Award
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, LineChart, PieChart } from '@/components/charts/Charts';

const Index = () => {
  const [currentMonth, setCurrentMonth] = useState('September 2024');
  const [calendarView, setCalendarView] = useState('Month');
  
  const employeeInfo = {
    name: 'Employee Name',
    id: '253',
    code: '503F',
    position: 'Quality Assurance Specialist',
    entity: 'Board of Directors',
    schedule: 'ADGCC Flexi',
    email: 'kavitha@smartaj.ae',
    userId: 'admin',
    role: 'Admin',
    manager: 'Employee - 254',
    grade: '3A',
    joinDate: '27/11/2007'
  };
  
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-forcepro-lightgray pb-12">
      {/* Header */}
      <header className="bg-white border-b border-forcepro-gray shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-forcepro-darkblue font-bold text-xl">
              <span className="text-forcepro-green">F</span>orce Pro
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-forcepro-green/30 w-64 text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <MessageSquare className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                5
              </span>
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex items-center gap-2 ml-4">
              <div className="h-9 w-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
                EN
              </div>
              <div className="text-sm">
                <p className="font-medium">{employeeInfo.name}</p>
                <p className="text-xs text-gray-500">Last login: Today, 5:03:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-forcepro-gray">
        <div className="container mx-auto px-4">
          <ul className="flex items-center">
            <li>
              <a href="#" className="forcepro-nav-item">
                <Home className="h-4 w-4" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <Users className="h-4 w-4" /> Administration
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <FileText className="h-4 w-4" /> Definitions
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <Briefcase className="h-4 w-4" /> Employee
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <Calendar className="h-4 w-4" /> Daily Tasks
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item active">
                <Users className="h-4 w-4" /> Self Services
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <Clipboard className="h-4 w-4" /> Requests
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <FileText className="h-4 w-4" /> Reports
              </a>
            </li>
            <li>
              <a href="#" className="forcepro-nav-item">
                <ShieldCheck className="h-4 w-4" /> Security
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Main content */}
      <motion.main
        className="container mx-auto px-4 py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Page title */}
        <motion.div
          className="forcepro-card mb-6 flex items-center justify-between"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-forcepro-darkblue" />
            <h1 className="text-xl font-semibold">Employee Self Service</h1>
            <span className="bg-forcepro-green text-white text-xs px-2 py-1 rounded">Active</span>
          </div>
          <p className="text-sm text-gray-600">View and manage your attendance and time records</p>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button className="flex items-center gap-1 px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                01/12/2024
              </button>
            </div>
            
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button className="flex items-center gap-1 px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                31/12/2024
              </button>
            </div>
            
            <button className="forcepro-button forcepro-button-primary flex items-center gap-1">
              <Search className="h-4 w-4" />
              Retrieve
            </button>
            
            <button className="p-2 rounded border border-gray-200 hover:bg-gray-50">
              <Download className="h-4 w-4 text-gray-600" />
            </button>
            
            <button className="p-2 rounded border border-gray-200 hover:bg-gray-50">
              <Upload className="h-4 w-4 text-gray-600" />
            </button>
            
            <button className="p-2 rounded border border-gray-200 hover:bg-gray-50">
              <Bookmark className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </motion.div>
        
        {/* Time status section */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <motion.div 
            className="forcepro-card"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-md font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-forcepro-green" />
                Current Attendance Status
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forcepro-green text-white rounded-lg p-4 flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-full scale-150 translate-x-1/2 -translate-y-1/2"></div>
                <p className="text-sm mb-2 z-10">In Time</p>
                <h3 className="text-2xl font-bold z-10">21:06</h3>
                <p className="text-xs mt-2 z-10">05/02/2019</p>
              </div>
              
              <div className="bg-forcepro-red text-white rounded-lg p-4 flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-full scale-150 translate-x-1/2 -translate-y-1/2"></div>
                <p className="text-sm mb-2 z-10">Expected Out</p>
                <h3 className="text-2xl font-bold z-10">16:11</h3>
                <p className="text-xs mt-2 z-10">05/02/2019</p>
              </div>
              
              <div className="col-span-2 flex items-center justify-center py-3">
                <div className="flex flex-col items-center">
                  <Clock className="h-5 w-5 text-gray-400 mb-1" />
                  <p className="text-sm text-gray-500">Working</p>
                </div>
              </div>
              
              <div className="forcepro-stat-card bg-forcepro-red/90">
                <p className="text-3xl font-bold">0</p>
                <p className="text-xs">Total Absent</p>
              </div>
              
              <div className="forcepro-stat-card bg-forcepro-green/90">
                <p className="text-3xl font-bold">0</p>
                <p className="text-xs">Missing In</p>
              </div>
              
              <div className="forcepro-stat-card bg-forcepro-blue/90">
                <p className="text-3xl font-bold">2</p>
                <p className="text-xs">Missing Out</p>
              </div>
              
              <div className="forcepro-stat-card bg-forcepro-orange/90">
                <p className="text-3xl font-bold">0</p>
                <p className="text-xs">Incomplete Days</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="forcepro-card col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
                EN
              </div>
              
              <div>
                <h2 className="text-xl font-semibold">{employeeInfo.name}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-forcepro-green"></span>
                  {employeeInfo.id} · {employeeInfo.code}
                </p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-10">
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quality Assurance Specialist</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Schedule: {employeeInfo.schedule}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Entity: {employeeInfo.entity}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">User ID: {employeeInfo.userId}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 text-blue-500">{employeeInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Manager: {employeeInfo.manager}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role: {employeeInfo.role}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Award className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Grade: {employeeInfo.grade}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Join Date: {employeeInfo.joinDate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Charts and statistics */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <motion.div 
            className="forcepro-card"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-forcepro-green" />
                Last Time
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            
            <div className="h-48">
              <BarChart />
            </div>
          </motion.div>
          
          <motion.div 
            className="forcepro-card"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-forcepro-green" />
                Weekly Hours
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            
            <div className="h-48">
              <LineChart />
            </div>
          </motion.div>
          
          <motion.div 
            className="forcepro-card"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-forcepro-green" />
                Permission Balance
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Hours</span>
                  <span className="text-sm text-gray-500">40h total</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-inner bg-forcepro-green text-white text-xs flex items-center justify-center" style={{ width: '20%' }}>
                    8:00
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Remaining</span>
                  <span className="text-sm text-gray-500">60 total</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-inner bg-forcepro-green text-white text-xs flex items-center justify-center" style={{ width: '50%' }}>
                    30
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <PieChart />
            </div>
          </motion.div>
        </div>
        
        {/* Calendar section */}
        <motion.div 
          className="forcepro-card"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {currentMonth}
            </h2>
            
            <div className="flex items-center gap-2">
              <div className="flex rounded-md overflow-hidden border border-gray-200">
                <button className="px-3 py-1 text-sm bg-white hover:bg-gray-50">Month</button>
                <button className="px-3 py-1 text-sm bg-white hover:bg-gray-50">Week</button>
                <button className="px-3 py-1 text-sm bg-white hover:bg-gray-50">Day</button>
                <button className="px-3 py-1 text-sm bg-white hover:bg-gray-50">List</button>
              </div>
            </div>
          </div>
          
          <div className="calendar-wrapper">
            <div className="grid grid-cols-7">
              <div className="calendar-header">MON</div>
              <div className="calendar-header">TUE</div>
              <div className="calendar-header">WED</div>
              <div className="calendar-header">THU</div>
              <div className="calendar-header">FRI</div>
              <div className="calendar-header">SAT</div>
              <div className="calendar-header">SUN</div>
              
              {/* Week 1 */}
              <div className="calendar-day">
                <div className="calendar-day-number">29</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">30</div>
                <div className="calendar-day-item orange">13:00 (60 min)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">1</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">2</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">3</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">4</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">5</div>
              </div>
              
              {/* Week 2 */}
              <div className="calendar-day">
                <div className="calendar-day-number">6</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">7</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">8</div>
                <div className="calendar-day-item green">9:00 (2 hours)</div>
                <div className="calendar-day-item orange">13:00 (60 min)</div>
              </div>
              <div className="calendar-day bg-blue-50">
                <div className="calendar-day-number">9</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">10</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">11</div>
                <div className="calendar-day-item orange">13:00 (info here)</div>
                <div className="calendar-day-item orange">13:00 (info here)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">12</div>
              </div>
              
              {/* Week 3 */}
              <div className="calendar-day">
                <div className="calendar-day-number">13</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">14</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">15</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">16</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">17</div>
                <div className="calendar-day-item orange">21:00 (30 min)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">18</div>
                <div className="calendar-day-item green">13:00 (test here)</div>
                <div className="calendar-day-item orange">19:00 (60 min)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">19</div>
              </div>
              
              {/* Week 4 */}
              <div className="calendar-day">
                <div className="calendar-day-number">20</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">21</div>
                <div className="calendar-day-item orange">13:00 (info here)</div>
                <div className="calendar-day-item orange">13:00 (info here)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">22</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">23</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">24</div>
                <div className="calendar-day-item green">13:00 (60 min)</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">25</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">26</div>
              </div>
              
              {/* Week 5 */}
              <div className="calendar-day">
                <div className="calendar-day-number">27</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">28</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">29</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">30</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">31</div>
              </div>
              <div className="calendar-day bg-gray-50">
                <div className="calendar-day-number text-gray-400">1</div>
              </div>
              <div className="calendar-day bg-gray-50">
                <div className="calendar-day-number text-gray-400">2</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;
