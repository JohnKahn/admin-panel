import React from 'react';
import Link from 'next/link';
import Header from 'shared/components/Header';
import NavButton from 'shared/components/NavButton';

const IndexPage = () => (
  <div>
    <Link href="/about" passHref>
      <NavButton>About</NavButton>
    </Link>
    <Header>Hello World</Header>
  </div>
);

export default IndexPage;
