import React from 'react';
import { Plane, Clock, MapPin, Shield, Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export function AirportTransfer() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: t('airport.feature1.title'),
      description: t('airport.feature1.desc')
    },
    {
      icon: Star,
      title: t('airport.feature2.title'),
      description: t('airport.feature2.desc')
    },
    {
      icon: Shield,
      title: t('airport.feature3.title'),
      description: t('airport.feature3.desc')
    },
    {
      icon: MapPin,
      title: t('airport.feature4.title'),
      description: t('airport.feature4.desc')
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2048"
          alt="Luxembourg Airport"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Plane className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">{t('airport.title')}</h2>
          </div>
          <p className="mt-4 text-xl text-gray-600">
            {t('airport.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('airport.pricing.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{t('airport.pricing.city')}</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{t('airport.pricing.kirchberg')}</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>{t('airport.pricing.waiting')}</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  <span>{t('airport.pricing.cancellation')}</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button 
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('airport.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}