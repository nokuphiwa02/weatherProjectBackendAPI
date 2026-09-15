import https from "https";

type WeatherData = {
  current_weather: {
    windspeed: number;
    temperature: number;
  };
};
type NewsPost = {
  id: number;
  body: string;
  title: string;
};

type NewsData = {
  posts: NewsPost[];
};
function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let rawData = "";
        response.on("data", (chunk) => {
          rawData += chunk;
        });
        response.on("end", () => {
          resolve(rawData);
        });
        response.on("error", (error) => {
          reject(new Error(error.message));
        });
      })
      .on("error", (error) => {
        reject(new Error(error.message));
      });
  });
}
