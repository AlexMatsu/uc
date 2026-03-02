import imgImage1421 from  "../assets/imageHeadeRight.png";
import imgImage311 from  "../assets/backgroundTopo.png";
import imgImage312 from  "../assets/comoJogar.png";
import imgImage313 from "../assets/faq.png";
import imgImage from  "../assets/prison.png";
import imgImage1 from  "../assets/prison.png";
import imgSobreNos from  "../assets/sobreNos.png";
import svgPaths from "../imports/svg-5fboeo0h4s";
import svgPathsComoJogar from "../imports/svg-ebbd9an7tr";
import { ChevronDown, ChevronUp, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import NavbarMobile from "../imports/Navbar-12-17047";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Verificar se as fontes foram carregadas
  useEffect(() => {
    // Verificar se a API de Font Loading está disponível
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('700 1em "EtruscoNowCondensed:Bold"'),
        document.fonts.load('500 1em "EtruscoNow:Medium"')
      ]).then(() => {
        setFontsLoaded(true);
      }).catch(() => {
        // Se falhar, usar fontes fallback
        setFontsLoaded(true);
      });
    } else {
      // Se a API não estiver disponível, assumir que as fontes estão carregadas
      setTimeout(() => setFontsLoaded(true), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#080a10] text-white" style={{ visibility: fontsLoaded ? 'visible' : 'hidden' }}>
      <Navigation />
      <HeroSection />
      <ComoJogarSection />
      <SobreNosSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [onlineCount, setOnlineCount] = useState(316);
  const [online24h, setOnline24h] = useState(930);

  // Simulate online count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0d0d0d] fixed top-0 w-full h-[93px] lg:h-[93px] z-[100]">
      {/* Desktop Navigation */}
      <div className="hidden lg:block relative h-full max-w-[1920px] mx-auto">
        {/* Left Section - Logo + Menu */}
        <div className="absolute flex gap-[16px] items-center left-[80px] top-[19px]">
          {/* Logo */}
          <Logo className="w-[244px]" />

          {/* Desktop Menu Items */}
          <div className="flex font-['EtruscoNowCondensed:Bold',sans-serif] gap-[32px] items-center leading-[1.2] text-[20px]">
            <a href="#inicio" className="text-[#dcdddf] hover:text-white transition-colors">
              INICIO
            </a>
            <a href="#como-jogar" className="text-[#797979] hover:text-white transition-colors">
              COMO JOGAR
            </a>
            <a href="#sobre-nos" className="text-[#797979] hover:text-white transition-colors">
              SOBRE NÓS
            </a>
            <a href="#faq" className="text-[#797979] hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* Right Section - Online Counter + Buttons */}
        <div className="absolute flex gap-[13px] items-end right-[80px] top-[23px]">
          {/* Online Counter */}
          <div className="flex flex-col font-['EtruscoNowCondensed:Bold',sans-serif] items-end pb-[9px]">
            <div className="flex gap-[10px] items-center leading-[1.2] text-center">
              <p className="text-[#ebe9e9] text-[24px] uppercase">ONLINE:</p>
              <p className="text-[#f81e1f] text-[32px]">{onlineCount}</p>
            </div>
            <div className="flex flex-col justify-center leading-[0] text-[16px]">
              <p>
                <span className="text-[#797979]">Online last 24 hours: </span>
                <span className="text-[#b2b2b2]">{online24h}</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[20px] items-center">
            <button className="bg-[#f81e1f] hover:bg-[#d91919] transition-colors h-[42px] w-[155px] rounded-[2px] flex items-center justify-center px-[16px]">
              <span className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[normal] text-[#f6f4f9] text-[20px]">
                CADASTRAR-SE
              </span>
            </button>
            <button className="bg-[#232323] hover:bg-[#2a2a2a] transition-colors h-[42px] w-[155px] rounded-[2px] flex items-center justify-center px-[16px]">
              <span className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[1.2] text-[#f6f4f9] text-[20px]">
                LOGIN
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Figma Component */}
      <div className="lg:hidden h-[60px] relative">
        <NavbarMobile />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-[#0d0d0d] border-t border-[#232323] z-50 shadow-lg">
          <div className="flex flex-col">
            {/* Menu Links */}
            <a 
              href="#inicio" 
              onClick={handleLinkClick}
              className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg text-[#dcdddf] hover:text-white hover:bg-[#1a1a1a] transition-colors py-4 px-4 border-b border-[#232323]"
            >
              INICIO
            </a>
            <a 
              href="#como-jogar" 
              onClick={handleLinkClick}
              className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg text-[#797979] hover:text-white hover:bg-[#1a1a1a] transition-colors py-4 px-4 border-b border-[#232323]"
            >
              COMO JOGAR
            </a>
            <a 
              href="#sobre-nos" 
              onClick={handleLinkClick}
              className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg text-[#797979] hover:text-white hover:bg-[#1a1a1a] transition-colors py-4 px-4 border-b border-[#232323]"
            >
              SOBRE NÓS
            </a>
            <a 
              href="#faq" 
              onClick={handleLinkClick}
              className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg text-[#797979] hover:text-white hover:bg-[#1a1a1a] transition-colors py-4 px-4 border-b border-[#232323]"
            >
              FAQ
            </a>
            
            {/* Online Counter Mobile */}
            <div className="flex flex-col font-['EtruscoNowCondensed:Bold',sans-serif] py-4 px-4 border-b border-[#232323] bg-[#0a0c13]">
              <div className="flex gap-[10px] items-center">
                <p className="text-[#ebe9e9] text-[20px] uppercase">ONLINE:</p>
                <p className="text-[#f81e1f] text-[28px]">{onlineCount}</p>
              </div>
              <p className="text-[14px]">
                <span className="text-[#797979]">Online last 24 hours: </span>
                <span className="text-[#b2b2b2]">{online24h}</span>
              </p>
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 p-4 bg-[#0a0c13]">
              <button className="bg-[#f81e1f] hover:bg-[#d91919] transition-colors h-[42px] rounded-[2px] flex items-center justify-center">
                <span className="font-['EtruscoNowCondensed:Bold',sans-serif] text-[#f6f4f9] text-[18px]">
                  CADASTRAR-SE
                </span>
              </button>
              <button 
                className="bg-[#232323] hover:bg-[#2a2a2a] transition-colors h-[42px] rounded-[2px] flex items-center justify-center" 
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <span className="font-['EtruscoNowCondensed:Bold',sans-serif] text-[#f6f4f9] text-[18px]">
                  LOGIN
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="relative h-[924px] w-full overflow-hidden mt-[93px] lg:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute h-[924px] left-0 top-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-[113.34%] left-0 max-w-none top-[-1.37%] w-full" 
              src={imgImage311} 
            />
          </div>
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "linear-gradient(-90deg, rgba(0, 0, 0, 0) 52.604%, rgb(0, 0, 0) 96.536%), linear-gradient(rgba(0, 0, 0, 0) 88.268%, rgb(2, 1, 0) 100%)" 
            }} 
          />
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute h-[924px] left-0 top-0 w-full">
        <video 
          autoPlay 
          className="absolute max-w-none object-cover size-full" 
          controlsList="nodownload" 
          loop 
          muted
          playsInline
        >
          <source src="/_videos/v1/c5bd0f0c67bfd1fc06e13e8f106d8f3d9d4a4669" />
        </video>
      </div>

      {/* Shadow Ellipse (Desktop Only) */}
      <div className="absolute h-[47px] left-[67.34%] top-[82.8%] w-[27.6%] hidden xl:block">
        <div className="absolute inset-[-63.83%_-5.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 107">
            <g filter="url(#filter0_f_1_3852)">
              <ellipse cx="295" cy="53.5" fill="#150505" fillOpacity="0.79" rx="265" ry="23.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="107" id="filter0_f_1_3852" width="590" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_3852" stdDeviation="15" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Character Image (Desktop Only) */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[872px] left-[calc(50%+464px)] shadow-[24px_4px_21.2px_0px_rgba(255,0,0,0.25)] top-[calc(50%+26px)] w-[768px] hidden xl:block pointer-events-none">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-[114.16%] left-[-0.02%] max-w-none top-0 w-[113.76%]" 
              src={imgImage1421} 
            />
          </div>
          <div className="absolute bg-gradient-to-b from-[92.481%] from-[rgba(0,0,0,0)] inset-0 to-black" />
        </div>
      </div>

      {/* Content - Desktop Fixed Width como Figma */}
      <div className="hidden xl:block absolute left-[80px] top-[calc(50%-280px)] w-[837px] z-10">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
            {/* Badge + Title Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              {/* Badge */}
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path 
                      d={svgPaths.p10043500}
                      fill="white" 
                    />
                  </svg>
                </div>
                <p 
                  className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f6f4f9] text-[24px] uppercase w-[719px] whitespace-pre-wrap" 
                  style={{ textShadow: "11px 8px 27.5px black" }}
                >
                  Novo RPG Online
                </p>
              </div>

              {/* Title */}
              <div 
                className="content-stretch flex flex-col font-['EtruscoNowCondensed:Bold',sans-serif] items-start not-italic pb-[41px] relative shrink-0 text-[120px] text-white whitespace-pre-wrap" 
                style={{ textShadow: "26px 17px 22.9px rgba(0,0,0,0.38)" }}
              >
                <p className="h-[92px] leading-[94px] relative shrink-0 w-[531px]">UNDERCRIME</p>
                <p className="h-[140px] leading-[normal] relative shrink-0 w-[837px]">O SUB MUNDO É SEU!</p>
              </div>
            </div>

            {/* Description Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {/* Main Description */}
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p 
                  className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f6f4f9] text-[24px] uppercase w-[787px] whitespace-pre-wrap" 
                  style={{ textShadow: "11px 8px 27.5px black" }}
                >
                  Domine a cidade, construa seu império e escolha entre ser um lobo solitário ou liderar uma gangue.
                </p>
              </div>

              {/* Secondary Description + Buttons */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <p 
                  className="font-['EtruscoNow:Medium',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#dcdddf] text-[16px] w-[min-content] whitespace-pre-wrap" 
                  style={{ textShadow: "11px 8px 27.5px black" }}
                >
                  Undercrime é um RPG imersivo ambientado no submundo do crime. Cada escolha define seu futuro: alianças, traições e poder absoluto esperam por você.
                </p>

                {/* Buttons */}
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                  <button className="bg-[#f81e1f] hover:bg-[#d91919] transition-colors content-stretch flex flex-col h-[42px] items-center justify-center px-[16px] rounded-[2px] shrink-0 w-[237px]">
                    <div className="content-stretch flex items-center px-[8px] relative shrink-0">
                      <span className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f6f4f9] text-[20px]">
                        CADASTRAR-SE
                      </span>
                    </div>
                  </button>
                  <button className="bg-[#232323] hover:bg-[#2a2a2a] transition-colors content-stretch flex flex-col h-[42px] items-center justify-center px-[16px] rounded-[2px] shrink-0">
                    <div className="content-stretch flex items-center px-[8px] relative shrink-0">
                      <span className="font-['EtruscoNowCondensed:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f6f4f9] text-[20px]">
                        ASSISTA AO TRAILER
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content - Responsivo */}
      <div className="xl:hidden absolute w-full px-4 sm:px-6 md:px-8 top-6 sm:top-10 md:top-14 z-10">
        <div className="flex flex-col gap-6 lg:gap-[24px] max-w-full">
          {/* Badge + Title Section */}
          <div className="flex flex-col gap-4 lg:gap-[16px]">
            {/* Badge */}
            <div className="flex gap-2 items-center">
              <div className="relative shrink-0 size-5 sm:size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path 
                    d={svgPaths.p10043500}
                    fill="white" 
                  />
                </svg>
              </div>
              <p className="font-['EtruscoNowCondensed:Bold',sans-serif] text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.2] text-[#f6f4f9] uppercase" 
                 style={{ textShadow: "11px 8px 27.5px black" }}>
                Novo RPG Online
              </p>
            </div>

            {/* Title */}
            <div className="flex flex-col font-['EtruscoNowCondensed:Bold',sans-serif] text-white pb-0 lg:pb-[41px]">
              <h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] leading-[1.1] lg:leading-[0.9] text-left whitespace-nowrap" 
                style={{ textShadow: "26px 17px 22.9px rgba(0,0,0,0.38)" }}
              >
                UNDERCRIME
              </h1>
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] leading-[1.2] lg:leading-[1.1] text-left max-w-[90%]" 
                style={{ textShadow: "26px 17px 22.9px rgba(0,0,0,0.38)" }}
              >
                O SUB MUNDO É SEU!
              </p>
            </div>
          </div>

          {/* Main Description */}
          <div className="flex items-center">
            <p className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1.3] text-[#f6f4f9] uppercase max-w-full lg:max-w-[787px]" 
               style={{ textShadow: "11px 8px 27.5px black" }}>
              Domine a cidade, construa seu império e escolha entre ser um lobo solitário ou liderar uma gangue.
            </p>
          </div>

          {/* Secondary Description */}
          <p className="font-['EtruscoNow:Medium',sans-serif] text-sm sm:text-base lg:text-[16px] leading-[1.6] text-[#dcdddf] max-w-full" 
             style={{ textShadow: "11px 8px 27.5px black" }}>
            Undercrime é um RPG imersivo ambientado no submundo do crime. Cada escolha define seu futuro: alianças, traições e poder absoluto esperam por você.
          </p>

          {/* Character Image - Mobile Only */}
          <div className="relative w-full flex justify-center mt-4 mb-2 z-0">
            <img 
              alt="Character" 
              className="w-full max-w-md h-auto object-contain" 
              src={imgImage1421} 
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[16px] -mt-15 relative z-10">
            <button className="bg-[#f81e1f] hover:bg-[#d91919] transition-colors h-[42px] px-4 sm:px-[16px] rounded-[2px] flex items-center justify-center min-w-[180px] sm:min-w-[237px]">
              <span className="font-['EtruscoNowCondensed:Bold',sans-serif] text-[18px] sm:text-[20px] leading-[1.2] text-[#f6f4f9] px-2">
                CADASTRAR-SE
              </span>
            </button>
            <button className="bg-[#232323] hover:bg-[#2a2a2a] transition-colors h-[42px] px-4 sm:px-[16px] rounded-[2px] flex items-center justify-center">
              <span className="font-['EtruscoNowCondensed:Bold',sans-serif] text-[18px] sm:text-[20px] leading-[1.2] text-[#f6f4f9] px-2">
                ASSISTA AO TRAILER
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoJogarSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPathsComoJogar.p1f2f00} fill="#F81E1F" />
        </svg>
      ),
      title: "COMETA CRIMES",
      description: "Do pequeno assalto ao grande golpe. Ganhe respeito, dinheiro e notoriedade.",
      image: imgImage,
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPathsComoJogar.p115e9300} fill="#F81E1F" />
        </svg>
      ),
      title: "INVISTA NO MERCADO ILEGAL",
      description: "Tráfego, armas, clubes e negócios. Quanto mais arriscar, maior o lucro.",
      image: imgImage1,
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPathsComoJogar.p115e9300} fill="#F81E1F" />
        </svg>
      ),
      title: "EXPANDA SEU TERRITÓRIO",
      description: "Controle distritos, cobre taxas e defenda suas áreas contra gangues rivais",
      image: imgImage1,
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPathsComoJogar.pca0bbf0} fill="#F81E1F" />
        </svg>
      ),
      title: "LIDERE SUA GANGUE",
      description: "Recrute aliados, equipe-os e planeje ataques coordenados. O submundo respeita o poder.",
      image: imgImage1,
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="como-jogar" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="absolute w-full h-full object-cover" 
          src={imgImage312} 
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(-90deg, rgba(0, 0, 0, 0) 65.747%, rgba(0, 0, 0, 0.8) 95.885%), linear-gradient(rgba(0, 0, 0, 0) 83.769%, rgb(0, 0, 0) 100%), linear-gradient(-2.41388e-06deg, rgba(0, 0, 0, 0) 43.691%, rgb(0, 0, 0) 97.457%)" 
          }} 
        />
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-none pl-[20px] lg:pl-[80px] pr-4 lg:pr-[80px]">
          {/* Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              COMO JOGAR
            </h2>
            <div className="h-0.5 w-full max-w-[180px] bg-[#F81E1F]" />
            <p className="font-['EtruscoNow:Medium',sans-serif] text-base md:text-lg text-[#dcdddf] mt-8 leading-relaxed max-w-3xl">
              A personalidade do Undercrime é sombria e ousada, refletindo a atmosfera intensa do submundo do crime.
              <br /><br />
              É competitiva e estratégica, incentivando disputa e inteligência para crescer. Mantém um tom direto e provocador, aproximando-se dos jogadores de forma autêntica e desafiadora.
            </p>
          </div>
        </div>

        {/* Feature Cards - Horizontal Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4 md:gap-6 mb-8 pl-[80px] pr-[80px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0d0d0d] rounded-lg overflow-hidden hover:bg-[#151515] transition-colors"
              >
                <div className="h-32 bg-[#232323] overflow-hidden">
                  <img
                    src={feature.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg md:text-xl text-[#dcdddf]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-['EtruscoNow:Medium',sans-serif] text-sm text-[#dcdddf] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Carousel */}
          <div className="lg:hidden relative mb-8">
            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth px-[20px]"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <style>{`
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#0d0d0d] rounded-lg overflow-hidden flex-shrink-0 snap-center"
                  style={{ width: 'calc(100vw - 40px)' }}
                >
                  <div className="h-40 bg-[#232323] overflow-hidden">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      {feature.icon}
                      <h3 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-lg text-[#dcdddf]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-['EtruscoNow:Medium',sans-serif] text-sm text-[#dcdddf] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Mobile */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f81e1f] hover:bg-[#d91919] p-2 rounded-full shadow-lg transition-colors z-10"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
            
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#f81e1f] hover:bg-[#d91919] p-2 rounded-full shadow-lg transition-colors z-10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
          </div>

          {/* CTA Button */}
          <div className="pl-[20px] lg:pl-[80px] pr-4 lg:pr-[80px]">
            <button className="w-full md:w-auto bg-[#f81e1f] hover:bg-[#d91919] transition-colors px-8 py-3 rounded-sm font-['EtruscoNowCondensed:Bold',sans-serif] text-lg md:text-xl text-[#f6f4f9] uppercase">
              VER GUIA COMPLETO DO JOGO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SobreNosSection() {
  return (
    <section id="sobre-nos" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image from Figma */}
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="absolute w-full h-full object-cover" 
          src={imgSobreNos} 
        />
        <div 
          className="absolute inset-0 bg-black/50" 
        />
      </div>

      <div className="w-full pl-[20px] lg:pl-[80px] pr-4 lg:pr-[80px] relative z-10">
        <div className="max-w-none">
          {/* Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              SOBRE NÓS
            </h2>
            <div className="h-0.5 w-full max-w-xs bg-[#F81E1F]" />
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-12 max-w-4xl">
            <div>
              <h3 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-2xl md:text-3xl lg:text-4xl text-white mb-6">
                OQUE É UNDERCRIME
              </h3>
              <p className="font-['EtruscoNow:Medium',sans-serif] text-base md:text-lg text-[#dcdddf] leading-relaxed">
                Undercrime é um RPG online gratuito ambientado em uma cidade dominada pelo crime, onde cada jogador constrói seu próprio império no submundo.
                <br /><br />
                Aqui, você começa do nada — um simples criminoso de rua — e precisa subir na hierarquia da cidade através de assaltos, alianças e poder.
              </p>
            </div>

            <div>
              <h3 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-xl md:text-2xl text-white uppercase mb-6">
                NOSSA MISSÃO
              </h3>
              <p className="font-['EtruscoNow:Medium',sans-serif] text-base md:text-lg text-[#dcdddf] leading-relaxed">
                Criar um RPG urbano imersivo, competitivo e cheio de escolhas reais, inspirado nos clássicos dos anos 2000, mas repaginado com mecânicas modernas e uma atmosfera cinematográfica.
                <br /><br />
                Queremos que cada jogador sinta o peso de suas decisões, a adrenalina de crescer no submundo e a satisfação de ver seu nome no topo do ranking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é Undercrime?",
      answer:
        "Undercrime é um RPG urbano onde você constrói seu império no submundo da cidade. Escolha entre ser um lobo solitário ou liderar uma gangue, evolua suas habilidades e domine territórios.",
    },
    {
      question: "Como faço para criar uma conta?",
      answer:
        "Clique no botão 'Cadastre-se Agora' no topo da página e preencha o formulário com seus dados. Você receberá um email de confirmação para ativar sua conta.",
    },
    {
      question: "Esqueci minha senha. O que faço?",
      answer:
        "Na tela de login, clique em 'Esqueci minha senha'. Digite seu email cadastrado e você receberá instruções para redefinir sua senha.",
    },
    {
      question: "O jogo é gratuito?",
      answer:
        "Sim! Undercrime é completamente gratuito para jogar. Há opções de compras dentro do jogo para acelerar seu progresso, mas não são obrigatórios.",
    },
    {
      question: "Posso jogar em dispositivos móveis?",
      answer:
        "Sim, o jogo é otimizado para funcionar em navegadores desktop e mobile, permitindo que você jogue de qualquer lugar.",
    },
  ];

  return (
    <section id="faq" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="absolute w-full h-full object-cover" 
          src={imgImage313} 
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 18.625%), linear-gradient(270deg, rgba(0, 0, 0, 0) 32.292%, rgba(0, 0, 0, 0.8) 96.615%)" 
          }} 
        />
      </div>

      <div className="w-full pl-[20px] lg:pl-[80px] pr-4 lg:pr-[80px] relative z-10">
        <div className="max-w-none">
          {/* Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-['EtruscoNowCondensed:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <div className="h-0.5 w-full max-w-md bg-[#F81E1F]" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-colors ${
                  openIndex === index ? "bg-[#232323]" : "bg-[#0d0d0d]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#1a1a1a] transition-colors"
                >
                  <span
                    className={`font-['EtruscoNowCondensed:Bold',sans-serif] text-lg md:text-xl lg:text-2xl ${
                      openIndex === index ? "text-white" : "text-[#b2b2b2]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#797979] shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <p className="font-['EtruscoNow:Medium',sans-serif] text-base md:text-lg text-white leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}