'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import Link from 'next/link';

type MenuItem = {
  id: number;
  label: string;
  link?: string;
  subMenuItems?: {
    label: string;
    link: string;
  }[];
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Home',
      link: '/'
    },
    {
      id: 2,
      label: 'Operations',
      subMenuItems: [
        {
          label: 'Cars',
          link: '/cars'
        },
        {
          label: 'Bus',
          link: '/bus'
        }
      ]
    },
    {
      id: 3,
      label: 'Statistics',
      subMenuItems: [
        {
          label: 'Cars',
          link: '/cars'
        },
        {
          label: 'Bus',
          link: '/bus'
        }
      ]
    },
    {
      id: 4,
      label: 'Services',
      subMenuItems: [
        {
          label: 'Cars',
          link: '/cars'
        },
        {
          label: 'Bus',
          link: '/bus'
        }
      ]
    }
  ];

  const toggleSubMenu = (menuId: number) => {
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === menuId ? null : menuId));
  };

  return (
    <>
      <div className="w-1/4 hidden sm:flex">
        <ul className="sm:space-y-2">
          {menuItems.map((menuItem) => {
            if (menuItem.link) {
              return (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.link}
                    className="flex items-center justify-between"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={menuItem.id}
                className="w-[14rem] rounded-md text-gray-700 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
              >
                <div
                  onClick={() => toggleSubMenu(menuItem.id)}
                  className="flex items-center justify-between"
                >
                  <div>{menuItem.label}</div>
                  {menuItem.subMenuItems && (
                    <FiChevronDown
                      className={`transform duration-200 ${
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
                        <li
                          key={index}
                          className="text-gray-700 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
                        >
                          <Link href={subMenuItem.link}>
                            {subMenuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Transition>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {/* MOBILE MENU */}
      <div className=" w-[14rem] fixed top-0 h-screen sm:hidden">
        <div className="flex fixed top-2 left-3 items-center justify-between">
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
          <div className=" bg-gray-100 rounded-r-lg h-screen">
            <ul className="space-y-2 pt-10">
              {menuItems.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className=" rounded-md text-gray-700 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
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
                          <li
                            key={index}
                            className="text-gray-700 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
                          >
                            <Link href={subMenuItem.link}>
                              {subMenuItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Sidebar;
