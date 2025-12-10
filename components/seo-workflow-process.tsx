"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function SeoWorkflowProcess() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Heading and Description */}
                    <div className="w-full flex flex-col">
                        <h2 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[40px] font-bold leading-[60px] mb-6">
                            Our SEO Workflow Process
                        </h2>
                        <p className="text-[#667085] font-[var(--font-dm-sans)] text-[18px] font-normal leading-[27px]">
                            At Webbly Media, we create a clear and simple SEO plan to help your business grow online over time. Our process is step-by-step and efficient, so you can see results and track progress easily. Here's how our SEO process works:
                        </p>
                    </div>

                    {/* Right Column - Accordion Steps */}
                    <div className="w-full">
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            <AccordionItem value="item-1" className="border-b border-gray-200">
                                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:text-[#8C52FF] [&>svg]:w-5 [&>svg]:h-5">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="text-[#8C52FF] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px] min-w-[60px]">
                                            01
                                        </span>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px]">
                                                Website Check and Analysis
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] pl-[76px] pb-6">
                                    We start by checking your website's SEO health, structure, and keyword positions. Using advanced SEO tools, we find gaps, errors, and areas for improvement. This helps us understand what needs to be fixed and optimized.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b border-gray-200">
                                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:text-[#8C52FF] [&>svg]:w-5 [&>svg]:h-5">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="text-[#8C52FF] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px] min-w-[60px]">
                                            02
                                        </span>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px]">
                                                SEO Strategy Making
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] pl-[76px] pb-6">
                                    Based on our analysis, we create a customized SEO strategy tailored to your business goals. We identify target keywords, plan content creation, and outline technical improvements needed to boost your search rankings.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b border-gray-200">
                                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:text-[#8C52FF] [&>svg]:w-5 [&>svg]:h-5">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="text-[#8C52FF] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px] min-w-[60px]">
                                            03
                                        </span>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px]">
                                                Implementation and Optimization
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] pl-[76px] pb-6">
                                    We implement all the planned SEO improvements, including on-page optimization, technical fixes, content updates, and link building. Our team ensures every change is executed correctly to maximize your search visibility.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-b border-gray-200">
                                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:text-[#8C52FF] [&>svg]:w-5 [&>svg]:h-5">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="text-[#8C52FF] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px] min-w-[60px]">
                                            04
                                        </span>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px]">
                                                Regular Updates and Reporting
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] pl-[76px] pb-6">
                                    We provide regular updates and detailed reports showing your progress, keyword rankings, traffic growth, and other key metrics. This transparency helps you understand the impact of our SEO efforts.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-b-0">
                                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:text-[#8C52FF] [&>svg]:w-5 [&>svg]:h-5">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="text-[#8C52FF] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px] min-w-[60px]">
                                            05
                                        </span>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[#1E1F21] font-[var(--font-dm-sans)] text-[24px] font-semibold leading-[36px]">
                                                Monitoring with GSC and GA4
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#667085] font-[var(--font-dm-sans)] text-[16px] font-normal leading-[24px] pl-[76px] pb-6">
                                    We continuously monitor your website's performance using Google Search Console (GSC) and Google Analytics 4 (GA4). This helps us track search queries, identify opportunities, and make data-driven adjustments to improve results.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

