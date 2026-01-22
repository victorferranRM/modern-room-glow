// Case Studies data structure

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  logo?: string;
  industry: string;
  location: string;
  headline: string;
  summary: string;
  heroImage: string;
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  videoUrl?: string;
}

export const caseStudyCategories = [
  "All",
  "Vacation Rentals",
  "Hotels",
  "Property Management",
  "Coliving",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "stay-unique",
    company: "Stay Unique",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Vacation Rentals",
    location: "Barcelona, Spain",
    headline: "How Stay Unique reduced noise incidents by 85% with Roomonitor",
    summary: "Stay Unique manages over 400 premium vacation rentals across Barcelona. With Roomonitor's comprehensive monitoring solution, they transformed their approach to guest management and neighbor relations.",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    stats: [
      { value: "400+", label: "Properties" },
      { value: "85%", label: "Incident Reduction" },
      { value: "2018", label: "Customer Since" },
    ],
    sections: [
      {
        id: "about",
        title: "About Stay Unique",
        content: "Stay Unique is one of Barcelona's leading vacation rental management companies, operating a portfolio of over 400 premium properties across the city's most desirable neighborhoods. Founded in 2015, they've built a reputation for exceptional guest experiences and professional property management.\n\nWith properties ranging from cozy apartments in the Gothic Quarter to luxury penthouses overlooking the Mediterranean, Stay Unique needed a solution that could scale with their growing portfolio while maintaining their high standards of service.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "Managing 400+ properties across Barcelona presented significant operational challenges. Noise complaints from neighbors were becoming increasingly frequent, threatening relationships with building communities and risking license revocations.\n\n\"We were receiving complaints almost daily,\" explains Enrique Alcantara, CEO of Stay Unique. \"Each incident required immediate attention, and our team was stretched thin trying to respond to issues across the city. We needed a proactive solution, not just reactive firefighting.\"",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "Stay Unique deployed Roomonitor devices across their entire portfolio, implementing real-time noise monitoring with automated guest messaging integration. The system provides instant alerts when noise levels exceed thresholds, allowing the team to intervene before situations escalate.\n\n\"In the noise control segment, party prevention, and real-time monitoring of properties, without a doubt, Roomonitor's comprehensive solution with its state-of-the-art devices and Alarm Assistant service has been transformative,\" says Alcantara.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "Within six months of implementation, Stay Unique saw dramatic improvements across all key metrics:\n\n• **85% reduction** in noise complaints from neighbors\n• **Response time dropped** to under 2 minutes on average\n• **Guest satisfaction improved** by 23% in post-stay reviews\n• **Zero license revocations** since implementation\n\nThe Night Agents service has been particularly valuable, providing 24/7 monitoring during high-risk hours without requiring additional in-house staff.",
      },
    ],
    quote: {
      text: "In the noise control segment, party prevention, and real-time monitoring of properties, without a doubt, Roomonitor's comprehensive solution with its state-of-the-art devices and Alarm Assistant service has been transformative for our business.",
      author: "Enrique Alcantara",
      role: "CEO, Stay Unique",
    },
  },
  {
    slug: "del-parque-flats",
    company: "Del Parque Flats",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Property Management",
    location: "Madrid, Spain",
    headline: "Del Parque Flats achieves responsible tourism with comprehensive monitoring",
    summary: "Del Parque Flats strengthened their control measures and ensured good relations with neighbors by equipping every apartment with Roomonitor devices.",
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    stats: [
      { value: "Madrid", label: "Location" },
      { value: "100%", label: "Properties Equipped" },
      { value: "2023", label: "Customer Since" },
    ],
    sections: [
      {
        id: "about",
        title: "About Del Parque Flats",
        content: "Del Parque Flats is a Madrid-based property management company focused on delivering exceptional guest experiences while maintaining positive relationships with local communities. Their portfolio includes apartments in prime locations throughout the Spanish capital.",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "As vacation rental regulations in Madrid became stricter, Del Parque Flats needed to demonstrate their commitment to responsible tourism. They wanted to strengthen control measures and ensure good relations with neighbors—essential for maintaining their operating licenses and community standing.",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "Del Parque Flats equipped every apartment they manage with Roomonitor devices and applications. This comprehensive approach helps them prevent incidents and enhance the guest experience simultaneously.\n\n\"We want to strengthen our control measures and ensure good relations with neighbours. Every apartment we manage is equipped with devices and applications that help us prevent incidents and enhance the guest experience,\" explains Fermín Criado, CEO of Del Parque Flats.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "By implementing Roomonitor across all properties, Del Parque Flats has:\n\n• Achieved **full regulatory compliance** with Madrid's vacation rental requirements\n• Built **stronger relationships** with building communities and neighbors\n• **Prevented incidents** before they could impact guests or neighbors\n• Positioned themselves as a **leader in responsible tourism**",
      },
    ],
    quote: {
      text: "We want to strengthen our control measures and ensure good relations with neighbours. Every apartment we manage is equipped with devices and applications that help us prevent incidents and enhance the guest experience.",
      author: "Fermín Criado",
      role: "CEO, Del Parque Flats",
    },
  },
  {
    slug: "checkmyguest",
    company: "Checkmyguest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Vacation Rentals",
    location: "Paris, France",
    headline: "How Checkmyguest ensures peace of mind with 24/7 monitoring coverage",
    summary: "Checkmyguest leverages Roomonitor's Night Agents service to provide around-the-clock monitoring, giving their team the rest they need while ensuring guests and properties are always protected.",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    stats: [
      { value: "Paris", label: "Location" },
      { value: "24/7", label: "Monitoring" },
      { value: "10PM-7AM", label: "Night Coverage" },
    ],
    sections: [
      {
        id: "about",
        title: "About Checkmyguest",
        content: "Checkmyguest is a Parisian vacation rental management company known for their premium properties and exceptional service standards. Operating in one of the world's most visited cities, they understand the importance of maintaining positive relationships with neighbors in historic, densely-populated neighborhoods.",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "Running a 24/7 vacation rental business in Paris presented a significant challenge: how to maintain constant vigilance without burning out the team. Guest issues don't follow office hours, and late-night incidents can quickly escalate if not addressed immediately.",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "Checkmyguest implemented Roomonitor's comprehensive monitoring solution with the Night Agents service. This dedicated team takes over monitoring responsibilities from 10 PM to 7 AM, providing professional intervention when needed.\n\n\"This is a 24/7 business, and at some point, you need to rest—especially at night. Knowing that from 10 PM to 7 AM someone takes over, can access the apartment with the keys, and intervene on-site is invaluable,\" explains Jordan Setti, COO of Checkmyguest.",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "With Roomonitor's Night Agents service, Checkmyguest has achieved:\n\n• **Complete peace of mind** for the management team during off-hours\n• **Professional on-site intervention** when remote resolution isn't sufficient\n• **Maintained guest satisfaction** even when issues arise late at night\n• **Sustainable work-life balance** for the operations team",
      },
    ],
    quote: {
      text: "This is a 24/7 business, and at some point, you need to rest—especially at night. Knowing that from 10 PM to 7 AM someone takes over, can access the apartment with the keys, and intervene on-site is invaluable.",
      author: "Jordan Setti",
      role: "COO, Checkmyguest",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "you-stylish-apartments",
    company: "You Stylish Apartments",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Vacation Rentals",
    location: "Barcelona, Spain",
    headline: "You Stylish Apartments minimizes incidents to 2 out of every 1,300 bookings",
    summary: "With Roomonitor's Alarm Assistant and Night Agents service, You Stylish Apartments has achieved remarkable incident prevention rates while maintaining an excellent guest experience.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    stats: [
      { value: "2/1,300", label: "Incident Rate" },
      { value: "Barcelona", label: "Location" },
      { value: "99.8%", label: "Success Rate" },
    ],
    sections: [
      {
        id: "about",
        title: "About You Stylish Apartments",
        content: "You Stylish Apartments offers premium vacation rentals across Barcelona, combining stylish design with exceptional service. Their portfolio features carefully curated properties that reflect the city's vibrant culture and architectural heritage.",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "Managing a high volume of bookings while maintaining quality and preventing incidents is a constant balancing act. You Stylish Apartments needed a reliable system that could handle their scale while keeping incident rates as close to zero as possible.",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "The company implemented Roomonitor's full suite of monitoring tools, including real-time noise monitoring and the Alarm Assistant service with dedicated Night Agents. This combination provides comprehensive coverage around the clock.\n\n\"Thanks to Roomonitor, we have minimized incidents to 2 out of every 1,300 bookings. Now we can affirm that we have a totally reliable external element with Alarm Assistant Night Agents,\" shares Ignacio García, CEO.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "You Stylish Apartments has achieved industry-leading performance metrics:\n\n• **Incidents reduced to just 2 per 1,300 bookings** (99.85% success rate)\n• **Reliable 24/7 coverage** through the Night Agents service\n• **Scalable solution** that grows with their portfolio\n• **Enhanced reputation** among guests and neighbors alike",
      },
    ],
    quote: {
      text: "Thanks to Roomonitor, we have minimized incidents to 2 out of every 1,300 bookings. Now we can affirm that we have a totally reliable external element with Alarm Assistant Night Agents.",
      author: "Ignacio García",
      role: "CEO, You Stylish Apartments",
    },
  },
  {
    slug: "mun-stays",
    company: "Mun Stays",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Property Management",
    location: "Spain",
    headline: "How Mun Stays monitored vacant properties during the pandemic",
    summary: "During the pandemic, Roomonitor became indispensable for Mun Stays, allowing them to monitor suspicious activity in properties even when tourism activity was closed.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    stats: [
      { value: "Spain", label: "Location" },
      { value: "Real-time", label: "Monitoring" },
      { value: "2020", label: "Pandemic Ready" },
    ],
    sections: [
      {
        id: "about",
        title: "About Mun Stays",
        content: "Mun Stays is a Spanish property management company that specializes in vacation rentals. When the COVID-19 pandemic hit, they faced an unprecedented challenge: how to protect their portfolio of properties during an extended period of zero tourism activity.",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "The pandemic created a unique situation: properties sat empty for months with no guests, but still needed protection from break-ins, squatters, and other security risks. Traditional security measures couldn't provide the constant, cost-effective monitoring that was needed.",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "Roomonitor's monitoring devices proved invaluable during this period. The system allowed Mun Stays to detect any suspicious activity in their vacant properties in real-time, alerting the team immediately if there were any concerns.\n\n\"It's worth noting that during the pandemic with activity closed, Roomonitor allowed us to monitor any suspicious activity in the properties in real-time. From here, Roomonitor has become indispensable for us,\" explains David Lombardía, CEO.",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "Through the pandemic and beyond, Mun Stays has benefited from:\n\n• **Real-time security monitoring** for vacant properties\n• **Immediate alerts** for any suspicious activity\n• **Peace of mind** during unprecedented circumstances\n• **A solution that's now indispensable** to their daily operations",
      },
    ],
    quote: {
      text: "It's worth noting that during the pandemic with activity closed, Roomonitor allowed us to monitor any suspicious activity in the properties in real-time. From here, Roomonitor has become indispensable for us.",
      author: "David Lombardía",
      role: "CEO, Mun Stays",
    },
  },
  {
    slug: "numa-hotels",
    company: "Numa",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Hotels",
    location: "Europe",
    headline: "Numa scales digital-first hospitality across Europe with smart monitoring",
    summary: "As a tech-driven hospitality company, Numa integrates Roomonitor into their digital-first approach to manage properties across multiple European cities efficiently.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    stats: [
      { value: "Europe", label: "Coverage" },
      { value: "Digital-First", label: "Approach" },
      { value: "Multi-City", label: "Operations" },
    ],
    sections: [
      {
        id: "about",
        title: "About Numa",
        content: "Numa is a technology-driven hospitality company operating across major European cities. Their digital-first approach reimagines the guest experience, combining the comfort of apartment living with the reliability of hotel services—all powered by smart technology.",
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: "Operating a digital-first hospitality company across multiple cities requires technology that can scale seamlessly. Numa needed monitoring solutions that could integrate with their tech stack while providing consistent coverage across diverse property types and locations.",
      },
      {
        id: "solution",
        title: "The Solution",
        content: "Roomonitor's API-first approach and flexible deployment options made it the ideal choice for Numa's tech-forward operations. The integration allows for automated responses and seamless data flow between systems.\n\nThe monitoring infrastructure scales automatically as Numa expands into new markets, maintaining consistent service quality across their growing portfolio.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      },
      {
        id: "results",
        title: "The Results",
        content: "With Roomonitor as part of their technology stack, Numa has achieved:\n\n• **Seamless integration** with their digital operations platform\n• **Consistent monitoring** across multiple European cities\n• **Scalable infrastructure** that grows with the business\n• **Enhanced guest experience** through proactive management",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  if (industry === "All") return caseStudies;
  return caseStudies.filter((study) => study.industry === industry);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 3): CaseStudy[] {
  return caseStudies
    .filter((study) => study.slug !== currentSlug)
    .slice(0, limit);
}
