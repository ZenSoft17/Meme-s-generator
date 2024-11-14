import { useState, useEffect } from "react";

const useCall = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error has occurred in the applicacion", error);
      });
  }, []);

  return { Data };
};

export default useCall;
