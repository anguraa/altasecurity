import React, { useState, useEffect } from 'react';
import { Shield, Camera, Wrench, Users, Phone, Mail, MapPin, Star, Menu, X, ArrowRight, CheckCircle, Play } from 'lucide-react';

function App() {
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
      title: "Security Camera Sales",
      description: "Wide selection of high-quality security cameras for residential and commercial properties. From basic surveillance to advanced AI-powered systems.",
      features: ["HD & 4K Cameras", "Night Vision", "Wireless & Wired Options", "Smart Detection"]
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation services ensuring optimal camera placement and system configuration for maximum security coverage.",
      features: ["Site Assessment", "Professional Mounting", "Network Setup", "System Configuration"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services and 24/7 technical support to keep your security system running smoothly.",
      features: ["Regular Maintenance", "24/7 Support", "Software Updates", "Troubleshooting"]
    }
  ];

  const products = [
    {
      name: "Indoor Dome Camera",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$299",
      features: ["1080p HD", "Night Vision", "Motion Detection", "Mobile App"]
    },
    {
      name: "Outdoor Bullet Camera",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$449",
      features: ["4K Ultra HD", "Weatherproof", "Smart Alerts", "Cloud Storage"]
    },
    {
      name: "PTZ Security Camera",
      image: "https://images.pexels.com/photos/8142004/pexels-photo-8142004.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$899",
      features: ["360° Coverage", "Zoom Capability", "Auto Tracking", "Professional Grade"]
    },
    {
      name: "Complete System Package",
      image: "https://images.pexels.com/photos/8142029/pexels-photo-8142029.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$1,999",
      features: ["8 Camera System", "DVR/NVR Included", "Professional Installation", "1 Year Warranty"]
    }
  ];

  const portfolioItems = [
    {
      title: "Residential Security System",
      location: "Modern Family Home",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete security solution with 6 cameras covering all entry points"
    },
    {
      title: "Commercial Office Building",
      location: "Downtown Business District",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced surveillance system with 24 cameras and central monitoring"
    },
    {
      title: "Retail Store Security",
      location: "Shopping Center",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Strategic camera placement for theft prevention and customer safety"
    },
    {
      title: "Warehouse Monitoring",
      location: "Industrial Complex",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive coverage of large warehouse facility with remote monitoring"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Alta Security transformed our home security. The installation was professional and the cameras provide crystal clear footage day and night.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content: "Outstanding service from consultation to installation. Our retail store has never felt more secure. Highly recommend Alta Security.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      role: "Property Manager",
      content: "We've worked with Alta Security on multiple properties. Their expertise and reliability make them our go-to security solution provider.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">Alta Security</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'products', 'portfolio', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
                {['home', 'services', 'products', 'portfolio', 'about', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize block px-3 py-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 w-full text-left"
                  >
                    {section}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 mt-2"
                >
                  Get Quote
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
                  Secure Your
                  <span className="text-blue-700 block">Peace of Mind</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional security camera systems for homes and businesses. Expert installation, 
                  premium equipment, and 24/7 support to protect what matters most.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200 font-semibold"
                >
                  View Services
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">500+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">5★</div>
                  <div className="text-sm text-gray-600">Rated Service</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to installation and ongoing support, we provide comprehensive 
              security camera solutions tailored to your specific needs.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Security Cameras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of cutting-edge security cameras designed for 
              every application and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
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
                    Learn More
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped protect homes and businesses with our professional 
              security camera installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Alta Security?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in security solutions, Alta Security has become 
                the trusted choice for homeowners and businesses seeking reliable protection.
              </p>
              
              <div className="space-y-4">
                {[
                  "Certified security professionals with extensive training",
                  "Premium equipment from leading manufacturers",
                  "Comprehensive warranties and ongoing support",
                  "Custom solutions tailored to your specific needs",
                  "24/7 monitoring and technical assistance",
                  "Competitive pricing with transparent quotes"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">A+</div>
                  <div className="text-sm text-gray-600">BBB Rating</div>
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
                    <div className="font-bold text-lg">Expert Team</div>
                    <div className="text-blue-200">Certified Professionals</div>
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
            <h2 className="text-4xl font-bold mb-4">Get Your Free Security Consultation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your property? Contact us today for a free consultation and 
              custom security solution designed just for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>Residential Home</option>
                    <option>Commercial Building</option>
                    <option>Retail Store</option>
                    <option>Warehouse</option>
                    <option>Office Building</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your security needs, number of cameras, specific areas to monitor, etc."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">(555) 123-ALTA</div>
                      <div className="text-gray-400 text-sm">24/7 Emergency Line</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">info@altasecurity.com</div>
                      <div className="text-gray-400 text-sm">Response within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <div className="font-semibold">123 Security Blvd</div>
                      <div className="text-gray-400 text-sm">Your City, State 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-3">
                    <div className="flex justify-between font-semibold text-blue-400">
                      <span>Emergency Support:</span>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800">
                <h4 className="font-bold text-lg mb-3">Free Consultation Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Site security assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Custom system design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Detailed project quote
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Equipment recommendations
                  </li>
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
                <span className="font-bold text-xl">Alta Security</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner in security solutions. Protecting homes and businesses 
                with cutting-edge technology and professional service.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 Alta Security. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Camera Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;