'use client';

import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import Schedule from '@/components/landing/Schedule';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Schedule />
      <Pricing />
      <Footer />
    </main>
  );
}
