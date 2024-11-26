import { useEffect, useState } from "react";
import axios from "axios";
import ChampionIcon from "../championIcon/ChampionIcon";
import { ChampionType } from "../../types/Champion";
import { fetchLatestVersion } from "../../apis/latestVersion";

type ChampionData = {
  [key: string]: ChampionType;
};

const ChampionList = () => {
  const [champions, setChampions] = useState<ChampionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        // const versionResponse = await axios.get(
        //   "https://ddragon.leagueoflegends.com/api/versions.json"
        // );
        // const latestVersion = versionResponse.data[0]; // 첫 번째 값이 최신 버전

        const latestVersion = await fetchLatestVersion();

        const response = await axios.get(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
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
        return <ChampionIcon key={champion.id} data={champion} />;
      })}
    </div>
  );
};

export default ChampionList;
