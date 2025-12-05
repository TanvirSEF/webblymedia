"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full relative z-50">
      {/* Upper Navbar - 60px height */}
      <div className="h-[60px] bg-[#8C52FF] border-b border-[#7936FF] flex items-center sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/assets/images/logo.png"
                alt="Webbly Media Logo"
                width={220}
                height={50}
                className="object-contain h-auto hidden md:block"
                priority
              />
              <Image
                src="/assets/images/logo.png"
                alt="Webbly Media Logo"
                width={150}
                height={40}
                className="object-contain h-auto md:hidden"
                priority
              />
            </Link>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              href="/plans"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              Plans & Pricing
            </Link>
            <div className="flex items-center gap-1 cursor-pointer group">
              <Globe className="w-4 h-4 text-white" />
              <span 
                className="text-white text-sm xl:text-base font-medium leading-[160%] whitespace-nowrap" 
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
              >
                En
              </span>
              <ChevronDown className="w-4 h-4 text-white group-hover:opacity-80 transition-opacity" />
            </div>
            <Button
              asChild
              className="bg-[#7936FF] text-white hover:bg-[#6A2EE6] border-0 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontSize: '14px', fontWeight: 500, lineHeight: '160%' }}
            >
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Lower Navbar - 57px height - Desktop Only */}
      <div className="h-[57px] bg-[#8C52FF] border-b border-[#7936FF] hidden lg:flex items-center">
        <div className="container mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          {/* Left: Navigation Links */}
          <div className="flex items-center gap-4 xl:gap-8 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 cursor-pointer group relative">
              <Link
                href="/services"
                className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
              >
                Our services
              </Link>
              <ChevronDown className="w-4 h-4 text-white group-hover:opacity-80 transition-opacity shrink-0" />
            </div>
            <Link
              href="/domain-hosting"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              Domain and Web Hosting
            </Link>
            <Link
              href="/pay-it-forward"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              Pay It Forward
            </Link>
            <Link
              href="/about"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              Blog
            </Link>
          </div>

          {/* Right: Customer Portal */}
          <div className="shrink-0">
            <Link
              href="/customer-portal"
              className="text-white text-sm xl:text-base font-medium leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500, lineHeight: '160%' }}
            >
              Customer Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[60px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#8C52FF] z-50 overflow-y-auto max-h-[calc(100vh-60px)] border-b border-[#7936FF]">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Upper Menu Items */}
              <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-[#7936FF]">
                <Link
                  href="/plans"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-2"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  Plans & Pricing
                </Link>
                <div className="flex items-center gap-2 py-2">
                  <Globe className="w-5 h-5 text-white shrink-0" />
                  <span 
                    className="text-white text-base font-medium leading-[160%]" 
                    style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                  >
                    Language: En
                  </span>
                </div>
                <Button
                  asChild
                  className="bg-[#7936FF] text-white hover:bg-[#6A2EE6] border-0 w-full justify-center mt-2"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact us
                  </Link>
                </Button>
              </div>

              {/* Mobile Lower Menu Items */}
              <div className="flex flex-col gap-1">
                <div 
                  className="flex items-center justify-between py-3 cursor-pointer"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity flex-1"
                    style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                  >
                    Our services
                  </Link>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform shrink-0 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                </div>
                <Link
                  href="/domain-hosting"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  Domain and Web Hosting
                </Link>
                <Link
                  href="/pay-it-forward"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  Pay It Forward
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  Blog
                </Link>
                <Link
                  href="/customer-portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-base font-medium leading-[160%] hover:opacity-80 transition-opacity py-3 mt-2 pt-4 border-t border-[#7936FF]"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', fontWeight: 500, lineHeight: '160%' }}
                >
                  Customer Portal
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
