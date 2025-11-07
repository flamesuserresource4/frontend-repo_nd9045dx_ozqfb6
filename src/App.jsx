import React from 'react';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import LayeredBirthdayCard from './components/LayeredBirthdayCard';

const sample1 = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop';
const sample2 = 'https://images.unsplash.com/photo-1542219550-3723ee76aa38?q=80&w=1200&auto=format&fit=crop';
const sample3 = 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop';
const sample4 = 'https://images.unsplash.com/photo-1541614101311-51f3b62e5f77?q=80&w=1200&auto=format&fit=crop';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900">
      <Hero />

      <main className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            eyebrow="Layered Moments"
            title="Two-Layer Birthday Cards"
            subtitle="Click once for a celebratory ribbon burst. Hover to let the second image float in front without hiding the first."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <LayeredBirthdayCard
              title="Sweet Treats"
              image1={sample1}
              image2={sample2}
            />
            <LayeredBirthdayCard
              title="Party Vibes"
              image1={sample3}
              image2={sample4}
            />
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-pink-600/80">
        Made with love and confetti. 🎀
      </footer>
    </div>
  );
}

export default App;
