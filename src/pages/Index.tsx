import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LightbulbIcon, Heart, Target, Globe, Play } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssistantCard from '../components/AssistantCard';
import CapabilityCarousel from '../components/CapabilityCarousel';

const Index = () => {
  const assistantsRef = useRef<HTMLDivElement>(null);
  
  const scrollToAssistants = () => {
    assistantsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const assistants = [
    { name: 'Claire', role: 'HR/Recruitment', imgSrc: '/lovable-uploads/Claire.webp', path: '/assistant/hr' },
    { name: 'Kenji', role: 'Legal Assistant', imgSrc: '/lovable-uploads/Kenji3.webp', path: '/assistant/legal' },
    { name: 'Luna', role: 'Marketing', imgSrc: '/lovable-uploads/Luna.webp', path: '/assistant/marketing' },
    { name: 'Omar', role: 'Procurement', imgSrc: '/lovable-uploads/Omar.webp', path: '/assistant/procurement' },
    { name: 'Chase', role: 'Sales Assistant', imgSrc: '/lovable-uploads/Chase.webp', path: '/assistant/sales' },
    { name: 'Imani', role: 'Teacher', imgSrc: '/lovable-uploads/Imani.webp', path: '/assistant/teacher' },
    { name: 'Elijah', role: 'Financial Assistant', imgSrc: '/lovable-uploads/Elijah.webp', path: '/assistant/financial' },
    { name: 'Aiko', role: 'Customer Support', imgSrc: '/lovable-uploads/Aiko.webp', path: '/assistant/support' },
  ];

  const capabilities = [
    {
      title: "Talk to Your Data",
      description: "Query structured and unstructured data — Excel sheets, PDFs, SQL databases — using natural language.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Use Your Knowledge Base",
      description: "Instantly access internal wikis, reports, FAQs, and documentation to provide grounded, company-specific answers.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Connect to Internal Systems",
      description: "Trigger workflows, interact with APIs, and retrieve real-time insights from dashboards and analytics tools.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Search the Web & Think Critically",
      description: "Actively search the web, validate information, and synthesize research across sources — like a human analyst.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Collaborate Like a Teammate",
      description: "Support strategic decisions with memory, feedback loops, and context awareness across use cases.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Leverage the Full Power of LLMs",
      description: "Go beyond chat — use LLMs for reasoning, summarization, simulations, comparisons, and agentic workflows.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Stay Brand-Aligned",
      description: "Assistants are emotionally intelligent, customizable in tone and personality, and always on-brand.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Rich Interactive Experiences",
      description: "Support rich, interactive experiences — from chat to voice to real-time video avatars — creating natural, humanlike interactions wherever your users are.",
      icon: (
        <svg className="w-6 h-6 text-yunomi-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = '1';
    }, 100);

    return () => {
      document.body.style.transition = '';
      document.body.style.opacity = '';
    };
  }, []);

  const renderAnimatedSection = (content: ReactNode, props: any) => (
    <AnimatedSection {...props}>
      {content}
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-yunomi-cream">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url('/lovable-uploads/b89ee6c2-b235-47e7-b922-6f61132c6edd.webp')` }}
          ></div>
        </div>
        
        <div className="yunomi-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {renderAnimatedSection(
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight leading-tight">
                Where humans and AI work side by side — in harmony.
              </h1>,
              { animation: "fade-in-down", className: "mb-6" }
            )}
            
            {renderAnimatedSection(
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Yunomi is a recruitment platform for warm, intelligent virtual assistants — crafted to support your business with the perfect blend of human presence and AI precision.
              </p>,
              { delay: 300, className: "mb-8" }
            )}
            
            {renderAnimatedSection(
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToAssistants}
                  className="px-6 py-3 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
                >
                  Explore Assistants
                </button>
                
                <a
                  href="https://stashly.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-yunomi-brown text-yunomi-brown rounded-full font-medium flex items-center transition-all duration-300 hover:bg-yunomi-brown hover:text-white hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
                >
                  See the Stashly Demo <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>,
              { delay: 600, className: "flex flex-col sm:flex-row items-center justify-center gap-4" }
            )}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-yunomi-brown opacity-70" />
        </div>
      </section>
      
      <section ref={assistantsRef} className="section-padding with-background-logo">
        <div className="yunomi-container">
          {renderAnimatedSection(
            <>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-yunomi-beige text-yunomi-brown rounded-full mb-3">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Meet Your Yunomi Assistants</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each assistant is trained for a specific role — powered by AI, designed for collaboration.
              </p>
            </>,
            { className: "text-center mb-16" }
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12">
            {assistants.map((assistant, index) => (
              <AssistantCard 
                key={assistant.name}
                {...assistant}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding with-background-logo">
        <div className="yunomi-container">
          {renderAnimatedSection(
            <>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-yunomi-brown rounded-full mb-3">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Why Yunomi?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our philosophy is rooted in the seamless integration of technology and human connection, inspired by the quiet harmony of a shared cup of tea.
              </p>
            </>,
            { className: "text-center mb-16" }
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderAnimatedSection(
              <>
                <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                  <LightbulbIcon className="w-6 h-6 text-yunomi-brown" />
                </div>
                <h3 className="text-xl font-medium mb-3">Intentional Interaction</h3>
                <p className="text-gray-600">Every aspect of our assistants' communication is thoughtfully designed to create meaningful connections.</p>
              </>,
              { delay: 100, className: "bg-white p-8 rounded-2xl shadow-sm" }
            )}
            
            {renderAnimatedSection(
              <>
                <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                  <Heart className="w-6 h-6 text-yunomi-brown" />
                </div>
                <h3 className="text-xl font-medium mb-3">Warmth Meets Precision</h3>
                <p className="text-gray-600">We combine the emotional intelligence of human interaction with the efficiency and accuracy of advanced AI.</p>
              </>,
              { delay: 200, className: "bg-white p-8 rounded-2xl shadow-sm" }
            )}
            
            {renderAnimatedSection(
              <>
                <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                  <Target className="w-6 h-6 text-yunomi-brown" />
                </div>
                <h3 className="text-xl font-medium mb-3">Crafted Simplicity</h3>
                <p className="text-gray-600">Our assistants deliver complex solutions through simple, elegant interactions that feel natural and intuitive.</p>
              </>,
              { delay: 300, className: "bg-white p-8 rounded-2xl shadow-sm" }
            )}
            
            {renderAnimatedSection(
              <>
                <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                  <Globe className="w-6 h-6 text-yunomi-brown" />
                </div>
                <h3 className="text-xl font-medium mb-3">Cultural Awareness</h3>
                <p className="text-gray-600">With nuanced understanding of global contexts, our assistants navigate diverse environments with respect and sensitivity.</p>
              </>,
              { delay: 400, className: "bg-white p-8 rounded-2xl shadow-sm" }
            )}
          </div>
        </div>
      </section>
      
      <section className="section-padding with-background-logo">
        <div className="yunomi-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {renderAnimatedSection(
              <>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-yunomi-beige text-yunomi-brown rounded-full mb-3">Use Case</span>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">See Yunomi in Action</h2>
                <p className="text-gray-600 mb-6">
                  How $tashly uses a Yunomi Financial Assistant to empower smarter investment decisions:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                      <span className="text-yunomi-brown font-medium text-sm">1</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 font-semibold">Conversational AI that speaks finance — and understands your data.</p>
                      <p className="text-gray-600 mt-1">From market trends to portfolio allocations, $tashly's assistant uses live data to deliver personalized advice in plain English.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                      <span className="text-yunomi-brown font-medium text-sm">2</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 font-semibold">From strategy to execution — all in one chat.</p>
                      <p className="text-gray-600 mt-1">Whether it's building a portfolio, analyzing performance, or exploring new investment strategies, $tashly users get actionable insights without needing a spreadsheet.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                      <span className="text-yunomi-brown font-medium text-sm">3</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 font-semibold">Always here, always supportive — your financial co-pilot.</p>
                      <p className="text-gray-600 mt-1">With a warm, interactive presence, the assistant is available 24/7 to collaborate, guide, and encourage users as they navigate even the most complex financial decisions.</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://stashly.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
                >
                  <Play className="mr-2 w-4 h-4" />
                  View the Live Example
                </a>
              </>,
              { animation: "slide-in-left", className: "order-2 lg:order-1" }
            )}
            
            {renderAnimatedSection(
              <div className="relative">
                <div className="absolute -inset-4 bg-yunomi-beige rounded-2xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-white rounded-2xl transform -rotate-2 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <video 
                    src="/lovable-uploads/Financialassistantvideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                  <a
                    href="https://stashly.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-40"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-yunomi-brown rounded-full shadow-lg">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </a>
                </div>
              </div>,
              { animation: "slide-in-right", className: "order-1 lg:order-2" }
            )}
          </div>
        </div>
      </section>
      
      <section className="section-padding with-background-logo">
        <div className="yunomi-container">
          {renderAnimatedSection(
            <>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-yunomi-brown rounded-full mb-3">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">What Yunomi Assistants Can Do</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Flexible, powerful, and deeply connected to your world.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                From talking to your private data to conducting live web research — Yunomi assistants combine the intelligence of large language models with your unique tools, knowledge, and systems.
              </p>
            </>,
            { className: "text-center mb-16" }
          )}
          
          <CapabilityCarousel capabilities={capabilities} />
        </div>
      </section>
      
      <section className="py-20 with-background-logo relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/8e6ce1d4-5959-4e26-8aa5-85f1849e107f.png" 
            alt="Yunomi Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="yunomi-container relative z-10">
          {renderAnimatedSection(
            <>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to enhance your team with Yunomi?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Experience the perfect harmony of human warmth and AI efficiency with our virtual assistants.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/assistant/financial"
                  className="px-8 py-4 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
                >
                  Meet Our Assistants
                </Link>
                <a
                  href="mailto:contact.yunomi@gmail.com"
                  className="px-8 py-4 border border-yunomi-brown text-yunomi-brown rounded-full font-medium transition-all duration-300 hover:bg-yunomi-brown hover:text-white hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
                >
                  Contact Us
                </a>
              </div>
            </>,
            { className: "max-w-4xl mx-auto text-center" }
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
