import Link from "next/link";

const benefits = [
    {
        id: 1,
        title: "7+ Years of Proven Experience",
        description: "With over 7 years in the web & digital marketing industry, we have helped many businesses succeed online. Our knowledge ensures your brand shines with consistent results.",
    },
    {
        id: 2,
        title: "5-Star Rated Digital Services",
        description: "Clients trust us because we deliver quality work every time. Our five-star rating comes from dedication, clear communication, and results that truly matter for every business.",
    },
    {
        id: 3,
        title: "24/7 Dedicated Online Support",
        description: "We stay connected so you never feel lost. Our support team works around the clock, offering quick help and clear updates whenever you need us most.",
    },
    {
        id: 4,
        title: "Affordable & Transparent Pricing",
        description: "We believe in fairness and clarity. Every service comes with honest pricing, no hidden costs, and complete value so you can invest confidently in growth.",
    },
    {
        id: 5,
        title: "Customer-friendly Behavior",
        description: "We treat every client as a partner. Our friendly team listens, understands your goals, and guides you patiently from the first step to the final delivery.",
    },
    {
        id: 6,
        title: "Client Satisfaction Guarantee",
        description: "Your success is our priority. We refine and adjust until you are fully satisfied. With Webbly Media, you get reliability, support, and results you can trust.",
    },
];

export default function SeoWhyChoose() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-[#1E1F21] text-center font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-4">
                    Why Choose Webbly Media
                </h2>
                <p className="text-[#667085] text-center font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px] mb-12">
                    We Provide World-class Web & Digital Marketing Services
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#8C52FF] flex items-center justify-center flex-shrink-0 mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M13.3346 4L6.0013 11.3333L2.66797 8"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[20px] font-semibold leading-[30px] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="#"
                        className="flex px-10 py-[18px] justify-center items-center gap-[10px] rounded-[99px] font-[var(--font-dm-sans)] text-white font-medium hover:opacity-90 transition-opacity bg-[#8C52FF]"
                    >
                        GET STARTED NOW
                    </Link>
                </div>
            </div>
        </section>
    );
}

