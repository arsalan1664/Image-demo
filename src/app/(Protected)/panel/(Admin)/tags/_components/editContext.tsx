"use client";
import React, { createContext, useState, useContext } from "react";

type Typevalue = {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  toggleEdit: () => void;
};

const EditContext = createContext<Typevalue>({
  isEditing: false,
  setIsEditing: () => {},
  toggleEdit: () => {},
});

export const useEditContext = () => {
  return useContext(EditContext);
};

const EditProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const value = {
    isEditing,
    setIsEditing,
    toggleEdit,
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

export default EditProvider;
