import React from 'react';

const ExperienceSec = () => {
    const experiences = [
          {
            year: "2025 - present",
            title: "Hindi ASR Transcriber",
            company: "Transsion Holdings",
            type: "Remote (Freelance)",
            description: "I transcribe Hindi audio into accurate text used for AI training and research. I also support ASR projects by providing high-quality transcription and data annotation. My focus is always on maintaining accuracy in spelling, grammar, and context so that the final data is reliable and useful for AI models."
        },
        {
            year: "2024 - present",
            title: "Native Language AI Trainer",
            company: "Outlier AI",
            type: "Remote (Freelance)",
            description: "I help improve AI models by labeling data carefully and reviewing outputs with a strong focus on quality. My work includes data annotation, SFT and RLHF tasks, factuality checks, validation, and red-teaming. I also work on prompt engineering, adversarial prompts, and quality audits, across text, image generation, audio, and LiDAR projects."
        },
        {
            year: "2023 - 2024",
            title: "Catalog Associate Freelance",
            company: "IndiaMart Intermesh",
            type: "Remote",
            description: "Manage product listings to make sure they are accurate and clear for customers. My work helps improve the shopping experience by providing the right information about each product."
        },
        {
            year: "2023-2023",
            title: "Business Development Associate",
            company: "Byju's",
            type: "Fulltime",
            description: "I help connect students with our learning programs and support them in achieving their educational goals. My role involves building relationships with potential clients and understanding their needs to provide the best solutions."
        },
        {
            year: "2021 - 2022",
            title: "Digital Experience Intern",
            company: "Nubivagant Technology",
            type: "Fulltime",
            description: "I helped improve the online experience for users by working on various digital projects. My tasks included analyzing user feedback and suggesting changes to make websites and apps more user-friendly."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;