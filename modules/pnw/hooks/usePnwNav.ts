import { useState } from "react";

export enum pnwNavOptions {
  california = "California",
  washington = "Washington",
  oregon = "Oregon",
}

export interface UsePnwNavValues {
  selectedOption: pnwNavOptions;
  isCalifornia: boolean;
  isWashington: boolean;
  isOregon: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<pnwNavOptions>>;
  goToCalifornia: () => void;
  goToWashington: () => void;
  goToOregon: () => void;
}

export default function usePnwNav(): UsePnwNavValues {
  const [selectedOption, setSelectedOption] = useState(pnwNavOptions.california);

  const goToCalifornia = () => setSelectedOption(pnwNavOptions.california);
  const goToWashington = () => setSelectedOption(pnwNavOptions.washington);
  const goToOregon = () => setSelectedOption(pnwNavOptions.oregon);

  const isCalifornia = selectedOption === pnwNavOptions.california;
  const isWashington = selectedOption === pnwNavOptions.washington;
  const isOregon = selectedOption === pnwNavOptions.oregon;

  return {
    selectedOption,
    setSelectedOption,
    goToCalifornia,
    goToWashington,
    goToOregon,
    isCalifornia,
    isWashington,
    isOregon,
  };
}
