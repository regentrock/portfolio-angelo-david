// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Ângelo David | Web Developer Portfolio',
  description: 'Portfólio de Angelo David - Desenvolvedor Web especializado em React, Next.js e TypeScript',
  keywords: 'desenvolvedor, portfolio, react, nextjs, typescript, front-end',
  authors: [{ name: 'Ângelo David' }],
  openGraph: {
    title: 'Ângelo David | Web Developer Portfolio',
    description: 'Portfólio de Ângelo David - Desenvolvedor Web especializado em React, Next.js e TypeScript',
    url: 'https://portfolio-angelo.com',
    siteName: 'Ângelo David Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}