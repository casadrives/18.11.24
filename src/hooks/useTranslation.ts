import { useCallback } from 'react';
import { useApp } from '../context/AppContext';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    'nav.bookRide': 'Book a Ride',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'services.title': 'Why Choose CasaDrive',
    'services.subtitle': 'Experience the best ride service in Luxembourg',
    'services.professional': 'Professional Drivers',
    'services.professionalDesc': 'Our drivers are carefully selected and trained.',
    'services.fast': 'Fast Pickup',
    'services.fastDesc': 'Get picked up within minutes of booking.',
    'services.tracking': 'Live Tracking',
    'services.trackingDesc': 'Track your ride in real-time with our GPS system.',
    'services.rated': 'Top Rated',
    'services.ratedDesc': 'Consistently rated 4.8+ stars by our customers.',
    'about.title': 'About CasaDrive Luxembourg',
    'about.subtitle': 'Your trusted mobility partner in the heart of Europe',
    'about.expertise': 'Local Expertise',
    'about.expertiseDesc': 'Deep understanding of Luxembourg\'s transportation needs.',
    'about.international': 'International Service',
    'about.internationalDesc': 'Connecting Luxembourg with neighboring countries.',
    'about.safety': 'Safety First',
    'about.safetyDesc': 'Rigorous safety standards and verified drivers.',
    'about.availability': '24/7 Availability',
    'about.availabilityDesc': 'Round-the-clock service for your needs.',
    'about.history': 'Serving Luxembourg Since 2024',
    'about.description': 'Based in Luxembourg City, CasaDrive combines local expertise with international standards.',
    'about.dailyRides': 'Daily Rides',
    'about.rating': 'Average Rating',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? We\'re here to help!',
    'contact.fullName': 'Full Name',
    'contact.fullNamePlaceholder': 'Enter your full name',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.phone': 'Phone Number',
    'contact.phonePlaceholder': 'Enter your phone number',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can we help you?',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.successMessage': 'Your message has been sent successfully!',
    'contact.errorMessage': 'There was an error sending your message.',
    'common.privacyPolicy': 'Privacy Policy',
    'common.termsOfService': 'Terms of Service',
    'common.and': 'and',
    'airport.title': 'Airport Transfers',
    'airport.subtitle': 'Premium transportation to and from Luxembourg Airport (LUX)',
    'airport.feature1.title': '24/7 Service',
    'airport.feature1.desc': 'Available round-the-clock for all flight schedules',
    'airport.feature2.title': 'Flight Monitoring',
    'airport.feature2.desc': 'Real-time flight tracking and automatic adjustment for delays',
    'airport.feature3.title': 'Fixed Rates',
    'airport.feature3.desc': 'Transparent pricing with no hidden fees',
    'airport.feature4.title': 'Meet & Greet',
    'airport.feature4.desc': 'Professional driver waiting at arrivals with name sign',
    'airport.pricing.title': 'Fixed Price Airport Transfers',
    'airport.pricing.city': 'Luxembourg City - Airport: €45',
    'airport.pricing.kirchberg': 'Kirchberg - Airport: €50',
    'airport.pricing.waiting': 'Free waiting time up to 60 minutes',
    'airport.pricing.cancellation': 'Free cancellation up to 24 hours',
    'airport.cta': 'Book Airport Transfer',
    'hero.title': 'Your Premium Ride Service in Luxembourg',
    'hero.subtitle': 'Experience safe and comfortable rides with professional drivers.',
    'hero.bookRide': 'Book a Ride',
    'cta.needRide': 'Need a Ride?',
    'cta.rideDesc': 'Book a comfortable ride with our professional drivers.',
    'cta.bookNow': 'Book Now',
    'cta.company': 'Taxi Company?',
    'cta.companyDesc': 'Partner with us to expand your business.',
    'cta.driver': 'Professional Driver?',
    'cta.driverDesc': 'Access your dashboard or contact a company.',
    'cta.companyAccess': 'Company Access',
    'cta.driverAccess': 'Driver Access'
  }
};

export function useTranslation() {
  const { language } = useApp();

  const t = useCallback((key: string, params: Record<string, string> = {}) => {
    const translation = translations[language.code]?.[key] || key;

    return Object.entries(params).reduce(
      (acc, [key, value]) => acc.replace(`{{${key}}}`, value),
      translation
    );
  }, [language]);

  return { t };
}