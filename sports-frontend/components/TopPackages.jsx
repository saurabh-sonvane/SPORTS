'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Just a normal JS array now (no TypeScript interface)
const packages = [
  {
    id: '1',
    title: 'Tour de France',
    image_url: 'https://images.unsplash.com/photo-1510766528597-60f9f1c154b6?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    starting_price: 2499.99,
  },
  {
    id: '2',
    title: 'FIFA World Cup',
    image_url: 'https://images.unsplash.com/photo-1569863959165-56dae551d4fc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=800',
    starting_price: 1299.99,
  },
  {
    id: '3',
    title: 'Slam Dunk Showdown',
    image_url: 'https://plus.unsplash.com/premium_photo-1661483635418-f1a527d93aa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=800',
    starting_price: 4999.99,
  },
  {
    id: '4',
    title: 'Indian Premier League',
    image_url: 'https://plus.unsplash.com/premium_photo-1733313613724-3ea5f9eec5ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=800',
    starting_price: 1899.99,
  },
];

export default function TopPackages() {
  return (
    <section id='packages' className="w-full max-w-[94%] py-16 px-4 bg-gradient-to-b from-slate-50 to-white mt-52 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 text-left">
            TOP PACKAGES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200 mb-4">
                <img
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 line-clamp-2 min-h-[2rem] text-left">
                  {pkg.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-500 font-medium">Starting from</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${pkg.starting_price.toFixed(2)}
                  </span>
                </div>

                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <span>View Details</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
