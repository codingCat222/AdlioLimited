"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const items = [


    { 
      title: "  Carezest – Caregiving Services Management Platform", 
      category: "Web and mobile App Development", 
      description: " A centralized platform designed to manage caregiving services between care agencies, caregivers, and family members. It streamlines caregiver onboarding, scheduling, task assignment, and real-time care tracking, while improving communication and accountability across all stakeholders. The system ensures efficient coordination and better quality of care delivery.",

      image: "/image/img11.png ",
      link: " https://carezestservice.com",
      isDemo: false
    },


    { 
      title: "  CRARTY AI – AI-Powered SaaS Brand Studio", 
      category: "WebApp Development", 
      description: "  A cloud-based SaaS platform that helps users generate, design, and refine brand identities using AI. CRARTY AI streamlines the creation of logos, brand assets, and visual concepts, enabling startups and businesses to build consistent, professional branding faster and more efficiently through an intuitive online workspace",
      image: "/image/img12.png",
      link: " https://carttifys-jvyd.vercel.app",
      isDemo: false
    },
    
    { 
      title: " Cartify Market – E-commerce Marketplace Platform", 
      category: "WebApp Development", 
      description: " A modern online marketplace that connects buyers and sellers in a seamless digital shopping environment. Cartify Market enables product listing, secure payments, order management, and real-time inventory tracking, providing a smooth and efficient buying and selling experience for users and vendors.",
      image: "/image/img13.png",
      link: "  https://crarty.vercel.app",
      isDemo: false
    },
     { 
      title: "Adlio Asset Manager - Inbuilt Data Tracking System", 
      category: "Web Design and Development", 
      description: "A comprehensive asset management solution designed to help businesses track, monitor, and manage assets efficiently. The platform features an integrated data tracking system, providing real-time visibility into asset records, usage, and performance to improve operational efficiency and decision-making.",
      image: "/image/img2.jpeg",
      link: "https://your-live-project-link.com",
      isDemo: true
    },
    { 
      title: "Custom-made Automated Ajo App", 
      category: "WebApp Development", 
      description: "Developed a custom automated Ajo (savings and contribution) platform that streamlines group savings, contribution tracking, payment management, and member administration. The system automates manual processes, improves transparency, and provides a seamless user experience for both administrators and members.",
      image: "/image/img.jpeg",
      link: "https://ajo.alfabashirucommunications.com",
      isDemo: false
    },

   
    { 
      title: "Adlio Asset Manager - Inbuilt Data Tracking System", 
      category: "Web Design and Development", 
      description: "A comprehensive asset management solution designed to help businesses track, monitor, and manage assets efficiently. The platform features an integrated data tracking system, providing real-time visibility into asset records, usage, and performance to improve operational efficiency and decision-making.",
      image: "/image/img10.jpeg",
      link: "https://your-live-project-link.com",
      isDemo: true
    },
    { 
      title: "Custom-made Bank App", 
      category: "Fintech ", 
      description: "A secure and user-friendly digital banking application built to simplify financial management. The platform enables users to perform transactions, manage accounts, track balances, view transaction history, and access banking services seamlessly from any device.",
      image: "/image/img9.jpeg",
      link: "https://alfabashirucommunications.com/home",
      isDemo: false
    },
    { 
      title: "Food Safety Compliance Web App", 
      category: "web Application", 
      description: "A web-based compliance management platform designed to help food businesses maintain safety standards and regulatory requirements. The system streamlines inspections, record keeping, compliance monitoring, and reporting, ensuring food safety processes are managed efficiently and accurately.",
      image: "/image/img5.jpeg",
      link: "https://nuelsfoodsafety.com",
      isDemo: false
    },
    { 
      title: "Online Legal Consultancy Web App", 
      category: "Enterprise Solutions", 
      description: "A digital platform that connects clients with legal professionals for seamless consultation and support. The system enables appointment scheduling, case management, secure document sharing, and real-time communication, making legal services more accessible and efficient.",
      image: "/image/img6.jpeg",
      link: "https://urbanlegalclinic.com",
      isDemo: false
    },
    { 
      title: "Custom-made Mini Bank", 
      category: "Fintech", 
      description: "A lightweight digital banking solution designed for managing accounts, transfers, deposits, and transaction records. The platform provides secure financial operations, real-time balance updates, and an intuitive user experience for both users and administrators.",
      image: "/image/img8.jpeg",
      link: "https://alfabashirucommunications.com",
      isDemo: false
    },
    { 
      title: "Online Dating App", 
      category: "Web and Mobile", 
      description: "A modern dating platform available on both web and mobile, designed to help users connect, interact, and build meaningful relationships. Features include user profiles, smart matching, real-time messaging, notifications, and a seamless cross-platform experience.",
      image: "/image/img7.jpeg",
      link: "https://notjustdating.com",
      isDemo: false
    },
    { 
      title: "Analytics Dashboard", 
      category: "Business Intelligence", 
      description: "Real-time data visualization and reporting for business leaders.",
      image: "/image/img8.jpeg",
      link: "https://your-live-project-link.com",
      isDemo: false
    },
  ];

  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="mb-20"
      >
        <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-6">
          Selected Work
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-8">
          Featured work.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:border-[#3B82F6] transition-colors"
          >
            <div className="relative aspect-[4/3] bg-[#F8F9FB]">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-5">
              <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-1">{item.category}</p>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">{item.description}</p>
              
              {/* Conditionally render Request Demo or View Project */}
              {item.isDemo ? (
                <Link 
                  href="/contact"
                  className="mt-3 inline-block px-4 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  Request Demo
                </Link>
              ) : (
                <Link 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-3 inline-block text-sm text-[#3B82F6] font-medium hover:underline"
                >
                  View Project ↗
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}