import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DetailLayout = () => {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleInputSubmit = () => {
    if (inputName.trim()) {
      navigate(`/lol-champion-picks/details/${inputName.trim()}`);
    }
  };

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInputSubmit();
    }
  };

  return (
    <div>
      DetailLayout
      <div>
        <h2>챔피언 이름을 입력하세요</h2>
        <input
          type='text'
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder='챔피언 이름'
          onKeyDown={(e) => {
            activeEnter(e);
          }}
        />
        <button onClick={handleInputSubmit}>검색</button>
      </div>
      <Outlet />
    </div>
  );
};

export default DetailLayout;
