'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { UserButton } from '@clerk/clerk-react';
import { SignInButton, useUser, SignedIn, SignedOut } from '@clerk/nextjs';
import { useMenuStore } from '@/stores/menu_store';

type MenuItem = {
  id: number;
  label: string;
  link?: string;
  subMenuItems?: {
    label: string;
    link: string;
  }[];
};

const MainNavigation = () => {
  const { isOpen, setIsOpen, menuRef } = useMenuStore();

  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const { isLoaded, isSignedIn, user } = useUser();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Home',
      link: '/'
    },
    {
      id: 2,
      label: 'Admin Console',
      link: '/admin-console'
    },
    {
      id: 3,
      label: 'Operations',
      subMenuItems: [
        {
          label: "KPI's",
          link: '/kpi-metrics'
        },
        {
          label: 'Backlog',
          link: '/backlog'
        }
      ]
    },
    {
      id: 4,
      label: 'Statistics',
      subMenuItems: [
        {
          label: 'Q1',
          link: '/Q1'
        },
        {
          label: 'Q2',
          link: '/Q2'
        }
      ]
    },
    {
      id: 5,
      label: 'Services',
      subMenuItems: [
        {
          label: 'Cleaning',
          link: '/cleaning'
        },
        {
          label: 'Moving',
          link: '/moving'
        },
        {
          label: 'Construction',
          link: '/construction'
        },
        {
          label: 'Funeral',
          link: '/funeral'
        }
      ]
    }
  ];

  const toggleSubMenu = (menuId: number) => {
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === menuId ? null : menuId));
  };

  return (
    <>
      {/* // DESKTOP MENU */}
      <div className="hidden sm:flex">
        <div className="flex flex-col justify-between h-[90vh]">
          <ul className=" flex flex-col sm:space-y-2  ">
            {menuItems.map((menuItem) => {
              if (menuItem.link) {
                return (
                  <li
                    key={menuItem.id}
                    className="w-[14rem] font-medium rounded-md text-gray-700 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                  >
                    <Link href={menuItem.link}>{menuItem.label}</Link>
                  </li>
                );
              }
              return (
                <li
                  key={menuItem.id}
                  className="w-[14rem] font-medium rounded-md text-gray-700 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  <div
                    onClick={() => toggleSubMenu(menuItem.id)}
                    className="flex items-center justify-between"
                  >
                    <div>{menuItem.label}</div>
                    {menuItem.subMenuItems && (
                      <FiChevronDown
                        className={`transform duration-200  ${
                          openSubMenu === menuItem.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  {menuItem.subMenuItems && (
                    <Transition
                      show={openSubMenu === menuItem.id}
                      enter="transition-all ease-in duration-200"
                      enterFrom="opacity-0 max-h-0"
                      enterTo="opacity-100 max-h-[200px]"
                      leave="transition-all ease-out duration-200"
                      leaveFrom="opacity-100 max-h-[200px]"
                      leaveTo="opacity-0 max-h-0"
                    >
                      <ul className="pl-4">
                        {menuItem.subMenuItems.map((subMenuItem, index) => (
                          <Link
                            key={index}
                            href={subMenuItem.link}
                            className="whitespace-nowrap"
                          >
                            <li className="text-gray-700 font-normal py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12">
                              {`- ${subMenuItem.label}`}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </Transition>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="p-4">
            <div className="flex flex-row gap-2 items-center">
              <UserButton />
              <div className="flex flex-col">
                <p className="text-xs">
                  {user && (user.firstName ?? '') + user!.lastName}
                </p>
                <p className="text-xs text-gray-400">
                  {user && user.emailAddresses[0].emailAddress}
                </p>
              </div>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className=" fixed top-0 w-3/4 sm:hidden z-10">
        <div className="flex absolute top-2 left-3 items-center justify-between">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
        <Transition
          show={isOpen}
          enter="transition duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            ref={menuRef}
            className="flex flex-col bg-gray-100 h-screen rounded-r-lg py-2 shadow-xl border-b border-gray-200 "
          >
            <ul className="space-y-2 pt-10">
              {menuItems.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className="  text-gray-700 font-medium py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  {menuItem.subMenuItems ? (
                    <div
                      onClick={() => toggleSubMenu(menuItem.id)}
                      className="flex items-center justify-between"
                    >
                      <div>{menuItem.label}</div>
                      <FiChevronDown
                        className={`transform duration-200 ${
                          openSubMenu === menuItem.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  ) : (
                    <>
                      {menuItem.link && (
                        <Link
                          href={menuItem.link!}
                          className="flex items-center justify-between"
                        >
                          {menuItem.label}
                        </Link>
                      )}
                    </>
                  )}
                  {menuItem.subMenuItems && (
                    <Transition
                      show={openSubMenu === menuItem.id}
                      enter="transition-all ease-in duration-200"
                      enterFrom="opacity-0 max-h-0"
                      enterTo="opacity-100 max-h-[200px]"
                      leave="transition-all ease-out duration-200"
                      leaveFrom="opacity-100 max-h-[200px]"
                      leaveTo="opacity-0 max-h-0"
                    >
                      <ul className="pl-4">
                        {menuItem.subMenuItems.map((subMenuItem, index) => (
                          <Link
                            href={subMenuItem.link}
                            className="whitespace-nowrap"
                          >
                            <li
                              key={index}
                              className="text-gray-700 font-normal py-2 cursor-pointer  hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
                            >
                              {`- ${subMenuItem.label}`}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </Transition>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-4 mt-auto">
              <div className="flex flex-row gap-2 items-center">
                <UserButton />
                <div className="flex flex-col">
                  <p className="text-xs">
                    {user && (user.firstName ?? '') + user!.lastName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {user && user.emailAddresses[0].emailAddress}
                  </p>
                </div>
              </div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default MainNavigation;
