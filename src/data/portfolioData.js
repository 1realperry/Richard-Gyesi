import {
    Megaphone,
    PenTool,
    Share2,
    BarChart3,
    Target,
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

export const personalDetails = {
    name: "Richard Gyesi",
    title: "Digital Marketer · Content Creator · Brand Strategist",
    location: "Takoradi, Ghana",
    tagline: "Driving brand visibility and engagement with creative content and data-driven marketing.",
    email: "rgyesi05@gmail.com",
    phone: "+233 555 286 668",
    about: "I am a passionate Digital Marketer and Content Creator with a proven track record of driving brand visibility, engagement, and growth through creative content strategies and data-driven marketing campaigns. With experience working with diverse clients—from betting platforms to music artists and retail brands—I bring a unique blend of creativity and analytical thinking to every project.",
    socials: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/richard-gyesi-b2a002302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            icon: Linkedin
        },
        {
            platform: "X (Twitter)",
            url: "https://x.com/gyesix?s=11",
            icon: Twitter
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/gyesi_5?igsh=N2dodHUwdHdoOTB3&utm_source=qr",
            icon: Instagram
        }
    ]
};

export const services = [
    {
        title: "Digital Marketing Strategy",
        description: "Developing comprehensive digital marketing strategies tailored to your brand's goals, target audience, and market positioning.",
        icon: Target
    },
    {
        title: "Content Creation",
        description: "Crafting compelling visual and written content that resonates with audiences and drives engagement across platforms.",
        icon: PenTool
    },
    {
        title: "Social Media Management",
        description: "End-to-end social media management including content planning, community engagement, and performance optimization.",
        icon: Share2
    },
    {
        title: "Campaign Management",
        description: "Planning and executing targeted marketing campaigns that deliver measurable results and maximize ROI.",
        icon: Megaphone
    },
    {
        title: "Analytics & Reporting",
        description: "Data-driven insights and comprehensive reporting to track performance, measure KPIs, and optimize strategies.",
        icon: BarChart3
    }
];

export const clients = [
    { name: "1xBet", type: "Betting Platform" },
    { name: "Bangbet", type: "Betting Platform" },
    { name: "Jiji", type: "E-commerce" },
    { name: "Abby's Collection", type: "Fashion & Retail" },
    { name: "Lyrical Joe", type: "Music Artist" },
    { name: "Berose 360 (Akoo Nana)", type: "Music Artist" },
    { name: "Kwaw Kese", type: "Music Artist" },
    { name: "Markers House Chapel", type: "Religious Organization" },
    { name: "Joel Nii Bortey", type: "Personality" }
];

export const campaigns = [
    {
        title: "1xBet Brand Awareness Campaign",
        client: "1xBet",
        description: "Executed a multi-platform digital campaign to increase brand awareness and user acquisition in the Ghanaian market.",
        objective: "Increase brand visibility and drive new user sign-ups through targeted social media campaigns.",
        approach: "Created engaging content across Instagram, Twitter, and Facebook with influencer partnerships and promotional giveaways.",
        results: "Achieved 150K+ reach, 25% engagement rate, and 2,000+ new registrations within the campaign period.",
        tags: ["Social Media", "Influencer Marketing", "Brand Awareness"],
        isSample: true
    },
    {
        title: "Lyrical Joe Music Promotion",
        client: "Lyrical Joe",
        description: "Managed digital marketing and content creation for music releases and brand building for the acclaimed Ghanaian rapper.",
        objective: "Build artist brand presence and maximize music release impact across digital platforms.",
        approach: "Developed content calendar, created visual assets, managed social media engagement, and coordinated with media outlets.",
        results: "Grew social media following by 40%, achieved 500K+ streams on new releases, and secured major media coverage.",
        tags: ["Music Marketing", "Content Creation", "Social Media"],
        isSample: true
    },
    {
        title: "Jiji E-commerce Campaign",
        client: "Jiji",
        description: "Developed and executed digital marketing strategies to increase platform engagement and seller activity.",
        objective: "Drive user engagement and increase buyer-seller interactions on the platform.",
        approach: "Implemented targeted ad campaigns, created educational content for sellers, and ran engagement-focused social initiatives.",
        results: "Increased platform engagement by 35%, boosted seller listings by 20%, and improved brand sentiment scores.",
        tags: ["E-commerce", "Performance Marketing", "Content Strategy"],
        isSample: true
    },
    {
        title: "Abby's Collection Brand Launch",
        client: "Abby's Collection",
        description: "Comprehensive brand launch campaign for a fashion and retail business, establishing digital presence from ground up.",
        objective: "Launch brand identity and establish strong social media presence in the competitive fashion market.",
        approach: "Created brand guidelines, developed content strategy, built social media profiles, and launched with influencer collaborations.",
        results: "Built 10K+ followers in first 3 months, achieved consistent engagement rates above industry average.",
        tags: ["Brand Launch", "Fashion Marketing", "Influencer Collaboration"],
        isSample: true
    }
];

