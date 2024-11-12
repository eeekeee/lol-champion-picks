import { useState } from "react";
import { ChampionType } from "../../types/Champion";
import Button from "../button/Button";
import classes from "./RandomPick.module.css";

// interface RandomPickProps {
//   ExcludedIndex: number[];
// }

// const RandomPick = ({ ExcludedIndex }: RandomPickProps) => {
const RandomPick = () => {
  const [data, setData] = useState<ChampionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRandomChampion = async () => {
    setLoading(true);
    try {
      // TODO: index에 따라 값을 랜덤으로 불러옴
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/14.20.1/data/ko_KR/champion.json"
      );
      const data = await response.json();
      const champions = Object.values(data.data) as ChampionType[];
      const randomIndex = Math.floor(Math.random() * champions.length);
      setData(champions[randomIndex]);
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div>
      <Button onClick={fetchRandomChampion} variant='random'>
        랜덤 챔피언 뽑기
      </Button>
      <div className={classes.container}>
        {loading && <div className={classes.spinner}></div>}
        {data && !loading && (
          <div>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${data.id}.png`}
              alt={data.name}
              className={classes.image}
            />
            <p className={classes.name}>{data.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomPick;
