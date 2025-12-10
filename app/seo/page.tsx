import Link from "next/link";
import Image from "next/image";
import SeoServicesCarousel from "@/components/seo-services-carousel";
import SeoWorkflowProcess from "@/components/seo-workflow-process";
import SeoWhyNeedProfessional from "@/components/seo-why-need-professional";
import SeoWhyChoose from "@/components/seo-why-choose";

export default function SeoPage() {
    return (
        <>
            <div
                className="relative w-full h-[670px] bg-cover bg-center bg-no-repeat bg-[url('/assets/images/seo_banner.png')]"
            >
                <div className="container mx-auto px-4 h-full flex flex-col justify-center py-[90px]">
                    <div className="max-w-2xl">
                        <h1
                            className="text-white font-poppins text-[38px] font-bold leading-[75px] uppercase mb-6 w-full"
                        >
                            SEARCH ENGINE OPTIMIZATION SERVICES [INCREASE ORGANIC TRAFFIC BY 40%+]
                        </h1>

                        <p
                            className="mb-8 font-poppins text-[18px] leading-[27px] text-[#F9F6FF] font-normal"
                        >
                            Improve your search visibility, outrank competitors, and drive consistent organic traffic with the professional <strong>SEO services</strong> from Webbly Media. Whether you want higher Google rankings, more qualified website visitors, or stronger brand authority, our expert <strong>SEO agency</strong> is ready to help you grow. Get your custom strategy proposal today and see how fast we can help you climb the rankings!
                        </p>

                        <Link
                            href="#"
                            className="inline-flex cursor-pointer px-8 py-[16px] justify-center items-center gap-[10px] rounded-[99px] font-poppins text-white font-medium hover:opacity-90 transition-opacity bg-[#8C52FF]"
                        >
                            SCHEDULE A CALL
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recognized SEO Agency Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">
                        {/* Column 1 - Images Horizontal */}
                        <div className="flex flex-col gap-8 w-full lg:flex-row lg:gap-3 lg:h-[500px] lg:items-start">
                            <div className="w-full lg:flex-1 h-[300px] lg:h-[380px] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/images/seo_image1.png"
                                    alt="Shield with checkmark"
                                    fill
                                    className="object-contain object-top"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="w-full lg:flex-1 h-[280px] lg:h-[420px] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/images/seo_image2.png"
                                    alt="Golden podium with stars"
                                    fill
                                    className="object-contain object-top"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Column 2 - Content */}
                        <div className="w-full flex flex-col">
                            <h2 className="text-[#1E1F21] text-left font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                                A Recognized SEO Agency in The Industry
                            </h2>

                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] mb-8">
                                At Webbly Media, we understand the global market and empower businesses with cutting-edge SEO solutions. As an industry-leading SEO agency, we deliver results that boost rankings and conversions. We value open communication and ongoing support, so you can get a smooth and satisfying experience. Our certified SEO experts focus on smart strategies and white hat methods to improve your website's ranking and drive more organic traffic. Our clients stay with us because we deliver the results they want. So, trust us to take your SEO rankings to the next level. Contact us today and get a free consultation!
                            </p>

                            <Link
                                href="#"
                                className="inline-flex px-10 py-[18px] justify-center items-center gap-[10px] rounded-[99px] font-[var(--font-dm-sans)] text-white font-medium hover:opacity-90 transition-opacity bg-[#8C52FF] w-fit"
                            >
                                LEARN MORE ABOUT US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stop Relying on Outdated SEO Strategies Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Column 1 - Text Content */}
                        <div className="w-full flex flex-col gap-6">
                            <h2 className="text-[#1E1F21] text-center font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                                Stop Relying on Outdated SEO Strategies That Don't Work!
                            </h2>

                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                                Are your SEO efforts failing to bring traffic, leads, or rankings? Stop depending on old techniques that Google no longer rewards. They're only harming your growth and wasting your investment.
                            </p>

                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                                At Webbly Media, we use modern, data-driven SEO strategies that actually deliver results. We analyze your competitors, fix technical issues, optimize your website structure, and create content that attracts your ideal customers. Every optimization we make is designed to improve your ranking, visibility, and conversions.
                            </p>

                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                                We build high-performing SEO campaigns supported by real research and advanced analytics. Our experts track keyword positions, monitor site health, and fine-tune your strategy for continuous improvement. No guesswork, only proven methods that move your business forward.
                            </p>

                            <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                                Ready to rank higher and grow faster? Contact us today and let Webbly Media turn your website into a powerful source of organic traffic and revenue!
                            </p>
                        </div>

                        {/* Column 2 - Image */}
                        <div className="w-full h-[480px] lg:h-[600px] relative rounded-lg overflow-hidden">
                            <Image
                                src="/assets/images/seo_image3.png"
                                alt="Man with question marks - SEO strategy questions"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Services Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-[#1E1F21] text-center font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                        Webbly Media's SEO Services Include
                    </h2>
                    <p className="text-[#667085] text-center font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] mb-12 max-w-3xl mx-auto">
                        As a professional SEO agency, we offer complete SEO solutions for all types of businesses. Learn how we can help you stand out on search engines.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* LOCAL SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                    <path d="M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                    <path d="M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    LOCAL SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    Our local SEO services help your business reach nearby customers. We optimize your Google Business Profile, local citations, and NAP consistency to attract customers in your area. From location-based keywords optimization to local backlinks and review management, our SEO experts do everything to rank your business in Google Maps and local searches.
                                </p>
                            </div>
                        </div>

                        {/* NATIONAL SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    NATIONAL SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    If you want to reach people across the country, our national SEO service will be a great solution. We make your website rank higher for popular keywords, so you can connect with a larger audience. We boost your site with strong on-page optimization, technical SEO, and authority link building. This helps your brand get noticed nationwide and stand out from competitors in various cities and regions.
                                </p>
                            </div>
                        </div>

                        {/* MULTILINGUAL & INTERNATIONAL SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    MULTILINGUAL & INTERNATIONAL SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    To expand globally, you need multilingual or international SEO methods. We optimize hreflang tags and create localized content for different countries. Our SEO team works to ensure your site ranks well on search engines worldwide. We prioritize keeping your content consistent, relevant, and authoritative across various countries.
                                </p>
                            </div>
                        </div>

                        {/* STARTUP & ENTERPRISE SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    STARTUP & ENTERPRISE SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    Whether you run a small startup or a large company, we create SEO strategies that fit your needs. For startups, we focus on visibility and lead generation. For larger companies, we prioritize automation, scalability, and detailed analytics. Our flexible SEO campaigns help you grow sustainably and stay strong in the market over the long term.
                                </p>
                            </div>
                        </div>

                        {/* E-COMMERCE SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    E-COMMERCE SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    Our E-commerce SEO services help online stores be more visible and increase sales. We optimize product pages, category structures, schema markup, and internal links to make it easier for search engines to crawl your site. By enhancing Core Web Vitals, mobile usability, and using transactional keywords, we make sure your products show up at the top of searches.
                                </p>
                            </div>
                        </div>

                        {/* B2B SAAS SEO Card */}
                        <div className="group w-full h-[450px] p-[30px_40px] flex flex-col items-start gap-10 rounded-[10px] border border-white bg-white hover:border-[#8C52FF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center group-hover:bg-[#8C52FF] group-hover:border-[#8C52FF] transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[22px] font-semibold leading-[39px] uppercase">
                                    B2B SAAS SEO
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[14px] font-normal leading-[21px]">
                                    B2B SaaS SEO requires a data-driven approach. We optimize your website for relevant industry keywords, improve UX for conversions, and build topical authority through high-quality content. Our SEO strategies focus on long-term MRR growth, organic lead generation, and positioning your SaaS brand as a trusted solution in your target niche.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help You Section with Carousel */}
            <SeoServicesCarousel />

            {/* Our SEO Workflow Process Section */}
            <SeoWorkflowProcess />

            {/* Why Do You Need Professional SEO Services Section */}
            <SeoWhyNeedProfessional />

            {/* Why Choose Webbly Media Section */}
            <SeoWhyChoose />
        </>
    );
}