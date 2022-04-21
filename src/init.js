import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4243;

const handleListening = () => { console.log(`✅ server Listening on port  http://localhost:${PORT} 🚀 `); }

app.listen(PORT, handleListening);