'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
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
        <div className="flex flex-col justify-between h-[95vh] w-full">
          <ul className="space-y-2 pt-10 px-2">
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className="  text-gray-500 font-medium py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
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
                    <ul className="">
                      {menuItem.subMenuItems.map((subMenuItem, index) => (
                        <Link
                          href={subMenuItem.link}
                          className="whitespace-nowrap"
                        >
                          <li
                            key={index}
                            className="text-gray-500 font-normal py-2 cursor-pointer  hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
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
          <div className="p-4 mt auto">
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
      <div className=" fixed top-0 sm:hidden z-10">
        <div className=" fixed top-2 -right-0 mr-4 ">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <FiMenu className="w-6 h-6 mt-1" />}
          </button>
        </div>
        <Transition
          // show={isOpen}
          // enter="transition-transform duration-500"
          // enterFrom="-translate-x-full"
          // enterTo="translate-x-0"
          // leave="transition-transform duration-500"
          // leaveFrom="translate-x-0"
          // leaveTo="-translate-x-full"
          show={isOpen}
          enter="transition-transform duration-500"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          {(ref) => (
            <section ref={ref}>
              <div className="fixed top-2 -right-0 mr-4 mt-2">
                <button
                  className="text-gray-600 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen && (
                    <GrClose className="z-10 w-5 h-6 animate-fade-in" />
                  )}
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
                  className="flex flex-col bg-gray-100 rounded-r-lg py-2 shadow-xl border-b border-gray-200   h-screen w-screen"
                >
                  <ul className="space-y-2 pt-10">
                    {menuItems.map((menuItem) => (
                      <li
                        key={menuItem.id}
                        className="  text-gray-500 font-medium py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
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
                                onClick={() => setIsOpen(false)}
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
                              {menuItem.subMenuItems.map(
                                (subMenuItem, index) => (
                                  <Link
                                    href={subMenuItem.link}
                                    onClick={() => setIsOpen(false)}
                                    className="whitespace-nowrap"
                                  >
                                    <li
                                      key={index}
                                      className="text-gray-500 font-normal py-2 cursor-pointer  hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
                                    >
                                      {`- ${subMenuItem.label}`}
                                    </li>
                                  </Link>
                                )
                              )}
                            </ul>
                          </Transition>
                        )}
                      </li>
                    ))}
                  </ul>
                  <hr className="border-b border-gray-200 mt-3 mb-3" />
                  <div className="px-4 mt-2 sm:mb-0">
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
            </section>
          )}
        </Transition>
      </div>
    </>
  );
};

export default MainNavigation;
