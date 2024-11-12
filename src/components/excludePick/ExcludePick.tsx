import { Dispatch, SetStateAction } from "react";
import Button from "../button/Button";

interface ExcludePickProps {
  // setExcludedIndex: () => void;
  setExcludedIndex: Dispatch<SetStateAction<number[]>>;
}

const ExcludePick = ({ setExcludedIndex }: ExcludePickProps) => {
  const handleReset = () => {
    setExcludedIndex([]);
  };

  return (
    <div>
      <Button onClick={handleReset} variant='delete'>
        초기화
      </Button>
      ExcludePick
      <ul></ul>
    </div>
  );
};

export default ExcludePick;
