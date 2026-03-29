import { Layout } from "@/components/layout/Layout";
import { Users, Target, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Dr. Amelia Foster", role: "Founder & CEO", avatar: "https://i.pravatar.cc/200?img=10" },
  { name: "James Okonkwo", role: "Director of Programs", avatar: "https://i.pravatar.cc/200?img=11" },
  { name: "Sarah Chen", role: "Head of Operations", avatar: "https://i.pravatar.cc/200?img=12" },
  { name: "Michael Adebayo", role: "Head of Partnerships", avatar: "https://i.pravatar.cc/200?img=13" },
];

const timeline = [
  { year: "2014", title: "Organization Founded", desc: "Started as a small community initiative." },
  { year: "2016", title: "First International Program", desc: "Launched education programs in West Africa." },
  { year: "2018", title: "Reached 5,000 Beneficiaries", desc: "Expanded healthcare and food relief efforts." },
  { year: "2020", title: "Expanded to 10 Countries", desc: "Global pandemic response initiatives." },
  { year: "2022", title: "500 Volunteers Worldwide", desc: "Built a robust global volunteer network." },
  { year: "2024", title: "12,000+ Lives Impacted", desc: "Continuing to grow and transform lives." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-900 py-24 px-4 text-center mt-[72px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Manuela Missions</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Learn about our journey, our values, and the dedicated people behind our global impact.</p>
      </div>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Manuela Missions was born from a simple belief: every human being deserves a chance to thrive. We are a passionate team of humanitarians, volunteers, and advocates working across the globe to dismantle the systemic barriers of poverty.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just provide temporary relief; we invest in long-term infrastructure, education, and community empowerment to create lasting, generational change.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            {/* about page group working together */}
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" 
              alt="Our team in action" 
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bring succor and restore God's plan to the needy — 2 Corinthians 1:3–6. We deliver hope and healing through education, healthcare, food relief, and women's empowerment programs across Africa and beyond.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To graciously care for abused women and other vulnerable persons — Matthew 9:35–38. We see communities transformed by compassion, where every individual — regardless of background — can live with dignity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">Dedicated professionals guiding our mission with expertise and compassion.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-primary transition-colors">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                <div className="md:w-32 shrink-0 text-primary md:text-right text-2xl font-black group-hover:text-white transition-colors">
                  {item.year}
                </div>
                <div className="relative pb-12 md:pb-0 border-l-2 border-white/20 pl-6 md:pl-8 flex-1 group-hover:border-primary transition-colors">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-foreground group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4 bg-muted/50">
        <h2 className="text-3xl font-bold text-foreground mb-6">Want to join our journey?</h2>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </Layout>
  );
}
