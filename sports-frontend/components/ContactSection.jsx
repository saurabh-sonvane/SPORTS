'use client';

import React, { useState } from 'react';
import { submitContactForm } from '../api/contactService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const images = [
    'https://circuitoftheamericas.com/wp-content/uploads/k0qMQJRwcrop-2000x1218.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAiwvfpseMfSw8qmJpTnpySE5w7QD0fhWKw&s?auto=compress&cs=tinysrgb&w=600',
    'https://images.squarespace-cdn.com/content/v1/5f343ff9541cd11433040eca/91dd31b6-fbd1-42b9-937c-68c21f65750b/Miami+Grand+Prix+2025%2C+Miami+GP+VIP+hospitality+packages%2C+Miami+GP+2025+hospitality%2C+Paddock+Club%2C+Turn+1+Vista+Club%2C+Ultimate+VIP+Trackside+Package%2C+gourmet+dining%2C+prime+race+views%2C+F1+Paddock+tours%2C+driver+meet-and-greets%2C+Miami+nightlife%2C+luxury+race+experience?auto=compress&cs=tinysrgb&w=600',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLgGpenz9D-SQE5vO9ZK4B_hMSlNCg8JJ0w&s?auto=compress&cs=tinysrgb&w=600',
    'https://utilitabowl.adidocdn.dev/2025/Cricket/Body%20Image/fans.png?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1181634/pexels-photo-1181634.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);

    const result = await submitContactForm(formData);

    if (result.success) {
      showToast(result.message, 'success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      showToast(result.message, 'error');
    }

    setLoading(false);
  };

  return (
    <section id='Contact' className="py-16 px-4 bg-white max-w-[94%] mx-auto">
      {toast.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg z-50 transition-opacity duration-300 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          ADD-ONS & VIP EXPERIENCES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`VIP Experience ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience Highlights</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Indulge in premium VIP packages featuring exclusive access to F1 events, luxury hospitality, premium seating, and unforgettable moments with fellow enthusiasts. Each experience is carefully curated to provide maximum enjoyment.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-semibold">Rating: </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-md p-6 rounded-lg bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">CONTACT</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
              >
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
