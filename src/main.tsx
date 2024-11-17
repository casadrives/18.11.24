import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import AppComponent from './App';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import './styles/globals.css';

const initializeApp = async () => {
  try {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isNative = userAgent.includes('capacitor');

    if (isNative) {
      await StatusBar.setStyle({ style: 'dark' });
      await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
      
      await SplashScreen.hide({
        fadeOutDuration: 500
      });

      App.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          App.exitApp();
        }
      });
    }
  } catch (error) {
    console.warn('Capacitor initialization skipped:', error);
  }
};

initializeApp().catch(console.warn);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <AuthProvider>
        <AppProvider>
          <AppComponent />
        </AppProvider>
      </AuthProvider>
    </StrictMode>
  );
}