import fs from "fs";

interface JsonData {
  [key: string]: string[][];
}

const paperRecommendationsjson = fs.readFileSync(
  "../../shared/recommendations.json",
  "utf-8"
);
const paperRecommendations: JsonData = JSON.parse(paperRecommendationsjson);

const PredictPapers = async (interests: any) => {
  const filteredData: any = {};
  const randomData: { [key: string]: { title: string; id: string } } = {};
  for (const key of interests) {
    if (paperRecommendations.hasOwnProperty(key)) {
      filteredData[key] = paperRecommendations[key];

      // Randomly select a title and ID from the filtered data
      const titles = filteredData[key][0];
      const ids = filteredData[key][1];
      const randomIndex = Math.floor(Math.random() * titles.length);
      const randomTitle = titles[randomIndex];
      const randomId = ids[randomIndex];

      randomData[key] = { title: randomTitle, id: randomId };
    }
  }
};

export default PredictPapers;
