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
//Fectch the current weather
function fetchWeather(): Promise<WeatherData> {
  const weatherUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=-29.6168&longitude=30.3928&current_weather=true";
  return fetchData(weatherUrl).then((data) => {
    return JSON.parse(data) as WeatherData;
  });
}

//Fetch the news
function fetchNews(): Promise<NewsData> {
  const newsUrl = "https://dummyjson.com/posts?limit=5";
  return fetchData(newsUrl).then((data) => {
    return JSON.parse(data) as NewsData;
  });
}

//display weather
function displayWeather(weather: WeatherData): void {
  const w = weather!.current_weather;
  console.log("weather");
  console.log("Temperature:", w.temperature, "°C");
  console.log("Wind Speed:", w.windspeed, "km/h");
}
//display news
function displayNews(news: NewsData): void {
  console.log("news");
  news!.posts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
  });
}
//promise chain
console.log("chain");
fetchWeather()
  .then((weather) => {
    displayWeather(weather);
    return fetchNews();
  })
  .then((news) => {
    displayNews(news);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// promise.all
console.log("promise all");
Promise.all([fetchWeather(), fetchNews()])
  .then(([weather, news]) => {
    displayWeather(weather);
    displayNews(news);
    console.log("\nBoth loaded at the same time");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//Promise race
console.log("promise race");
Promise.race([fetchWeather(), fetchNews()])
  .then((result) => {
    console.log(JSON.stringify(result, null, 2).slice(0, 200));
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

