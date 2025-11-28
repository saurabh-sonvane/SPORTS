function HeroSection({ className = '' }) {
  return (
    <section id="Sports" className={`relative min-h-screen flex items-center justify-center pt-16 sm:pt-16 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
          SPORTS TRAVEL<br />
          PACKAGES FOR<br />
          GLOBAL EVENTS
        </h1>

        <p className="text-white/90 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-xl mx-auto px-2">
          Athletic Pursuits International is a tour organization service specializing in sports-focused travel
        </p>

        <button onClick={() => {
          document.getElementById("Contact")?.scrollIntoView({
            behavior: "smooth"
          });
        }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 md:px-8 py-2.5 sm:py-3 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-colors shadow-lg">
          Plan My Trip
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
