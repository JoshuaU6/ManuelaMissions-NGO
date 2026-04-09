import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const programs = [
  {
    id: "education",
    photo: "/photo2.jpg",
    accent: "#003580",
    title: "Education Program",
    desc: "Education is the most powerful weapon against poverty. We build schools, provide scholarships, and train teachers.",
    details: [
      { title: "School Building", content: "Constructing safe, modern classrooms in remote villages to ensure children don't have to walk miles for basic education." },
      { title: "Scholarships", content: "Providing financial support for uniforms, books, and tuition to keep vulnerable children in school." },
      { title: "Teacher Training", content: "Equipping local educators with modern teaching methodologies and resources to improve education quality." }
    ]
  },
  {
    id: "healthcare",
    photo: "/healthcare.jpg",
    accent: "#6B21A8",
    title: "Healthcare Access",
    desc: "Basic healthcare is a human right. We operate mobile clinics and fund life-saving medical procedures.",
    details: [
      { title: "Mobile Clinics", content: "Deploying medical teams to hard-to-reach areas providing checkups, medicines, and emergency care." },
      { title: "Maternal Health", content: "Ensuring safe deliveries by providing prenatal care and equipping local birth attendants." },
      { title: "Vaccination Drives", content: "Partnering with global health organizations to deliver vital immunizations to children." }
    ]
  },
  {
    id: "food",
    photo: "/photo7.jpg",
    accent: "#CC0000",
    title: "Food Security & Relief",
    desc: "No one should go to bed hungry. We provide emergency food aid and teach sustainable farming.",
    details: [
      { title: "Emergency Food Aid", content: "Distributing nutritious food packages during crises, natural disasters, and droughts." },
      { title: "School Feeding", content: "Providing daily hot meals in schools to boost attendance and child nutrition." },
      { title: "Sustainable Agriculture", content: "Providing seeds, tools, and training to farmers to build long-term community food resilience." }
    ]
  },
  {
    id: "empowerment",
    photo: "/photo1.jpg",
    accent: "#003580",
    title: "Women Empowerment",
    desc: "When you empower a woman, you empower a nation. We offer vocational training and micro-loans.",
    details: [
      { title: "Vocational Training", content: "Teaching marketable skills like tailoring, coding, and crafts to create income avenues." },
      { title: "Micro-finance", content: "Providing small, interest-free loans to help women start and grow their own businesses." },
      { title: "Mentorship Networks", content: "Connecting women with successful leaders to foster confidence and business acumen." }
    ]
  }
];

export default function Programs() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-foreground text-white py-24 px-4 text-center mt-[72px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Our Programs</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light relative z-10">Comprehensive initiatives designed to break the cycle of poverty and build resilient communities.</p>
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, idx) => (
            <div key={program.id} id={program.id} className={`flex flex-col gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
              {/* Photo block */}
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-6" style={{ borderBottom: `4px solid ${program.accent}` }}>
                  <img
                    src={program.photo}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{program.title}</h2>
                <p className="text-muted-foreground">{program.desc}</p>
                <Button asChild className="mt-6 bg-primary/10 text-primary hover:bg-primary hover:text-white border-none shadow-none">
                  <Link href="/donate">Support this program</Link>
                </Button>
              </div>

              {/* Accordion details */}
              <div className="flex-1 w-full bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-foreground border-b pb-2">Program Initiatives</h3>
                <Accordion type="single" collapsible className="w-full">
                  {program.details.map((detail, i) => (
                    <AccordionItem value={`item-${i}`} key={i}>
                      <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                        {detail.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {detail.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
