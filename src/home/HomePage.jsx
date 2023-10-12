import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcoming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import Trending from "../components/trending/Trending";

const HomePage = () => {
  const [items, setitems] = useState(upcome);
  const [item, setitem] = useState(latest);
  const [rec, setrec] = useState(recommended);

  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <Upcomming items={item} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
    </>
  );
};

export default HomePage;
