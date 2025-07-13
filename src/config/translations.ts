// Multi-language translations for the website
export type Language = 'ka' | 'en' | 'ru';

export interface Translation {
  // Basic Site Information
  siteName: string;
  siteTitle: string;
  siteDescription: string;

  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    emergencyLine: string;
    responseTime: string;
  };

  // Business Hours
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };

  // Hero Section
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    stats: {
      installations: { number: string; label: string };
      support: { number: string; label: string };
      rating: { number: string; label: string };
    };
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };

  // Products Section
  products: {
    title: string;
    subtitle: string;
    viewMore: string;
    items: Array<{
      name: string;
      price: string;
      features: string[];
    }>;
  };

  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      location: string;
      description: string;
    }>;
  };

  // Testimonials
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;

  // About Section
  about: {
    title: string;
    subtitle: string;
    points: string[];
    stats: {
      experience: { number: string; label: string };
      satisfaction: { number: string; label: string };
      rating: { number: string; label: string };
    };
  };

  // Contact Section
  contactSection: {
    title: string;
    subtitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      propertyType: string;
      propertyOptions: string[];
      projectDetails: string;
      projectPlaceholder: string;
      submitButton: string;
    };
    consultationIncludes: {
      title: string;
      items: string[];
    };
    contactInfo: string;
    workingHours: string;
  };

  // Footer
  footer: {
    description: string;
    copyright: string;
    services: string[];
    quickLinks: string[];
  };

  // Navigation
  navigation: {
    home: string;
    services: string;
    products: string;
    portfolio: string;
    about: string;
    contact: string;
    getQuote: string;
  };

  // Common UI
  ui: {
    clientsSay: string;
    clientsSubtitle: string;
  };
}

