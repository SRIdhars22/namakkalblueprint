import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the AI assistant for Namakkal Blueprint, a professional print shop and E-Seva center located in Namakkal, Tamil Nadu, India. You are helpful, friendly, and knowledgeable about all our services.

## About Namakkal Blueprint
- We are Namakkal's #1 Building Approval & Print Partner
- We offer comprehensive services: Building Approval, Land Layout, Survey Work, 2D Plans, Printing, Money Transfer, E-Seva Government Services, Photoshop Design, and Bank Estimates
- We provide delivery within 5 KM radius from our stores

## Our Services:

### 1. Building Approval (Our Primary Service)
- DTCP & Panchayat Plan Approval
- Building Permit Application Filing
- Plan Submission to Local Body
- Residential & Commercial Approvals
- Revision & Re-submission Support
- Status Tracking & Follow-up

### 2. Land Layout
- Residential Layout Planning
- Plot Sub-division & Numbering
- Road & Open Space Allocation
- DTCP Layout Approval Plans
- Drainage & Utility Planning
- Layout Drawing & Large-Format Print

### 3. Survey Work
- Land Boundary Survey
- Plot Demarcation & Marking
- Revenue Survey Records (A-Register)
- FMB Sketch & Patta Services
- GPS-Based Field Survey
- Encroachment & Dispute Survey

### 4. 2D Plan & Architectural Design
- Residential & Commercial Floor Plans
- Elevation & Site Layout Drawings
- AutoCAD Plan Printing (A0–A2)
- Structural & Electrical Layouts
- High-Precision Scaled Outputs

### 5. All-Size Printing & Xerox
- Laser Xerox – B&W and Colour
- Large-Format A0, A1, A2 Prints
- Standard A3 & A4 Printing
- Bond Paper, Photo & Matte Finish
- Bulk Order Discounts Available
- Same-Day Express Service

### 6. Money Transfer
- IMPS / NEFT / RTGS Transfers
- Domestic Remittance Services
- Bank-to-Bank Transfers
- Instant Transfer Confirmation
- All Major Banks Supported
- Safe & Government Authorized

### 7. E-Seva Government Services
- Aadhaar, PAN & Voter ID Services
- Birth, Death & Community Certificates
- Income & Nativity Certificates
- Ration Card & Smart Card Updates
- Revenue & Land Records
- Online Application Filing & Tracking

### 8. Photoshop Design Work
- ID Card & Certificate Design
- Photo Editing & Retouching
- Logo & Branding Graphics
- Visiting Card & Letterhead Design
- Print-Ready File Preparation

### 9. Bank Estimate
- Construction Cost Estimation
- Bank Loan Estimate Reports
- Property Valuation Documents
- Structural Material Calculations
- Home Loan Estimate Preparation
- Accepted by All Major Banks

## Contact Information:
- Phone/WhatsApp: +91 95008 98927
- Shop 1: No 707 A, Murugan Kovil Bus Stop, Namakkal – Salem Road (Phone: 95008 98927)
- Shop 2: Canara Bank, No.8/13, opp. Paramathi Road, S P Pudur (Phone: 95009 28927)
- Shop 3: 6597+G44, S P Pudur, Thillaipuram (Phone: 76398 98927)
- Instagram: @namakkal_blueprint

## Working Hours:
- Mon-Fri: 9:00 AM – 8:00 PM
- Saturday: 9:00 AM – 7:00 PM
- Sunday: 10:00 AM – 4:00 PM

## Guidelines for Responses:
1. Be helpful and professional
2. Provide accurate information about our services
3. For complex queries or pricing, recommend contacting via WhatsApp at +91 95008 98927
4. If unsure about specific pricing, suggest visiting the store or calling
5. Emphasize our 5 KM delivery service when relevant
6. Keep responses concise but informative
7. Always be polite and welcoming`

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json() as { messages: ChatMessage[] }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Simple rule-based responses for common queries
    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || ''

    let response = ''

    // Building Approval
    if (lastMessage.includes('building') && (lastMessage.includes('approval') || lastMessage.includes('permit'))) {
      response = `Our Building Approval service is our primary expertise! We handle:

• DTCP & Panchayat Plan Approval
• Building Permit Application Filing
• Plan Submission to Local Body
• Residential & Commercial Approvals
• Revision & Re-submission Support
• Status Tracking & Follow-up

