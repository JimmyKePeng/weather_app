import express from "express"
import axios from "axios"
import { render } from "ejs";
import dotenv from "dotenv";
dotenv.config();

// npm init -y
// npm i express
// npm i ejs
// npm i axios
// npm i dotenv

const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));


const weather_api_key = process.env.API_KEY;

const url_zip_to_cor = "http://api.openweathermap.org/geo/1.0/zip?zip="
const url_weather = "https://api.openweathermap.org/data/2.5/weather?";
let zipcode;
let lat;
let lon;
app.get("/", async (req, res)=>{

    res.render("index.ejs");
})

app.post("/getWeather", async (req,res)=>{
    zipcode = req.body.zipcode;
    try{
        const lat_lon = await axios.get(url_zip_to_cor + zipcode + ",US&appid=" + weather_api_key);
        lat = lat_lon.data.lat;
        lon = lat_lon.data.lon;
        const result = await axios.get(`${url_weather}lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=imperial`);
 
        res.render("index.ejs", {content:result.data});
    } catch(error){
        console.log("Error on /getWeather")
    }

})

app.listen(port, ()=>{
    console.log(`Running on port: ${port}...`)
})