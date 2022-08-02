import { useEffect, useState } from "react";
import { dataType, getData } from "./Data/index";

export type UseGameStoreOutput = {
  data: dataType | undefined;
  searchTerm: string;
  handleStateChange: (search: string) => void;
};

export const useGameStore = () => {
  const [data, setData] = useState<dataType | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleStateChange = (search: string) => {
    setSearchTerm(search);
  };
  useEffect(() => {
    (async () => {
      setData(await getData());
    })();
  }, []);

  return {
    data,
    searchTerm,
    handleStateChange
  };
};
