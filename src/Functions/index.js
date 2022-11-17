//  export getApiAll = function() => {

import axios from "axios";
import { useState } from "react";

//   };
// const [data, setData] = useState([]);

export const getApiAll = async function () {
        const result = await axios.get(
          "https://api.rawg.io/api/games?key=2e821ff3e99346e6869e75fdd124b636&page=1"
        );
        console.log(datos);
        return datos = result.data.results;
        // setData(datos);
}