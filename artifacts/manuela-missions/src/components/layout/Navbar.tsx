import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Globe
              className={`w-8 h-8 transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
              }`}
            />
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
              }`}
            >
              Manuela Missions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    isScrolled
                      ? isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button
              asChild
              className={`bg-secondary hover:bg-secondary/90 text-white border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all ${
                !isScrolled && "shadow-black/20"
              }`}
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border/50 py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
