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
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Daniel K.",
    company: "Daniel’s Sportswear",
    image: user1,
    text: "The drag-and-drop interface is genius! I built my own dashboard in minutes, and now everything runs like clockwork",
  },
  {
    user: "Sarah J.",
    company: "Sarah’s Sweet Treats",
    image: user2,
    text: "I can’t imagine running my bakery without Easy-Dashy anymore. The inventory alerts and automated reports make everything so much easier!",
  },
  {
    user: " Michael T.",
    company: "Mike’s Gadget Garage",
    image: user3,
    text: "Elite Flow has revolutionized how I manage my team and track orders. The role-based permissions feature is a game-changer for my business.",
  },
  {
    user: "Omar A.",
    company: "Omar’s Outdoor Essentials",
    image: user4,
    text: "I never realized how much I was missing until Easy-Dashy. From low-stock alerts to marketing campaigns, everything is super intuitive.",
  },
  {
    user: "Priya S.",
    company: "Priya’s Home Decor",
    image: user6,
    text: "The customer analytics tools helped me identify my best-selling products and plan promotions better. My sales are up 25% in just three months!",
  },
  {
    user: "David H.",
    company: "David’s Urban Coffee",
    image: user5,
    text: "The sales analytics helped me understand my peak hours and optimize staffing. My coffee shop has never been this efficient!",
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
    title: "Starter Dash",
    price: "$0",
    features: [
      "Basic Dashboard Layout",
      "Inventory Alerts",
      "Daily Sales Snapshot",
      "Email Support",
    ],
  },
  {
    title: "Pro Flex",
    price: "$10",
    features: [
      "Advanced Customization",
      "Integration with Platforms",
      "Detailed Analytics",
      "Automated Reports",
    ],
  },
  {
    title: "Elite Flow",
    price: "$200",
    features: [
      "Full Customization Suite",
      "Real-Time Sync",
      "Role-Based Access",
      "Priority Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Knowledge Base" },
  { href: "#", text: "Blog" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "Security" },
  { href: "#", text: "Roadmap" },
];

export const communityLinks = [
  { href: "#", text: "Forum" },
  { href: "#", text: "Events" },
  { href: "#", text: "Social Media" },
  { href: "#", text: "User Groups" },
  { href: "#", text: "Open Source Contributions" },
];
