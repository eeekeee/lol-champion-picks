import { useEffect, useState } from "react";
import axios from "axios";
import ChampionIcon from "../championIcon/ChampionIcon";
import { ChampionType } from "../../types/Champion";

type ChampionData = {
  [key: string]: ChampionType;
};

const ChampionList = () => {
  const [champions, setChampions] = useState<ChampionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/data/ko_KR/champion.json"
        );
        setChampions(response.data.data);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchChampionData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!champions) return <div>Loading...</div>;

  const sortedChampions = Object.values(champions).sort((a, b) =>
    a.name.localeCompare(b.name, "ko-KR")
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sortedChampions.map((champion) => {
        return (
          <ChampionIcon
            key={champion.id}
            id={champion.id}
            name={champion.name}
          />
        );
      })}
    </div>
  );
};

export default ChampionList;
