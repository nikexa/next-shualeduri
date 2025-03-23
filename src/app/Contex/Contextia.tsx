import { createContext } from "react";

export interface ContextiaType {
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
  isCopied: boolean;
  password: string;
  spassword: React.Dispatch<React.SetStateAction<string>>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  strenght: string[];
  setStrenght: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Contextia = createContext<ContextiaType | null>(null);