import React, { useState, useEffect } from 'react';
import MetaHero from '../components/meta/MetaHero';
import MetaOverview from '../components/meta/MetaOverview';
import MetaTracks from '../components/meta/MetaTracks';
import MetaSchedulePlaceholder from '../components/meta/MetaSchedulePlaceholder';
import MetaFaq from '../components/meta/MetaFaq';
import MetaInterestModal from '../components/meta/MetaInterestModal';

export default function MetaSummit() {
  const [interestModalOpen, setInterestModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Meta Summit — ITSA Flagship Annual Convention | SLRTCE';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="meta-summit-page-view">
      {/* Flagship Hero */}
      <MetaHero onOpenInterestModal={() => setInterestModalOpen(true)} />

      {/* Overview & Poster Slot */}
      <MetaOverview />

      {/* Curated Technical Tracks */}
      <MetaTracks />

      {/* Planned Flow & Schedule Notice */}
      <MetaSchedulePlaceholder onOpenInterestModal={() => setInterestModalOpen(true)} />

      {/* Frequently Asked Questions */}
      <MetaFaq />

      {/* Interactive Priority Notification Modal */}
      <MetaInterestModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
      />
    </div>
  );
}
