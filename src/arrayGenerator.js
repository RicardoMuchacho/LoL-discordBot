import dotenv from "dotenv";
dotenv.config();

import { champs } from "../data/champs.js";

import * as json from "../data/championsInfo.json" assert { type: "json" };

// console.log(json);
var champsStr = "";

const iterate = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(`${key}`);
    champsStr += `"${key}",\n`;

    // if (typeof obj[key] === "object") {
    //   iterate(obj[key]);
    // }
  });
  //   console.log(JSON.parse(champs));
  console.log(champs);
};

iterate(json.default.data);
