import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandedRoots2 } from "./BrandedRoots2";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-800 subtle-pattern border-t border-white/10">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <BrandedRoots2 size="xl" />
            <p className="text-sm text-white leading-relaxed">
              Discover your heart through handcrafted local routes and nature-first experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/#getting-here"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  Getting Here
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5 group-hover:text-accent" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  +91 8125569195
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@roots2.com"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  hello@roots2.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">
                  Shivamogga, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-base">
              Follow Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/roots2travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-accent transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/70">
            © {currentYear} Roots2 Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
