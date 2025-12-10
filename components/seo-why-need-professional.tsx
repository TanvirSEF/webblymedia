import Image from "next/image";

export default function SeoWhyNeedProfessional() {
    return (
        <section className="relative py-16 px-4 bg-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <h2 className="text-[#1E1F21] text-center font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                    Why Do You Need Professional SEO Services?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-0">
                    {/* Left Column - Image */}
                    <div className="w-full h-[500px] lg:h-[600px] relative">
                        <Image
                            src="/assets/images/seo_image4.png"
                            alt="SEO and Digital Marketing Illustration"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full flex flex-col gap-6">
                        <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                            In today's digital world, businesses need to be visible online to reach potential customers. Search engine optimization (SEO) helps your website appear when people search for your products or services. This helps increase sales, builds trust, and establishes your brand authority in the market.
                        </p>

                        <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                            Our professional SEO services ensure all of these benefits for your business. We look at your goals, fix any technical issues, and create effective SEO plans that provide real results. Our SEO experts make sure your brand gets noticed by the right audience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Diagonal Gradient SVG Shape */}
            <div className="absolute bottom-0 left-0 w-full h-[425px] z-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1920 425"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0.5 0.859375C587.86 336.498 1244.46 359.45 1909.76 424.5H0.5V0.859375Z"
                        fill="url(#paint0_radial_522_838)"
                    />
                    <path
                        d="M0.5 0.859375C587.86 336.498 1244.46 359.45 1909.76 424.5H0.5V0.859375Z"
                        stroke="black"
                        strokeOpacity="0.2"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_522_838"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(543 234.5) rotate(-1.14366) scale(2500.5 562.964)"
                        >
                            <stop stopColor="#8C52FF" />
                            <stop offset="1" stopColor="#06010E" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

