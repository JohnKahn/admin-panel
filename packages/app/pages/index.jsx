import React from 'react';
import Link from 'next/link';

const IndexPage = () => (
  <div>
    <h1>Hello World</h1>
    <Link href="/about">About</Link>
  </div>
);

export default IndexPage;
