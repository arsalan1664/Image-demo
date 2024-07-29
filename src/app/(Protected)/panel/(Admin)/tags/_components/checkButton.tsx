"use client";
import React, { createContext, useState, useContext } from "react";

interface CheckedItemsContextType {
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckedItemsContext = createContext<CheckedItemsContextType>({
  checkedItems: [],
  setCheckedItems: () => {},
});

export const useCheckedItemsContext = () => {
  return useContext(CheckedItemsContext);
};

const CheckedItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const value = {
    checkedItems,
    setCheckedItems,
  };

  return (
    <CheckedItemsContext.Provider value={value}>
      {children}
    </CheckedItemsContext.Provider>
  );
};

export default CheckedItemsProvider;
