// Markdown content for individual guides

export const guideContent: Record<string, string> = {
  welcome: `
## Welcome to Roomonitor

Roomonitor is your all-in-one platform for property monitoring and guest management. This guide will help you understand the core features and how to get started.

### What You Can Do

- **Monitor Properties**: Track noise levels, occupancy, and environmental conditions in real-time
- **Manage Incidents**: Receive alerts and respond to issues quickly
- **Integrate Systems**: Connect with your existing property management software
- **Access Reports**: View detailed analytics and historical data

### Getting Help

If you need assistance at any time, our support team is available 24/7. You can reach us through the Control Center or by contacting support directly.

### Next Steps

1. Complete your account setup
2. Install your first device
3. Configure your alert preferences
4. Explore the dashboard
`,

  "quick-start": `
## Quick Start Guide

Get up and running with Roomonitor in under 10 minutes. This guide covers the essential steps to start monitoring your properties.

### Step 1: Verify Your Account

After signing up, check your email for a verification link. Click it to activate your account.

### Step 2: Add Your First Property

1. Navigate to **Properties** in the dashboard
2. Click **Add Property**
3. Enter the property details (name, address, type)
4. Save and continue

### Step 3: Install a Device

1. Unbox your Roomonitor device
2. Plug it into a power outlet
3. Connect to WiFi using the mobile app
4. Assign the device to your property

### Step 4: Configure Alerts

1. Go to **Settings > Alerts**
2. Set your preferred noise thresholds
3. Choose notification methods (email, SMS, app)
4. Save your preferences

### You're Ready!

Your property is now being monitored. Visit the dashboard to see real-time data.
`,

  "account-setup": `
## Setting Up Your Account

Configure your profile, team members, and preferences to get the most out of Roomonitor.

### Personal Profile

Update your personal information in **Settings > Profile**:

- Display name
- Contact email
- Phone number for SMS alerts
- Timezone settings

### Adding Team Members

If you have a team, you can add them under **Settings > Team**:

1. Click **Invite Member**
2. Enter their email address
3. Select their role (Admin, Manager, Viewer)
4. Send the invitation

### Notification Preferences

Customize how you receive alerts:

- **Email**: Daily digest or instant notifications
- **SMS**: Critical alerts only
- **Push**: All alerts or selected types

### Security Settings

We recommend enabling two-factor authentication for added security. Go to **Settings > Security** to set this up.
`,

  "device-installation": `
## Device Installation Manual

This comprehensive guide walks you through installing Roomonitor devices in your property.

### Before You Begin

Ensure you have:

- Roomonitor device and power adapter
- WiFi network credentials
- Mobile app installed on your phone
- Property already added in the dashboard

### Physical Installation

#### Choosing a Location

- Install at ear height (1.5m from floor)
- Avoid direct sunlight or heat sources
- Keep away from loud appliances
- Ensure WiFi signal strength is adequate

#### Mounting Options

1. **Wall mount**: Use provided screws and anchors
2. **Shelf placement**: Set on a stable, flat surface
3. **Magnetic mount**: Attach to metal surfaces

### Connecting to WiFi

1. Power on the device (LED flashes blue)
2. Open the Roomonitor mobile app
3. Tap **Add Device**
4. Select your WiFi network
5. Enter the password
6. Wait for confirmation (LED turns solid green)

### Verification

After installation, verify the device is working:

1. Check the dashboard for the device status
2. Confirm data is being received
3. Test an alert by creating noise briefly
`,

  "sensor-placement": `
## Optimal Sensor Placement

Proper sensor placement ensures accurate readings and reliable alerts. Follow these best practices.

### General Guidelines

- **Height**: 1.2m to 1.8m from the floor
- **Distance from walls**: At least 30cm
- **Avoid**: Corners, behind furniture, near vents

### Room-Specific Recommendations

#### Living Areas

Place centrally for best coverage. In large rooms, consider multiple sensors.

#### Bedrooms

Position near the main sleeping area but away from bedside appliances.

#### Hallways

Install at transition points to capture movement between areas.

### Environmental Considerations

| Factor | Recommendation |
|--------|----------------|
| Temperature | 0°C to 40°C operating range |
| Humidity | Below 80% relative humidity |
| WiFi signal | Minimum -70 dBm |

### Testing Your Placement

After installation, run a 24-hour test period to verify accuracy before going live.
`,

  "network-requirements": `
## Network Requirements

Ensure your network meets these requirements for reliable device operation.

### WiFi Specifications

- **Standard**: 802.11 b/g/n (2.4 GHz)
- **Security**: WPA2 or WPA3
- **Bandwidth**: Minimum 1 Mbps per device

### Network Configuration

#### Firewall Rules

Allow outbound connections on:
- Port 443 (HTTPS)
- Port 8883 (MQTT over TLS)

#### DNS Requirements

Devices need access to:
- \`api.roomonitor.com\`
- \`mqtt.roomonitor.com\`

### Troubleshooting Connectivity

If a device shows offline:

1. Check WiFi signal strength
2. Verify network credentials
3. Restart the device
4. Check firewall settings

### Enterprise Networks

For enterprise deployments with VLANs or network isolation, contact our support team for specific configuration guidance.
`,

  "alert-thresholds": `
## Configuring Alert Thresholds

Customize alert sensitivity to match your property's needs and reduce false positives.

### Noise Thresholds

Set decibel levels that trigger alerts:

| Level | Typical Use | dB Range |
|-------|-------------|----------|
| Low | Quiet hours | 50-60 dB |
| Medium | Daytime | 65-75 dB |
| High | Events allowed | 80+ dB |

### Time-Based Rules

Create different thresholds for:

- **Quiet hours**: 10 PM - 8 AM
- **Daytime**: 8 AM - 10 PM
- **Weekends**: Custom schedules

### Occupancy Settings

Adjust sensitivity for:

- Maximum guest count alerts
- Unusual activity patterns
- Extended absences

### Saving Presets

Create reusable configurations for different property types or seasonal adjustments.
`,

  "notification-settings": `
## Notification Settings

Control how and when you receive alerts from Roomonitor.

### Notification Channels

#### Email Notifications

- Instant alerts for critical events
- Daily summary digests
- Weekly reports

#### SMS Alerts

Best for critical alerts that need immediate attention. Standard SMS rates may apply.

#### Push Notifications

Real-time alerts through the mobile app. Ensure notifications are enabled in your phone settings.

### Alert Priority Levels

| Priority | Examples | Default Channel |
|----------|----------|-----------------|
| Critical | Smoke detected, extreme noise | SMS + Push |
| High | Occupancy exceeded | Push + Email |
| Medium | Threshold breach | Email |
| Low | Device offline | Email digest |

### Quiet Hours

Suppress non-critical notifications during specified hours to avoid disturbances.
`,

  "pms-integration": `
## PMS Integration Setup

Connect Roomonitor with your Property Management System for seamless operations.

### Supported Systems

We integrate with major PMS platforms:

- Guesty
- Hostaway
- Lodgify
- Hostfully
- And many more

### Setting Up Integration

1. Navigate to **Settings > Integrations**
2. Select your PMS from the list
3. Click **Connect**
4. Authorize access in the popup window
5. Map your properties

### Data Synchronization

Once connected, Roomonitor automatically syncs:

- Reservation dates and times
- Guest information
- Property details

### Automation Features

With PMS integration, you can:

- Auto-adjust thresholds during check-in/out
- Send automated guest messages
- Generate booking-specific reports

### Troubleshooting

If sync issues occur, try disconnecting and reconnecting. For persistent problems, contact support.
`,

  "user-permissions": `
## Managing User Permissions

Set up team roles and access levels to control what team members can see and do.

### Available Roles

#### Administrator

Full access to all features:
- Manage team members
- Configure integrations
- Access billing
- All Manager permissions

#### Manager

Operational access:
- View all properties
- Respond to alerts
- Generate reports
- Modify settings

#### Viewer

Read-only access:
- View dashboards
- See alert history
- Access reports

### Assigning Roles

1. Go to **Settings > Team**
2. Select the team member
3. Choose their role
4. Save changes

### Property-Level Permissions

Restrict access to specific properties for team members who only manage certain locations.
`,

  "daily-monitoring": `
## Daily Monitoring Workflow

Recommended daily routines for effective property management.

### Morning Check (5 minutes)

1. Review overnight alerts
2. Check device status for offline units
3. Note any pending issues

### Throughout the Day

- Respond to alerts promptly
- Log incident details
- Communicate with guests as needed

### Evening Review (5 minutes)

1. Ensure all devices are online
2. Review today's activity
3. Prepare for quiet hours

### Weekly Tasks

- Review analytics and trends
- Check for software updates
- Audit alert thresholds

### Best Practices

- Set up a dedicated notification device
- Establish response time goals
- Document recurring issues
`,

  "incident-response-guide": `
## Incident Response Protocol

How to handle alerts and escalations effectively.

### Alert Response Flow

1. **Receive Alert**: Acknowledge within 5 minutes
2. **Assess Severity**: Determine if immediate action is needed
3. **Take Action**: Contact guests or dispatch staff
4. **Document**: Log the incident and resolution
5. **Follow Up**: Prevent recurrence

### Severity Levels

#### Level 1 - Critical
Immediate response required (smoke, extreme noise).

#### Level 2 - High
Response within 15 minutes (occupancy exceeded).

#### Level 3 - Medium
Response within 1 hour (sustained threshold breach).

### Communication Templates

Use pre-written messages for common scenarios:

- First noise warning
- Second warning with consequences
- Emergency contact

### Escalation Paths

Define clear escalation procedures for after-hours incidents.
`,

  "reporting-analytics": `
## Understanding Reports & Analytics

Make data-driven decisions with platform insights.

### Available Reports

#### Property Performance
- Incident frequency
- Average response time
- Guest compliance rates

#### Device Health
- Uptime percentages
- Connectivity issues
- Battery status (where applicable)

#### Trend Analysis
- Week-over-week comparisons
- Seasonal patterns
- Property benchmarking

### Accessing Reports

1. Go to **Reports** in the main navigation
2. Select report type
3. Choose date range
4. Apply filters as needed
5. Export if required

### Key Metrics

| Metric | Good | Needs Attention |
|--------|------|-----------------|
| Uptime | >99% | <95% |
| Response Time | <5 min | >15 min |
| False Positive Rate | <10% | >25% |

### Custom Reports

Contact support to set up custom reports for specific business needs.
`,

  "device-offline": `
## Device Shows Offline

Steps to troubleshoot connectivity issues.

### Quick Fixes

1. **Check power**: Ensure device is plugged in and powered
2. **Restart device**: Unplug for 10 seconds, then reconnect
3. **Check WiFi**: Verify network is working on other devices

### Network Issues

If WiFi is working but device is offline:

1. Check signal strength at device location
2. Verify network credentials haven't changed
3. Ensure firewall isn't blocking connections

### LED Status Guide

| LED Color | Status |
|-----------|--------|
| Solid green | Connected |
| Flashing blue | Connecting |
| Solid red | Error |
| Off | No power |

### When to Contact Support

If the device remains offline after trying these steps, contact support with:

- Device serial number
- LED status
- Network details
`,

  "false-alerts": `
## Reducing False Alerts

Fine-tune sensitivity to minimize false positives while maintaining accuracy.

### Common Causes

- Threshold set too low
- Device placed near noise sources
- Environmental factors (HVAC, traffic)

### Adjustment Steps

1. **Review alert history**: Identify patterns
2. **Analyze timestamps**: Note recurring times
3. **Adjust thresholds**: Increase gradually (5 dB increments)
4. **Monitor results**: Give changes 48 hours to evaluate

### Environmental Mitigation

| Source | Solution |
|--------|----------|
| HVAC noise | Relocate device or adjust baseline |
| Street traffic | Increase threshold during peak hours |
| Appliances | Move device away from kitchen/laundry |

### Using Smart Filters

Enable AI-powered filtering to distinguish between:

- Brief loud noises vs. sustained disturbance
- TV/music vs. parties
- Normal activity vs. rule violations

### Threshold Testing

Use the built-in calibration tool to find optimal settings for each property.
`,

  faq: `
## Frequently Asked Questions

Answers to the most common platform questions.

### Account & Billing

**How do I upgrade my plan?**
Go to Settings > Subscription and select your desired plan.

**Can I add more properties?**
Yes, your plan determines the number of properties. Upgrade if needed.

**How do I cancel my subscription?**
Contact support to process cancellation requests.

### Devices

**How long do devices last?**
Devices are designed for 5+ years of continuous operation.

**Are devices weather-resistant?**
Indoor devices are not weather-resistant. Outdoor models are available.

**Can I move a device to another property?**
Yes, reassign devices in the dashboard under Property Settings.

### Alerts & Monitoring

**Why am I not receiving alerts?**
Check notification settings and ensure your contact info is correct.

**How accurate are noise readings?**
Readings are accurate within ±2 dB under normal conditions.

**Can I customize quiet hours per property?**
Yes, each property can have unique schedules.

### Integrations

**Which PMS systems are supported?**
See our integrations page for the full list of supported systems.

**Is API access available?**
Yes, API documentation is available for enterprise customers.

### Support

**What are support hours?**
24/7 support is available for all plans.

**How do I report a bug?**
Use the feedback option in the app or contact support.
`,
};

export const getGuideContent = (guideId: string): string | null => {
  return guideContent[guideId] || null;
};
