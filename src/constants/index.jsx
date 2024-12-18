import { Pipette } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { ChartLine } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { Blocks } from "lucide-react";
import { ScanFace } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Pipette />,
    text: "Drag-and-Drop Customization",
    description:
      "Effortlessly build your personalized dashboard layout with our intuitive drag-and-drop interface.",
  },
  {
    icon: <ChartLine />,
    text: "Comprehensive Sales Analytics",
    description:
      "Get actionable insights with real-time sales data, helping you identify trends and boost revenue.",
  },
  {
    icon: <MonitorSmartphone />,
    text: "Smart Inventory Management",
    description:
      "Monitor stock levels, set low-stock alerts, and manage products seamlessly from one platform.",
  },
  {
    icon: <ShieldAlert />,
    text: "Automated Reports & Alerts",
    description:
      "Receive detailed reports and timely notifications for low inventory, sales performance, and more.",
  },
  {
    icon: <Blocks />,
    text: "Seamless Platform Integration",
    description:
      "Connect with popular e-commerce platforms like Shopify and WooCommerce to synchronize your business data.",
  },
  {
    icon: <ScanFace />,
    text: "Role-Based Access Control",
    description:
      "Assign specific permissions to managers, staff, and finance teams, ensuring secure and efficient collaboration.",
  },
];

export const checklistItems = [
  {
    title: "Select Your Modules",
    description:
      "Choose the tools you need for your business, from sales analytics to inventory tracking, and add them to your dashboard with ease.",
  },
  {
    title: "Customize Your Layout",
    description:
      "Arrange widgets using a simple drag-and-drop interface to create a dashboard that perfectly aligns with your workflow.",
  },
  {
    title: "Connect Your Data",
    description:
      "Integrate with your favorite e-commerce platforms to sync real-time sales, inventory, and customer data effortlessly.",
  },
  {
    title: "Monitor and Optimize",
    description:
      "Track key metrics, generate reports, and receive alerts to make data-driven decisions that grow your business.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