export const skills = [
    // Leadership Skills
    { name: "Team Leadership", category: "Leadership", level: 85 },
    { name: "Project Management", category: "Leadership", level: 80 },
    { name: "Client Relations", category: "Leadership", level: 90 },
    { name: "Strategic Planning", category: "Leadership", level: 85 },

    // Technical Skills
    { name: "Digital Marketing", category: "Technical", level: 95 },
    { name: "Glims", category: "Technical", level: 85 },
    { name: "LinkedIn", category: "Technical", level: 90 },
    { name: "Data Analysis", category: "Technical", level: 80 },
    { name: "E-commerce", category: "Technical", level: 85 },

    // Computer Skills
    { name: "Microsoft Office", category: "Computer Skills", level: 90 },
    { name: "SPSS", category: "Computer Skills", level: 80 },
    { name: "Adobe Photoshop", category: "Computer Skills", level: 85 },

    // Tools (Keeping some existing ones if relevant, or merging)
    { name: "Canva", category: "Computer Skills", level: 95 },
    { name: "Google Analytics", category: "Technical", level: 85 }
];

export const experience = [
    {
        role: "Marketer",
        company: "Ghana Union Assurance",
        duration: "October 2024 — Sep 2025",
        description: "Duties; Marketing and Underwriting"
    },
    {
        role: "Volunteer Teacher",
        company: "Christ the King Child Development Centre.",
        duration: "August 2023 - Present",
        description: "Duties; Teaching, Career and Student Development Coach."
    },
    {
        role: "Social Media Manager - Intern",
        company: "Union Rural Bank",
        duration: "September 2022 — December 2022",
        description: "Duties; Marketing and Data Entry"
    },
    {
        role: "Teacher",
        company: "Ideal College",
        duration: "September 2019 — December 2020",
        description: "Duties; Teaching, Preparation of lesson notes and course materials"
    }
];

export const education = [
    {
        degree: "BSc. Business Administration (Marketing)",
        school: "Kwame Nkrumah University of Science and Technology — Ghana",
        year: "January 2021—August 2024",
        note: "(Where I obtained a Second Class Upper Division)"
    },
    {
        degree: "West Africa Senior Secondary Certificate (WASSCE)",
        school: "Ideal College",
        year: "August 2016 — June 2019",
        note: "(Where I studied Business)"
    }
];

export const referees = [
    {
        name: "Mr. Fabian Owoo",
        role: "Branch Manager",
        organization: "Union Rural Bank",
        phone: "(+233)24 911 4271",
        email: "fabianoo@gmail.com",
        note: "(Worked under his supervision as Union Rural Bank Senya Beraku Branch during my internship.)"
    },
    {
        name: "Mr. Eric Adams",
        role: "Branch Manager",
        organization: "Ghana Union Assurance",
        phone: "(+233)24 4751 580",
        email: "ericadams@gmail.com",
        note: "(Worked under his supervision as Ghana Union Assurance Tarkoradi Branch during my National Service.)"
    },
    {
        name: "Miss Eunice Clara",
        role: "Human Resource Manageress",
        organization: "Ghana Union Assurance",
        phone: "(+233)55 1444 453",
        email: "euniceclara@gmail.com",
        note: "(Worked under her supervision as Ghana Union Assurance Tarkoradi Branch during my National Service.)"
    }
];
