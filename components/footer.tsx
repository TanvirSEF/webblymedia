import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Github,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full">
      {/* Upper Footer Section - Light Grey Background */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Column 1: Products */}
            <div>
              <h3 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-poppins)', 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  lineHeight: 'normal',
                  color: '#1E1F21'
                }}
              >
                Products
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "/domain-hosting", label: "Domain & Hosting" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/faq", label: "FAQ" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:opacity-80 transition-opacity"
                      style={{ 
                        fontFamily: 'var(--font-poppins)', 
                        fontSize: '16px', 
                        fontWeight: 500, 
                        lineHeight: '30px',
                        color: '#667085'
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Services */}
            <div>
              <h3 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-poppins)', 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  lineHeight: 'normal',
                  color: '#1E1F21'
                }}
              >
                Our Services
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "/web-development", label: "Web Development" },
                  { href: "/ui-ux-design", label: "UI/UX Design" },
                  { href: "/digital-marketing", label: "Digital Marketing" },
                  { href: "/social-media-management", label: "Social Media Management" },
                  { href: "/content-creation", label: "Content Creation" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:opacity-80 transition-opacity"
                      style={{ 
                        fontFamily: 'var(--font-poppins)', 
                        fontSize: '16px', 
                        fontWeight: 500, 
                        lineHeight: '30px',
                        color: '#667085'
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h3 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-poppins)', 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  lineHeight: 'normal',
                  color: '#1E1F21'
                }}
              >
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#667085] shrink-0 mt-1" />
                  <span
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    123 Digital Avenue, Tech City, 10011
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#667085] shrink-0" />
                  <Link
                    href="tel:+6281234567890"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    +62 812-3456-7890
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#667085] shrink-0" />
                  <Link
                    href="mailto:info@webblymedia.com"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    info@webblymedia.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Information (Duplicate) */}
            <div>
              <h3 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--font-poppins)', 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  lineHeight: 'normal',
                  color: '#1E1F21'
                }}
              >
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#667085] shrink-0 mt-1" />
                  <span
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    123 Digital Avenue, Tech City, 10011
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#667085] shrink-0" />
                  <Link
                    href="tel:+6281234567890"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    +62 812-3456-7890
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#667085] shrink-0" />
                  <Link
                    href="mailto:info@webblymedia.com"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '30px',
                      color: '#667085'
                    }}
                  >
                    info@webblymedia.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons Row - Left Aligned */}
          <div className="flex items-center justify-start gap-6 pt-8">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#667085] hover:text-[#1E1F21] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Footer Section - Darker Grey Background */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p
              style={{ 
                fontFamily: 'var(--font-poppins)', 
                fontSize: '16px', 
                fontWeight: 500, 
                lineHeight: '30px',
                color: '#667085'
              }}
            >
              © {currentYear} WEBBLY MEDIA. All rights reserved.
            </p>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-services", label: "Term of Services" },
                { href: "/cookie-policy", label: "Cookie Policy" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:opacity-80 transition-opacity"
                  style={{ 
                    fontFamily: 'var(--font-poppins)', 
                    fontSize: '16px', 
                    fontWeight: 500, 
                    lineHeight: '30px',
                    color: '#667085'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
