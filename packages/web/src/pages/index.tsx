import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

import kaonashi from '../assets/kaonashi.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Project Boilerplate</h1>
        <p>
          Monorepo + Next.js + Express + TypeScript + ESLint + Styled Components
        </p>
        <img alt="Personagem Kaonashi" src={kaonashi} />
      </main>
    </Container>
  );
};

export default Home;
