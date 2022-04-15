import * as d3 from "d3";

d3.json("https://api.npoint.io/6142010a473d754de4e6")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
