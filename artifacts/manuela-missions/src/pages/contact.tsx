import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Our team will get back to you shortly.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-foreground text-white py-24 px-4 text-center mt-[72px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Have questions about our programs or want to get involved? We'd love to hear from you.</p>
      </div>

      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-primary/5 rounded-bl-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="h-12 bg-muted/50 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="h-12 bg-muted/50 focus:bg-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="How can we help?" className="h-12 bg-muted/50 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required placeholder="Write your message here..." className="min-h-[160px] resize-none bg-muted/50 focus:bg-white transition-colors text-base p-4" />
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" className="bg-secondary hover:bg-secondary/90 text-white h-14 px-8 text-lg font-bold rounded-xl w-full sm:w-auto shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-[400px] shrink-0 space-y-6">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Headquarters</h4>
                  <p className="text-muted-foreground leading-relaxed">25 Mission Street<br/>Lagos, Nigeria</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">*Regional offices in London and New York</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground leading-relaxed">+234 800 123 4567<br/>Mon-Fri, 9am - 5pm GMT</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground leading-relaxed">info@manuelamissions.org<br/>donations@manuelamissions.org</p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Map Placeholder Area */}
      <section className="bg-muted py-20 border-t border-border">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-border">
               <div className="w-full h-[400px] bg-muted/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Fake map background */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80')] bg-cover bg-center grayscale blur-sm"></div>
                  
                  <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-lg border border-border animate-in slide-in-from-bottom-4 fade-in duration-700">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl text-foreground">Our Location</h3>
                    <p className="text-muted-foreground mt-1">25 Mission Street, Lagos</p>
                    <Button variant="outline" size="sm" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                      Get Directions
                    </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </Layout>
  );
}
