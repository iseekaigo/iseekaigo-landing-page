'use client';

import Header from '@/app/components/Header/Header';
import Origin from '@/app/components/Origin/Origin';
import Roadmap from '@/app/components/Roadmap/Roadmap';
import Faq from '@/app/components/Faq/Faq';
import Footer from '@/app/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../app/components/Home/Home.css'; // Scoped CSS for Home

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Origin />
      <Roadmap />
      {/* <TrustedBy /> */}
      <Faq />
      <Footer />
    </main>
  );
}
