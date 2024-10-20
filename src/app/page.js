"use client";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import ProductDescription from "./Components/ProductDescription";
import FreshnessDetection from "./Components/FreshnessDetection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <ProductDescription />
      <FreshnessDetection />
      <Footer />
    </div>
  );
}
