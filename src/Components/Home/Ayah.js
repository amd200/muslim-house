import React, { useEffect, useState } from "react";
import TitleSection from "./TitleSection";
import { useDispatch, useSelector } from "react-redux";
import { Quotes } from "../../redux/actions/MuslimAction";

function Ayah() {
  const [quotes, setQuotes] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quotes);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const newRandomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(newRandomIndex);
  }, [quotes]);

  useEffect(() => {
    dispatch(Quotes());
  }, [dispatch]);
  useEffect(() => {
    if (data && data.length >= 1) {
      setQuotes(data);
    }
  }, [data]);
  return (
    <div className="ayah w-70 ">
      <TitleSection name="أدومها وإن قل" note={`سُورَةُ ${quotes.length > 0 && quotes[randomIndex].src}`} />
      <p
        id="text"
        className="text-center  py-4 rounded fs-2 px-2 "
        style={{
          fontWeight: "500",
          fontFamily: "Quran Reguler2",
        }}
      >
        {quotes && quotes.length > 0 && quotes[randomIndex].content}
      </p>
    </div>
  );
}

export default Ayah;
