import React, { useState, useEffect } from 'react';
import { Shield, Camera, Wrench, Users, Phone, Mail, MapPin, Star, Menu, X, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  const { currentLanguage, translation, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Camera,
      title: translation.services.items[0].title,
      description: translation.services.items[0].description,
      features: translation.services.items[0].features
    },
    {
      icon: Wrench,
      title: translation.services.items[1].title,
      description: translation.services.items[1].description,
      features: translation.services.items[1].features
    },
    {
      icon: Shield,
      title: translation.services.items[2].title,
      description: translation.services.items[2].description,
      features: translation.services.items[2].features
    }
  ];

  // Product images
  const productImages = [
    "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8142004/pexels-photo-8142004.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8142029/pexels-photo-8142029.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  // Portfolio images
  const portfolioImages = [
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">{translation.siteName}</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(translation.navigation).slice(0, -1).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === key 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                {translation.navigation.getQuote}
              </button>
              <LanguageSwitcher 
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher 
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {Object.entries(translation.navigation).slice(0, -1).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block px-3 py-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 w-full text-left"
                  >
                    {label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 mt-2"
                >
                  {translation.navigation.getQuote}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {translation.hero.title}
                  <span className="text-blue-700 block">{translation.hero.titleHighlight}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {translation.hero.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  {translation.hero.primaryButton}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200 font-semibold"
                >
                  {translation.hero.secondaryButton}
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">{translation.hero.stats.installations.number}</div>
                  <div className="text-sm text-gray-600">{translation.hero.stats.installations.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">{translation.hero.stats.support.number}</div>
                  <div className="text-sm text-gray-600">{translation.hero.stats.support.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">{translation.hero.stats.rating.number}</div>
                  <div className="text-sm text-gray-600">{translation.hero.stats.rating.label}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Security Camera Installation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-200 rounded-full -z-20 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translation.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translation.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-700 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translation.products.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translation.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translation.products.items.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={productImages[index]} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold">
                    {translation.products.viewMore}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translation.portfolio.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translation.portfolio.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {translation.portfolio.items.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={portfolioImages[index]} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm mb-2">{item.location}</p>
                  <p className="text-gray-200">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translation.ui.clientsSay}</h2>
            <p className="text-xl text-gray-600">
              {translation.ui.clientsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {translation.testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">{translation.about.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {translation.about.subtitle}
              </p>
              
              <div className="space-y-4">
                {translation.about.points.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{translation.about.stats.experience.number}</div>
                  <div className="text-sm text-gray-600">{translation.about.stats.experience.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{translation.about.stats.satisfaction.number}</div>
                  <div className="text-sm text-gray-600">{translation.about.stats.satisfaction.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{translation.about.stats.rating.number}</div>
                  <div className="text-sm text-gray-600">{translation.about.stats.rating.label}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8566462/pexels-photo-8566462.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Security Installation Team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8" />
                  <div>
                    <div className="font-bold text-lg">
                      {currentLanguage === 'ka' ? 'ექსპერტი გუნდი' : 
                       currentLanguage === 'en' ? 'Expert Team' : 
                       'Экспертная команда'}
                    </div>
                    <div className="text-blue-200">
                      {currentLanguage === 'ka' ? 'სერტიფიცირებული პროფესიონალები' : 
                       currentLanguage === 'en' ? 'Certified Professionals' : 
                       'Сертифицированные профессионалы'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{translation.contactSection.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {translation.contactSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{translation.contactSection.form.firstName}</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={currentLanguage === 'ka' ? 'გიორგი' : currentLanguage === 'en' ? 'John' : 'Георгий'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{translation.contactSection.form.lastName}</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={currentLanguage === 'ka' ? 'მამალაძე' : currentLanguage === 'en' ? 'Smith' : 'Иванов'}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{translation.contactSection.form.email}</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={currentLanguage === 'ka' ? 'giorgi@example.com' : currentLanguage === 'en' ? 'john@example.com' : 'georgiy@example.com'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{translation.contactSection.form.phone}</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{translation.contactSection.form.propertyType}</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    {translation.contactSection.form.propertyOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{translation.contactSection.form.projectDetails}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={translation.contactSection.form.projectPlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center group"
                >
                  {translation.contactSection.form.submitButton}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{translation.contactSection.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">{translation.contact.phone}</div>
                      <div className="text-gray-400 text-sm">{translation.contact.emergencyLine}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">{translation.contact.email}</div>
                      <div className="text-gray-400 text-sm">{translation.contact.responseTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">{translation.contact.address}</div>
                      <div className="text-gray-400 text-sm">{translation.contact.city}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">{translation.contactSection.workingHours}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>
                      {currentLanguage === 'ka' ? 'ორშაბათი - პარასკევი:' : 
                       currentLanguage === 'en' ? 'Monday - Friday:' : 
                       'Понедельник - Пятница:'}
                    </span>
                    <span>{translation.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {currentLanguage === 'ka' ? 'შაბათი:' : 
                       currentLanguage === 'en' ? 'Saturday:' : 
                       'Суббота:'}
                    </span>
                    <span>{translation.businessHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {currentLanguage === 'ka' ? 'კვირა:' : 
                       currentLanguage === 'en' ? 'Sunday:' : 
                       'Воскресенье:'}
                    </span>
                    <span>{translation.businessHours.sunday}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-3">
                    <div className="flex justify-between font-semibold text-blue-400">
                      <span>
                        {currentLanguage === 'ka' ? 'გადაუდებელი მხარდაჭერა:' : 
                         currentLanguage === 'en' ? 'Emergency Support:' : 
                         'Экстренная поддержка:'}
                      </span>
                      <span>{translation.businessHours.emergency}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800">
                <h4 className="font-bold text-lg mb-3">{translation.contactSection.consultationIncludes.title}</h4>
                <ul className="space-y-2 text-sm">
                  {translation.contactSection.consultationIncludes.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">{translation.siteName}</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {translation.footer.description}
              </p>
              <div className="text-sm text-gray-500">
                {translation.footer.copyright}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {currentLanguage === 'ka' ? 'სერვისები' : 
                 currentLanguage === 'en' ? 'Services' : 
                 'Услуги'}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {translation.footer.services.map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-white transition-colors">{service}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {currentLanguage === 'ka' ? 'სწრაფი ბმულები' : 
                 currentLanguage === 'en' ? 'Quick Links' : 
                 'Быстрые ссылки'}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {translation.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    {index < 3 ? (
                      <button 
                        onClick={() => scrollToSection(['about', 'portfolio', 'contact'][index])} 
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    ) : (
                      <a href="#" className="hover:text-white transition-colors">{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;