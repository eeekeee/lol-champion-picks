import Button from "../../components/button/Button";
import ChampionList from "../../components/championList/ChampionList";
import ExcludePick from "../../components/excludePick/ExcludePick";

const Home = () => {
  return (
    <div>
      <div>
        <Button onClick={() => console.log("delete")} variant='delete'>
          Delete
        </Button>
        <Button onClick={() => console.log("random")} variant='random'>
          Random
        </Button>
      </div>

      <ExcludePick />
      <h2>챔피언 목록</h2>
      <ChampionList />
    </div>
  );
};

export default Home;