export const translations: Record<Language, Translation> = {
  // Georgian (Original)
  ka: {
    siteName: "Alta Security",
    siteTitle: "Alta Security - უსაფრთხოების კამერების გაყიდვა და მონტაჟი",
    siteDescription: "პროფესიონალური უსაფრთხოების სისტემები სახლებისა და ბიზნესისთვის",

    contact: {
      phone: "(555) 123-ALTA",
      email: "info@altasecurity.ge",
      address: "უსაფრთხოების ბულვარი 123",
      city: "თბილისი, საქართველო 0108",
      emergencyLine: "24/7 გადაუდებელი ხაზი",
      responseTime: "2 საათში პასუხი"
    },

    businessHours: {
      weekdays: "8:00 - 18:00",
      saturday: "9:00 - 16:00",
      sunday: "მხოლოდ გადაუდებელი შემთხვევები",
      emergency: "24/7 ხელმისაწვდომი"
    },

    hero: {
      title: "დაიცავით თქვენი",
      titleHighlight: "სიმშვიდე",
      subtitle: "პროფესიონალური უსაფრთხოების კამერების სისტემები სახლებისა და ბიზნესისთვის. ექსპერტული მონტაჟი, პრემიუმ აღჭურვილობა და 24/7 მხარდაჭერა იმისთვის, რაც ყველაზე მნიშვნელოვანია.",
      primaryButton: "უფასო კონსულტაცია",
      secondaryButton: "სერვისების ნახვა",
      stats: {
        installations: { number: "500+", label: "მონტაჟი" },
        support: { number: "24/7", label: "მხარდაჭერა" },
        rating: { number: "5★", label: "შეფასებული სერვისი" }
      }
    },

    services: {
      title: "ჩვენი უსაფრთხოების გადაწყვეტები",
      subtitle: "კონსულტაციიდან მონტაჟამდე და მუდმივ მხარდაჭერამდე, ჩვენ ვთავაზობთ ყოვლისმომცველ უსაფრთხოების კამერების გადაწყვეტებს თქვენი კონკრეტული საჭიროებების მიხედვით.",
      items: [
        {
          title: "უსაფრთხოების კამერების გაყიდვა",
          description: "ფართო არჩევანი მაღალი ხარისხის უსაფრთხოების კამერებისა საცხოვრებელი და კომერციული ობიექტებისთვის. ძირითადი ზედამხედველობიდან AI-ით აღჭურვილ სისტემებამდე.",
          features: ["HD & 4K კამერები", "ღამის ხედვა", "უკაბელო და კაბელიანი ვარიანტები", "ჭკვიანი აღმოჩენა"]
        },
        {
          title: "პროფესიონალური მონტაჟი",
          description: "ექსპერტული მონტაჟის სერვისები, რომელიც უზრუნველყოფს კამერების ოპტიმალურ განთავსებას და სისტემის კონფიგურაციას მაქსიმალური უსაფრთხოების დაფარვისთვის.",
          features: ["ადგილის შეფასება", "პროფესიონალური მონტაჟი", "ქსელის დაყენება", "სისტემის კონფიგურაცია"]
        },
        {
          title: "მოვლა და მხარდაჭერა",
          description: "ყოვლისმომცველი მოვლის სერვისები და 24/7 ტექნიკური მხარდაჭერა თქვენი უსაფრთხოების სისტემის უწყვეტი მუშაობისთვის.",
          features: ["რეგულარული მოვლა", "24/7 მხარდაჭერა", "პროგრამული განახლებები", "პრობლემების გადაჭრა"]
        }
      ]
    },

    products: {
      title: "პრემიუმ უსაფრთხოების კამერები",
      subtitle: "აირჩიეთ ჩვენი უახლესი უსაფრთხოების კამერების კოლექციიდან, რომლებიც შექმნილია ყველა აპლიკაციისა და ბიუჯეტისთვის.",
      viewMore: "მეტის ნახვა",
      items: [
        {
          name: "შიდა გუმბათოვანი კამერა",
          price: "299₾",
          features: ["1080p HD", "ღამის ხედვა", "მოძრაობის აღმოჩენა", "მობილური აპი"]
        },
        {
          name: "გარე ტყვიისებრი კამერა",
          price: "449₾",
          features: ["4K Ultra HD", "ამინდგამძლე", "ჭკვიანი გაფრთხილებები", "ღრუბლოვანი შენახვა"]
        },
        {
          name: "PTZ უსაფრთხოების კამერა",
          price: "899₾",
          features: ["360° დაფარვა", "ზუმის შესაძლებლობა", "ავტო თვალყურის დევნება", "პროფესიონალური კლასი"]
        },
        {
          name: "სრული სისტემის პაკეტი",
          price: "1,999₾",
          features: ["8 კამერიანი სისტემა", "DVR/NVR ჩართული", "პროფესიონალური მონტაჟი", "1 წლის გარანტია"]
        }
      ]
    },

    portfolio: {
      title: "ჩვენი ბოლო პროექტები",
      subtitle: "იხილეთ, როგორ დავეხმარეთ სახლებისა და ბიზნესების დაცვაში ჩვენი პროფესიონალური უსაფრთხოების კამერების მონტაჟით.",
      items: [
        {
          title: "საცხოვრებელი უსაფრთხოების სისტემა",
          location: "თანამედროვე ოჯახური სახლი",
          description: "სრული უსაფრთხოების გადაწყვეტა 6 კამერით ყველა შესასვლელის დაფარვით"
        },
        {
          title: "კომერციული ოფისის შენობა",
          location: "ცენტრალური ბიზნეს რაიონი",
          description: "მოწინავე ზედამხედველობის სისტემა 24 კამერით და ცენტრალური მონიტორინგით"
        },
        {
          title: "საცალო მაღაზიის უსაფრთხოება",
          location: "სავაჭრო ცენტრი",
          description: "სტრატეგიული კამერების განთავსება ქურდობის თავიდან აცილებისა და მომხმარებელთა უსაფრთხოებისთვის"
        },
        {
          title: "საწყობის მონიტორინგი",
          location: "ინდუსტრიული კომპლექსი",
          description: "დიდი საწყობის ყოვლისმომცველი დაფარვა დისტანციური მონიტორინგით"
        }
      ]
    },

    testimonials: [
      {
        name: "ნინო ჯავახიშვილი",
        role: "სახლის მფლობელი",
        content: "ალტა უსაფრთხოებამ ჩვენი სახლის უსაფრთხოება სრულად შეცვალა. მონტაჟი იყო პროფესიონალური და კამერები იძლევა კრისტალურად მკაფიო კადრებს დღე-ღამე.",
        rating: 5
      },
      {
        name: "გიორგი ნაცვლიშვილი",
        role: "ბიზნეს მფლობელი",
        content: "შესანიშნავი სერვისი კონსულტაციიდან მონტაჟამდე. ჩვენი საცალო მაღაზია არასოდეს ყოფილა ასე უსაფრთხო. მაღლად ვაფასებ ალტა უსაფრთხოებას.",
        rating: 5
      },
      {
        name: "თამარ ქავთარაძე",
        role: "ქონების მენეჯერი",
        content: "ჩვენ ვმუშაობთ ალტა უსაფრთხოებასთან მრავალ ობიექტზე. მათი ექსპერტიზა და საიმედოობა მათ ჩვენს მთავარ უსაფრთხოების პარტნერად აქცევს.",
        rating: 5
      }
    ],

    about: {
      title: "რატომ აირჩიოთ ალტა უსაფრთხოება?",
      subtitle: "ათწლეულზე მეტი გამოცდილებით უსაფრთხოების გადაწყვეტებში, ალტა უსაფრთხოება გახდა სანდო არჩევანი სახლის მფლობელებისა და ბიზნესებისთვის, რომლებიც ეძებენ საიმედო დაცვას.",
      points: [
        "სერტიფიცირებული უსაფრთხოების პროფესიონალები ფართო ტრენინგით",
        "პრემიუმ აღჭურვილობა წამყვანი მწარმოებლებისგან",
        "ყოვლისმომცველი გარანტიები და მუდმივი მხარდაჭერა",
        "მორგებული გადაწყვეტები თქვენი კონკრეტული საჭიროებების მიხედვით",
        "24/7 მონიტორინგი და ტექნიკური დახმარება",
        "კონკურენტული ფასები გამჭვირვალე შეთავაზებებით"
      ],
      stats: {
        experience: { number: "10+", label: "წლის გამოცდილება" },
        satisfaction: { number: "100%", label: "მომხმარებელთა კმაყოფილება" },
        rating: { number: "A+", label: "BBB რეიტინგი" }
      }
    },

    contactSection: {
      title: "მიიღეთ თქვენი უფასო უსაფრთხოების კონსულტაცია",
      subtitle: "მზად ხართ დაიცვათ თქვენი ქონება? დაგვიკავშირდით დღეს უფასო კონსულტაციისთვის და მორგებული უსაფრთხოების გადაწყვეტისთვის, რომელიც სპეციალურად თქვენთვისაა შექმნილი.",
      form: {
        firstName: "სახელი",
        lastName: "გვარი",
        email: "ელ. ფოსტა",
        phone: "ტელეფონი",
        propertyType: "ქონების ტიპი",
        propertyOptions: [
          "საცხოვრებელი სახლი",
          "კომერციული შენობა",
          "საცალო მაღაზია",
          "საწყობი",
          "ოფისის შენობა",
          "სხვა"
        ],
        projectDetails: "პროექტის დეტალები",
        projectPlaceholder: "მოგვითხარით თქვენი უსაფრთხოების საჭიროებების შესახებ, კამერების რაოდენობა, მონიტორინგის კონკრეტული ზონები და ა.შ.",
        submitButton: "უფასო კონსულტაციის მიღება"
      },
      consultationIncludes: {
        title: "უფასო კონსულტაცია მოიცავს:",
        items: [
          "ადგილის უსაფრთხოების შეფასება",
          "მორგებული სისტემის დიზაინი",
          "დეტალური პროექტის შეთავაზება",
          "აღჭურვილობის რეკომენდაციები"
        ]
      },
      contactInfo: "საკონტაქტო ინფორმაცია",
      workingHours: "სამუშაო საათები"
    },

    footer: {
      description: "თქვენი სანდო პარტნერი უსაფრთხოების გადაწყვეტებში. ვიცავთ სახლებსა და ბიზნესებს უახლესი ტექნოლოგიებითა და პროფესიონალური სერვისით.",
      copyright: "© 2025 ალტა უსაფრთხოება. ყველა უფლება დაცულია.",
      services: ["კამერების გაყიდვა", "მონტაჟი", "მოვლა", "მხარდაჭერა"],
      quickLinks: ["ჩვენ შესახებ", "პორტფოლიო", "კონტაქტი", "კონფიდენციალურობის პოლიტიკა"]
    },

    navigation: {
      home: "მთავარი",
      services: "სერვისები",
      products: "პროდუქტები",
      portfolio: "პორტფოლიო",
      about: "ჩვენ შესახებ",
      contact: "კონტაქტი",
      getQuote: "შეთავაზების მიღება"
    },

    ui: {
      clientsSay: "რას ამბობენ ჩვენი კლიენტები",
      clientsSubtitle: "ნუ მიიღებთ მხოლოდ ჩვენს სიტყვას - მოისმინეთ კმაყოფილი მომხმარებლები"
    }
  },

  // English
  en: {
    siteName: "Alta Security",
    siteTitle: "Alta Security - Security Camera Sales and Installation",
    siteDescription: "Professional security systems for homes and businesses",

    contact: {
      phone: "(555) 123-ALTA",
      email: "info@altasecurity.ge",
      address: "Security Boulevard 123",
      city: "Tbilisi, Georgia 0108",
      emergencyLine: "24/7 Emergency Line",
      responseTime: "Response within 2 hours"
    },

    businessHours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Emergency calls only",
      emergency: "24/7 Available"
    },

    hero: {
      title: "Protect Your",
      titleHighlight: "Peace of Mind",
      subtitle: "Professional security camera systems for homes and businesses. Expert installation, premium equipment, and 24/7 support for what matters most.",
      primaryButton: "Free Consultation",
      secondaryButton: "View Services",
      stats: {
        installations: { number: "500+", label: "Installations" },
        support: { number: "24/7", label: "Support" },
        rating: { number: "5★", label: "Rated Service" }
      }
    },

    services: {
      title: "Our Security Solutions",
      subtitle: "From consultation to installation and ongoing support, we provide comprehensive security camera solutions tailored to your specific needs.",
      items: [
        {
          title: "Security Camera Sales",
          description: "Wide selection of high-quality security cameras for residential and commercial properties. From basic surveillance to AI-powered systems.",
          features: ["HD & 4K Cameras", "Night Vision", "Wireless & Wired Options", "Smart Detection"]
        },
        {
          title: "Professional Installation",
          description: "Expert installation services ensuring optimal camera placement and system configuration for maximum security coverage.",
          features: ["Site Assessment", "Professional Installation", "Network Setup", "System Configuration"]
        },
        {
          title: "Maintenance & Support",
          description: "Comprehensive maintenance services and 24/7 technical support to keep your security system running smoothly.",
          features: ["Regular Maintenance", "24/7 Support", "Software Updates", "Troubleshooting"]
        }
      ]
    },

    products: {
      title: "Premium Security Cameras",
      subtitle: "Choose from our latest collection of security cameras designed for every application and budget.",
      viewMore: "View More",
      items: [
        {
          name: "Indoor Dome Camera",
          price: "$299",
          features: ["1080p HD", "Night Vision", "Motion Detection", "Mobile App"]
        },
        {
          name: "Outdoor Bullet Camera",
          price: "$449",
          features: ["4K Ultra HD", "Weatherproof", "Smart Alerts", "Cloud Storage"]
        },
        {
          name: "PTZ Security Camera",
          price: "$899",
          features: ["360° Coverage", "Zoom Capability", "Auto Tracking", "Professional Grade"]
        },
        {
          name: "Complete System Package",
          price: "$1,999",
          features: ["8-Camera System", "DVR/NVR Included", "Professional Installation", "1-Year Warranty"]
        }
      ]
    },

    portfolio: {
      title: "Our Recent Projects",
      subtitle: "See how we've helped protect homes and businesses with our professional security camera installations.",
      items: [
        {
          title: "Residential Security System",
          location: "Modern Family Home",
          description: "Complete security solution with 6 cameras covering all entry points"
        },
        {
          title: "Commercial Office Building",
          location: "Central Business District",
          description: "Advanced surveillance system with 24 cameras and central monitoring"
        },
        {
          title: "Retail Store Security",
          location: "Shopping Center",
          description: "Strategic camera placement for theft prevention and customer safety"
        },
        {
          title: "Warehouse Monitoring",
          location: "Industrial Complex",
          description: "Comprehensive coverage of large warehouse with remote monitoring"
        }
      ]
    },

    testimonials: [
      {
        name: "Nino Javakhishvili",
        role: "Homeowner",
        content: "Alta Security completely transformed our home security. The installation was professional and the cameras provide crystal clear footage day and night.",
        rating: 5
      },
      {
        name: "George Natsvlishvili",
        role: "Business Owner",
        content: "Excellent service from consultation to installation. Our retail store has never been more secure. Highly recommend Alta Security.",
        rating: 5
      },
      {
        name: "Tamar Kavtaradze",
        role: "Property Manager",
        content: "We work with Alta Security on multiple properties. Their expertise and reliability make them our go-to security partner.",
        rating: 5
      }
    ],

    about: {
      title: "Why Choose Alta Security?",
      subtitle: "With over a decade of experience in security solutions, Alta Security has become the trusted choice for homeowners and businesses seeking reliable protection.",
      points: [
        "Certified security professionals with extensive training",
        "Premium equipment from leading manufacturers",
        "Comprehensive warranties and ongoing support",
        "Customized solutions for your specific needs",
        "24/7 monitoring and technical assistance",
        "Competitive pricing with transparent quotes"
      ],
      stats: {
        experience: { number: "10+", label: "Years Experience" },
        satisfaction: { number: "100%", label: "Customer Satisfaction" },
        rating: { number: "A+", label: "BBB Rating" }
      }
    },

    contactSection: {
      title: "Get Your Free Security Consultation",
      subtitle: "Ready to protect your property? Contact us today for a free consultation and customized security solution designed specifically for you.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        propertyType: "Property Type",
        propertyOptions: [
          "Residential Home",
          "Commercial Building",
          "Retail Store",
          "Warehouse",
          "Office Building",
          "Other"
        ],
        projectDetails: "Project Details",
        projectPlaceholder: "Tell us about your security needs, number of cameras, specific areas to monitor, etc.",
        submitButton: "Get Free Consultation"
      },
      consultationIncludes: {
        title: "Free consultation includes:",
        items: [
          "Site security assessment",
          "Custom system design",
          "Detailed project proposal",
          "Equipment recommendations"
        ]
      },
      contactInfo: "Contact Information",
      workingHours: "Working Hours"
    },

    footer: {
      description: "Your trusted partner in security solutions. We protect homes and businesses with cutting-edge technology and professional service.",
      copyright: "© 2025 Alta Security. All rights reserved.",
      services: ["Camera Sales", "Installation", "Maintenance", "Support"],
      quickLinks: ["About Us", "Portfolio", "Contact", "Privacy Policy"]
    },

    navigation: {
      home: "Home",
      services: "Services",
      products: "Products",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      getQuote: "Get Quote"
    },

    ui: {
      clientsSay: "What Our Clients Say",
      clientsSubtitle: "Don't just take our word for it - hear from satisfied customers"
    }
  },

  // Russian
  ru: {
    siteName: "Альта Безопасность",
    siteTitle: "Альта Безопасность - Продажа и установка камер видеонаблюдения",
    siteDescription: "Профессиональные системы безопасности для домов и бизнеса",

    contact: {
      phone: "(555) 123-ALTA",
      email: "info@altasecurity.ge",
      address: "Бульвар Безопасности 123",
      city: "Тбилиси, Грузия 0108",
      emergencyLine: "24/7 Экстренная линия",
      responseTime: "Ответ в течение 2 часов"
    },

    businessHours: {
      weekdays: "8:00 - 18:00",
      saturday: "9:00 - 16:00",
      sunday: "Только экстренные вызовы",
      emergency: "24/7 Доступно"
    },

    hero: {
      title: "Защитите ваше",
      titleHighlight: "Спокойствие",
      subtitle: "Профессиональные системы камер видеонаблюдения для домов и бизнеса. Экспертная установка, премиальное оборудование и поддержка 24/7 для того, что важнее всего.",
      primaryButton: "Бесплатная консультация",
      secondaryButton: "Посмотреть услуги",
      stats: {
        installations: { number: "500+", label: "Установок" },
        support: { number: "24/7", label: "Поддержка" },
        rating: { number: "5★", label: "Рейтинг сервиса" }
      }
    },

    services: {
      title: "Наши решения безопасности",
      subtitle: "От консультации до установки и постоянной поддержки, мы предоставляем комплексные решения камер видеонаблюдения, адаптированные под ваши конкретные потребности.",
      items: [
        {
          title: "Продажа камер видеонаблюдения",
          description: "Широкий выбор высококачественных камер видеонаблюдения для жилых и коммерческих объектов. От базового наблюдения до систем с ИИ.",
          features: ["HD и 4K камеры", "Ночное видение", "Беспроводные и проводные варианты", "Умное обнаружение"]
        },
        {
          title: "Профессиональная установка",
          description: "Экспертные услуги установки, обеспечивающие оптимальное размещение камер и конфигурацию системы для максимального покрытия безопасности.",
          features: ["Оценка объекта", "Профессиональная установка", "Настройка сети", "Конфигурация системы"]
        },
        {
          title: "Обслуживание и поддержка",
          description: "Комплексные услуги обслуживания и техническая поддержка 24/7 для бесперебойной работы вашей системы безопасности.",
          features: ["Регулярное обслуживание", "Поддержка 24/7", "Обновления ПО", "Устранение неполадок"]
        }
      ]
    },

    products: {
      title: "Премиальные камеры видеонаблюдения",
      subtitle: "Выберите из нашей новейшей коллекции камер видеонаблюдения, разработанных для любого применения и бюджета.",
      viewMore: "Подробнее",
      items: [
        {
          name: "Внутренняя купольная камера",
          price: "299₾",
          features: ["1080p HD", "Ночное видение", "Обнаружение движения", "Мобильное приложение"]
        },
        {
          name: "Наружная цилиндрическая камера",
          price: "449₾",
          features: ["4K Ultra HD", "Всепогодная", "Умные уведомления", "Облачное хранение"]
        },
        {
          name: "PTZ камера видеонаблюдения",
          price: "899₾",
          features: ["Покрытие 360°", "Возможность зума", "Автоотслеживание", "Профессиональный класс"]
        },
        {
          name: "Полный системный пакет",
          price: "1,999₾",
          features: ["8-камерная система", "DVR/NVR включен", "Профессиональная установка", "Гарантия 1 год"]
        }
      ]
    },

    portfolio: {
      title: "Наши последние проекты",
      subtitle: "Посмотрите, как мы помогли защитить дома и бизнес с помощью наших профессиональных установок камер видеонаблюдения.",
      items: [
        {
          title: "Жилая система безопасности",
          location: "Современный семейный дом",
          description: "Полное решение безопасности с 6 камерами, покрывающими все входы"
        },
        {
          title: "Коммерческое офисное здание",
          location: "Центральный деловой район",
          description: "Продвинутая система наблюдения с 24 камерами и центральным мониторингом"
        },
        {
          title: "Безопасность розничного магазина",
          location: "Торговый центр",
          description: "Стратегическое размещение камер для предотвращения краж и безопасности клиентов"
        },
        {
          title: "Мониторинг склада",
          location: "Промышленный комплекс",
          description: "Комплексное покрытие большого склада с удаленным мониторингом"
        }
      ]
    },

    testimonials: [
      {
        name: "Нино Джавахишвили",
        role: "Домовладелец",
        content: "Альта Безопасность полностью изменила безопасность нашего дома. Установка была профессиональной, а камеры обеспечивают кристально четкие кадры днем и ночью.",
        rating: 5
      },
      {
        name: "Георгий Нацвлишвили",
        role: "Владелец бизнеса",
        content: "Отличный сервис от консультации до установки. Наш розничный магазин никогда не был так безопасен. Настоятельно рекомендую Альта Безопасность.",
        rating: 5
      },
      {
        name: "Тамар Кавтарадзе",
        role: "Управляющий недвижимостью",
        content: "Мы работаем с Альта Безопасность на нескольких объектах. Их экспертиза и надежность делают их нашим основным партнером по безопасности.",
        rating: 5
      }
    ],

    about: {
      title: "Почему выбрать Альта Безопасность?",
      subtitle: "С более чем десятилетним опытом в решениях безопасности, Альта Безопасность стала надежным выбором для домовладельцев и бизнеса, ищущих надежную защиту.",
      points: [
        "Сертифицированные специалисты по безопасности с обширной подготовкой",
        "Премиальное оборудование от ведущих производителей",
        "Комплексные гарантии и постоянная поддержка",
        "Индивидуальные решения для ваших конкретных потребностей",
        "Мониторинг 24/7 и техническая помощь",
        "Конкурентные цены с прозрачными предложениями"
      ],
      stats: {
        experience: { number: "10+", label: "Лет опыта" },
        satisfaction: { number: "100%", label: "Удовлетворенность клиентов" },
        rating: { number: "A+", label: "Рейтинг BBB" }
      }
    },

    contactSection: {
      title: "Получите бесплатную консультацию по безопасности",
      subtitle: "Готовы защитить свою собственность? Свяжитесь с нами сегодня для бесплатной консультации и индивидуального решения безопасности, разработанного специально для вас.",
      form: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        phone: "Телефон",
        propertyType: "Тип недвижимости",
        propertyOptions: [
          "Жилой дом",
          "Коммерческое здание",
          "Розничный магазин",
          "Склад",
          "Офисное здание",
          "Другое"
        ],
        projectDetails: "Детали проекта",
        projectPlaceholder: "Расскажите нам о ваших потребностях в безопасности, количестве камер, конкретных зонах для мониторинга и т.д.",
        submitButton: "Получить бесплатную консультацию"
      },
      consultationIncludes: {
        title: "Бесплатная консультация включает:",
        items: [
          "Оценка безопасности объекта",
          "Индивидуальный дизайн системы",
          "Детальное предложение проекта",
          "Рекомендации по оборудованию"
        ]
      },
      contactInfo: "Контактная информация",
      workingHours: "Рабочие часы"
    },

    footer: {
      description: "Ваш надежный партнер в решениях безопасности. Мы защищаем дома и бизнес с помощью передовых технологий и профессионального сервиса.",
      copyright: "© 2025 Альта Безопасность. Все права защищены.",
      services: ["Продажа камер", "Установка", "Обслуживание", "Поддержка"],
      quickLinks: ["О нас", "Портфолио", "Контакты", "Политика конфиденциальности"]
    },

    navigation: {
      home: "Главная",
      services: "Услуги",
      products: "Продукты",
      portfolio: "Портфолио",
      about: "О нас",
      contact: "Контакты",
      getQuote: "Получить предложение"
    },

    ui: {
      clientsSay: "Что говорят наши клиенты",
      clientsSubtitle: "Не верьте только нам на слово - послушайте довольных клиентов"
    }
  }
};

export const getTranslation = (language: Language): Translation => {
  return translations[language] || translations.ka;
};