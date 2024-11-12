import { useState } from "react";
import classes from "./ChampionIcon.module.css";

interface ChampionIconProps {
  id: string;
  name: string;
}

const ChampionIcon = ({ id, name }: ChampionIconProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const onHoverHandler = () => {
    console.log(`ChampionIcon: ${name} hovered`);
  };

  const onClickHandler = () => {
    setSelected((prev) => !prev);
  };

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${id}.png`;

  return (
    <div
      className={classes.icon_container}
      onMouseEnter={onHoverHandler}
      onClick={onClickHandler}
    >
      <img
        className={`${classes.icon_image} ${selected ? classes.selected : ""}`}
        src={imageUrl}
        alt={name}
      ></img>
      <span className={classes.icon_name}>{name}</span>
    </div>
  );
};

export default ChampionIcon;
