import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";

const successStories = [
  {
    name: "Grace Izinren",
    image: "/photo1.jpg",
    desc: "Grace came to Manuela Missions NGO at age 24. She was encouraged to go back to school, completed a diploma in Industrial Relations & Personnel Management, and later gained admission to Lagos State University to study Accounting. Grace is today a successful practicing accountant."
  },
  {
    name: "Olumide Salvage",
    image: "/photo2.jpg",
    desc: "After completing secondary school, Olumide applied for a pre-degree program at Obafemi Awolowo University but faced a serious financial challenge that threatened to kill his dream. Manuela Missions came to the rescue. Today, Olumide is a Mechanical Engineer."
  },
  {
    name: "Mercy Ukomadu",
    image: "/photo3.jpg",
    desc: "Manuela Missions met Mercy Samuel at age 13 and enrolled her in school through secondary level. Believing she was called into beauty and cosmetology, we sponsored her diploma at Elegant Twins Institute. Today, Mercy is a successful beautician with her own thriving establishment."
  },
  {
    name: "Adanne Amogu",
    image: "/photo4.jpg",
    desc: "Adanne dropped out of school due to lack of funds to continue her education. Manuela Missions stepped in, encouraged her, and supported her return to school. Adanne is presently a 200-level student in a Nigerian higher institution, pursuing her dreams."
  }
];

const gallery = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
];

export default function Impact() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary text-white py-24 px-4 text-center mt-[72px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Global Impact</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">See how your contributions are creating tangible change and impacting lives.</p>
      </div>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Success Stories</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Real lives changed through the generosity of our donors and the dedication of our team.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group flex flex-col md:flex-row">
                <div className="md:w-48 shrink-0 h-52 md:h-auto overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{story.name}</h3>
                  <div className="w-8 h-0.5 bg-primary rounded-full mb-3" />
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
          <h2 className="text-3xl font-bold mb-4 text-center">Photo Gallery</h2>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-12">A glimpse into the work we do and the communities we serve.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group relative">
                <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
