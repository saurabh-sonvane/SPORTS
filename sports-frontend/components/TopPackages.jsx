'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Just a normal JS array now (no TypeScript interface)
const packages = [
  {
    id: '1',
    title: 'Corporate Gala Experience',
    image_url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    starting_price: 2499.99,
  },
  {
    id: '2',
    title: 'Outdoor Festival Package',
    image_url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    starting_price: 1299.99,
  },
  {
    id: '3',
    title: 'Wedding Premium Bundle',
    image_url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    starting_price: 4999.99,
  },
  {
    id: '4',
    title: 'Team Building Retreat',
    image_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    starting_price: 1899.99,
  },
];

export default function TopPackages() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Top Packages
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium event packages designed to create unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 line-clamp-2 min-h-[3.5rem]">
                  {pkg.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-500 font-medium">Starting from</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${pkg.starting_price.toFixed(2)}
                  </span>
                </div>

                <button
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-all duration-300 group-hover:bg-blue-600"
                  size="lg"
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
