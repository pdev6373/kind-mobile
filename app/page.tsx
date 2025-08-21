import CTA from '@/components/CTA';
import Why from '@/components/Why';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <Explore />
      <CTA />
      <Footer />
    </div>
  );
}
