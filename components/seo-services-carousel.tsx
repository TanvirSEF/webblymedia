"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const seoServices = [
    {
        id: 1,
        title: "SEO AUDIT & FIXING",
        description: "We start by doing a comprehensive SEO audit of your website. We check for technical issues, broken links, page speed, and on-page errors that can hurt your SEO. Then we fix these problems to create a strong foundation for better rankings. This process helps Google crawl your website correctly and improves your SEO performance right from the start.",
        icon: "/assets/images/card1.png",
    },
    {
        id: 2,
        title: "TECHNICAL SEO IMPLEMENTATION",
        description: "After addressing the basics, we improve your website's technical SEO. This means we enhance your website's structure, XML sitemaps, robots.txt, and schema markup to help search engines index your site better. Plus, we work on improving Core Web Vitals, crawl efficiency, and site speed. This ensures your website is fully aligned with Google's ranking algorithms.",
        icon: "/assets/images/card2.png",
    },
    {
        id: 3,
        title: "MOBILE SEO SERVICES",
        description: "Since most users search from mobile devices, mobile SEO is vital. We optimize your website for mobile-first indexing, responsive design, and page load speed. Our team ensures perfect readability and navigation on all devices. This improves user experience, reduces bounce rate, and boosts your ranking on Google's mobile search results.",
        icon: "/assets/images/card3.png",
    },
    {
        id: 4,
        title: "KEYWORD RESEARCH & MAPPING",
        description: "We conduct thorough keyword research to find out what your audience is searching for. Then, we create a keyword map to match each webpage with relevant keywords and user intent. This process improves relevancy, strengthens content, increases improved CTR (click-through rate) results, your website will attract more traffic and qualified leads.",
        icon: "/assets/images/card4.png",
    },
    {
        id: 5,
        title: "COMPETITOR ANALYSIS",
        description: "We analyze your competitors' SEO strategies to identify opportunities and gaps. Our competitive analysis includes backlink profiles, keyword rankings, content strategies, and technical implementations to help you outrank your competition.",
        icon: "/assets/images/card5.png",
    },
    {
        id: 6,
        title: "CONTENT PLANNING & WRITING",
        description: "Our content team creates SEO-optimized, engaging content that ranks well and converts visitors. We develop content calendars, write blog posts, create landing pages, and produce comprehensive guides that establish your authority and drive organic traffic.",
        icon: "/assets/images/card6.png",
    },
    {
        id: 7,
        title: "ON-PAGE OPTIMIZATION",
        description: "We optimize every page element for search engines, including title tags, meta descriptions, headers, image alt text, internal linking, and content structure. Our on-page optimization ensures each page targets the right keywords and provides value to both users and search engines.",
        icon: "/assets/images/card7.png",
    },
    {
        id: 8,
        title: "LINK BUILDING / OFF-PAGE SEO",
        description: "We build high-quality, authoritative backlinks through strategic outreach, content partnerships, and relationship building. Our link building campaigns focus on earning natural, relevant links that boost your domain authority and improve your search rankings.",
        icon: "/assets/images/card8.png",
    },
];

export default function SeoServicesCarousel() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-[#1E1F21] text-center font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                    How We Help You as an Expert SEO Company
                </h2>
                <p className="text-[#667085] text-center font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px] mb-12 max-w-3xl mx-auto">
                    As a professional SEO agency, we offer complete SEO solutions for all types of businesses. Learn how we can help you stand out on search engines.
                </p>

                <div className="px-8 md:px-0">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-2 pb-2">
                            {seoServices.map((service) => (
                                <CarouselItem
                                    key={service.id}
                                    className="pl-2 md:pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <div className="group h-full p-[20px_20px] flex flex-col items-start gap-6 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                                        <div className="w-16 h-16 rounded-lg bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#8C52FF] transition-all duration-300 p-2">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={48}
                                                height={48}
                                                className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 flex-1 w-full">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                                {service.title}
                                            </h3>
                                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px] flex-1">
                                                {service.description}
                                            </p>
                                            <Link
                                                href="#"
                                                className="flex px-1 py-[10px] justify-center items-center gap-[10px] rounded-[99px] font-[var(--font-dm-sans)] text-white font-medium bg-[#8C52FF] hover:bg-white hover:text-[#8C52FF] hover:border hover:border-[#8C52FF] transition-all duration-300 w-full"
                                            >
                                                GET STARTED NOW
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-4 bg-white border border-gray-200 hover:bg-gray-50" />
                        <CarouselNext className="hidden md:flex -right-4 bg-white border border-gray-200 hover:bg-gray-50" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
