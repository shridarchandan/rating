import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating() {
  const [rate, setRate] = useState(0);

  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const initVal = i + 1;
          return (
            <FaStar
              onClick={() => setRate(i + 1)}
              style={{ cursor: "pointer" }}
              color={initVal <= rate ? "yellow" : "grey"}
              size={50}
            />
          );
        })}
        <br />
        Rating is {rate}
      </div>
    </>
  );
}

export default Rating;
