import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    { title: "Resilient AI", href: "/services/ai", desc: "AI-powered automation" },
    { title: "Resilient eShop", href: "/services/eshop", desc: "E-commerce solutions" },
    { title: "Resilient EduTech", href: "/services/edutech", desc: "Education technology" },
    { title: "BPO Services", href: "/services/bpo", desc: "Business process outsourcing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-primary">
              Resilient Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-accent/10 transition-colors"
                          >
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-muted-foreground">{service.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/industries" className="text-sm font-medium hover:text-accent transition-colors">
              Industries
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link to="/resources" className="text-sm font-medium hover:text-accent transition-colors">
              Resources
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
            <Button size="sm" className="bg-gradient-primary" asChild>
              <Link to="/#demo">Try Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link to="/" className="block py-2 hover:text-accent transition-colors">
                Home
              </Link>
              <div>
                <div className="text-sm font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/industries" className="block py-2 hover:text-accent transition-colors">
                Industries
              </Link>
              <Link to="/pricing" className="block py-2 hover:text-accent transition-colors">
                Pricing
              </Link>
              <Link to="/resources" className="block py-2 hover:text-accent transition-colors">
                Resources
              </Link>
              <Link to="/about" className="block py-2 hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="block py-2 hover:text-accent transition-colors">
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Book a Call</Link>
                </Button>
                <Button className="w-full bg-gradient-primary" asChild>
                  <Link to="/#demo">Try Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
