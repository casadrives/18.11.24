import React, { useState, useEffect } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar } from './AdminSidebar';
import { AdminOverview } from './AdminOverview';
import { DriversManagement } from './DriversManagement';
import { RidesManagement } from './RidesManagement';
import { Settings } from './Settings';
import { SupportDashboard } from './support/SupportDashboard';
import { FinanceDashboard } from './finance/FinanceDashboard';
import { ClientsPanel } from './ClientsPanel';
import { CompanyPanel } from './CompanyPanel';
import { DispatchConsole } from '../dispatch/DispatchConsole';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { useTheme } from 'next-themes';
import { useInView } from 'react-intersection-observer';

interface SuspendedCompany {
  id: string;
  name: string;
  email: string;
  paymentDue: string;
  status: string;
}

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState('overview');
  const { user, logout } = useAuth();
  const [suspendedCompanies, setSuspendedCompanies] = useState<SuspendedCompany[]>([]);
  const { theme, setTheme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      // In production, this would be replaced with WebSocket or Server-Sent Events
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const renderView = () => {
    const views = {
      overview: <AdminOverview suspendedCompanies={suspendedCompanies} />,
      clients: <ClientsPanel />,
      drivers: <DriversManagement />,
      rides: <RidesManagement />,
      finance: <FinanceDashboard />,
      companies: <CompanyPanel />,
      support: <SupportDashboard />,
      settings: <Settings />,
      dispatch: <DispatchConsole />
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ type: "spring", stiffness: 100 }}
          className="h-full"
        >
          {views[currentView as keyof typeof views]}
        </motion.div>
      </AnimatePresence>
    );
  };

  if (!user) {
    return null;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Toaster position="top-right" />
        
        <AdminHeader 
          user={user} 
          onLogout={handleLogout}
          theme={theme}
          onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        <div className="flex h-[calc(100vh-4rem)]">
          <AdminSidebar 
            currentView={currentView} 
            setCurrentView={setCurrentView} 
          />

          <main 
            ref={ref}
            className="flex-1 p-6 overflow-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {renderView()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}