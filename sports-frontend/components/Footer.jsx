import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">F1 EXPERIENCES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#vip" className="hover:text-orange-500 transition-colors duration-200">
                  VIP Packages
                </a>
              </li>
              <li>
                <a href="#addons" className="hover:text-orange-500 transition-colors duration-200">
                  Add-Ons
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-orange-500 transition-colors duration-200">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-500 transition-colors duration-200">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-500 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-orange-500 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-orange-500 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-orange-500 transition-colors duration-200">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="hover:text-orange-500 transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-orange-500 transition-colors duration-200">
                  Support
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-orange-500 transition-colors duration-200">
                  Booking Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.92.6-1.9 1.97-1.9 1.22 0 1.72.8 1.72 1.9v4.34h2.5M7 8.64a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" />
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.14 1.1C9.5 8.82 6.83 7.5 5 5.3c-.42.73-.67 1.58-.67 2.49 0 1.67.85 3.14 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.41 3.3 4.53 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.72-7.35 13.72-13.72 0-.21 0-.41-.01-.62.94-.68 1.76-1.53 2.41-2.5z" />
                </svg>
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.5 2c-2 0-3.3 1.3-3.3 3.3v8.4c0 2 1.3 3.3 3.3 3.3h8.4c2 0 3.3-1.3 3.3-3.3V7.3c0-2-1.3-3.3-3.3-3.3H7.3m9.6 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.4 1.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5m0 2c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-500">Follow us for latest updates and exclusive content</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">NEWSLETTER</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get exclusive F1 offers and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">PAYMENT METHODS</h4>
              <div className="flex gap-3">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  MC
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  AMEX
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  PayPal
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">CONTACT INFO</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Email: info@f1experiences.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Grand Prix Way, Monaco</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 mb-6">
              <div>
                <a href="#privacy" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
                <span className="mx-2">•</span>
                <a href="#terms" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
              </div>
              <div>
                <a href="#cookies" className="hover:text-orange-500 transition-colors">
                  Cookie Policy
                </a>
                <span className="mx-2">•</span>
                <a href="#accessibility" className="hover:text-orange-500 transition-colors">
                  Accessibility
                </a>
              </div>
              <div className="text-right md:text-left">
                <p>© {currentYear} F1 Experiences. All rights reserved.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 border-t border-gray-800 pt-6">
              <p>Officially licensed F1 experiences provider</p>
              <p>Built with passion for Formula 1 enthusiasts worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
