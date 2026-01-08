import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [language, setLanguage] = useState('en');
  const swiperRef = useRef(null);
  const scrollRevealRef = useRef(null);

  const journeyCards = [
    {
      title: "ART",
      subtitle: "Art",
      icon: "ri-palette-line"
    },
    {
      title: "MEDIA",
      subtitle: "Media",
      icon: "ri-movie-line"
    },
    {
      title: "IDENTITET / MADE IN ALBANIA",
      subtitle: "Identity / Made in Albania",
      icon: "ri-flag-2-line"
    }
  ];

  const contactItems = [
    {
      label: "Mail",
      value: "albaterravivacenter@gmail.com",
      href: "mailto:albaterravivacenter@gmail.com",
      icon: "ri-mail-line"
    },
    {
      label: "Cel",
      value: "00355692573658",
      href: "tel:00355692573658",
      icon: "ri-phone-line"
    },
    {
      label: "Insta",
      value: "https://www.instagram.com/albaterraviva/",
      href: "https://www.instagram.com/albaterraviva/",
      icon: "ri-instagram-line",
      newTab: true
    }
  ];

  const translations = {
    en: {
      nav: {
        home: "HOME",
        about: "ABOUT",
        tour: "TOUR",
        package: "PACKAGE",
        contact: "CONTACT",
        bookTrip: "CONTACT US"
      },
      hero: {
        elevate: "ELEVATE YOUR TRAVEL JOURNEY",
        step1Title: "Experience The Magic Of Flight!",
        step1Desc: "Discover extraordinary destinations from the skies",
        step2Title: "Journey To Your Dreams",
        step2Desc: "Create unforgettable memories with tailored adventures",
        step3Title: "Explore The World Above",
        step3Desc: "See the world from a perspective you've never imagined",
        bookButton: "Discover More"
      },
      about: {
        label: "ABOUT",
        title: "ALBA TERRA VIVA CENTER",
        paragraphs: [
          "ALBA TERRA VIVA CENTER is an institution whose purpose is to strengthen civic sustainability, promote cultural development, advance tourism, and foster environmental sustainability; to empower individuals through education and intercultural exchange between Albania and other international cultures; to raise awareness; and to encourage, promote, and support the development of Albanian society. The Center also aims to establish an inclusive, multifunctional space for the implementation of intercultural, environmental, artistic, ecological, academic, gastronomic, sporting, recreational, and social activities.",
          "Furthermore, the Center seeks to enhance social well-being through the implementation of projects and initiatives undertaken in accordance with the objectives set out in its statute and strategic plan."
        ],

        imageAlt: "ALBA TERRA VIVA CENTER community"
      },
      tourism: {
        title: "2. TOURISM",
        paragraphs: [
          "ALBA TERRA VIVA CENTER carries out activities in the field of sustainable tourism development by undertaking concrete actions and implementing both theoretical and practical initiatives for young people in tourism-related fields, with the aim of protecting local communities and preserving their ways of life."
        ],
        cards: [
          {
            title: "Tradition and Futurism",
            location: "New York City, USA",
            rating: "4.7",
            image: "/assets/destination-1.jpg"
          },
          {
            title: "The City of Lights",
            location: "Paris, France",
            rating: "4.5",
            image: "/assets/destination-2.jpg"
          },
          {
            title: "Island of the Gods",
            location: "Bali, Indonesia",
            rating: "4.8",
            image: "/assets/destination-3.jpg"
          }
        ]
      },
      showcase: {
        title: "CULTURE",
        paragraphs: [
          "ALBA TERRA VIVA CENTER is committed to the protection and promotion of all cultures present in Albania and beyond through art and cultural heritage, fostering constructive social and economic reflection, and strengthening national and international cultural exchanges while preserving and promoting authenticity."
        ],
        button: "Book A Flight Now"
      },
      sustainability: {
        title: "4. SUSTAINABILITY",
        paragraphs: [
          "ALBA TERRA VIVA CENTER provides services and supports the organization and promotion of initiatives related to ecological activities; the protection of natural ecosystems and biodiversity; tourism development; and intercultural, environmental, artistic, academic, gastronomic, sporting, recreational, and social activities.",
          "These initiatives contribute to improving quality of life and generating a positive impact on society, while also promoting sustainable development by empowering local communities to enhance their social and economic well-being and to ensure long-term continuity."
        ]
      },
      banner: {
        exp: "Years Experience",
        clients: "Happy Clients",
        ratings: "Overall Ratings"
      },
      discover: {
        title: "Focus Areas",
        description: "Rural initiatives, activities, and promotion."
      },
      journey: {
        title: "Journey To The Sky Made Simple!",
        description: "Effortless Planning for Your Next Adventure",
        cards: journeyCards
      },
      clients: {
        title: "Loved By Over Thousand Travelers",
        description: "Discover the stories of wanderlust and cherished memories through the eyes of our valued clients."
      },
      consulting: {
        title: "5. CONSULTING",
        features: [
          {
            title: "EVENTE",
            subtitle: "Events",
            icon: "ri-calendar-event-line"
          },
          {
            title: "SOCIALE",
            subtitle: "Social",
            icon: "ri-team-line"
          },
          {
            title: "QËNDRUESHMËRI / ZHVILLIM",
            subtitle: "Developement",
            icon: "ri-leaf-line"
          }
        ],
        paragraphs: [
          "ALBA TERRA VIVA CENTER provides consultancy services to public institutions, local authorities, non-governmental organizations, and private stakeholders in Albania throughout the entire project development cycle in the humanitarian, tourism, cultural, and technological fields, with an educational, cultural, and social focus—from territorial analysis and strategic planning to product structuring and destination positioning.",
          "Our approach integrates field-based knowledge of Albanian territories with international methodologies in sustainable tourism, spatial planning, and destination management. By collaborating with a network of national and international experts, we deliver concrete and implementable solutions focused on long-term value creation, community engagement, and the responsible development of emerging destinations."
        ]
      },
      contact: {
        title: "6. CONTACT",
        description: "Reach us by email, phone, or Instagram, or send a message.",
        items: contactItems,
        form: {
          nameLabel: "Full Name",
          namePlaceholder: "Enter your name",
          emailLabel: "Email Address",
          emailPlaceholder: "Enter your email",
          messageLabel: "Message",
          messagePlaceholder: "Write your message",
          button: "Send Message"
        }
      }
    },
    al: {
      nav: {
        home: "SHTËPI",
        about: "RRETH",
        tour: "TURNE",
        package: "PAKET",
        contact: "KONTAKT",
        bookTrip: "REZERVO FLUTURIM"
      },
      hero: {
        elevate: "ZGJERO UDHËTIMIN TUAJ",
        step1Title: "Përjetoni Magjinë e Fluturimit!",
        step1Desc: "Zbulohet destinacione të jashtëzakonshme nga qielli",
        step2Title: "Udhëtim Drejt Ëndrrave Tuaja",
        step2Desc: "Krijoni kujtime të pakuptueshme me aventura të personalizuara",
        step3Title: "Eksploro Botën Nga Lart",
        step3Desc: "Shikoni botën nga një perspektivë që nuk e keni imagjinuar kurrë",
        bookButton: "Rezervo një Fluturim Tani"
      },
      about: {
        label: "RRETH NESH",
        title: "ALBA TERRA VIVA CENTER",
        paragraphs: [
          "ALBA TERRA VIVA CENTER është një Qendër që ka për qëllim forcimin e qëndrueshmërisë qytetare, zhvillimin kulturor, zhvillimin e turzmit dhe qëndrueshmërinë mjedisore, fuqizimin e individëve nëpërmjet arsimit dhe shkëmbimit kulturor mes Shqipërisë dhe kulturave të tjera të huaja, rritjen e sensibilizimit, inkurajimin, promovimin dhe zhvillimin e shoqërisë shqiptare, ndërtimin e një hapësire multifunksionale gjithëpërfshirëse për zhvillimin e aktiviteteve ndërkulturore, mjedisore, artistike, ekologjike, akademike, gastronomike, sportive, rekreative dhe sociale.",
          "Gjithashtu Qendra ka për qëllim përmirësimin e jetës sociale përmes zbatimit të projekteve dhe të aksioneve që do të ndërmerren, bazuar në objektivat e parashikuara nga statuti dhe nga plani i saj strategjik."
        ],
  
        imageAlt: "Komuniteti ALBA TERRA VIVA CENTER"
      },
      tourism: {
        title: "2. TURIZMI",
        paragraphs: [
          "Qendra ALBA TERRA VIVA CENTER ushtron veprimtari në zhvillimin e Turizmit  të qëndrueshëm duke ndërmarë aksione konkrete në zhvillimin e aktiviteteve teorike dhe praktike për të rinj në fushat e turizmit me qëllim mbrojtjen e komuniteteve dhe mënyrën së tyre të jetesës."
        ],
        cards: [
          {
            title: "Traditë dhe Futurizëm",
            location: "Nju Jork, SHBA",
            rating: "4.7",
            image: "/assets/destination-1.jpg"
          },
          {
            title: "Qyteti i Dritave",
            location: "Paris, Francë",
            rating: "4.5",
            image: "/assets/destination-2.jpg"
          },
          {
            title: "Ishulli i Perëndive",
            location: "Bali, Indonezi",
            rating: "4.8",
            image: "/assets/destination-3.jpg"
          }
        ]
      },
      showcase: {
        title: "3. CULTURE",
        paragraphs: [
          "ALBA TERRA VIVA CENTER është e angazhuar në mbrojtjen dhe promovimin e të gjitha kulturave të pranishme në Shqipëri dhe më gjerë nëpërmjet artit dhe trashëgimisë kulturore, reflektimeve produktive, sociale dhe ekonomike si dhe forcimin e shkëmbimeve kulturore kombëtare e më gjerë duke ruajtur dhe promovuar autenticitetin."
        ],
        button: "Rezervo një Fluturim Tani"
      },
      sustainability: {
        title: "4. SUSTAINABILITY",
        paragraphs: [
          "ALBA TERRA VIVA CENTER ofron dhënien e shërbimeve, organizimin, promovimin dhe mbështetjen për: realizimin e aktiviteteve ekologjike, mbrojtjen e ekosistemeve në natyrë, biodiversitetin, realizimin aktiviteteve për turizmin, aktiviteteve ndërkulturore, mjedisore, artistike, akademike, gastronomike, sportive, rekreative dhe sociale,",
          "të cilat ndihmojnë në përmirësimin e jetës dhe që kane impakt pozitiv në shoqëri, gjithashtu nxisin zhvillimin e qëndrueshëm duke fuqizuar komunitetet lokale për rritje të mirqënies së tyre sociale e ekonomike duke krijuar vazhdimësi."
        ]
      },
      banner: {
        exp: "Vite Përvoje",
        clients: "Klientë të Lumtur",
        ratings: "Vlerësimet Në Përgjithësi"
      },
      discover: {
        title: "Fushat e Veprimtarisë",
        description: "Nisma rurale, aktivitete dhe promovim."
      },
      journey: {
        title: "Journey To The Sky Made Simple!",
        description: "Effortless Planning for Your Next Adventure",
        cards: journeyCards
      },
      clients: {
        title: "I Dashur Nga Mijëra Udhëtarë",
        description: "Zbulohet Historitë e Dëshirës për Udhëtim dhe Kujtimeve të Dashura Nëpërmjet Syve të Klientëve Tanë të Vlerësuar."
      },
      consulting: {
        title: "5. CONSULTING",
        features: [
          {
            title: "EVENTE",
            subtitle: "Events",
            icon: "ri-calendar-event-line"
          },
          {
            title: "SOCIALE",
            subtitle: "Social",
            icon: "ri-team-line"
          },
          {
            title: "QËNDRUESHMËRI / ZHVILLIM",
            subtitle: "Developement",
            icon: "ri-leaf-line"
          }
        ],
        paragraphs: [
          "ALBA TERRA VIVA CENTER ofron sherimin e konsulencës për institucionet publike, autoritetet vendore, organizatat joqeveritare dhe aktorët privatë në Shqipëri përgjatë të gjithë ciklit të projekteve të zhvillimit në fushat humanitare, turizmit, kulturore, teknologjike me fokus edukativ, kulturor e social: nga analiza territoriale, planifikimi strategjik, strukturimi i produkteve, deri te pozicionimi i destinacioneve.",
          "Qasja jonë kombinon njohuritë e bazuara në terren mbi territorët shqiptare me metodologji ndërkombëtare në turizmin e qëndrueshëm, planifikimin hapësinor dhe menaxhimin e destinacioneve. Duke bashkëpunuar me një rrjet ekspertësh vendas dhe ndërkombëtarë, ne ofrojmë zgjidhje konkrete dhe të zbatueshme, të fokusuara në krijimin e vlerës afatgjatë, përfshirjen e komuniteteve dhe zhvillimin e përgjegjshëm të destinacioneve në zhvillim."
        ]
      },
      contact: {
        title: "6. CONTACT",
        description: "Na kontaktoni me email, telefon ose Instagram, ose dergoni nje mesazh.",
        items: contactItems,
        form: {
          nameLabel: "Emri i Plote",
          namePlaceholder: "Shkruani emrin tuaj",
          emailLabel: "Adresa e Emailit",
          emailPlaceholder: "Shkruani emailin tuaj",
          messageLabel: "Mesazhi",
          messagePlaceholder: "Shkruani mesazhin tuaj",
          button: "Dergoni Mesazhin"
        }
      }
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  const steps = [
    {
      title: t.hero.step1Title,
      description: t.hero.step1Desc
    },
    {
      title: t.hero.step2Title,
      description: t.hero.step2Desc
    },
    {
      title: t.hero.step3Title,
      description: t.hero.step3Desc
    }
  ];

  useEffect(() => {
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    if (typeof window.ScrollReveal === "function") {
      const scrollReveal = window.ScrollReveal();
      scrollRevealRef.current = scrollReveal;

      scrollReveal.reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
      });
      scrollReveal.reveal(".header__content p", {
        ...scrollRevealOption,
        delay: 500,
      });
      scrollReveal.reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 1000,
      });
      scrollReveal.reveal(".header__btns", {
        ...scrollRevealOption,
        delay: 1500,
      });

      scrollReveal.reveal(".about__content", {
        ...scrollRevealOption,
      });
      scrollReveal.reveal(".about__image", {
        ...scrollRevealOption,
        origin: "right",
        delay: 300,
      });

      scrollReveal.reveal(".destination__card", {
        ...scrollRevealOption,
        interval: 500,
      });

      scrollReveal.reveal(".showcase__image img", {
        ...scrollRevealOption,
        origin: "left",
      });
      scrollReveal.reveal(".showcase__content h4", {
        ...scrollRevealOption,
        delay: 500,
      });
      scrollReveal.reveal(".showcase__content p", {
        ...scrollRevealOption,
        delay: 1000,
      });
      scrollReveal.reveal(".showcase__btn", {
        ...scrollRevealOption,
        delay: 1500,
      });
      scrollReveal.reveal(".sustainability__content", {
        ...scrollRevealOption,
      });
      scrollReveal.reveal(".sustainability__art", {
        ...scrollRevealOption,
        origin: "right",
        delay: 300,
      });

      scrollReveal.reveal(".banner__card", {
        ...scrollRevealOption,
        interval: 500,
      });

      scrollReveal.reveal(".discover__card", {
        ...scrollRevealOption,
        interval: 500,
      });
      scrollReveal.reveal(".journey__card", {
        ...scrollRevealOption,
        interval: 500,
      });
      scrollReveal.reveal(".consulting__feature", {
        ...scrollRevealOption,
        interval: 300,
      });
      scrollReveal.reveal(".consulting__card", {
        ...scrollRevealOption,
        delay: 300,
      });
      scrollReveal.reveal(".contact__info", {
        ...scrollRevealOption,
      });
      scrollReveal.reveal(".contact__form", {
        ...scrollRevealOption,
        origin: "right",
        delay: 300,
      });
      scrollReveal.reveal(".contact__item", {
        ...scrollRevealOption,
        interval: 200,
      });
    }

    if (window.Swiper) {
      swiperRef.current = new window.Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }

    // Auto-rotate steps every 5 seconds
    const stepInterval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(stepInterval);
      if (swiperRef.current && typeof swiperRef.current.destroy === "function") {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }

      if (
        scrollRevealRef.current &&
        typeof scrollRevealRef.current.destroy === "function"
      ) {
        scrollRevealRef.current.destroy();
        scrollRevealRef.current = null;
      }
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#" className="logo" aria-label="Alba Terra Viva Center">
              <img
                src="/assets/20off.jpg"
                alt="Alba Terra Viva Center logo"
                className="logo__image"
              />
            </a>
          </div>
          <div className="nav__menu__btn" onClick={handleMenuToggle}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul
          className={`nav__links${isMenuOpen ? " open" : ""}`}
          onClick={handleNavClick}
        >
          <li>
            <a href="#home">{t.nav.home}</a>
          </li>
          <li>
            <a href="#about">{t.nav.about}</a>
          </li>
          <li>
            <a href="#tour">{t.nav.tour}</a>
          </li>
          <li>
            <a href="#package">{t.nav.package}</a>
          </li>
          <li>
            <a href="#contact">{t.nav.contact}</a>
          </li>
          <li>
            <a href="#">{t.nav.bookTrip}</a>
          </li>
        </ul>
        <div className="nav__btns">
          <div className="nav__lang">
            <button 
              className={`lang__btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
            <button 
              className={`lang__btn ${language === 'al' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('al')}
            >
              AL
            </button>
          </div>
          <button className="btn">{t.nav.bookTrip}</button>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero__panel">
          <div className="header__container">
            <div className="header__content">
              <div className="hero__steps" aria-hidden="true">
                <span 
                  className={`hero__step ${activeStep === 0 ? "is-active" : ""}`}
                  onClick={() => handleStepClick(0)}
                  role="button"
                  tabIndex={0}
                >
                  1
                </span>
                <span 
                  className={`hero__step ${activeStep === 1 ? "is-active" : ""}`}
                  onClick={() => handleStepClick(1)}
                  role="button"
                  tabIndex={0}
                >
                  2
                </span>
                <span 
                  className={`hero__step ${activeStep === 2 ? "is-active" : ""}`}
                  onClick={() => handleStepClick(2)}
                  role="button"
                  tabIndex={0}
                >
                  3
                </span>
              </div>
              <p>{t.hero.elevate}</p>
              <h1 className="hero__content-fade">{steps[activeStep].title}</h1>
              <p className="hero__description-fade">{steps[activeStep].description}</p>
              <div className="header__btns">
                <button className="btn">{t.hero.bookButton}</button>
                <button
                  className="hero__play"
                  type="button"
                  aria-label="Watch video"
                >
                  <i className="ri-play-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>

      <section className="section__container about__container" id="about">
        <div className="about__card">
          <div className="about__content">
            <span className="about__pill">{t.about.label}</span>
            <h2 className="about__title">{t.about.title}</h2>
            <div className="about__copy">
              {t.about.paragraphs.map((paragraph, index) => (
                <p className="about__text" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="about__actions">
              <button className="btn about__btn" type="button">
                {t.about.button}
              </button>
            </div>
          </div>
          <div className="about__image">
            <img src="/assets/showcase.jpg" alt={t.about.imageAlt} />
          </div>
        </div>
      </section>

      <section className="section__container destination__container tourism__container" id="tour">
        <h2 className="section__header">{t.tourism.title}</h2>
        <div className="tourism__description">
          {t.tourism.paragraphs.map((paragraph, index) => (
            <p className="section__description" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="destination__grid">
          {t.tourism.cards.map((card, index) => (
            <div className="destination__card" key={`${card.title}-${index}`}>
              <img src={card.image} alt={card.title} />
              <div className="destination__card__details">
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.location}</p>
                </div>
                <div className="destination__rating">
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  {card.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section__container showcase__container" id="package">
        <div className="showcase__image">
          <img src="/assets/showcase.jpg" alt="showcase" />
        </div>
        <div className="showcase__content">
          <h4>{t.showcase.title}</h4>
          {t.showcase.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="showcase__btn">
            <button className="btn">
              {t.showcase.button}
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="section__container banner__container">
        <div className="banner__card">
          <h4>10+</h4>
          <p>{t.banner.exp}</p>
        </div>
        <div className="banner__card">
          <h4>12K</h4>
          <p>{t.banner.clients}</p>
        </div>
        <div className="banner__card">
          <h4>4.8</h4>
          <p>{t.banner.ratings}</p>
        </div>
      </section>

      <section className="section__container discover__container">
        <h2 className="section__header">{t.discover.title}</h2>
        <p className="section__description">
          {t.discover.description}
        </p>
        <div className="discover__grid">
          <div className="discover__card">
            <span>
              <i className="ri-leaf-line"></i>
            </span>
            <h4>RURAL</h4>
            <p className="discover__subtitle">Rural / Paysan</p>
          </div>
          <div className="discover__card">
            <span>
              <i className="ri-run-line"></i>
            </span>
            <h4>AKTIVITETE</h4>
            <p className="discover__subtitle">Activities</p>
          </div>
          <div className="discover__card">
            <span>
              <i className="ri-megaphone-line"></i>
            </span>
            <h4>PROMOVIM</h4>
            <p className="discover__subtitle">Promotion all</p>
          </div>
        </div>
      </section>

      <section className="section__container journey__container">
        <h2 className="section__header">{t.journey.title}</h2>
        <p className="section__description">{t.journey.description}</p>
        <div className="journey__grid">
          {t.journey.cards.map((card, index) => (
            <div className="journey__card" key={`${card.title}-${index}`}>
              <div className="journey__card__bg">
                <span>
                  <i className={card.icon}></i>
                </span>
                <h4>{card.title}</h4>
              </div>
              <div className="journey__card__content">
                <span>
                  <i className={card.icon}></i>
                </span>
                <h4>{card.title}</h4>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section__container sustainability__container" id="sustainability">
        <div className="sustainability__card">
          <div className="sustainability__content">
            <h2 className="sustainability__title">{t.sustainability.title}</h2>
            <div className="sustainability__copy">
              {t.sustainability.paragraphs.map((paragraph, index) => (
                <p className="sustainability__text" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="sustainability__art" aria-hidden="true">
            <div className="sustainability__icon">
              <i className="ri-leaf-line"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container client__container">
        <h2 className="section__header">{t.clients.title}</h2>
        <p className="section__description">
          {t.clients.description}
        </p>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client__card">
                <div className="client__content">
                  <div className="client__rating">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    Skywings has completely transformed my travel experience.
                    From finding hidden gems in bustling cities to discovering
                    serene retreats off the beaten path, every detail was
                    thoughtfully arranged. I can&apos;t recommend Skywings enough for
                    anyone looking to elevate their travel experience!
                  </p>
                </div>
                <div className="client__details">
                  <img src="/assets/client-1.jpg" alt="client" />
                  <div>
                    <h4>John Adams</h4>
                    <h5>Travel Blogger</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <div className="client__content">
                  <div className="client__rating">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    My recent adventure with Skywings was nothing short of
                    spectacular. The personalized itineraries and recommendations
                    they provided led me to extraordinary locations that I would
                    never have found on my own. I&apos;m already planning my next
                    adventure with them!
                  </p>
                </div>
                <div className="client__details">
                  <img src="/assets/client-2.jpg" alt="client" />
                  <div>
                    <h4>Emily Thompson</h4>
                    <h5>Adventure Enthusiast</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <div className="client__content">
                  <div className="client__rating">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    Skywings offered a transformative experience for my research
                    into historical landmarks. The unique aerial perspectives and
                    provided a new level of appreciation and insight into the
                    sites I studied. I highly recommend their services to fellow
                    historians and cultural enthusiasts.
                  </p>
                </div>
                <div className="client__details">
                  <img src="/assets/client-3.jpg" alt="client" />
                  <div>
                    <h4>Sarah Lee</h4>
                    <h5>Cultural Historian</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <div className="client__content">
                  <div className="client__rating">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    Finding a balance between work and travel can be challenging,
                    but Skywings made it effortless. Their efficient planning and
                    excellent recommendations helped me maximize my downtime and
                    enjoy every moment of my trip. I look forward to working with
                    them again on future travels.
                  </p>
                </div>
                <div className="client__details">
                  <img src="/assets/client-4.jpg" alt="client" />
                  <div>
                    <h4>David Patel</h4>
                    <h5>Business Executive</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-next"></div>

            <div className="swiper-button-prev"></div>

          </div>
        </div>
      </section>

      <section className="section__container consulting__container" id="consulting">
        <h2 className="section__header consulting__title">{t.consulting.title}</h2>
        <div className="consulting__features">
          {t.consulting.features.map((feature, index) => (
            <div className="consulting__feature" key={`${feature.title}-${index}`}>
              <span>
                <i className={feature.icon}></i>
              </span>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="consulting__card">
          <div className="consulting__copy">
            {t.consulting.paragraphs.map((paragraph, index) => (
              <p className="consulting__text" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section__container contact__container" id="contact">
        <div className="contact__card">
          <div className="contact__info">
            <h2 className="contact__title">{t.contact.title}</h2>
            <p className="contact__description">{t.contact.description}</p>
            <div className="contact__list">
              {t.contact.items.map((item, index) => (
                <div className="contact__item" key={`${item.label}-${index}`}>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4>{item.label}</h4>
                    <a
                      href={item.href}
                      {...(item.newTab ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact__form" action="#">
            <div className="contact__field">
              <label htmlFor="contact-name">{t.contact.form.nameLabel}</label>
              <input
                id="contact-name"
                type="text"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">{t.contact.form.emailLabel}</label>
              <input
                id="contact-email"
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">{t.contact.form.messageLabel}</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>
            <button className="btn contact__btn" type="submit">
              {t.contact.form.button}
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="section__container footer__container">
          <div className="footer__main">
            <div className="footer__col footer__brand">
              <div className="footer__logo">
                <a href="#" className="logo" aria-label="Alba Terra Viva Center">
                  <img
                    src="/assets/20off.jpg"
                    alt="Alba Terra Viva Center logo"
                    className="logo__image"
                  />
                </a>
              </div>
              <p>
                Explore the world with ease and excitement through our
                comprehensive travel platform. Your journey begins here, where
                seamless planning meets unforgettable experiences.
              </p>
              <a
                className="footer__email"
                href="mailto:albaterravivacenter@gmail.com"
              >
                albaterravivacenter@gmail.com
              </a>
              <ul className="footer__socials">
                <li>
                  <a href="#">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-youtube-line"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__columns">
              <div className="footer__col">
                <h4>Quick Links</h4>
                <ul className="footer__links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Flights</a>
                  </li>
                  <li>
                    <a href="#">Hotels</a>
                  </li>
                  <li>
                    <a href="#">Cruise</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4>Contact Us</h4>
                <ul className="footer__links">
                  <li>
                    <a href="#">
                      <span>
                        <i className="ri-phone-fill"></i>
                      </span>
                      +91 9876543210
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="ri-record-mail-line"></i>
                      </span>
                      info@skywings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="ri-map-pin-2-fill"></i>
                      </span>
                      New Delhi, India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section__container footer__bar">
          <ul className="footer__policy">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
          <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
