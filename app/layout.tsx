import { Inter } from 'next/font/google';
import './globals.css';
import MainNavigation from './main_navigation';
import { ClerkProvider } from '@clerk/nextjs';
import MenuClickBoundary from '@/utils/menu_click_boundary';


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
      <html className="sm:overflow-hidden overflow-x-hidden  " lang="en">
        <body className={inter.className}>
          <section className="flex flex-col min-h-screen items-center justify-between   ">
            <header className="w-full h-12 fixed top-0 sm:flex bg-white z-10 shadow sm:shadow-none sm:border-b sm:border-gray-200 ">
              <div className="w-30 sm:w-60 items-center justify-center p-2">
                <p className="text-2xl mx-auto ml-10 w-fit mt-[-0.2rem] sm:mt-0">
                  Logo
                </p>
              </div>
              <ul className=" sm:flex-1  hidden sm:flex justify-between   px-10 py-3">
                <li>Service</li>
                <li>Enterprise</li>
                <li>Customer</li>
                <li>Product</li>
              </ul>
            </header>

            <div className="mb-12"></div>
            <main className="flex flex-1 justify-between  w-full  ">
              <section className=" sm:w-60 py-4 overflow-y-auto overflow-x-hidden h-screen sm:border-r bg-gray-50 sm:border-gray-100">
                <div className="sm:ml-2 ">
                  <MainNavigation />
                </div>
              </section>

              <section className="flex flex-1 p-4 ">
                <MenuClickBoundary>{children} </MenuClickBoundary>
              </section>
            </main>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
