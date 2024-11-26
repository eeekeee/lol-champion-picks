import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link to={"/lol-champion-picks"}>홈으로</Link>
      <Link to={"/lol-champion-picks/details"}>롤 챔피언 정보 상세보기</Link>
    </div>
  );
};

export default Header;
