import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";

const successStories = [
  {
    title: "A New School for Boma Village",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    desc: "Before 2022, children in Boma had to walk 5 miles to reach the nearest classroom. With your support, we built a 6-classroom school that now serves 200 eager students daily."
  },
  {
    title: "Clean Water Initiative",
    image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&q=80",
    desc: "By installing solar-powered water pumps in 5 drought-stricken regions, we reduced waterborne diseases by 80% and freed up hours for women to pursue businesses."
  },
  {
    title: "Grace's Tailoring Business",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80",
    desc: "Through our micro-finance program, Grace received a sewing machine and training. Today, she employs three others and easily affords her children's tuition."
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b7?w=600&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80",
  "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
];

export default function Impact() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary text-white py-24 px-4 text-center mt-[72px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Global Impact</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">See how your contributions are creating tangible change across continents.</p>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">Where We Work</h2>
          <div className="w-full bg-white rounded-3xl shadow-lg border border-border aspect-[21/9] flex items-center justify-center relative overflow-hidden">
            {/* simple map placeholder using flex and icons */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80')] bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col items-center">
              <MapPin className="w-16 h-16 text-primary mb-4 animate-bounce" />
              <p className="text-2xl font-bold text-foreground">Active in 6+ Countries</p>
              <p className="text-muted-foreground mt-2">Across Africa, South America, and Southeast Asia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{story.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Moments of Hope</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group relative">
                <img src={img} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
