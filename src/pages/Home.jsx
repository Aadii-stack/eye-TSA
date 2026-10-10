import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutIntro from '../components/home/AboutIntro';
import ElasticGallery from '../components/home/ElasticGallery';
import FeaturedEvent from '../components/home/FeaturedEvent';
import MetaSummitFeature from '../components/home/MetaSummitFeature';

export default function Home() {
  useEffect(() => {
    document.title = 'ITSA — Information Technology Student Association | SLRTCE';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page-view">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: What is ITSA? */}
      <AboutIntro />

      {/* Section 3: The ITSA Experience — Elastic Gallery (Signature Interaction) */}
      <ElasticGallery />

      {/* Section 4: What's Happening / Featured Event */}
      <FeaturedEvent />

      {/* Section 5: Meta Summit Feature */}
      <MetaSummitFeature />
    </div>
  );
}
