'use client';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

type MenuItem = {
  id: number;
  label: string;
  link?: string;
  sumMenuItem?: {
    label: string;
    link: string;
  }[];
};

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | ''>('');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Home',
      link: '/'
    },
    {
      id: 2,
      label: 'Operations',
      sumMenuItem: [
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
      sumMenuItem: [
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
      sumMenuItem: [
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
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === menuId ? '' : menuId));
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <ul className="space-y-2">
          {menuItems.map((menuItem) => {
            if (menuItem.link) {
              return (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.link}
                    className="flex items-center justify-between"
                  >
                    <div>{menuItem.label}</div>
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={menuItem.id}
                className="w-[14rem] rounded-md text-gray-700 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out "
              >
                <div
                  onClick={(e) => {
                    toggleSubMenu(menuItem.id);
                  }}
                  className="flex items-center justify-between"
                >
                  <div>{menuItem.label}</div>

                  {menuItem.sumMenuItem && (
                    <FiChevronDown
                      className={`transform duration-200 ${
                        openSubMenu === menuItem.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {menuItem.sumMenuItem && (
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
                      {menuItem.sumMenuItem.map((child, index) => (
                        <li
                          key={index}
                          className="text-gray-700 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out w-12"
                        >
                          <Link href={child.link} passHref>
                            {child.label}
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
      {/* Your main content goes here */}
    </div>
  );
};
export default Sidebar;
