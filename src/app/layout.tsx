import Header from '@components/header';
import Head from './head';
import '@styles/globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
