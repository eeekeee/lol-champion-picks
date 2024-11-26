import classes from "./ChampionSummary.module.css";
import useChampionStore from "../../store/champion";
import { Link } from "react-router-dom";

const ChampionSummary = () => {
  const { selectedChampion } = useChampionStore();

  if (!selectedChampion) {
    return (
      <div className={classes.container}>Select Champion to show details</div>
    );
  }

  return (
    <div>
      <Link to={`/lol-champion-picks/details/${selectedChampion.name}`}>
        Show More Details
      </Link>
      {selectedChampion.id}
      {selectedChampion.name}
    </div>
  );
};

export default ChampionSummary;
