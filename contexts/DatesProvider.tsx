// create a react context provider and hooks for start date and end date

import { addDays } from "@/helpers/dateHelpers";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const DateContext = createContext<
  | {
      startDate: Date;
      endDate: Date;
      setStartDate: Dispatch<SetStateAction<Date>>;
      setEndDate: Dispatch<SetStateAction<Date>>;
    }
  | undefined
>(undefined);

export function useDateContext() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
}

export function DateProvider({ children }: { children: ReactNode }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));

  return (
    <DateContext.Provider
      value={{ startDate, endDate, setStartDate, setEndDate }}
    >
      {children}
    </DateContext.Provider>
  );
}
