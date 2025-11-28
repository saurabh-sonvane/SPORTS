import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const targetCount = 1200;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentCount = 0;
    const increment = targetCount / 50;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const stats = [
    {
      number: count,
      label: 'Events Arranged',
      highlighted: true,
    },
    {
      number: '68%',
      label: 'Trine Transfers',
      highlighted: false,
    },
    {
      number: '4,075',
      label: 'Barth Experiences',
      highlighted: false,
    },
  ];

  const reasons = [
    {
      number: '1',
      title: 'Choose your event',
    },
    {
      number: '2',
      title: 'We arrange your travel + tickets',
    },
    {
      number: '3',
      title: 'Enjoy a seamless sports experience',
    },
  ];

  return (
    <section id='WhyUs' ref={sectionRef} className="py-20 px-8   max-w-[94%] mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                WHY CHOOSE US
              </h2>
            </div>

            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-baseline gap-3">
                  <span
                    className={`text-4xl lg:text-5xl font-bold transition-all duration-300 ${
                      stat.highlighted
                        ? 'text-orange-500'
                        : 'text-gray-900'
                    }`}
                  >
                    {stat.number}
                    {stat.highlighted && <span className="text-2xl">+</span>}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </span>
                    {index === 1 && (
                      <span className="text-xs text-gray-500 mt-1">Official Partners</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="space-y-8">

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-lg justify-center align-center w-fit"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200">
                      <span className="text-lg font-bold text-orange-500">{reason.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex align-middle">
                    <h4 className="text-lg font-semibold text-gray-900 mt-2">{reason.title}</h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
