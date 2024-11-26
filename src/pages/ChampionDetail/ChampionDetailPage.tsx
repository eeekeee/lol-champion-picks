import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChampionType } from "../../types/Champion";
import { fetchLatestVersion } from "../../apis/latestVersion";
import { championNameMapping } from "../../apis/championNameMapping";

const ChampionDetailPage = () => {
  const { championName } = useParams<{ championName: string }>();
  const [champion, setChampion] = useState<ChampionType | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (championName) {
      console.log(championName);
      fetchChampionDetails(championName);
    }
  }, [championName]);

  const fetchChampionDetails = async (name: string) => {
    setError(null);
    try {
      const latestVersion = await fetchLatestVersion();

      const englishName = championNameMapping[name];

      if (!englishName) {
        console.error("Mapping not found for championName:", championName);
        return setError("입력한 챔피언 이름이 잘못되었습니다.");
      }

      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${englishName}.json`
      );

      if (!response.ok) {
        throw new Error("Champion not found");
      }

      const data = await response.json();
      console.log(data.data[englishName]);
      setChampion(data.data[englishName]);
    } catch (error) {
      console.error(error);
      setChampion(null);
      setError("챔피언 정보를 가져올 수 없습니다. 이름을 확인해주세요.");
    }
  };

  if (!championName) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!champion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{champion.name}</h1>
      <p>{champion.title}</p>
      <p>{champion.blurb}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ChampionDetailPage;
