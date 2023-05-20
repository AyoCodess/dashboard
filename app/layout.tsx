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
      <html className="sm:overflow-hidden overflow-x-hidden " lang="en">
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className="flex w-full h-12 fixed top-0 sm:flex bg-white z-10 shadow sm:shadow-none">
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
            </div>
            <hr className="border-b border-0 border-gray-200 w-full"></hr>
            <div className="mb-12"></div>
            <main className="flex flex-1 justify-between  w-full ">
              <section className=" sm:w-60 py-4 overflow-y-auto overflow-x-hidden h-screen  ">
                <div className="sm:ml-2">
                  <MainNavigation />
                </div>
              </section>

              <section className="flex flex-1 p-4">
                <MenuClickBoundary>{children} </MenuClickBoundary>
              </section>
            </main>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
