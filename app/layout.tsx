import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Main } from './main';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard Template',
  description: 'Created By AyoCodes'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Main>{children}</Main>
      </html>
    </ClerkProvider>
  );
}
