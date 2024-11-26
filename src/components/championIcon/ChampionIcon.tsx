import { useState } from "react";
import classes from "./ChampionIcon.module.css";
import useChampionStore from "../../store/champion";
import { ChampionType } from "../../types/Champion";

interface ChampionIconProps {
  data: ChampionType;
}

const ChampionIcon = ({ data }: ChampionIconProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const { setSelectedChampion } = useChampionStore();

  const onHoverHandler = () => {
    console.log(`ChampionIcon: ${name} hovered`);
  };

  const onClickHandler = () => {
    setSelected((prev) => !prev);
    setSelectedChampion(data);
  };

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${data.id}.png`;

  return (
    <div
      className={classes.icon_container}
      onMouseEnter={onHoverHandler}
      onClick={onClickHandler}
    >
      <img
        className={`${classes.icon_image} ${selected ? classes.selected : ""}`}
        src={imageUrl}
        alt={data.name}
      ></img>
      <span className={classes.icon_name}>{data.name}</span>
    </div>
  );
};

export default ChampionIcon;
