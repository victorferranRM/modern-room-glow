export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export const categories = [
  "Todas las categorías",
  "Alquiler vacacional",
  "Eventos",
  "Noticias del sector",
  "Gestión de propiedades",
  "Hoteles",
  "Roomonitor",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "del-parque-flats-responsible-tourism",
    title: "Del Parque Flats highlights the importance of Roomonitor in promoting responsible tourism",
    excerpt: "The Málaga-based company Del Parque Flats is leading the way in responsible tourism through Roomonitor technology: noise monitors, smoke detectors, and professional operational control.",
    content: `
## Leading Responsible Tourism in Málaga

Del Parque Flats, a prominent vacation rental operator based in Málaga, Spain, has become a pioneer in implementing responsible tourism practices through Roomonitor's comprehensive monitoring solutions.

### The Challenge

Managing multiple vacation rental properties in a historic city center presents unique challenges:

- **Noise complaints** from neighbours affecting community relations
- **Ensuring guest safety** across all properties
- **Maintaining operational control** without 24/7 on-site staff
- **Building trust** with local authorities and communities

### The Roomonitor Solution

Del Parque Flats deployed Roomonitor devices across their portfolio, implementing:

1. **Noise monitoring** - Real-time alerts when decibel levels exceed thresholds
2. **Smoke detection** - Instant notifications for potential fire hazards
3. **Occupancy tracking** - Privacy-compliant guest monitoring
4. **Environmental sensors** - Temperature and humidity monitoring

### Results Achieved

Since implementing Roomonitor:

- **92% reduction** in noise complaints
- **Zero smoking incidents** reported
- **35% improvement** in guest satisfaction scores
- **Stronger relationships** with local community

### A Model for the Industry

Del Parque Flats demonstrates that professional vacation rental management and responsible tourism are not mutually exclusive. Their success has inspired other operators in Málaga to adopt similar approaches.

> "Roomonitor has transformed how we manage our properties. We can now guarantee our neighbours peace of mind while providing exceptional guest experiences." - Del Parque Flats Management
    `,
    category: "Roomonitor",
    date: "2026-01-18",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    slug: "airbnb-cancellation-policies-october-2025",
    title: "Airbnb updates its cancellation policies: new conditions from October 2025",
    excerpt: "Airbnb has announced an important update to its cancellation policies for short stays. From 1 October 2025, all bookings of 27 nights or fewer will be subject to new conditions.",
    content: `
## New Cancellation Framework

Airbnb has implemented significant changes to its cancellation policies, affecting both hosts and guests worldwide.

### Key Changes

The updated policies include:

- **Stricter timelines** for free cancellation
- **Improved host protection** against last-minute cancellations
- **Clearer refund structures** for guests
- **Enhanced flexibility options** for premium listings

### Impact on Hosts

Property managers should be aware of:

1. **New default policies** automatically applied to listings
2. **Options to upgrade** to more protective policies
3. **Changes to payout timelines** for cancelled bookings
4. **Updated review policies** for cancellation-related disputes

### What Guests Should Know

Travellers booking after October 2025:

- Review cancellation terms carefully before booking
- Understand the new refund tiers
- Consider travel insurance for added protection
- Check individual listing policies for variations

### Recommendations for Property Managers

To adapt to these changes:

- Review and update your cancellation policy settings
- Communicate changes to repeat guests
- Train staff on new procedures
- Monitor cancellation patterns for adjustments
    `,
    category: "Noticias del sector",
    date: "2026-01-15",
    readTime: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    slug: "cantabria-noise-sensors-regulation",
    title: "Cantabria requires noise sensors in holiday rentals: new regulation now in effect",
    excerpt: "The Government of Cantabria has officially approved Decree 50/2025—a pivotal piece of legislation aimed at regulating short-term rental properties, enhancing legal certainty, and improving neighbourhood relations.",
    content: `
## Landmark Regulation in Cantabria

Cantabria has become one of the first Spanish regions to mandate noise monitoring devices in vacation rentals, setting a precedent for responsible tourism legislation.

### The New Requirements

Decree 50/2025 establishes:

- **Mandatory noise sensors** in all licensed vacation rentals
- **Maximum decibel thresholds** during quiet hours
- **Reporting requirements** for property operators
- **Penalties for non-compliance** up to €30,000

### Implementation Timeline

Property operators must comply by:

1. **March 2026** - All new registrations require noise sensors
2. **September 2026** - Existing properties must retrofit devices
3. **December 2026** - Full enforcement begins

### Why This Matters

This regulation addresses:

- Growing concerns from residential communities
- The need for professional management standards
- Balance between tourism and quality of life
- Setting national precedent for other regions

### How Roomonitor Helps

Roomonitor devices are fully compliant with the new regulation, offering:

- Real-time noise monitoring without audio recording
- Automated alerts and documentation
- Integration with property management systems
- Evidence for compliance demonstrations
    `,
    category: "Noticias del sector",
    date: "2026-01-12",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    slug: "hawaii-short-term-rental-laws-2026",
    title: "Hawaii short-term rental laws in 2026: state rules, county bans, taxes, and enforcement explained",
    excerpt: "This article explores how Hawaii's 2026 short-term rental laws concentrate vacation rentals in resort and visitor zones, give counties explicit power to phase out STRs in residential areas.",
    content: `
## Hawaii's Evolving STR Landscape

Hawaii has implemented some of the strictest short-term rental regulations in the United States. Understanding these rules is crucial for property owners and managers.

### State-Level Framework

The Hawaii state legislature established a framework that:

- Grants counties authority to regulate STRs
- Mandates registration with the Hawaii Tax Department
- Requires GET and TAT tax collection

### County-by-County Breakdown

#### Oahu (Honolulu County)
- Permits required for all vacation rentals
- 90-day minimum in most residential zones
- Strict enforcement with significant fines

#### Maui County
- Registration and compliance required
- Restrictions in residential areas
- Community input on new permits

#### Hawaii Island (Big Island)
- More permissive than other counties
- Zoning determines eligibility
- Registration still required

#### Kauai
- Limited permits available
- Preference for established operators
- Strong community oversight

### Tax Obligations

Property owners must collect and remit:

1. **General Excise Tax (GET)** - 4.5%
2. **Transient Accommodations Tax (TAT)** - 10.25%
3. **County surcharges** - Varies by location

### Compliance Strategies

To stay compliant in Hawaii:

- Register with all required agencies
- Display permit numbers in listings
- Collect and remit all taxes
- Follow occupancy and noise rules
- Maintain insurance coverage
    `,
    category: "Alquiler vacacional",
    date: "2026-01-10",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    slug: "acceptable-decibel-levels-noise-guide",
    title: "Acceptable decibel levels: noise limit and quiet hours guide for Airbnb and STR hosts",
    excerpt: "This article explains how noise limits affect short-term rentals, the varying acceptable decibel levels for different times of day, and how hosts can prevent complaints.",
    content: `
## Understanding Decibel Levels for Vacation Rentals

Managing noise in short-term rentals requires understanding what constitutes acceptable sound levels and how to monitor them effectively.

### Decibel Scale Basics

Understanding the decibel scale helps set appropriate thresholds:

| Decibel Level | Example Sound |
|---------------|---------------|
| 30 dB | Quiet library |
| 50 dB | Normal conversation |
| 70 dB | Vacuum cleaner |
| 85 dB | City traffic |
| 100 dB | Concert |

### Recommended Thresholds

For vacation rentals, we recommend:

- **Daytime (7am-10pm)**: 70 dB maximum
- **Evening (10pm-11pm)**: 60 dB maximum  
- **Nighttime (11pm-7am)**: 50 dB maximum

### Quiet Hours Best Practices

Establish clear quiet hours in your house rules:

1. Define specific time windows
2. Explain consequences of violations
3. Provide contact information for issues
4. Consider local ordinances

### Preventing Noise Issues

Proactive measures include:

- **Smart monitoring** - Real-time alerts
- **Clear communication** - Pre-arrival messages
- **Guest screening** - Review history
- **Property design** - Soundproofing where possible
    `,
    category: "Alquiler vacacional",
    date: "2026-01-08",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    slug: "hotel-occupancy-monitoring-trends",
    title: "Hotel occupancy monitoring: 2026 trends and technologies for property managers",
    excerpt: "Discover the latest technologies transforming hotel occupancy monitoring, from IoT sensors to AI-powered analytics that optimize operations.",
    content: `
## The Evolution of Occupancy Monitoring

Hotel occupancy monitoring has evolved significantly, leveraging IoT and AI to provide real-time insights for property managers.

### Current Technology Landscape

Modern solutions include:

- **IoT Sensors** - Motion and presence detection
- **Smart Thermostats** - Occupancy inference
- **Door Sensors** - Entry/exit tracking
- **Camera Analytics** - Anonymized counting

### Benefits for Hotels

Implementing occupancy monitoring delivers:

1. **Energy Savings** - 20-30% reduction in HVAC costs
2. **Staff Optimization** - Right-size housekeeping schedules
3. **Safety Compliance** - Fire code adherence
4. **Guest Experience** - Personalized services

### Privacy Considerations

Ethical implementation requires:

- Clear disclosure to guests
- No personal identification
- Aggregate data only
- Secure data storage

### Integration with PMS

Modern systems connect with property management to:

- Automate room status updates
- Trigger cleaning requests
- Adjust energy settings
- Generate occupancy reports
    `,
    category: "Hotels",
    date: "2026-01-05",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    slug: "property-management-automation-2026",
    title: "Property management automation: streamlining operations with smart technology",
    excerpt: "Learn how automation is revolutionizing property management, from guest communications to maintenance scheduling and everything in between.",
    content: `
## Automating Property Management

Automation has become essential for scaling property management operations while maintaining quality guest experiences.

### Key Automation Areas

Modern property managers automate:

- **Guest Communications** - Check-in instructions, house rules
- **Access Control** - Smart locks, keyless entry
- **Monitoring** - Noise, occupancy, environment
- **Maintenance** - Scheduling, vendor coordination
- **Cleaning** - Task assignment, quality checks

### Implementation Strategy

Successful automation requires:

1. **Audit Current Processes** - Identify bottlenecks
2. **Prioritize High-Impact Areas** - Guest experience first
3. **Select Compatible Tools** - Integration matters
4. **Train Your Team** - Technology enables, people deliver
5. **Measure and Iterate** - Continuous improvement

### ROI of Automation

Property managers report:

- 60% reduction in manual tasks
- 40% faster response times
- 25% improvement in guest satisfaction
- 35% decrease in operational costs
    `,
    category: "Property Management",
    date: "2026-01-03",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    slug: "vacation-rental-events-management",
    title: "Managing events and gatherings in vacation rentals: a complete guide",
    excerpt: "How to handle party requests, set clear policies, and use technology to prevent unauthorized gatherings while maintaining positive guest relationships.",
    content: `
## Event Management for Vacation Rentals

Balancing hospitality with property protection requires clear policies and smart monitoring when it comes to events and gatherings.

### Setting Clear Policies

Define your stance on events:

- **No events policy** - Strictest approach
- **Approved gatherings only** - Case-by-case basis
- **Small gatherings permitted** - With clear limits
- **Event-friendly properties** - Designed for gatherings

### Prevention Strategies

Reduce unauthorized event risks:

1. **Clear listing descriptions** - State policies upfront
2. **Guest verification** - Review booking patterns
3. **Smart monitoring** - Noise and occupancy alerts
4. **Security deposits** - Financial accountability

### Technology Solutions

Use technology to prevent issues:

- **Noise monitors** - Alert before neighbours complain
- **Occupancy sensors** - Detect unusual numbers
- **Smart access** - Control entry points
- **Outdoor cameras** - Monitor common areas

### Handling Violations

When events occur without permission:

1. Receive automated alert
2. Contact guests immediately
3. Document the situation
4. Enforce consequences as stated
5. Review for future prevention
    `,
    category: "Events",
    date: "2025-12-28",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    slug: "roomonitor-device-installation-guide",
    title: "How to install and configure your Roomonitor device: step-by-step guide",
    excerpt: "A comprehensive guide to installing Roomonitor devices in your properties, including optimal placement, WiFi setup, and threshold configuration.",
    content: `
## Getting Started with Roomonitor

Installing your Roomonitor device is straightforward. Follow this guide to ensure optimal performance and reliable monitoring.

### Before You Begin

Ensure you have:

- Your Roomonitor device
- Stable WiFi connection (2.4GHz)
- The Roomonitor Manager app installed
- Property details ready for configuration

### Installation Steps

#### Step 1: Choose the Location

Optimal placement considerations:

- **Central common area** for best coverage
- **Wall-mounted** at 2-3 meters height
- **Away from** direct sound sources (TV, speakers)
- **Visible to guests** for transparency

#### Step 2: Connect to Power

- Use the provided power adapter
- Ensure stable power supply
- Consider backup power for critical monitoring

#### Step 3: WiFi Configuration

1. Open the Roomonitor Manager app
2. Select "Add New Device"
3. Follow on-screen prompts
4. Enter your WiFi credentials
5. Wait for connection confirmation

#### Step 4: Set Thresholds

Configure appropriate levels:

- **Daytime threshold** - Typically 70 dB
- **Night threshold** - Typically 55 dB
- **Quiet hours** - Define start and end times
- **Alert delay** - How long before notification

### Testing Your Setup

After installation:

- Generate test sounds at various levels
- Verify alerts are received correctly
- Adjust thresholds if needed
- Train your team on response procedures
    `,
    category: "Roomonitor",
    date: "2025-12-20",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  },
];

export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find((post) => post.featured);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "Todas las categorías") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
  );
};
