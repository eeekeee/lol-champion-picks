import { useEffect, useState } from "react";
import axios from "axios";

const ChampionList = () => {
  const [champions, setChampions] = useState<any>(null);
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

  const sortedChampions = Object.values(champions).sort((a: any, b: any) =>
    a.name.localeCompare(b.name, "ko-KR")
  );
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sortedChampions.map((champion: any) => {
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion.id}.png`;

        return (
          <div key={champion.id} style={{ margin: "5px", textAlign: "center" }}>
            <img
              src={imageUrl}
              alt={champion.name}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <p>{champion.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChampionList;
