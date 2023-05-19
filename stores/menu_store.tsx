import React from 'react';
import { create } from 'zustand';

interface MenuStore {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  menuRef?: React.RefObject<HTMLDivElement>;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  menuRef: React.createRef()
}));