For building approval assistance, please WhatsApp us at +91 95008 98927 with your requirements. We'll guide you through the entire process!`
    }
    // 2D Plans
    else if (lastMessage.includes('2d') || lastMessage.includes('plan') || lastMessage.includes('architectural') || lastMessage.includes('floor plan')) {
      response = `Our 2D Plan & Architectural Design services include:

• Residential & Commercial Floor Plans
• Elevation & Site Layout Drawings
• AutoCAD Plan Printing (A0–A2)
• Structural & Electrical Layouts
• High-Precision Scaled Outputs

Send your requirements or existing files via WhatsApp at +91 95008 98927 and we'll provide you with a quote!`
    }
    // Printing/Prices
    else if (lastMessage.includes('print') || lastMessage.includes('xerox') || lastMessage.includes('price') || lastMessage.includes('cost')) {
      response = `Our Printing & Xerox services cover all sizes:

• Laser Xerox – B&W and Colour
• Large-Format A0, A1, A2 Prints
• Standard A3 & A4 Printing
• Bond Paper, Photo & Matte Finish
• Bulk Order Discounts Available
• Same-Day Express Service

For current pricing, please contact us at +91 95008 98927. Prices vary based on paper type, size, and quantity. We offer delivery within 5 KM!`
    }
    // Delivery
    else if (lastMessage.includes('delivery') || lastMessage.includes('5KM') || lastMessage.includes('5 KM')) {
      response = `Yes! We offer doorstep delivery within 5 KM radius of our stores in Namakkal.

Simply:
1. Send your files via WhatsApp at +91 95008 98927
2. Specify your requirements and location
3. We'll prepare and deliver to your doorstep!

This service is available for xerox copies, prints, and documents. Quick turnaround time!`
    }
    // E-Seva
    else if (lastMessage.includes('e-seva') || lastMessage.includes('eseva') || lastMessage.includes('government') || lastMessage.includes('certificate') || lastMessage.includes('aadhaar') || lastMessage.includes('pan')) {
      response = `Our E-Seva Government Services include:

• Aadhaar, PAN & Voter ID Services
• Birth, Death & Community Certificates
• Income & Nativity Certificates
• Ration Card & Smart Card Updates
• Revenue & Land Records
• Online Application Filing & Tracking

Visit any of our 3 shops or call +91 95008 98927 to schedule your service. We're experienced in handling all TN government online services!`
    }
    // Survey
    else if (lastMessage.includes('survey') || lastMessage.includes('boundary') || lastMessage.includes('land')) {
      response = `Our Survey Work services include:

• Land Boundary Survey
• Plot Demarcation & Marking
• Revenue Survey Records (A-Register)
• FMB Sketch & Patta Services
• GPS-Based Field Survey
• Encroachment & Dispute Survey

Contact us at +91 95008 98927 for survey requirements. Our team uses professional equipment for accurate measurements!`
    }
    // Contact/Location
    else if (lastMessage.includes('contact') || lastMessage.includes('location') || lastMessage.includes('address') || lastMessage.includes('where')) {
      response = `We have 3 convenient locations in Namakkal:

📍 Shop 1 - Salem Road
No 707 A, Murugan Kovil Bus Stop
Phone: 95008 98927

📍 Shop 2 - Paramathi Road  
Canara Bank, No.8/13, opp. Paramathi Road
Phone: 95009 28927

📍 Shop 3 - Paramathi to Namakkal Road
6597+G44, S P Pudur, Thillaipuram
Phone: 76398 98927

WhatsApp: +91 95008 98927
Instagram: @namakkal_blueprint`
    }
    // Working Hours
    else if (lastMessage.includes('hours') || lastMessage.includes('timing') || lastMessage.includes('open') || lastMessage.includes('when')) {
      response = `Our Working Hours:

🕘 Monday - Friday: 9:00 AM – 8:00 PM
🕘 Saturday: 9:00 AM – 7:00 PM  
🕙 Sunday: 10:00 AM – 4:00 PM

Feel free to visit any of our 3 shops or contact us via WhatsApp at +91 95008 98927!`
    }
    // Money Transfer
    else if (lastMessage.includes('money') || lastMessage.includes('transfer') || lastMessage.includes('neft') || lastMessage.includes('rtgs')) {
      response = `Our Money Transfer services include:

• IMPS / NEFT / RTGS Transfers
• Domestic Remittance Services
• Bank-to-Bank Transfers
• Instant Transfer Confirmation
• All Major Banks Supported
• Safe & Government Authorized

Visit our shop with valid ID proof for money transfer services. Call +91 95008 98927 for any queries!`
    }
    // Bank Estimate
    else if (lastMessage.includes('bank') || lastMessage.includes('estimate') || lastMessage.includes('loan')) {
      response = `Our Bank Estimate services help with loan applications:

• Construction Cost Estimation
• Bank Loan Estimate Reports
• Property Valuation Documents
• Structural Material Calculations
• Home Loan Estimate Preparation
• Accepted by All Major Banks

For bank estimate preparation, please visit our shop with your property details or call +91 95008 98927!`
    }
    // Hello/Greeting
    else if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('hey') || lastMessage.includes('good')) {
      response = `Hello! Welcome to Namakkal Blueprint! 👋

We're your one-stop shop for:
• Building Approval (Our Specialty!)
• Land Layout & Survey Work
• 2D Plans & Architectural Design
• Printing & Xerox (All Sizes)
• E-Seva Government Services
• Money Transfer & Bank Estimates

How can I help you today? Feel free to ask about any of our services!`
    }
    // Thank you
    else if (lastMessage.includes('thank') || lastMessage.includes('thanks')) {
      response = `You're welcome! We're always happy to help.

If you need anything else, feel free to ask or contact us directly:
📞 Phone/WhatsApp: +91 95008 98927
📸 Instagram: @namakkal_blueprint

Thank you for choosing Namakkal Blueprint!`
    }
    // Default response
    else {
      response = `Thank you for your interest in Namakkal Blueprint!

We offer a wide range of services:
• Building Approval (Our Primary Service!)
• Land Layout & Survey Work
• 2D Plans & Architectural Design
• Printing & Xerox (A0 to A4)
• E-Seva Government Services
• Money Transfer & Bank Estimates
• Photoshop Design Work

For specific queries or to get started, please:
📱 WhatsApp us at +91 95008 98927
📞 Call: 95008 98927

How else can I assist you?`
    }

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
