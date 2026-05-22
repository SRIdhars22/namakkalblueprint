'use client'

import { Star, MessageSquare, Quote } from 'lucide-react'

const ratingsSummary = [
  {
    platform: 'Google Reviews',
    rating: '5.0',
    stars: 5,
    maxStars: 5,
    count: '150+ Verified Reviews',
    description: 'Namakkal\'s top-rated building approval & document service provider on Google Business.',
    colorClass: 'text-amber-500',
    logoColor: 'from-red-500 via-yellow-500 to-blue-500',
    brand: 'Google',
  },
  {
    platform: 'Justdial',
    rating: '4.5',
    stars: 4.5,
    maxStars: 5,
    count: '220+ Client Ratings',
    description: 'Consistently voted as the most reliable print and layout design company in the region.',
    colorClass: 'text-amber-500',
    logoColor: 'from-blue-600 to-amber-500',
    brand: 'Justdial',
  },
]

const testimonials = [
  {
    name: 'Senthil Kumar',
    role: 'Property Developer, Namakkal',
    rating: 5,
    platform: 'Google',
    text: 'Namakkal Blueprint handles building plan approvals flawlessly. They coordinated our DTCP approvals and municipal permits for a residential layout, saving us months of paperwork. Outstanding professionalism!',
    date: '2 weeks ago',
  },
  {
    name: 'Arch. Divya Bharathi',
    role: 'Principal Architect, DB Designs',
    rating: 5,
    platform: 'Google',
    text: 'Their A0/A1 large-format CAD printing quality is crisp and accurate. I simply send drawings over WhatsApp and receive site-ready prints delivered within hours. Highly recommended for busy design firms.',
    date: '1 month ago',
  },
  {
    name: 'Ramesh Krishnan',
    role: 'Landowner, Mohanur',
    rating: 4.5,
    platform: 'Justdial',
    text: 'Highly satisfied with their land boundary survey work. The surveyors used advanced tools, marked exact boundaries, and drafted a precise FMB sketch. Transparent fee structure and friendly support.',
    date: '3 weeks ago',
  },
  {
    name: 'Priyanka Sen',
    role: 'Freelancer',
    rating: 5,
    platform: 'Google',
    text: 'Used their E-Seva services for urgent Aadhaar card updates and income certificate applications. The staff is knowledgeable about Tamil Nadu government online portals. Zero hassle!',
    date: '2 months ago',
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0
  
  return (
    <div className="flex gap-0.5 items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        } else if (i === fullStars && hasHalf) {
          return (
            <div key={i} className="relative inline-block w-5 h-5 overflow-hidden">
              <Star className="absolute top-0 left-0 w-5 h-5 text-muted-foreground/30" />
              <div className="absolute top-0 left-0 w-[50%] h-5 overflow-hidden">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          )
        } else {
          return <Star key={i} className="w-5 h-5 text-muted-foreground/30" />
        }
      })}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 px-4 md:px-8 lg:px-12 bg-background overflow-hidden border-t border-border/50">
      {/* Background radial orbs */}
      <div className="absolute left-[-150px] top-[30%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,200,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-[-150px] bottom-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,184,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold text-cyan tracking-[3px] uppercase mb-4">
            <span className="w-7 h-0.5 bg-gradient-to-r from-cyan to-cyan/30" />
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
            Trusted by the <span className="text-primary">Namakkal Community</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Our commitment to quality, fast delivery, and expert support has earned us stellar ratings across key review platforms.
          </p>
        </div>

        {/* Aggregated ratings cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {ratingsSummary.map((summary) => (
            <div 
              key={summary.platform}
              className="relative bg-card border border-border hover:border-cyan/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_4px_24px_rgba(10,22,40,0.03)] hover:shadow-[0_12px_40px_rgba(0,200,255,0.08)] transition-all duration-300 group"
            >
              {/* Badge visual representation */}
              <div className="relative flex flex-col items-center justify-center shrink-0 w-24 h-24 rounded-2xl bg-muted/50 border border-border group-hover:scale-105 transition-transform">
                <span className="text-4xl font-black text-foreground leading-none">{summary.rating}</span>
                <span className="text-[10px] font-bold text-muted-foreground tracking-[1.5px] uppercase mt-1">out of 5</span>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                  <h3 className="text-lg font-black text-foreground flex items-center gap-2 justify-center md:justify-start">
                    {summary.platform === 'Google Reviews' ? (
                      <span className="inline-flex gap-0.5 font-bold tracking-tight text-xl">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                    ) : (
                      <span className="font-extrabold tracking-tight text-xl text-orange-500">
                        justdial
                      </span>
                    )}
                  </h3>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full w-fit mx-auto md:mx-0">
                    Verified
                  </span>
                </div>

                <div className="flex justify-center md:justify-start mb-3">
                  <StarRating rating={Number(summary.rating)} />
                </div>
                
                <p className="text-xs font-bold text-muted-foreground tracking-wide uppercase mb-2">
                  {summary.count}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {summary.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((test, index) => (
            <div 
              key={index}
              className="bg-card/40 border border-border hover:border-cyan/20 rounded-2xl p-7 relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.04)] group"
            >
              {/* Quote icon overlay */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted-foreground/5 opacity-40 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-3 mb-4">
                {/* Initial circle avatar */}
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-base border border-primary/20 shrink-0">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-tight">{test.name}</h4>
                  <p className="text-xs text-muted-foreground">{test.role}</p>
                </div>
              </div>

              {/* Star rating and platform tag */}
              <div className="flex items-center gap-3 mb-3">
                <StarRating rating={test.rating} />
                <span className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase bg-muted px-2 py-0.5 rounded">
                  via {test.platform}
                </span>
              </div>

              {/* Testimonial body */}
              <p className="text-[14px] text-muted-foreground leading-relaxed italic">
                "{test.text}"
              </p>
              
              {/* Date */}
              <div className="text-[11px] text-muted-foreground/70 text-right mt-4">
                {test.date}
              </div>
            </div>
          ))}
        </div>

        {/* Action Call */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-1">
            Had a great experience with Namakkal Blueprint?
          </p>
          <a 
            href="https://www.google.com/search?q=namakkalblueprint&oq=namakkalblueprint&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MggIAhBFGCcYOzIJCAMQABgNGIAEMgoIBBAAGAgYDRgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDY5MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVNnckFNajM1ZDBZSWNlYVFpZGNKYlRKU01OaVoxOGZ3dlVRaXFaa2VSbE95eThmeXNwQU9RVWFZd0FrQTdHR3d2QTE0cklVbEk5QmlEZFBPN0hhREh6eTJpbDEtNzZCLXlmeXhKMHFxcm56cVBrZi1rEhdUcEFRYXRpeEZQeXp3Y3NQajVqVHlBSRoiQUpLTEZtSnF4dEpYdGdfXzBMNVFtUS1lS1RET0VzWUJkZxIEODA1MRoBMyoAMAA4AUAAGAAgnszxjARKAhAC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-cyan hover:text-cyan-light underline decoration-cyan/30 hover:decoration-cyan-light transition-colors"
          >
            Leave us a review on Google
          </a>
        </div>
      </div>
    </section>
  )
}
