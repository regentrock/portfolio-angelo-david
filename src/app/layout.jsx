import './globals.css';

export const metadata = {
  title: 'Ângelo David | Web Developer Portfolio',
  description: 'Portfólio de Ângelo David - Desenvolvedor Web especializado em React, Next.js e JavaScript',
  keywords: 'desenvolvedor, portfolio, react, nextjs, javascript, front-end',
  authors: [{ name: 'Ângelo David' }],
  openGraph: {
    title: 'Ângelo David | Web Developer Portfolio',
    description: 'Portfólio de Ângelo David - Desenvolvedor Web especializado em React, Next.js e JavaScript',
    url: 'https://portfolio-angelo.vercel.app',
    siteName: 'Ângelo David Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/portfolio-head.png',
        width: 1200,
        height: 630,
        alt: 'Ângelo David - Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ângelo David | Web Developer Portfolio',
    description: 'Portfólio de Ângelo David - Desenvolvedor Web especializado em React, Next.js e JavaScript',
    images: ['/portfolio-head.png'],
  },
  icons: {
    icon: '/favicon.ico',
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