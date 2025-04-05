import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Dmitri Nuzhny | Lead Web3 Developer & Full-Stack Engineer</title>
      <meta name="description" content="Dmitri Nuzhny is a Lead Web3 Developer and Full-Stack Engineer specializing in blockchain, smart contracts, and scalable web applications." />
      <meta name="keywords" content="Web3, Blockchain, Smart Contracts, Ethereum, React, Node.js, Full-Stack Development" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dnuzhny.github.io/" />
      <meta property="og:title" content="Dmitri Nuzhny | Lead Web3 Developer" />
      <meta property="og:description" content="Lead Web3 Developer and Full-Stack Engineer specializing in blockchain and smart contracts." />
      <meta property="og:image" content="https://dnuzhny.github.io/images/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dnuzhny.github.io/" />
      <meta property="twitter:title" content="Dmitri Nuzhny | Lead Web3 Developer" />
      <meta property="twitter:description" content="Lead Web3 Developer and Full-Stack Engineer specializing in blockchain and smart contracts." />
      <meta property="twitter:image" content="https://dnuzhny.github.io/images/og-image.jpg" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Dmitri Nuzhny" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://dnuzhny.github.io/" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO; 