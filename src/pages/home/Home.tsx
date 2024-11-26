// import { useState } from "react";
// import Button from "../../components/button/Button";
import ChampionSummary from "../../components/championSummary/ChampionSummary";
import ChampionList from "../../components/championList/ChampionList";
import classes from "./Home.module.css";
// import ExcludePick from "../../components/excludePick/ExcludePick";
import RandomPick from "../../components/randomPick/RandomPick";

const Home = () => {
  // const [excludedIndex, setExcludedIndex] = useState<number[]>([]);

  return (
    <div>
      {/* <div>
        <Button onClick={() => console.log("delete")} variant='delete'>
          Delete
        </Button>
      </div> */}

      {/* <RandomPick ExcludedIndex={excludedIndex} /> */}
      <RandomPick />
      {/* <ExcludePick setExcludedIndex={setExcludedIndex} /> */}
      <h2>챔피언 목록</h2>
      <div className={classes.container}>
        <ChampionList />
        <ChampionSummary />
      </div>
    </div>
  );
};

export default Home;
