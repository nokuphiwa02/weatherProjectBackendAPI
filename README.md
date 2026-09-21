<img src="https://socialify.git.ci/nokuphiwa02/weatherProjectBackendAPI/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="weatherProjectBackendAPI" width="640" height="320" />

# 🌤️ Weather Project Backend API

A server-side Node.js/Express application that serves as a custom API gateway for weather data. This backend handles communication with external weather services, processes coordinates and location names, and serves clean, structured weather metrics to client-facing frontends.

---

## 🛠️ Tech Stack & Prerequisites

Before setting up the project locally, make sure you have:
* **Runtime Environment:** [Node.js](https://nodejs.org) (v16.x or higher)
* **Framework:** [Express.js](https://expressjs.com)
* **External Weather Provider:** An API Key from [OpenWeatherMap](https://openweathermap.org) (or your preferred weather service provider)
* **Package Manager:** [npm](https://npmjs.com)

---

## ⚙️ Getting Started & Local Setup

Follow these steps to spin up the API server locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd weatherProjectBackendAPI
```

### 2. Install Project Dependencies
Install all required Node modules:
```bash
npm install
```

### 3. Environment Variable Configuration
Create a `.env` file in the root directory to store your sensitive API tokens safely. Never commit this file to GitHub!
```env
PORT=5000
WEATHER_API_KEY=your_external_weather_api_key_here
# BASE_WEATHER_URL=https://openweathermap.org
```

### 4. Run the Server

* **Development Mode** (auto-reloads on file changes using `nodemon`):
  ```bash
  npm run dev
  ```
* **Production Mode**:
  ```bash
  npm start
  ```

The server will baseline and run at `http://localhost:5000`.

---

## 📂 Project Structure

```text
weatherProjectBackendAPI/
├── config/             # Weather API configurations & constants
├── controllers/        # Weather logic (fetching, computing metrics)
├── routes/             # API endpoint paths (e.g., /api/weather)
├── middleware/         # Error handling and API rate limiting
├── .env.example        # Reference file for environment configurations
├── server.js           # Server initializer and main Express setup
├── package.json        # Dependencies and execution scripts
└── README.md           # Documentation
```

---

## 🛣️ API Endpoints Reference

| HTTP Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/weather/current` | Fetches current weather by city name | `?city=Durban` |
| **GET** | `/api/weather/coordinates`| Fetches weather using map metrics | `?lat=-29.85&lon=31.02` |
| **GET** | `/api/weather/forecast` | Retrieves a 5-day weather outlook | `?city=Johannesburg` |

### Example JSON Response (`GET /api/weather/current?city=Durban`)
```json
{
  "success": true,
  "data": {
    "location": "Durban",
    "temperature": "24°C",
    "condition": "Partly Cloudy",
    "humidity": "65%",
    "windSpeed": "12 km/h"
  }
}
```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingWeatherFeature`)
3. Commit your Changes (`git commit -m 'Add some cool weather endpoint'`)
4. Push to the Branch (`git push origin feature/AmazingWeatherFeature`)
5. Open a Pull Request

---

## GitHub Website
https://github.com/nokuphiwa02/weatherProjectBackendAPI


