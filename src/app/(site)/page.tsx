import {
  Hero,
  Values,
  Services,
  Education,
  Questions,
  About,
  Contacts,
} from '@/sections';

import { Preloader } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Questions />
      <Values />
      <Services />
      <Education />
      <Contacts />
    </>
  );
}
