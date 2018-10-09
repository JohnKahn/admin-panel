import React from 'react';
import Link from 'next/link';
import Header from 'shared/components/Header';
import NavButton from 'shared/components/NavButton';

const AboutPage = () => (
  <div>
    <Link href="/" passHref>
      <NavButton>Home</NavButton>
    </Link>
    <Header>About</Header>
  </div>
);

export default AboutPage;
