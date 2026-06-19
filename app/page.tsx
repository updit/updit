'use client';

import Header from '@/components/layout/Header';
import TopSection from '@/components/sections/TopSection';
import AppSection from '@/components/sections/AppSection';
import LocalizeSection from '@/components/sections/LocalizeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-12">
        <section id="top">
          <TopSection />
        </section>
        <section id="app">
          <AppSection />
        </section>
        <section id="localize">
          <LocalizeSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
