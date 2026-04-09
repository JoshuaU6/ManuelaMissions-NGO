import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Heart, Globe, Users, Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const carouselSlides = [
  { url: "/photo1.jpg", caption: "Skills Training for Women" },
  { url: "/photo2.jpg", caption: "Empowering Through Education" },
  { url: "/photo3.jpg", caption: "Community Voices" },
  { url: "/photo4.jpg", caption: "Partners in Purpose" },
  { url: "/photo5.jpg", caption: "Knowledge Shared, Lives Changed" },
  { url: "/photo6.jpg", caption: "Women Coming Together" },
  { url: "/photo7.jpg", caption: "Engaged and Inspired" },
];

const testimonials = [
  { name: "Grace Izinren", location: "Lagos, Nigeria", avatar: "/story-grace.jpg", text: "Manuela Missions encouraged me to go back to school at age 24. I earned my diploma, gained admission to Lagos State University, and today I am a successful practicing accountant. They gave me my future back." },
  { name: "Olumide Salvage", location: "Ile-Ife, Nigeria", avatar: "/story-olumide.jpg", text: "I had a serious financial challenge that threatened to end my education at OAU. Manuela Missions came to the rescue and made sure my dream survived. Today I am a Mechanical Engineer." },
  { name: "Mercy Ukomadu", location: "Lagos, Nigeria", avatar: "/story-mercy.jpg", text: "I was just 13 when Manuela Missions found me and enrolled me in school. They later sponsored my diploma in cosmetology at Elegant Twins Institute. Today I own my own beauty establishment." },
  { name: "Adanne Amogu", location: "Nigeria", avatar: "/story-adanne.jpg", text: "I dropped out of school because I could not afford to continue. Manuela Missions stepped in, encouraged me, and supported my return. I am now a 200-level university student pursuing my dreams." },
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Preload all carousel images immediately on mount
  useEffect(() => {
    carouselSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide((s) => (s + 1) % carouselSlides.length), 5000);
    const testInterval = setInterval(() => setCurrentTestimonial((t) => (t + 1) % testimonials.length), 6000);
    return () => { clearInterval(slideInterval); clearInterval(testInterval); };
  }, []);

  return (
    <Layout>
      {/* 1. Hero + Photo Carousel Combined (full-screen) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={carouselSlides[currentSlide].url}
              alt={carouselSlides[currentSlide].caption}
              className="w-full h-full object-cover"
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

        {/* Slide dots */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-8" : "bg-white/40 w-2.5 hover:bg-white/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => setCurrentSlide((s) => (s === 0 ? carouselSlides.length - 1 : s - 1))}
          className="absolute left-4 md:left-8 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((s) => (s + 1) % carouselSlides.length)}
          className="absolute right-4 md:right-8 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Hero Text */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/30 text-white text-xs md:text-sm font-semibold mb-6 backdrop-blur-md tracking-widest uppercase">
              Global Humanitarian NGO
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Transforming Lives.<br className="hidden sm:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Building Futures.</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
              We bring succor and restore hope to the needy — delivering healthcare, education, and empowerment to vulnerable communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white text-base md:text-lg px-8 h-12 md:h-14 rounded-xl shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-8 h-12 md:h-14 rounded-xl transition-all">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Stats Bar */}
      <section ref={statsRef} className="bg-foreground text-white py-12 md:py-16 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: Heart, count: 12000, suffix: "+", label: "Lives Impacted" },
              { icon: Globe, count: 6, suffix: "+", label: "Countries Reached" },
              { icon: Users, count: 500, suffix: "+", label: "Active Volunteers" },
              { icon: Calendar, count: 10, suffix: "", label: "Years of Service" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3 md:mb-4 text-primary">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 font-mono">
                  {statsInView ? <CountUp end={stat.count} duration={2.5} separator="," /> : "0"}
                  {stat.suffix}
                </div>
                <div className="text-white/70 font-medium uppercase tracking-wider text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission Statement */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1 space-y-5">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Our Mission to <br /><span className="text-primary">Change the World</span>
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Mission:</strong> To bring succor and restore God's plan to the needy — 2 Corinthians 1:3–6.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Vision:</strong> To graciously care for abused women and other vulnerable persons, lifting communities out of poverty through sustainable programs in healthcare, education, and empowerment — Matthew 9:35–38.
              </p>
              <Button asChild variant="link" className="px-0 text-primary font-semibold hover:no-underline group">
                <Link href="/about" className="flex items-center gap-2">
                  Read our full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs / Focus Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where We Focus</h2>
            <p className="text-muted-foreground">Our comprehensive approach targets the root causes of systemic poverty through four core pillars of intervention.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { photo: "/photo2.jpg", accent: "#003580", title: "Quality Education", desc: "Providing educational resources, building schools, and training teachers in underserved communities." },
              { photo: "/healthcare.jpg", accent: "#6B21A8", title: "Healthcare Access", desc: "Delivering essential medical care, running mobile clinics, and supporting maternal health in remote areas." },
              { photo: "/photo7.jpg", accent: "#CC0000", title: "Food Security", desc: "Fighting hunger with nutritious meal programs and implementing sustainable agricultural practices." },
              { photo: "/photo1.jpg", accent: "#003580", title: "Women Empowerment", desc: "Fostering economic independence through vocational training, microloans, and dedicated mentorship." }
            ].map((prog, i) => (
              <div key={i} className="group flex flex-col rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={prog.photo}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: prog.accent }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{prog.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-4">{prog.desc}</p>
                  <Link href="/programs" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group/link">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 md:mb-12">Voices of Impact</h2>

          <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-xl shadow-black/5 border border-border/50">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary opacity-20">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.417 14C16.8993 12.5539 17.5 11 18.5 9C19.5 7 20.5 5 21 4H18.5C17.5 5 16.5 7 15.5 9C14.5 11 13.9 12.5539 13.417 14L11.017 21H14.017ZM6.01697 21L8.41697 14C8.89926 12.5539 9.5 11 10.5 9C11.5 7 12.5 5 13 4H10.5C9.5 5 8.5 7 7.5 9C6.5 11 5.9 12.5539 5.41697 14L3.01697 21H6.01697Z"/>
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="text-lg md:text-2xl italic font-medium text-foreground/80 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-primary/10"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-foreground text-base md:text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-border hover:bg-muted text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full border border-border hover:bg-muted text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Donate CTA Banner */}
      <section className="bg-gradient-to-r from-secondary to-purple-800 py-16 md:py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-5 md:space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">Your Donation Changes Lives</h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed font-light">
            Every contribution, no matter how small, makes a real difference in someone's life. Join us in our mission to eradicate poverty.
          </p>
          <div className="pt-2 md:pt-4">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 text-base md:text-lg px-8 md:px-10 h-14 md:h-16 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold">
              <Link href="/donate">Make a Donation Today</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
