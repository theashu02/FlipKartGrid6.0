"use client";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import ProductDescription from "./Components/ProductDescription";
import FreshnessDetection from "./Components/FreshnessDetection";
import LoadingPage from "./Components/LoadingPage";
import { useState,useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change to your desired loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />; // Show loading component while loading
  }
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
