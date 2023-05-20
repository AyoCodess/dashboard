'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNavigation from './main_navigation';
import { useMenuStore } from '@/stores/menu_store';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export function Main({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen, menuRef } = useMenuStore();
  return (
    <body
      className={`${inter.className} ${classNames(
        'overflow-x-hidden sm:overflow-y-auto',
        {
          'overflow-y-hidden': isOpen
        }
      )}`}
    >
      <section className="flex flex-col min-h-screen items-center justify-between">
        <header className="w-full h-12 fixed top-0 sm:flex bg-gray-50 text-gray-500 z-10 shadow sm:shadow-none sm:border-b sm:border-gray-200">
          <div className="w-30 sm:w-60 items-center justify-center p-2">
            <p className="text mx-auto ml-10 w-fit mt-[0.3rem] sm:mt-[0.1rem]">
              Logo
            </p>
          </div>
          <ul className=" sm:flex-1 font-medium hidden sm:flex justify-between   px-10 py-3">
            <li>Service</li>
            <li>Enterprise</li>
            <li>Customer</li>
            <li>Product</li>
          </ul>
        </header>

        <section className="flex flex-1 justify-between w-full  ">
          <section className=" sm:w-60 py-4 sm:overflow-y-auto overflow-x-hidden h-screen sm:border-r bg-gray-50 sm:border-gray-100">
            <MainNavigation />
          </section>

          <section className="flex flex-col flex-1 p-4 ">
            <div className="h-12"></div>
            <main>{children}</main>
          </section>
        </section>
      </section>
    </body>
  );
}
