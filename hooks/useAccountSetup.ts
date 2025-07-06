import { useState } from 'react';

const useAccountSetup = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return {
    selectedInterests,
    toggleInterest,
  };
};

export default useAccountSetup;
