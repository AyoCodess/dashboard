'use client';

import React from 'react';
import { useMenuStore } from '@/stores/menu_store';

export default function MenuClickBoundary({
  children
}: {
  children: React.ReactNode;
}) {
  const { setIsOpen, isOpen, menuRef } = useMenuStore();

  const handleOutsideClick = (event: any) => {
    if (isOpen && menuRef?.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return <div onClick={handleOutsideClick}>{children}</div>;
}
