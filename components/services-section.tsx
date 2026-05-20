import { Building2, Map, Compass, PencilRuler, Printer, Banknote, Landmark, Palette, Building } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Building Approval',
    description: 'Our primary expertise — complete end-to-end assistance for building plan approvals from DTCP, Panchayat, and municipal authorities.',
    features: [
      'DTCP & Panchayat Plan Approval',
      'Building Permit Application Filing',
      'Plan Submission to Local Body',
      'Residential & Commercial Approvals',
      'Revision & Re-submission Support',
      'Status Tracking & Follow-up',
    ],
    tag: 'Primary Service',
    isMain: true,
  },
  {
    icon: Map,
    title: 'Land Layout',
    description: 'Professional land layout planning and plot subdivision services to help developers and landowners maximise their property value.',
    features: [
      'Residential Layout Planning',
      'Plot Sub-division & Numbering',
      'Road & Open Space Allocation',
      'DTCP Layout Approval Plans',
      'Drainage & Utility Planning',
      'Layout Drawing & Large-Format Print',
    ],
    tag: 'Land Layout',
    isMain: false,
  },
  {
    icon: Compass,
    title: 'Survey Work',
    description: 'Accurate land and property survey services using professional tools to determine precise boundaries and measurements.',
    features: [
      'Land Boundary Survey',
      'Plot Demarcation & Marking',
      'Revenue Survey Records (A-Register)',
      'FMB Sketch & Patta Services',
      'GPS-Based Field Survey',
      'Encroachment & Dispute Survey',
    ],
    tag: 'Survey Work',
    isMain: false,
  },
  {
    icon: PencilRuler,
    title: '2D Plan & Architectural Design',
    description: 'Professional 2D building plan drafting, floor plans, elevation layouts, and site plan printing for architects and builders.',
    features: [
      'Residential & Commercial Floor Plans',
      'Elevation & Site Layout Drawings',
      'AutoCAD Plan Printing (A0–A2)',
      'Structural & Electrical Layouts',
      'High-Precision Scaled Outputs',
    ],
    tag: 'Design & Plans',
    isMain: false,
  },
  {
    icon: Printer,
    title: 'All-Size Printing & Xerox',
    description: 'High-quality laser xerox and large-format printing for all standard and custom paper sizes with fast turnaround.',
    features: [
      'Laser Xerox – B&W and Colour',
      'Large-Format A0, A1, A2 Prints',
      'Standard A3 & A4 Printing',
      'Bond Paper, Photo & Matte Finish',
      'Bulk Order Discounts Available',
      'Same-Day Express Service',
    ],
    tag: 'Print Services',
    isMain: false,
  },
  {
    icon: Banknote,
    title: 'Money Transfer',
    description: 'Fast, secure, and reliable domestic money transfer services for individuals and businesses across India.',
    features: [
      'IMPS / NEFT / RTGS Transfers',
      'Domestic Remittance Services',
      'Bank-to-Bank Transfers',
      'Instant Transfer Confirmation',
      'All Major Banks Supported',
      'Safe & Government Authorized',
    ],
    tag: 'Money Transfer',
    isMain: false,
  },
  {
    icon: Landmark,
    title: 'E-Seva Government Services',
    description: 'All types of online government document assistance, certificate applications, and official service facilitation under one roof.',
    features: [
      'Aadhaar, PAN & Voter ID Services',
      'Birth, Death & Community Certificates',
      'Income & Nativity Certificates',
      'Ration Card & Smart Card Updates',
      'Revenue & Land Records',
      'Online Application Filing & Tracking',
    ],
    tag: 'E-Seva / Gov Docs',
    isMain: false,
  },
  {
    icon: Palette,
    title: 'Photoshop Design Work',
    description: 'Creative graphic design and photo editing services for banners, flex boards, ID cards, certificates, and all print-ready artwork.',
    features: [
      'ID Card & Certificate Design',
      'Photo Editing & Retouching',
      'Logo & Branding Graphics',
      'Visiting Card & Letterhead Design',
      'Print-Ready File Preparation',
    ],
    tag: 'Design Work',
    isMain: false,
  },
  {
    icon: Building,
    title: 'Bank Estimate',
    description: 'Professional preparation of property and construction cost estimate documents required for bank loan applications and approvals.',
    features: [
      'Construction Cost Estimation',
      'Bank Loan Estimate Reports',
      'Property Valuation Documents',
      'Structural Material Calculations',
      'Home Loan Estimate Preparation',
      'Accepted by All Major Banks',
    ],
    tag: 'Bank Estimate',
    isMain: false,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-4 md:px-8 lg:px-12 bg-secondary overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(26,58,143,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold text-cyan tracking-[3px] uppercase mb-4">
            <span className="w-7 h-0.5 bg-gradient-to-r from-cyan to-cyan/30" />
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From building approvals to precision printing — a complete step-by-step solution for every project need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                  service.isMain
                    ? 'bg-gradient-to-b from-blue-navy to-blue-deep border-2 border-amber shadow-[0_0_20px_rgba(255,184,0,0.15)]'
                    : 'border border-border border-t-[3px] border-t-primary shadow-[0_2px_12px_rgba(10,22,40,0.06)] hover:shadow-[0_24px_60px_rgba(26,58,143,0.14)] hover:border-cyan/25'
                }`}
              >
                {/* Main Service Badge */}
                {service.isMain && (
                  <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-amber text-blue-deep text-[11px] font-extrabold tracking-[2px] uppercase px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(255,184,0,0.5)] z-10">
                    MAIN SERVICE
                  </div>
                )}

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan via-primary to-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="p-8 pt-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2 ${
                      service.isMain
                        ? 'bg-gradient-to-br from-amber to-amber/80 shadow-[0_6px_24px_rgba(255,184,0,0.4)]'
                        : 'bg-gradient-to-br from-primary to-blue-brand shadow-[0_6px_24px_rgba(26,58,143,0.28)] group-hover:shadow-[0_10px_32px_rgba(26,58,143,0.4)]'
                    }`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-extrabold mb-3 leading-tight ${
                      service.isMain ? 'text-amber' : 'text-foreground'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[15px] leading-relaxed mb-5 ${
                      service.isMain ? 'text-muted-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          service.isMain ? 'text-muted-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        <span className={service.isMain ? 'text-amber' : 'text-cyan'}>
                          &#9656;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tag */}
                  <span
                    className={`inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border transition-all ${
                      service.isMain
                        ? 'bg-amber/15 text-amber border-amber/40'
                        : 'bg-cyan/8 text-primary border-primary/20 group-hover:bg-cyan/15 group-hover:border-cyan/30'
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
