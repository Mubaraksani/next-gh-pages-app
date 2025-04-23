
"use client";

import React from 'react';
import "./globals.css"; 

export default function Home() {
  return (
    <main >
      <style jsx>{`
        main {
          text-align: center;
          padding: 2rem;
        }
        p {
        margin-top: 1rem;
        font-size: 1.3rem;
        }
      `}</style>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple Next.js application. deployed and configured by <strong>gh pages</strong> environment</p>
    </main>
  );
}
