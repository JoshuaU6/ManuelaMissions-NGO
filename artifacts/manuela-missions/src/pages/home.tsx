import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Heart, Globe, Users, Calendar, BookOpen, Utensils, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const carouselSlides = [
  { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80", caption: "Giving Children a Better Future" },
  { url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80", caption: "Building Stronger Communities" },
  { url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b7?w=1200&q=80", caption: "Volunteers Making a Difference" },
  { url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80", caption: "Delivering Aid Where It's Needed Most" },
  { url: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80", caption: "Healthcare for Every Community" },
  { url: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?w=1200&q=80", caption: "Education Opens Doors" },
  { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80", caption: "Creating Lasting Impact" },
  { url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80", caption: "Global Reach, Local Impact" },
];

const testimonials = [
  { name: "Amara Diallo", location: "Dakar, Senegal", avatar: "https://i.pravatar.cc/80?img=1", text: "Thanks to Manuela Missions, my children now attend school and have access to clean water. Our lives have been completely transformed." },
  { name: "Maria Santos", location: "Lagos, Nigeria", avatar: "https://i.pravatar.cc/80?img=2", text: "The healthcare clinic they built in our village has saved countless lives. I am forever grateful for their unwavering commitment." },
  { name: "John Mwangi", location: "Nairobi, Kenya", avatar: "https://i.pravatar.cc/80?img=3", text: "The food programs sustained my family during the drought. Manuela Missions truly cares about people like us." },
];

const partners = ["UNICEF", "WHO", "Red Cross", "USAID", "Gates Foundation", "Oxfam", "World Bank", "Amnesty Int."];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Auto-play carousels
  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide((s) => (s + 1) % carouselSlides.length), 4000);
    const testInterval = setInterval(() => setCurrentTestimonial((t) => (t + 1) % testimonials.length), 5000);
    return () => { clearInterval(slideInterval); clearInterval(testInterval); };
  }, []);

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#4a1078] to-black opacity-90 z-0" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-pulse" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
              Global Humanitarian NGO
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Transforming Lives. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Building Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We are a global humanitarian organization bringing hope, health, and opportunity to communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 h-14 rounded-xl transition-all">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Photo Carousel Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* landing page photo carousel slide */}
                <img 
                  src={carouselSlides[currentSlide].url} 
                  alt={carouselSlides[currentSlide].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-white max-w-3xl"
                  >
                    {carouselSlides[currentSlide].caption}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {carouselSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Stats Bar */}
      <section ref={statsRef} className="bg-foreground text-white py-16 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
            {[
              { icon: Heart, count: 12000, suffix: "+", label: "Lives Impacted" },
              { icon: Globe, count: 18, suffix: "", label: "Countries Reached" },
              { icon: Users, count: 500, suffix: "+", label: "Active Volunteers" },
              { icon: Calendar, count: 10, suffix: "", label: "Years of Service" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-mono">
                  {statsInView ? <CountUp end={stat.count} duration={2.5} separator="," /> : "0"}
                  {stat.suffix}
                </div>
                <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission Statement */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Our Mission to <br/><span className="text-primary">Change the World</span>
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Manuela Missions, we envision a world free from poverty, where every individual has access to fundamental human rights: healthcare, education, and sustainable nourishment. We work tirelessly on the ground, partnering with local communities to create self-sustaining solutions that empower generations to come.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-primary font-semibold hover:no-underline group">
                <Link href="/about" className="flex items-center gap-2">
                  Read our full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Programs / Focus Areas */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where We Focus</h2>
            <p className="text-muted-foreground">Our comprehensive approach targets the root causes of systemic poverty through four core pillars of intervention.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Quality Education", desc: "Providing educational resources, building schools, and training teachers in underserved communities." },
              { icon: Heart, title: "Healthcare Access", desc: "Delivering essential medical care, running mobile clinics, and supporting maternal health in remote areas." },
              { icon: Utensils, title: "Food Security", desc: "Fighting hunger with nutritious meal programs and implementing sustainable agricultural practices." },
              { icon: Award, title: "Women Empowerment", desc: "Fostering economic independence through vocational training, microloans, and dedicated mentorship." }
            ].map((prog, i) => (
              <Card key={i} className="group border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <prog.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{prog.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{prog.desc}</p>
                  <Link href="/programs" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group/link">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-muted overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Voices of Impact</h2>
          
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-border/50">
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
                <p className="text-xl md:text-2xl italic font-medium text-foreground/80 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/10"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-foreground text-lg">{testimonials[currentTestimonial].name}</h4>
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

      {/* 7. Donate CTA Banner */}
      <section className="bg-gradient-to-r from-secondary to-purple-800 py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Your Donation Changes Lives</h2>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Every contribution, no matter how small, makes a real difference in someone's life. Join us in our mission to eradicate poverty.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-10 h-16 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold">
              <Link href="/donate">Make a Donation Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Partners Logo Strip */}
      <section className="py-12 bg-white border-b border-border overflow-hidden flex flex-col items-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Our Partners & Supporters</p>
        <div className="flex gap-12 w-max animate-[slide_30s_linear_infinite] px-6">
          {/* Repeat array for infinite effect */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center justify-center text-xl font-black text-muted-foreground/40 hover:text-primary transition-colors cursor-default whitespace-nowrap">
              {partner}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

    </Layout>
  );
}
