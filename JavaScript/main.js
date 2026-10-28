// Global values
////////////////////////////////////////////////////////////////////////////////////////
var searchedCityName;
var refresh = true;
var mainTimezone = 0;
sessionStorage.setItem("lasBackgroundImage", "url(/IMG/Back/8-Clear/Day/Clear_day_6.avif)");
const API_BASE = "https://weather-proxy.pluma-weather.workers.dev";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rng = Math.round((Math.random() * (+0.15 - +0.07) + +0.07) * 100) / 100;


// Imperial units
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("units-Fahren").addEventListener('click', () => {
    document.getElementById("Celsius_Unit").style.transform = "translateX(93%)";
    document.getElementById("units-Fahren").style.color = "black";
    document.getElementById("units-Celsius").style.color = "white";
    sessionStorage.Units = "imperial";
    sessionStorage.Rain = "in";
    sessionStorage.Temp = "°F";
    sessionStorage.Wind = "mph"
    document.getElementById("userInputCity").value = sessionStorage.city;
    document.getElementById("searchBtnDiv2").click();
    document.getElementById("windButton").click();
    refresh = true;});

    
// Metric units
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("units-Celsius").addEventListener('click', () => {
    document.getElementById("Celsius_Unit").style.transform = "translateX(0%)";
    document.getElementById("units-Celsius").style.color = "black";
    document.getElementById("units-Fahren").style.color = "white";
    sessionStorage.Units = "metric";
    sessionStorage.Rain = "mm";
    sessionStorage.Temp = "°C";
    sessionStorage.Wind = "km/h"
    document.getElementById("userInputCity").value = sessionStorage.city;
    document.getElementById("searchBtnDiv2").click();
    document.getElementById("windButton").click();
    refresh = true;});


// Light theme
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("light-Area").addEventListener('click', () => {
    sessionStorage.Theme = "Light";
    document.getElementById("mainBody").style.backgroundColor = "black";
    document.getElementById("mainBody").style.backgroundImage = sessionStorage.getItem("lasBackgroundImage");
    document.getElementById("photo-by").style.color = "white";
    document.getElementById("photo-by").style.pointerEvents = "auto";
    document.getElementById("lightBack").style.transform = "translateX(0%)";
    document.getElementById("darkBtnText").style.color = "white";
    document.getElementById("lightBack").style.backgroundColor = "white";
    document.getElementById("navSearch").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("navSearch").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    document.getElementById("navTheme").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("navTheme").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    document.getElementById("nav_Units").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("nav_Units").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    sessionStorage.removeItem("lasBackgroundImage");
    document.querySelectorAll('.semiTranspWhite').forEach((element) => {element.classList.add('semiTranspBlack');});
    document.querySelectorAll('.semiTranspWhite').forEach((element) => {element.classList.remove('semiTranspWhite');});
    Array.from(document.getElementsByClassName("hoverWhite")).forEach((element) => {element.classList.add("hoverBlack");});
    Array.from(document.getElementsByClassName("hoverWhite")).forEach((element) => {element.classList.remove("hoverWhite");});});


// Dark theme
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("dark-Area").addEventListener('click', () => {
    sessionStorage.Theme = "Dark";
    if (document.getElementById("mainBody").style.backgroundImage != "none"){
        sessionStorage.setItem("lasBackgroundImage", (`${document.getElementById("mainBody").style.backgroundImage}`));};
    document.getElementById("mainBody").style.backgroundColor = "black";
    document.getElementById("mainBody").style.backgroundImage = "none";
    document.getElementById("photo-by").style.color = "transparent";
    document.getElementById("photo-by").style.pointerEvents = "none";
    document.getElementById("lightBack").style.transform = "translateX(93%)";
    document.getElementById("lightBack").style.backgroundColor = "white";
    document.getElementById("lightBack").style.boxShadow = "2px 2px 3px black"
    document.getElementById("darkBtnText").style.color = "black";
    document.getElementById("navSearch").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("navSearch").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.getElementById("navTheme").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("navTheme").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.getElementById("nav_Units").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("nav_Units").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.getElementById("mainCityContainer").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    document.querySelectorAll('.semiTranspBlack').forEach((element) => {element.classList.add('semiTranspWhite');});
    document.querySelectorAll('.semiTranspBlack').forEach((element) => {element.classList.remove('semiTranspBlack');});
    Array.from(document.getElementsByClassName("hoverBlack")).forEach((element) => {element.classList.add("hoverWhite");});
    Array.from(document.getElementsByClassName("hoverBlack")).forEach((element) => {element.classList.remove("hoverBlack");});});


// Checks units status at page load
////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.Units == "imperial") {
    sessionStorage.Rain = "in";
    sessionStorage.Temp = "°F";
    sessionStorage.Wind = "mph"
    document.getElementById("units-Fahren").click();
} else {
    sessionStorage.Rain = "mm";
    sessionStorage.Temp = "°C";
    sessionStorage.Wind = "km/h"
    document.getElementById("units-Celsius").click();};


// Checks theme status at page load
////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.Theme == "Dark") {
    document.getElementById("dark-Area").click();
} else {
    document.getElementById("light-Area").click();};


// Adding cookie to know if new session or not
////////////////////////////////////////////////////////////////////////////////////////
if (!localStorage.getItem("cookie") == true) {
    console.log('Browser nou\nSesiune noua');
    localStorage.setItem("cookie", true);
    sessionStorage.setItem("sessionClicks", 0);
    localStorage.setItem("localClicks", 0);

    console.log(`Local clicks: ${localStorage.getItem("localClicks")}`);
    console.log(`Session clicks: ${sessionStorage.getItem("sessionClicks")}`);
} else {
    if (!sessionStorage.getItem("sessionClicks") == true) {
        console.log('Browser vechi\nSesiune noua');
        sessionStorage.setItem("sessionClicks", 0);
        console.log(`Local clicks: ${localStorage.getItem("localClicks")}`);
        console.log(`Session clicks: ${sessionStorage.getItem("sessionClicks")}`);
    } else {
        console.log('Browser vechi\nSesiune veche');
        localStorage.setItem("localClicks", parseInt(localStorage.getItem("localClicks"))+1);
        localStorage.setItem("pageRefresh", true);
        console.log(`Local clicks: ${localStorage.getItem("localClicks")}`);
        console.log(`Session clicks: ${sessionStorage.getItem("sessionClicks")}`);};};


// Carousel for table + mobile
////////////////////////////////////////////////////////////////////////////////////////
let pressed = false;
let startX;
let x;

document.getElementById("HourlyContainer").addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - document.getElementById("InnerContainer").offsetLeft;
    document.getElementById("HourlyContainer").style.cursor = "grabbing";});
document.getElementById("HourlyContainer").addEventListener("mouseup", () => {
    document.getElementById("HourlyContainer").style.cursor = "grab";
    pressed = false;});
document.getElementById("HourlyContainer").addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    document.getElementById("InnerContainer").style.left = 
    `${x - startX - document.getElementById("HourlyContainer").offsetLeft}px`;});
let boundItems = () => {
    let outer = document.getElementById("HourlyContainer").getBoundingClientRect();
    let inner = document.getElementById("InnerContainer").getBoundingClientRect();
    if (parseInt(document.getElementById("InnerContainer").style.left) > 0) {
        document.getElementById("InnerContainer").style.left = "0px";};
    if (inner.right < outer.right) {
        document.getElementById("InnerContainer").style.left = `-${inner.width - outer.width}px`;};};
document.getElementById("HourlyContainer").addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    document.getElementById("InnerContainer").style.left =
    `${x - startX - document.getElementById("HourlyContainer").offsetLeft}px`;
    boundItems();});


// Search Input Submit
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("searchBtnDiv2").addEventListener("click", async () => {
    sessionStorage.setItem("sessionClicks", parseInt(sessionStorage.getItem("sessionClicks")) + 1);
    sessionStorage.setItem("lastSearched", document.getElementById("userInputCity").value);
    const city = document.getElementById("userInputCity").value;
    document.getElementById("windButton").click();
    sessionStorage.city = (`${city}`);
    if (city.length != 0) {


        // Get user input geo-location
        ////////////////////////////////////////////////////////////////////////////////////////
        const response = await fetch
            (`${API_BASE}/geo/1.0/direct?q=${city}&limit=1`);
        const { 0: { name: NAME, lat: LAT, lon: LON, country: LANG } } = await response.json();


        // If city name is already searched
        ////////////////////////////////////////////////////////////////////////////////////////
        if (NAME.toUpperCase() == "BUCHAREST") { document.getElementById("mainInputCityName").textContent = "BUCURESTI";}
        else { document.getElementById("mainInputCityName").textContent = NAME.toUpperCase();};
        

        console.log("\n\n\n✅ Fetching data...\n\n")
        console.log(`🏙️ Main city: ${city.toUpperCase()}\n`)
        console.log(`➡️ Latitude: ${LAT}`);
        console.log(`⬇️ Longitude: ${LON}\n\n`);
        console.log("🏘️ Nearby cities:")
        

        // Add Windy map location based on user searched city
        ////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("userInputCity").value = "";
        document.getElementById("WindyMap").src =
            (`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=${sessionStorage.Rain}&metricTemp=${sessionStorage.Temp}&metricWind=${sessionStorage.Wind}&zoom=7&overlay=temp&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}&pressure=true&message=true`);


        // To database ( WebDesc / WebIcon / BackPhotos )
        ////////////////////////////////////////////////////////////////////////////////////////
        const toDatabase = {
            "Thunderstorm" : [thunder_ApiDesc_to_WebDesc, thunder_WebDesc_to_WebIcon, ThunderPhotos],
                 "Drizzle" : [drizzle_ApiDesc_to_WebDesc, drizzle_WebDesc_to_WebIcon, DrizzlePhotos],
                    "Rain" : [rain_ApiDesc_to_WebDesc, rain_WebDesc_to_WebIcon, RainPhotos],
                    "Snow" : [snow_ApiDesc_to_WebDesc, snow_WebDesc_to_WebIcon, SnowPhotos],
                    "Mist" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                   "Smoke" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                    "Haze" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                    "Dust" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                     "Fog" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                    "Sand" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                    "Dust" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                     "Ash" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                  "Squall" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                 "Tornado" : [atmosphere_ApiDesc_to_WebDesc, atmosphere_WebDesc_to_WebIcon, AtmospherePhotos],
                   "Clear" : [clear_ApiDesc_to_WebDesc, clear_WebDesc_to_WebIcon_day, ClearPhotos],
                  "Clouds" : [clouds_ApiDesc_to_WebDesc, clouds_WebDesc_to_WebIcon_day, CloudsPhotos]};

    
        // Nearby city 1
        ////////////////////////////////////////////////////////////////////////////////////////
        const nearbyCities1 = await fetch
            (`${API_BASE}/data/2.5/weather?lat=${LAT + rng}&lon=${LON + rng}&units=${sessionStorage.Units}`);
        const {
            name: N_1_Name,
            main: { humidity: N_1_HumiNo, temp: N_1_Temp, temp_max: N_1_MaxTemp, temp_min: N_1_MinTemp },
            weather: { 0: { description: N_1_Desc, main: N_1_Icon } },
            wind: { deg: N_1_WindDeg, speed: N_1_WindSpeed } } = await nearbyCities1.json();
        document.getElementById("N-1-Name").textContent = N_1_Name;
        document.getElementById("N-1-Temp").innerHTML = (`${Math.round(N_1_Temp)}<sup class="nearCityDegree">°</sup>`);
        document.getElementById("N-1-Desc").innerHTML = cut_Cap(((toDatabase[N_1_Icon])[0])[N_1_Desc]);
        document.getElementById("N-1-MaxTemp").textContent = (`${Math.round(N_1_MaxTemp) + 2}°`);
        document.getElementById("N-1-MinTemp").textContent = (`${Math.round(N_1_MinTemp) - 2}°`);
        document.getElementById("N-1-HumiNo").textContent = (`${N_1_HumiNo}%`);
        document.getElementById("N-1-WindSpeed").textContent = (Math.round(N_1_WindSpeed * 10)) / 10;
        document.getElementById("N-1-IconSvg").src = 
                (((toDatabase[N_1_Icon])[1]))[((toDatabase[N_1_Icon])[0])[N_1_Desc]];
        windDescription(N_1_WindDeg, "N-1-WindDesc");
        humidityDescription(N_1_HumiNo, "N-1-HumiDesc");
        console.log(N_1_Name);


        // Nearby city 2
        ////////////////////////////////////////////////////////////////////////////////////////
        const nearbyCities2 = await fetch
            (`${API_BASE}/data/2.5/weather?lat=${LAT + rng}&lon=${LON - rng}&units=${sessionStorage.Units}`);
        const {
            name: N_2_Name,
            main: { humidity: N_2_HumiNo, temp: N_2_Temp, temp_max: N_2_MaxTemp, temp_min: N_2_MinTemp },
            weather: { 0: { description: N_2_Desc, main: N_2_Icon } },
            wind: { deg: N_2_WindDeg, speed: N_2_WindSpeed } } = await nearbyCities2.json();
        document.getElementById("N-2-Name").textContent = N_2_Name;
        document.getElementById("N-2-Temp").innerHTML = (`${Math.round(N_2_Temp)}<sup class="nearCityDegree">°</sup>`);
        document.getElementById("N-2-Desc").innerHTML = cut_Cap(((toDatabase[N_2_Icon])[0])[N_2_Desc]);
        document.getElementById("N-2-MaxTemp").textContent = (`${Math.round(N_2_MaxTemp) + 2}°`);
        document.getElementById("N-2-MinTemp").textContent = (`${Math.round(N_2_MinTemp) - 2}°`);
        document.getElementById("N-2-HumiNo").textContent = (`${N_2_HumiNo}%`);
        document.getElementById("N-2-WindSpeed").textContent = (Math.round(N_2_WindSpeed * 10)) / 10;
        document.getElementById("N-2-IconSvg").src = 
                (((toDatabase[N_2_Icon])[1]))[((toDatabase[N_2_Icon])[0])[N_2_Desc]];
        windDescription(N_2_WindDeg, "N-2-WindDesc");
        humidityDescription(N_2_HumiNo, "N-2-HumiDesc");
        console.log(N_2_Name);


        // Nearby city 3
        ////////////////////////////////////////////////////////////////////////////////////////
        const nearbyCities3 = await fetch
            (`${API_BASE}/data/2.5/weather?lat=${LAT - rng}&lon=${LON + rng}&units=${sessionStorage.Units}`);
        const {
            name: N_3_Name,
            main: { humidity: N_3_HumiNo, temp: N_3_Temp, temp_max: N_3_MaxTemp, temp_min: N_3_MinTemp },
            weather: { 0: { description: N_3_Desc, main: N_3_Icon } },
            wind: { deg: N_3_WindDeg, speed: N_3_WindSpeed } } = await nearbyCities3.json();
        document.getElementById("N-3-Name").textContent = N_3_Name;
        document.getElementById("N-3-Temp").innerHTML = (`${Math.round(N_3_Temp)}<sup class="nearCityDegree">°</sup>`);
        document.getElementById("N-3-Desc").innerHTML = cut_Cap(((toDatabase[N_3_Icon])[0])[N_3_Desc]);
        document.getElementById("N-3-MaxTemp").textContent = (`${Math.round(N_3_MaxTemp) + 2}°`);
        document.getElementById("N-3-MinTemp").textContent = (`${Math.round(N_3_MinTemp) - 2}°`);
        document.getElementById("N-3-HumiNo").textContent = (`${N_3_HumiNo}%`);
        document.getElementById("N-3-WindSpeed").textContent = (Math.round(N_3_WindSpeed * 10)) / 10;
        document.getElementById("N-3-IconSvg").src = 
                (((toDatabase[N_3_Icon])[1]))[((toDatabase[N_3_Icon])[0])[N_3_Desc]];
        windDescription(N_3_WindDeg, "N-3-WindDesc");
        humidityDescription(N_3_HumiNo, "N-3-HumiDesc");
        console.log(N_3_Name);


        // Nearby city 4
        ////////////////////////////////////////////////////////////////////////////////////////
        const nearbyCities4 = await fetch
            (`${API_BASE}/data/2.5/weather?lat=${LAT - rng}&lon=${LON - rng}&units=${sessionStorage.Units}`);
        const {
            name: N_4_Name,
            main: { humidity: N_4_HumiNo, temp: N_4_Temp, temp_max: N_4_MaxTemp, temp_min: N_4_MinTemp },
            weather: { 0: { description: N_4_Desc, main: N_4_Icon } },
            wind: { deg: N_4_WindDeg, speed: N_4_WindSpeed } } = await nearbyCities4.json();
        document.getElementById("N-4-Name").textContent = N_4_Name;
        document.getElementById("N-4-Temp").innerHTML = (`${Math.round(N_4_Temp)}<sup class="nearCityDegree">°</sup>`);
        document.getElementById("N-4-Desc").innerHTML = cut_Cap(((toDatabase[N_4_Icon])[0])[N_4_Desc]);
        document.getElementById("N-4-MaxTemp").textContent = (`${Math.round(N_4_MaxTemp) + 2}°`);
        document.getElementById("N-4-MinTemp").textContent = (`${Math.round(N_4_MinTemp) - 2}°`);
        document.getElementById("N-4-HumiNo").textContent = (`${N_4_HumiNo}%`);
        document.getElementById("N-4-WindSpeed").textContent = (Math.round(N_4_WindSpeed * 10)) / 10;
        document.getElementById("N-4-IconSvg").src = 
                (((toDatabase[N_4_Icon])[1]))[((toDatabase[N_4_Icon])[0])[N_4_Desc]];
        windDescription(N_4_WindDeg, "N-4-WindDesc");
        humidityDescription(N_4_HumiNo, "N-4-HumiDesc");
        console.log(N_4_Name);



        console.log(`\n🗺️ Spread: +-${rng}° LAT/LON`);
        console.log("\n")



        /*////////////////////////////////////  Main City \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\
        \*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  API Data  ////////////////////////////////////*/
        const mainCityData = await fetch
            (`${API_BASE}/data/3.0/onecall?lat=${LAT}&lon=${LON}&units=${sessionStorage.Units}`);

        const { timezone_offset: main_timeZone,
            current: {
                dt: session_time,
                humidity: main_HumiNo,
                temp: main_Temp,
                uvi: main_UViNo,
                weather: { 0: { description: main_Desc, main: main_Icon } },
                wind_deg: main_WindDeg,
                wind_speed: main_WindSpeed },

            daily: { 0: { temp: { max: main_MaxTemp, min: main_MinTemp } } },
            daily: { 1: {
                temp: { max: D_1_MaxTemp, min: D_1_MinTemp },
                weather: { 0: { description: D_1_Desc, main: D_1_Icon } } } },
            daily: { 2: {
                temp: { max: D_2_MaxTemp, min: D_2_MinTemp },
                weather: { 0: { description: D_2_Desc, main: D_2_Icon } } } },
            daily: { 3: {
                temp: { max: D_3_MaxTemp, min: D_3_MinTemp },
                weather: { 0: { description: D_3_Desc, main: D_3_Icon } } } },
            daily: { 4: {
                temp: { max: D_4_MaxTemp, min: D_4_MinTemp },
                weather: { 0: { description: D_4_Desc, main: D_4_Icon } } } },
            daily: { 5: {
                temp: { max: D_5_MaxTemp, min: D_5_MinTemp },
                weather: { 0: { description: D_5_Desc, main: D_5_Icon } } } },
            daily: { 6: {
                temp: { max: D_6_MaxTemp, min: D_6_MinTemp },
                weather: { 0: { description: D_6_Desc, main: D_6_Icon } } } },

            hourly: { 1: {
                dt: H_1_dateTime,
                humidity: H_1_HumiNo,
                temp: H_1_Temp,
                uvi: H_1_UVi,
                weather: { 0: { description: H_1_Desc, main: H_1_Icon } },
                wind_deg: H_1_WindDesc,
                wind_speed: H_1_WindSpeed } },
            hourly: { 2: {
                dt: H_2_dateTime,
                humidity: H_2_HumiNo,
                temp: H_2_Temp,
                uvi: H_2_UVi,
                weather: { 0: { description: H_2_Desc, main: H_2_Icon } },
                wind_deg: H_2_WindDesc,
                wind_speed: H_2_WindSpeed } },
            hourly: { 3: {
                dt: H_3_dateTime,
                humidity: H_3_HumiNo,
                temp: H_3_Temp,
                uvi: H_3_UVi,
                weather: { 0: { description: H_3_Desc, main: H_3_Icon } },
                wind_deg: H_3_WindDesc,
                wind_speed: H_3_WindSpeed } },
            hourly: { 4: {
                dt: H_4_dateTime,
                humidity: H_4_HumiNo,
                temp: H_4_Temp,
                uvi: H_4_UVi,
                weather: { 0: { description: H_4_Desc, main: H_4_Icon } },
                wind_deg: H_4_WindDesc,
                wind_speed: H_4_WindSpeed } },
            hourly: { 5: {
                dt: H_5_dateTime,
                humidity: H_5_HumiNo,
                temp: H_5_Temp,
                uvi: H_5_UVi,
                weather: { 0: { description: H_5_Desc, main: H_5_Icon } },
                wind_deg: H_5_WindDesc,
                wind_speed: H_5_WindSpeed } },
            hourly: { 6: {
                dt: H_6_dateTime,
                humidity: H_6_HumiNo,
                temp: H_6_Temp,
                uvi: H_6_UVi,
                weather: { 0: { description: H_6_Desc, main: H_6_Icon } },
                wind_deg: H_6_WindDesc,
                wind_speed: H_6_WindSpeed } },
            hourly: { 7: {
                dt: H_7_dateTime,
                humidity: H_7_HumiNo,
                temp: H_7_Temp,
                uvi: H_7_UVi,
                weather: { 0: { description: H_7_Desc, main: H_7_Icon } },
                wind_deg: H_7_WindDesc,
                wind_speed: H_7_WindSpeed } },
            hourly: { 8: {
                dt: H_8_dateTime,
                humidity: H_8_HumiNo,
                temp: H_8_Temp,
                uvi: H_8_UVi,
                weather: { 0: { description: H_8_Desc, main: H_8_Icon } },
                wind_deg: H_8_WindDesc,
                wind_speed: H_8_WindSpeed } },
            hourly: { 9: {
                dt: H_9_dateTime,
                humidity: H_9_HumiNo,
                temp: H_9_Temp,
                uvi: H_9_UVi,
                weather: { 0: { description: H_9_Desc, main: H_9_Icon } },
                wind_deg: H_9_WindDesc,
                wind_speed: H_9_WindSpeed } },
            hourly: { 10: {
                dt: H_10_dateTime,
                humidity: H_10_HumiNo,
                temp: H_10_Temp,
                uvi: H_10_UVi,
                weather: { 0: { description: H_10_Desc, main: H_10_Icon } },
                wind_deg: H_10_WindDesc,
                wind_speed: H_10_WindSpeed } },
            hourly: { 11: {
                dt: H_11_dateTime,
                humidity: H_11_HumiNo,
                temp: H_11_Temp,
                uvi: H_11_UVi,
                weather: { 0: { description: H_11_Desc, main: H_11_Icon } },
                wind_deg: H_11_WindDesc,
                wind_speed: H_11_WindSpeed } },
            hourly: { 12: {
                dt: H_12_dateTime,
                humidity: H_12_HumiNo,
                temp: H_12_Temp,
                uvi: H_12_UVi,
                weather: { 0: { description: H_12_Desc, main: H_12_Icon } },
                wind_deg: H_12_WindDesc,
                wind_speed: H_12_WindSpeed } },
            hourly: { 13: {
                dt: H_13_dateTime,
                humidity: H_13_HumiNo,
                temp: H_13_Temp,
                uvi: H_13_UVi,
                weather: { 0: { description: H_13_Desc, main: H_13_Icon } },
                wind_deg: H_13_WindDesc,
                wind_speed: H_13_WindSpeed } },
            hourly: { 14: {
                dt: H_14_dateTime,
                humidity: H_14_HumiNo,
                temp: H_14_Temp,
                uvi: H_14_UVi,
                weather: { 0: { description: H_14_Desc, main: H_14_Icon } },
                wind_deg: H_14_WindDesc,
                wind_speed: H_14_WindSpeed } },
            hourly: { 15: {
                dt: H_15_dateTime,
                humidity: H_15_HumiNo,
                temp: H_15_Temp,
                uvi: H_15_UVi,
                weather: { 0: { description: H_15_Desc, main: H_15_Icon } },
                wind_deg: H_15_WindDesc,
                wind_speed: H_15_WindSpeed } },
            hourly: { 16: {
                dt: H_16_dateTime,
                humidity: H_16_HumiNo,
                temp: H_16_Temp,
                uvi: H_16_UVi,
                weather: { 0: { description: H_16_Desc, main: H_16_Icon } },
                wind_deg: H_16_WindDesc,
                wind_speed: H_16_WindSpeed } } } = await mainCityData.json();

        
        // Main City Details
        ////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("main-Temp").innerHTML = (`${Math.round(main_Temp)}<sup class="mainCityDegree">°</sup>`);;
        document.getElementById("main-Desc").innerHTML = cut_Cap(((toDatabase[main_Icon])[0])[main_Desc]);
        document.getElementById("main-MaxTemp").textContent = (`${Math.round(main_MaxTemp)}°`);
        document.getElementById("main-MinTemp").textContent = (`${Math.round(main_MinTemp)}°`);
        document.getElementById("main-HumiNo").textContent = (`${main_HumiNo}%`);
        document.getElementById("main-WindSpeed").textContent = (Math.round(main_WindSpeed * 10)) / 10;
        document.getElementById("main-UViNo").textContent = (Math.round(main_UViNo * 10)) / 10;
        document.getElementById("main-IconSvg").src = 
                (((toDatabase[main_Icon])[1]))[((toDatabase[main_Icon])[0])[main_Desc]];
        windDescription(main_WindDeg, "main-WindDesc");
        humidityDescription(main_HumiNo, "main-HumiDesc");
        UVindexDescription(main_UViNo, "main-UViDesc");
        document.getElementById("main_city_dayDate").textContent = (`
            ${days[(new Date((session_time-7200 + main_timeZone)*1000).getDay())%7]}, ${new Date((session_time-7200 + main_timeZone)*1000).getDate()} 
            ${months[new Date((session_time-7200 + main_timeZone)*1000).getMonth()]} ${new Date((session_time-7200 + main_timeZone)*1000).getFullYear()}`);

        var backImageUrl;
        if (refresh != true){
            if (sessionStorage.getItem("sessionClicks") != 0) {
                // Runs only if old session
                if (mil_Time(main_timeZone) < 8 || mil_Time(main_timeZone) > 20) {
                    backImageUrl = ((toDatabase[main_Icon])[2]).Night[randint(((toDatabase[main_Icon])[2]).Night.length - 1)];
                } else {
                    backImageUrl = ((toDatabase[main_Icon])[2]).Day[randint(((toDatabase[main_Icon])[2]).Day.length - 1)];};
                if (sessionStorage.Theme == "Dark") {
                        sessionStorage.setItem("lasBackgroundImage", (`url("${backImageUrl[0]}")`));
                        document.getElementById("dark-Area").click();
                        refresh = false;
                    } else {
                        // Runs only at new session
                        document.getElementById("mainBody").style.backgroundImage = (`url("${backImageUrl[0]}")`);
                        document.getElementById("photo-by").textContent = (`Photo by ${backImageUrl[1]}`);
                        document.getElementById("photo-by").href = backImageUrl[2];};
                        refresh = false};
        } else {
            if (sessionStorage.Theme == "Dark") {
                document.getElementById("dark-Area").click();
                refresh = false;
            } else {
                refresh = false;};};


        // Cookie bar behavior
        ////////////////////////////////////////////////////////////////////////////////////////
        if (localStorage.getItem("localCookie") == "true" || sessionStorage.getItem("sessionCookie") == "true") {
            document.getElementById("blocked").style.display = "none";
        } else { 
            document.getElementById("cookiesBar").style.transform = "translateY(0px)";

            document.getElementById("acceptButon").addEventListener('click', () => {
                localStorage.setItem("localCookie", true);
                document.getElementById("cookiesBar").style.transform = "translateY(180px)";
                setTimeout (()=>{
                    document.getElementById("cookiesBar").style.display = "none";
                    document.getElementById("blocked").style.display = "none";},1000);
                setTimeout (()=>{document.getElementById("mainBody").style.overflow = "visible";},1000);});
                
            document.getElementById("maybeButon").addEventListener('click', () => {
                sessionStorage.setItem("sessionCookie", true);
                document.getElementById("cookiesBar").style.transform = "translateY(180px)";
                setTimeout (()=>{
                    document.getElementById("cookiesBar").style.display = "none";
                    document.getElementById("blocked").style.display = "none";},1000);
                setTimeout (()=>{document.getElementById("mainBody").style.overflow = "visible";},1000);});};


        // Hourly Forecast - Time, Icon, Desc, Temp, Humi, Wind, UVi
        ////////////////////////////////////////////////////////////////////////////////////////
        // Time (seconds)
        const hourTimeAPIs = [
            H_1_dateTime,  H_2_dateTime,  H_3_dateTime,  H_4_dateTime,
            H_5_dateTime,  H_6_dateTime,  H_7_dateTime,  H_8_dateTime,
            H_9_dateTime,  H_10_dateTime, H_11_dateTime, H_12_dateTime,
            H_13_dateTime, H_14_dateTime, H_15_dateTime, H_16_dateTime];

        const hourTimeIDs = [
            "hourTime01", "hourTime02", "hourTime03", "hourTime04",
            "hourTime05", "hourTime06", "hourTime07", "hourTime08",
            "hourTime09", "hourTime10", "hourTime11", "hourTime12",
            "hourTime13", "hourTime14", "hourTime15", "hourTime16"];

        // Icon category
        const hourIconCatAPIs = [
            H_1_Icon,  H_2_Icon,  H_3_Icon,  H_4_Icon,
            H_5_Icon,  H_6_Icon,  H_7_Icon,  H_8_Icon,
            H_9_Icon,  H_10_Icon, H_11_Icon, H_12_Icon,
            H_13_Icon, H_14_Icon, H_15_Icon, H_16_Icon];

        const hourIconSvgIDs = [
            "hourSvg01", "hourSvg02", "hourSvg03", "hourSvg04",
            "hourSvg05", "hourSvg06", "hourSvg07", "hourSvg08",
            "hourSvg09", "hourSvg10", "hourSvg11", "hourSvg12",
            "hourSvg13", "hourSvg14", "hourSvg15", "hourSvg16"];
        
        // Description
        const hourDescAPIs = [
            H_1_Desc,  H_2_Desc,  H_3_Desc,  H_4_Desc,
            H_5_Desc,  H_6_Desc,  H_7_Desc,  H_8_Desc,
            H_9_Desc,  H_10_Desc, H_11_Desc, H_12_Desc,
            H_13_Desc, H_14_Desc, H_15_Desc, H_16_Desc];

        const hourDescIDs = [
            "H-1-Desc",  "H-2-Desc",  "H-3-Desc",  "H-4-Desc",
            "H-5-Desc",  "H-6-Desc",  "H-7-Desc",  "H-8-Desc",
            "H-9-Desc",  "H-10-Desc", "H-11-Desc", "H-12-Desc",
            "H-13-Desc", "H-14-Desc", "H-15-Desc", "H-16-Desc"];

        // Temperature
        const hourTempAPIs = [
            H_1_Temp,  H_2_Temp,  H_3_Temp,  H_4_Temp,
            H_5_Temp,  H_6_Temp,  H_7_Temp,  H_8_Temp,
            H_9_Temp,  H_10_Temp, H_11_Temp, H_12_Temp,
            H_13_Temp, H_14_Temp, H_15_Temp, H_16_Temp];

        const hourTempIDs = [
            "H-1-Temp",  "H-2-Temp",  "H-3-Temp",  "H-4-Temp",
            "H-5-Temp",  "H-6-Temp",  "H-7-Temp",  "H-8-Temp",
            "H-9-Temp",  "H-10-Temp", "H-11-Temp", "H-12-Temp",
            "H-13-Temp", "H-14-Temp", "H-15-Temp", "H-16-Temp"];

        // Humidity value
        const HumiNoAPIs = [
            H_1_HumiNo,  H_2_HumiNo,  H_3_HumiNo,  H_4_HumiNo,
            H_5_HumiNo,  H_6_HumiNo,  H_7_HumiNo,  H_8_HumiNo,
            H_9_HumiNo,  H_10_HumiNo, H_11_HumiNo, H_12_HumiNo,
            H_13_HumiNo, H_14_HumiNo, H_15_HumiNo, H_16_HumiNo];
        const HumiNoIDs = fromParentClass("humiNumber", "p");
    
        // Humidity description
        const HumiDescIDs = fromParentClass("humiDesc", "p");

        // Wind speed
        const WindSpeedAPIs = [
            H_1_WindSpeed,  H_2_WindSpeed,  H_3_WindSpeed,  H_4_WindSpeed,
            H_5_WindSpeed,  H_6_WindSpeed,  H_7_WindSpeed,  H_8_WindSpeed,
            H_9_WindSpeed,  H_10_WindSpeed, H_11_WindSpeed, H_12_WindSpeed,
            H_13_WindSpeed, H_14_WindSpeed, H_15_WindSpeed, H_16_WindSpeed];
        const WindSpeedIDs = fromParentClass("windNumber", "p");
        
        // Wind description
        const WindDescAPIs = [
            H_1_WindDesc,  H_2_WindDesc,  H_3_WindDesc,  H_4_WindDesc,
            H_5_WindDesc,  H_6_WindDesc,  H_7_WindDesc,  H_8_WindDesc,
            H_9_WindDesc,  H_10_WindDesc, H_11_WindDesc, H_12_WindDesc,
            H_13_WindDesc, H_14_WindDesc, H_15_WindDesc, H_16_WindDesc];
        const WindDescIDs = fromParentClass("windDesc", "p");
        
        // UVi number
        const UViAPIs = [
            H_1_UVi,  H_2_UVi,  H_3_UVi,  H_4_UVi,
            H_5_UVi,  H_6_UVi,  H_7_UVi,  H_8_UVi,
            H_9_UVi,  H_10_UVi, H_11_UVi, H_12_UVi,
            H_13_UVi, H_14_UVi, H_15_UVi, H_16_UVi];
        const UViIDs = fromParentClass("uvIndexNumber", "p");
        
        //UVi description
        const UViDescIDs = fromParentClass("uvIndexDesc", "p");
        
        for (let i = 0; i < hourTimeAPIs.length; i++) {
            // Timestapms
            document.getElementById(`${hourTimeIDs[i]}`).innerHTML =
                AM_or_PM(hourTimeAPIs, i, main_timeZone);
            // Icon SVG
            document.getElementById(hourIconSvgIDs[i]).src =
                ((toDatabase[hourIconCatAPIs[i]])[1])[((toDatabase[hourIconCatAPIs[i]])[0])[hourDescAPIs[i]]];
            // Description
            document.getElementById(`${hourDescIDs[i]}`).innerHTML =
                cut_Cap(((toDatabase[hourIconCatAPIs[i]])[0])[hourDescAPIs[i]]);
            // Temperature
            document.getElementById(`${hourTempIDs[i]}`).innerHTML =
                (`${Math.round(hourTempAPIs[i])}<sup class="celsius">°</sup>`);
            // Humidity number
            document.getElementById(`${HumiNoIDs[i]}`).innerHTML = (`${HumiNoAPIs[i]}`);
            // Humidity description
            humidityDescription(HumiNoAPIs[i], HumiDescIDs[i]);
            // Wind speed
            document.getElementById(WindSpeedIDs[i]).textContent = Math.round(WindSpeedAPIs[i]);
            // Wind description
            windDescription(WindDescAPIs[i], WindDescIDs[i]);
            // UVi number
            document.getElementById(UViIDs[i]).textContent = Math.round(UViAPIs[i]);
            // UVi description
            UVindexDescription(UViAPIs[i], UViDescIDs[i]);};


        // Daily Forecast - Min, Max, Date
        ////////////////////////////////////////////////////////////////////////////////////////
        const DailyTempMinIDs = [
            "D-1-MinTemp", "D-2-MinTemp", "D-3-MinTemp",
            "D-4-MinTemp", "D-5-MinTemp", "D-6-MinTemp"];

        const DailyTempMinAPIs = [
            D_1_MinTemp, D_2_MinTemp, D_3_MinTemp,
            D_4_MinTemp, D_5_MinTemp, D_6_MinTemp];

        const DailyTempMaxIDs = [
            "D-1-MaxTemp", "D-2-MaxTemp", "D-3-MaxTemp",
            "D-4-MaxTemp", "D-5-MaxTemp", "D-6-MaxTemp"];

        const DailyTempMaxAPIs = [
            D_1_MaxTemp, D_2_MaxTemp, D_3_MaxTemp,
            D_4_MaxTemp, D_5_MaxTemp, D_6_MaxTemp];

        const DailyDescIDs = [
            "D-1-Desc", "D-2-Desc", "D-3-Desc",
            "D-4-Desc", "D-5-Desc", "D-6-Desc"];

        const DailyDescAPIs = [
            D_1_Desc, D_2_Desc, D_3_Desc,
            D_4_Desc, D_5_Desc, D_6_Desc];

        const DailyDateIDs = [
            "D-1-Date", "D-2-Date", "D-3-Date",
            "D-4-Date", "D-5-Date", "D-6-Date"];

        const DailyIconCatAPIs = [
            D_1_Icon, D_2_Icon, D_3_Icon,
            D_4_Icon, D_5_Icon, D_6_Icon];

        const DailyIconSvgIDs = [
            "dailySvgT1", "dailySvgT2", "dailySvgT3",
            "dailySvgT4", "dailySvgT5", "dailySvgT6"];

        for (let i = 0; i < DailyTempMinAPIs.length; i++) {
            document.getElementById(`${DailyTempMinIDs[i]}`).textContent = (`${Math.round(DailyTempMinAPIs[i])}°`);
            document.getElementById(`${DailyTempMaxIDs[i]}`).textContent = (`${Math.round(DailyTempMaxAPIs[i])}°`);
            document.getElementById(`${DailyDescIDs[i]}`).innerHTML = (`${cut_Cap(DailyDescAPIs[i])}`);
            document.getElementById(`${DailyDateIDs[i]}`).textContent = days[(((new Date((session_time-7200 + main_timeZone)*1000).getDay()) + i + 1) % 7)];
            document.getElementById(DailyIconSvgIDs[i]).src = 
                ((toDatabase[DailyIconCatAPIs[i]])[1])[((toDatabase[DailyIconCatAPIs[i]])[0])[DailyDescAPIs[i]]];};
    

        // Windy map - Temp button
        ////////////////////////////////////////////////////////////////////////////////////////
        const windButton = document.getElementById("windButton");
        windButton.addEventListener('click', () => {
            document.getElementById("WindyMap").src =
                (`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=${sessionStorage.Rain}&metricTemp=${sessionStorage.Temp}&metricWind=${sessionStorage.Wind}&zoom=7&overlay=temp&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}&pressure=true&message=true`);
            
            document.getElementById("windButton").style.backgroundColor = "transparent";
            document.getElementById("windButton").style.color = "white";
            document.getElementById("windButton").style.fontSize = "18px";
            document.getElementById("tempButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("tempButton").style.fontSize = "14px";
            document.getElementById("rainButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("rainButton").style.fontSize = "14px";
            document.getElementById("cloudsButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("cloudsButton").style.fontSize = "14px";
            document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("tempButton").style.borderRadius = "0px 0px 0px 15px";
            document.getElementById("rainButton").style.borderRadius = "0px 0px 0px 0px";
            document.getElementById("cloudsButton").style.borderRadius = "0px 10px 0px 0px";



            if (sessionStorage.Theme == "Dark") {
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "transparent";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";})
            } else {
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "transparent";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});};});


        // Windy map - Rain button
        ////////////////////////////////////////////////////////////////////////////////////////
        const tempButton = document.getElementById("tempButton");
        tempButton.addEventListener('click', () => {
            document.getElementById("WindyMap").src =
                (`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=${sessionStorage.Rain}&metricTemp=${sessionStorage.Temp}&metricWind=${sessionStorage.Wind}&zoom=7&overlay=rainAccu&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}&pressure=true&message=true`);

            document.getElementById("tempButton").style.backgroundColor = "transparent";
            document.getElementById("tempButton").style.color = "white";
            document.getElementById("tempButton").style.fontSize = "18px";
            document.getElementById("windButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("windButton").style.fontSize = "14px";
            document.getElementById("rainButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("rainButton").style.fontSize = "14px";
            document.getElementById("cloudsButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("cloudsButton").style.fontSize = "14px";
            document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("windButton").style.borderRadius = "10px 0px 15px 0px";
            document.getElementById("rainButton").style.borderRadius = "0px 0px 0px 15px";
            document.getElementById("cloudsButton").style.borderRadius = "0px 10px 0px 0px";
            document.getElementById("windButton").style.margin = "0px 0px 0px 0px";
            

            if (sessionStorage.Theme == "Dark") {
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "transparent";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
            } else {
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "transparent";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});};});

        // Windy map - Wind button
        ////////////////////////////////////////////////////////////////////////////////////////
        const rainButton = document.getElementById("rainButton");
        rainButton.addEventListener('click', () => {
            document.getElementById("WindyMap").src =
                (`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=${sessionStorage.Rain}&metricTemp=${sessionStorage.Temp}&metricWind=${sessionStorage.Wind}&zoom=7&overlay=wind&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}&pressure=true&message=true`);

            document.getElementById("rainButton").style.backgroundColor = "transparent";
            document.getElementById("rainButton").style.color = "white";
            document.getElementById("rainButton").style.fontSize = "18px";
            document.getElementById("windButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("windButton").style.fontSize = "14px";
            document.getElementById("tempButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("tempButton").style.fontSize = "14px";
            document.getElementById("cloudsButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("cloudsButton").style.fontSize = "14px";
            document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("windButton").style.borderRadius = "10px 0px 0px 0px";
            document.getElementById("tempButton").style.borderRadius = "0px 0px 15px 0px";
            document.getElementById("cloudsButton").style.borderRadius = "0px 10px 0px 15px";
            document.getElementById("windButton").style.margin = "0px 0px 0px 0px";


            if (sessionStorage.Theme == "Dark") {
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "transparent";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
            } else {
                    rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "transparent";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "transparent";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});};});


        // Windy map - UV Index button
        ////////////////////////////////////////////////////////////////////////////////////////
        const cloudsButton = document.getElementById("cloudsButton");
        cloudsButton.addEventListener('click', () => {
            document.getElementById("WindyMap").src =
                (`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=${sessionStorage.Rain}&metricTemp=${sessionStorage.Temp}&metricWind=${sessionStorage.Wind}&zoom=7&overlay=uvindex&product=cams&level=surface&lat=${LAT}&lon=${LON}&pressure=true&message=true`);

            document.getElementById("cloudsButton").style.backgroundColor = "transparent";
            document.getElementById("cloudsButton").style.color = "white";
            document.getElementById("cloudsButton").style.fontSize = "18px";
            document.getElementById("windButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("windButton").style.fontSize = "14px";
            document.getElementById("tempButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("tempButton").style.fontSize = "14px";
            document.getElementById("rainButton").style.color = "rgba(255, 255, 255, 0.8)";
            document.getElementById("rainButton").style.fontSize = "14px";
            document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            document.getElementById("windButton").style.borderRadius = "10px 0px 0px 0px";
            document.getElementById("tempButton").style.borderRadius = "0px 0px 0px 0px";
            document.getElementById("rainButton").style.borderRadius = "0px 0px 15px 0px";
            document.getElementById("windButton").style.margin = "0px 0px 0px 0px";

            if (sessionStorage.Theme == "Dark") {
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "transparent";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "transparent";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(255, 255, 255, 0.15)";})
            } else {
                cloudsButton.addEventListener("mouseover", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "transparent";});
                cloudsButton.addEventListener("mouseout", () => {
                    document.getElementById("cloudsButton").style.backgroundColor = "transparent";});
                rainButton.addEventListener("mouseover", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                rainButton.addEventListener("mouseout", () => {
                    document.getElementById("rainButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                tempButton.addEventListener("mouseover", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                tempButton.addEventListener("mouseout", () => {
                    document.getElementById("tempButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});
                windButton.addEventListener("mouseover", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.8)";});
                windButton.addEventListener("mouseout", () => {
                    document.getElementById("windButton").style.backgroundColor = "rgba(0, 0, 0, 0.5)";});};});

        // Saves searched Timezone offset
        ////////////////////////////////////////////////////////////////////////////////////////
        mainTimezone = main_timeZone;

        
        // Displays time in navbar
        ////////////////////////////////////////////////////////////////////////////////////////
        displayTime(main_timeZone);


        // Fills daily temp bars with color
        ////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(clearTempBars("D-1-Selector"), 1000);
        setTimeout(clearTempBars("D-2-Selector"), 2000);
        setTimeout(clearTempBars("D-3-Selector"), 3000);
        setTimeout(clearTempBars("D-4-Selector"), 4000);
        setTimeout(clearTempBars("D-5-Selector"), 5000);
        setTimeout(clearTempBars("D-6-Selector"), 6000);

        let newMin = Math.min(...[D_1_MinTemp, D_2_MinTemp, D_3_MinTemp, D_4_MinTemp, D_5_MinTemp, D_6_MinTemp])-1;
        let newMax = Math.max(...[D_1_MaxTemp, D_2_MaxTemp, D_3_MaxTemp, D_4_MaxTemp, D_5_MaxTemp, D_6_MaxTemp])+1;
        let arr = [];
        console.log(arr);
        for (let i = 0; i <= 10; i++) {arr.push(Math.round((newMin+((newMax-newMin)/10)*i)*10)/10);}

        tempBars("D-1-Selector", D_1_MinTemp, D_1_MaxTemp, arr);
        tempBars("D-2-Selector", D_2_MinTemp, D_2_MaxTemp, arr);
        tempBars("D-3-Selector", D_3_MinTemp, D_3_MaxTemp, arr);
        tempBars("D-4-Selector", D_4_MinTemp, D_4_MaxTemp, arr);
        tempBars("D-5-Selector", D_5_MinTemp, D_5_MaxTemp, arr);
        tempBars("D-6-Selector", D_6_MinTemp, D_6_MaxTemp, arr);
    

        // Search counter
        ////////////////////////////////////////////////////////////////////////////////////////
        if (sessionStorage.getItem("sessionClicks") == 55) {
            document.getElementById("searchButtonID").classList.remove('searchButoActive');
            document.getElementById("N-1-Name").removeEventListener('click', nearCity1Search);
            document.getElementById("N-2-Name").removeEventListener('click', nearCity2Search);
            document.getElementById("N-3-Name").removeEventListener('click', nearCity3Search);
            document.getElementById("N-4-Name").removeEventListener('click', nearCity4Search);
            for (let i = 0; i < 5; i++) {
                let displayNone = ["searchBtnDiv2", "units-Fahren", "units-Celsius", "light-Area", "dark-Area"];
                document.getElementById(displayNone[i]).style.display = "none";};
            for (let i = 0; i < 7; i++) {
                let notAllowed = ["N-1-Name", "N-2-Name", "N-3-Name", "N-4-Name", "searchButtonID", "units_Area", "navTheme"];
                document.getElementById(notAllowed[i]).style.cursor = "not-allowed";};};


    // Alert if no input is entered
    ////////////////////////////////////////////////////////////////////////////////////////
    } else { alert("Please enter a city name."); }; });


// Updates time in navbar ( +/-10sec. )
setInterval (()=>{if (new Date().getSeconds() < 10) {displayTime(mainTimezone);};}, 10000);


// Placeholder city and refresh behavior
////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.getItem("sessionClicks") == 0) {
    document.getElementById("userInputCity").value = "Los Angeles";
    document.getElementById("searchBtnDiv2").click();
    sessionStorage.setItem("sessionClicks", parseInt(sessionStorage.getItem("sessionClicks"))-1);
} else if (sessionStorage.getItem("sessionClicks") == 55) {
    document.getElementById("userInputCity").value = sessionStorage.getItem("lastSearched");
    document.getElementById("searchBtnDiv2").click();
    sessionStorage.setItem("sessionClicks", parseInt(sessionStorage.getItem("sessionClicks"))-1);
} else {
    // Works if refresed from IDE
    document.getElementById("userInputCity").value = sessionStorage.getItem("lastSearched");
    document.getElementById("searchBtnDiv2").click();
    document.getElementById("mainBody").style.backgroundImage = "url(/IMG/Back/8-Clear/Day/Clear_day_6.avif)";};


// "Enter" key works if number of searches is ok
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("userInputCity").addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && sessionStorage.getItem("sessionClicks") != 55) {
        console.log(sessionStorage.getItem("sessionClicks"));
        document.getElementById("searchBtnDiv2").click();};});


// near cities names - click to search
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("nearCity1Search").addEventListener('click', nearCity1Search);
function nearCity1Search () {
    document.getElementById("userInputCity").value = document.getElementById("N-1-Name").textContent
    document.getElementById("searchBtnDiv2").click();};
document.getElementById("nearCity2Search").addEventListener('click', nearCity2Search);
function nearCity2Search () {
    document.getElementById("userInputCity").value = document.getElementById("N-2-Name").textContent
    document.getElementById("searchBtnDiv2").click();};
document.getElementById("nearCity3Search").addEventListener('click', nearCity3Search);
function nearCity3Search () {
    document.getElementById("userInputCity").value = document.getElementById("N-3-Name").textContent
    document.getElementById("searchBtnDiv2").click();};
document.getElementById("nearCity4Search").addEventListener('click', nearCity4Search);
function nearCity4Search () {
    document.getElementById("userInputCity").value = document.getElementById("N-4-Name").textContent
    document.getElementById("searchBtnDiv2").click();};


// CloudIA ai chatbot
////////////////////////////////////////////////////////////////////////////////////////
/*document.getElementById('chatStickyID').addEventListener('click', (e) => {
    e.stopPropagation()
    document.getElementById('chatStickyID').style.borderRadius = "10px 10px 0px 10px";
    document.getElementById('chatStickyID').style.width = "350px";
    document.getElementById('chatStickyID').style.height = "550px";
    document.getElementById('chatStickyID').style.marginLeft = "calc(100vw - 370px)";
    document.getElementById('chatStickyID').style.marginTop = "calc(100vh - 580px)";
    document.getElementById('chatTitleID').style.display = "grid";
    document.getElementById('chatScrollAreaID').style.display = "grid";
    document.getElementById('chatTextAreaID').style.display = "grid";});

document.getElementById('closeChatBtnID').addEventListener('click', (e) => {
    e.stopPropagation()
    setTimeout(()=>{
        document.getElementById('chatStickyID').style.width = "150px";
        document.getElementById('chatStickyID').style.height = "120px";
        document.getElementById('chatTitleID').style.display = "none";
        document.getElementById('chatScrollAreaID').style.display = "none";
        document.getElementById('chatTextAreaID').style.display = "none";
        document.getElementById('chatStickyID').style.borderRadius = "50px 50px 0px 50px";
        document.getElementById('chatStickyID').style.marginLeft = "calc(100vw - 170px)";
        document.getElementById('chatStickyID').style.marginTop = "calc(100vh - 150px)";},150);});

document.getElementById('userText').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {document.getElementById("chatButonID").click();};});

document.getElementById('chatButonID').addEventListener('click', () => {
    var userMessage = document.createElement('div');
    var seenMessage = document.createElement('div');
    userMessage.classList.add("userMessage");
    seenMessage.classList.add("seenMessage");
    userMessage.textContent = document.getElementById('userText').value;
    seenMessage.textContent = "seen";
    document.getElementById('userText').value = " ";
    var parent = document.getElementById('chatScrollAreaID');
    parent.appendChild(userMessage);
    userMessage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"});
    setTimeout(()=>{
        parent.appendChild(seenMessage);
        seenMessage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"});},(randint(5)+0.5)*1000);});*/


/*////////////////////////////////////  Functions \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\
\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\     Used   ////////////////////////////////////*/
// Random int
////////////////////////////////////////////////////////////////////////////////////////
function randint(max) {
  return Math.floor(Math.random() * max);};


// Get array of IDs by parent class
////////////////////////////////////////////////////////////////////////////////////////
function fromParentClass(pClass, eTag) {
    let selection = [];
    document.querySelectorAll(`.${pClass} ${eTag}`).forEach(p => {selection.push(p.id);});
    return selection};


// Describing wind direction based on degrees°
////////////////////////////////////////////////////////////////////////////////////////
function windDescription(API_elem, DOC_elem) {
    if (API_elem > 22 && API_elem < 78) {
        document.getElementById(DOC_elem).textContent = "N-E";
    } else if (API_elem > 78 && API_elem < 112) {
        document.getElementById(DOC_elem).textContent = "E";
    } else if (API_elem > 112 && API_elem < 168) {
        document.getElementById(DOC_elem).textContent = "S-E";
    } else if (API_elem > 168 && API_elem < 202) {
        document.getElementById(DOC_elem).textContent = "S";
    } else if (API_elem > 202 && API_elem < 258) {
        document.getElementById(DOC_elem).textContent = "S-W";
    } else if (API_elem > 258 && API_elem < 292) {
        document.getElementById(DOC_elem).textContent = "W";
    } else if (API_elem > 292 && API_elem < 336) {
        document.getElementById(DOC_elem).textContent = "N-W";
    } else if (API_elem > 336 && API_elem < 22) {
        document.getElementById(DOC_elem).textContent = "N";};};


// Describing humidity levels
////////////////////////////////////////////////////////////////////////////////////////
function humidityDescription(API_elem, DOC_elem) {
    if (API_elem > 0 && API_elem < 35) {
        document.getElementById(DOC_elem).textContent = "Low";
    } else if (API_elem > 25 && API_elem < 35) {
        document.getElementById(DOC_elem).textContent = "Fair";
    } else if (API_elem > 35 && API_elem < 60) {
        document.getElementById(DOC_elem).textContent = "Good";
    } else if (API_elem > 60 && API_elem < 70) {
        document.getElementById(DOC_elem).textContent = "Fair";
    } else if (API_elem > 70 && API_elem < 100) {
        document.getElementById(DOC_elem).textContent = "High";};};


// Describing UV-Index levels
////////////////////////////////////////////////////////////////////////////////////////
function UVindexDescription(API_elem, DOC_elem) {
    if (API_elem >= 0 && API_elem < 3) {
        document.getElementById(DOC_elem).textContent = "Low";
    } else if (API_elem > 3 && API_elem < 6) {
        document.getElementById(DOC_elem).textContent = "Good";
    } else if (API_elem > 6 && API_elem < 8) {
        document.getElementById(DOC_elem).textContent = "High";
    } else if (API_elem > 8 && API_elem < 11) {
        document.getElementById(DOC_elem).textContent = "V.High";
    } else if (API_elem > 11 && API_elem < 100) {
        document.getElementById(DOC_elem).textContent = "Ultra";};};


// Cutting and Capitalizing weather descriptions
////////////////////////////////////////////////////////////////////////////////////////
function cut_Cap(element) {
    if ((element.split(" ")).length == 1) {
        return element[0].toUpperCase() + element.slice(1);
    } else if (element.length <= 10) {
        return (`
            ${((element.split(" "))[0])[0].toUpperCase() + ((element.split(" "))[0]).slice(1)} 
            ${((element.split(" "))[1])[0].toUpperCase() + ((element.split(" "))[1]).slice(1)}`);
    } else {
        return (`
            ${((element.split(" "))[0])[0].toUpperCase() + ((element.split(" "))[0]).slice(1)}
            <br>
            ${((element.split(" "))[1])[0].toUpperCase() + ((element.split(" "))[1]).slice(1)}`);};};


// Adding AM or PM to hour
////////////////////////////////////////////////////////////////////////////////////////
function AM_or_PM (data, index, timezone) {
    if ( (new Date((data[index]-7200 + timezone) * 1000 ).getHours() ) > 12 ) {
        return (`${(new Date((data[index]-7200 + timezone) * 1000 ).getHours())%12}:00 <small>PM</small>`);
    } else {
        return (`${new Date((data[index]-7200 + timezone) * 1000 ).getHours()}:00 <small>AM</small>`);};};


// Adding AM or PM to hour
////////////////////////////////////////////////////////////////////////////////////////
function mil_Time (main_timeZone) {
    if (new Date().getHours() < 12) {
        return (new Date().getHours()+24) + (new Date().getTimezoneOffset()/60) + (main_timeZone/3600);
    } else {
        return ((new Date().getHours()) + (new Date().getTimezoneOffset()/60) + (main_timeZone/3600))%24;};};


// Display time in navbar
////////////////////////////////////////////////////////////////////////////////////////
function displayTime (main_timeZone) {
    function minutesDisplay(value) {
        if (value.toString().length > 1) { return value;}
        else {return (`0${value}`)};};
    if (mil_Time(main_timeZone) > 12) {
        document.getElementById('navClock').innerHTML = (`${mil_Time(main_timeZone)%12}:${minutesDisplay(new Date().getMinutes())}<small class="AmPm">PM</small>`);
    } else if (mil_Time(main_timeZone) < 12) {
        document.getElementById('navClock').innerHTML = (`${mil_Time(main_timeZone)%12}:${minutesDisplay(new Date().getMinutes())}<small class="AmPm">AM</small>`);
    } else if (mil_Time(main_timeZone) == 12) {
        document.getElementById('navClock').innerHTML = (`${mil_Time(main_timeZone)}:${minutesDisplay(new Date().getMinutes())}<small class="AmPm">AM</small>`);};};


// Fills daily temp bars based on temp
////////////////////////////////////////////////////////////////////////////////////////
function tempBars (Selector, D_S_MinTemp, D_S_MaxTemp, arr) {
    let arrIDs = [];
    for (let i = 0; i < 10; i++) {
        arrIDs.push(document.getElementsByClassName(`${Selector}`)[i].id);};
    for (let m = 5; m > 0; m--) {
        if (Math.round(D_S_MinTemp) < arr[5-m]) {
            document.getElementById(`${arrIDs[5-m]}`).style.backgroundColor = "orange";};};
    for (let n = 0; n < 5; n++) {
        if (Math.round(D_S_MaxTemp) > arr[5+n]) {
            document.getElementById(`${arrIDs[5+n]}`).style.backgroundColor = "orange";};};};


// Clear daily temp bars
////////////////////////////////////////////////////////////////////////////////////////
function clearTempBars (Selector) {
    let arrIDs = [];
    for (let i = 0; i < 10; i++) {
        arrIDs.push(document.getElementsByClassName(`${Selector}`)[i].id);};
    for (let i = 0; i < 10; i++) {
        document.getElementById(`${arrIDs[i]}`).style.backgroundColor = "black";};};


/*////////////////////////////////////   Weather  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\
\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  Database  ////////////////////////////////////*/
// 2-Thunderstorm SVG Icons
////////////////////////////////////////////////////////////////////////////////////////
const thunder_ApiDesc_to_WebDesc = {
                  "light thunderstorm" : "light thunderstorm",
                 "ragged thunderstorm" : "ragged thunderstorm",
                        "thunderstorm" : "thunderstorm",
     "thunderstorm with light drizzle" : "thunderstorm drizzle",
        "thunderstorm with light rain" : "thunderstorm drizzle",
           "thunderstorm with drizzle" : "thunderstorm rain",
              "thunderstorm with rain" : "thunderstorm rain",
                  "heavy thunderstorm" : "heavy thunderstorm",
     "thunderstorm with heavy drizzle" : "heavy thunderstorm",
        "thunderstorm with heavy rain" : "heavy thunderstorm"};

const thunder_WebDesc_to_WebIcon = {
                  "light thunderstorm" : "/IMG/2-Thunderstorm/thunderstorm.svg",
                 "ragged thunderstorm" : "/IMG/2-Thunderstorm/thunderstorm.svg",
                        "thunderstorm" : "/IMG/2-Thunderstorm/thunderstorm.svg",
                "thunderstorm drizzle" : "/IMG/2-Thunderstorm/thunderstorm.svg",
                   "thunderstorm rain" : "/IMG/2-Thunderstorm/thunderstorm.svg",
                  "heavy thunderstorm" : "/IMG/2-Thunderstorm/thunderstorm.svg"};


// 3-Drizzle SVG Icons
////////////////////////////////////////////////////////////////////////////////////////
const drizzle_ApiDesc_to_WebDesc = {
             "light intensity drizzle" : "light drizzle",
                             "drizzle" : "drizzle",
                      "shower drizzle" : "shower drizzle",
        "light intensity drizzle rain" : "drizzle rain",
                        "drizzle rain" : "drizzle rain",
             "shower rain and drizzle" : "drizzle rain",
             "heavy intensity drizzle" : "heavy drizzle",
        "heavy intensity drizzle rain" : "heavy rain",
       "heavy shower rain and drizzle" : "heavy rain"};

const drizzle_WebDesc_to_WebIcon = {
                       "light drizzle" : "/IMG/3-Drizzle/light-drizzle.svg",
                             "drizzle" : "/IMG/3-Drizzle/drizzle.svg",
                      "shower drizzle" : "/IMG/3-Drizzle/shower-drizzle.svg",
                        "drizzle rain" : "/IMG/3-Drizzle/drizzle-rain.svg",
                       "heavy drizzle" : "/IMG/3-Drizzle/heavy-drizzle.svg",
                          "heavy rain" : "/IMG/3-Drizzle/heavy-rain.svg"};


// 5-Rain SVG Icons
////////////////////////////////////////////////////////////////////////////////////////
const rain_ApiDesc_to_WebDesc = {
         "light intensity shower rain" : "light showers",
                          "light rain" : "light rain",
                  "ragged shower rain" : "ragged showers",
                         "shower rain" : "shower rain",
                       "moderate rain" : "moderate rain",
         "heavy intensity shower rain" : "heavy shower",
                "heavy intensity rain" : "heavy rain",
                     "very heavy rain" : "extreme rain",
                        "extreme rain" : "extreme rain",
                       "freezing rain" : "freezing rain"};

const rain_WebDesc_to_WebIcon = {
                       "light showers" : "/IMG/5-Rain/light-showers.svg",
                          "light rain" : "/IMG/5-Rain/light-rain.svg",
                      "ragged showers" : "/IMG/5-Rain/shower-rain_ragged-showers.svg",
                         "shower rain" : "/IMG/5-Rain/shower-rain_ragged-showers.svg",
                       "moderate rain" : "/IMG/5-Rain/moderate-rain.svg",
                        "heavy shower" : "/IMG/5-Rain/heavy-shower.svg",
                          "heavy rain" : "/IMG/5-Rain/heavy-rain_extreme-rain.svg",
                        "extreme rain" : "/IMG/5-Rain/heavy-rain_extreme-rain.svg",
                       "freezing rain" : "/IMG/5-Rain/freezing-rain.svg"};


// 6-Snow SVG Icons
///////////////////////////////////////////////////////////////////////////////////////
const snow_ApiDesc_to_WebDesc = {
                          "light snow" : "light snow",
                 "light rain and snow" : "light snow",
                  "light shower sleet" : "light sleet",
                               "sleet" : "sleet",
                   "light shower snow" : "shower snow",
                         "shower snow" : "shower snow",
                        "shower sleet" : "shower sleet",
                       "rain and snow" : "rainy snow",
                                "snow" : "snow",
                          "heavy snow" : "heavy snow",
                   "heavy shower snow" : "heavy snow"};

const snow_WebDesc_to_WebIcon = {
                          "light snow" : "/IMG/6-Snow/light-snow.svg",
                         "light sleet" : "/IMG/6-Snow/light-sleet.svg",
                               "sleet" : "/IMG/6-Snow/light-sleet.svg",
                         "shower snow" : "/IMG/6-Snow/shower-snow.svg",
                        "shower sleet" : "/IMG/6-Snow/rainy-snow_snow_shower-sleet.svg",
                          "rainy snow" : "/IMG/6-Snow/rainy-snow_snow_shower-sleet.svg",
                                "snow" : "/IMG/6-Snow/rainy-snow_snow_shower-sleet.svg",
                          "heavy snow" : "/IMG/6-Snow/heavy-snow.svg"};


// 7-Atmosphere SVG Icons
///////////////////////////////////////////////////////////////////////////////////////
const atmosphere_ApiDesc_to_WebDesc = {
                                "mist" : "mist",
                               "smoke" : "smoke",
                                "haze" : "haze",
                    "sand/dust whirls" : "dust whirls",
                                 "fog" : "fog",
                                "sand" : "sand",
                                "dust" : "dust",
                        "volcanic ash" : "volcanic ash",
                             "squalls" : "squalls",
                             "tornado" : "tornado"};

const atmosphere_WebDesc_to_WebIcon = {
                                "mist" : "/IMG/7-Atmosphere/clouds.svg",
                               "smoke" : "/IMG/7-Atmosphere/clouds.svg",
                                "haze" : "/IMG/7-Atmosphere/clouds.svg",
                         "dust whirls" : "/IMG/7-Atmosphere/clouds.svg",
                                 "fog" : "/IMG/7-Atmosphere/clouds.svg",
                                "sand" : "/IMG/7-Atmosphere/clouds.svg",
                                "dust" : "/IMG/7-Atmosphere/clouds.svg",
                        "volcanic ash" : "/IMG/7-Atmosphere/clouds.svg",
                             "squalls" : "/IMG/7-Atmosphere/clouds.svg",
                             "tornado" : "/IMG/7-Atmosphere/clouds.svg"};


// 8-Clear SVG Icons
///////////////////////////////////////////////////////////////////////////////////////
const clear_ApiDesc_to_WebDesc = {
                           "clear sky" : "clear sky"};

const clear_WebDesc_to_WebIcon_day = {
                           "clear sky" : "/IMG/8-Clear/day.svg"};

const clear_WebDesc_to_WebIcon_night = {
                           "clear sky" : "/IMG/8-Clear/night.svg"};


// 9-Clouds SVG Icons
///////////////////////////////////////////////////////////////////////////////////////
const clouds_ApiDesc_to_WebDesc = {
                          "few clouds" : "few clouds",
                    "scattered clouds" : "scattered clouds",
                       "broken clouds" : "broken clouds",
                     "overcast clouds" : "overcast clouds"};
            
const clouds_WebDesc_to_WebIcon_day = {
                          "few clouds" : "/IMG/9-Clouds/sun-light-clouds.svg",
                    "scattered clouds" : "/IMG/9-Clouds/sun-medium-clouds.svg",
                       "broken clouds" : "/IMG/9-Clouds/sun-strong-clouds.svg",
                     "overcast clouds" : "/IMG/9-Clouds/clouds.svg"};

const clouds_WebDesc_to_WebIcon_night = {
                          "few clouds" : "/IMG/9-Clouds/moon-light-clouds.svg",
                    "scattered clouds" : "/IMG/9-Clouds/moon-medium-clouds.svg",
                       "broken clouds" : "/IMG/9-Clouds/moon-strong-clouds.svg",
                     "overcast clouds" : "/IMG/9-Clouds/clouds.svg"};


/*//////////////////////////////////// Background \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\
\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  Database  ////////////////////////////////////*/

// Thunder background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const ThunderPhotos = {
    "Day" : [
        ["/IMG/Back/2-Thunderstorm/Day/Thunder_day_1.avif", "Raychel Sanner", "https://unsplash.com/photos/gray-asphalt-road-under-gray-clouds-A0VVcAvPd3A"],
        ["/IMG/Back/2-Thunderstorm/Day/Thunder_day_2.avif", "Péter Kövesi", "https://unsplash.com/photos/a-large-field-of-grass-under-a-cloudy-sky-Pxp8S3gcWZI"],
        ["/IMG/Back/2-Thunderstorm/Day/Thunder_day_3.avif", "Dave Hoefler", "https://unsplash.com/photos/a-field-with-a-dirt-path-leading-to-a-storm-cloud-o-W2CCE2dME"],
        ["/IMG/Back/2-Thunderstorm/Day/Thunder_day_4.avif", "Will Cook", "https://unsplash.com/photos/a-large-body-of-water-under-a-cloudy-sky-uwNmeFLqSMM"]],
    "Night" : [
        ["/IMG/Back/2-Thunderstorm/Night/Thunder_night_1.avif", "Jakub Pabis", "https://unsplash.com/photos/a-large-cloud-with-a-lightning-bolt-in-the-sky-sQfb6Dm1geU"],
        ["/IMG/Back/2-Thunderstorm/Night/Thunder_night_2.avif", "NOAA", "https://unsplash.com/photos/lighting-in-sky-during-nighttime-0ETSZYPjvDo"],
        ["/IMG/Back/2-Thunderstorm/Night/Thunder_night_3.avif", "Melanie Magdalena", "https://unsplash.com/photos/thunderstorms-on-cloudy-sky-C1wAQm_lQKM"],
        ["/IMG/Back/2-Thunderstorm/Night/Thunder_night_4.avif", "", ""]]};


// Drizzle background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const DrizzlePhotos = {
    "Day" : [
        ["/IMG/Back/3-Drizzle/Day/Drizzle_day_1.avif", "Ikbal Kamaluddin", "https://unsplash.com/photos/a-close-up-of-grass-with-water-drops-on-it-2TA2uyPMKHQ"],
        ["/IMG/Back/3-Drizzle/Day/Drizzle_day_2.avif", "Rapha Wilde", "https://unsplash.com/photos/water-droplets-on-a-leaf-2nuQutPmapk"],
        ["/IMG/Back/3-Drizzle/Day/Drizzle_day_3.avif", "Ingo Doerrie", "https://unsplash.com/photos/water-drops-on-green-grasses-gIKXWHpQxgU"],
        ["/IMG/Back/3-Drizzle/Day/Drizzle_day_4.avif", "Roman Synkevych", "https://unsplash.com/photos/low-angle-photography-of-green-grass-qPvBmSvmohs"]],
    "Night" : [
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_1.avif", "Chelariu Adrian", "https://unsplash.com/photos/a-drop-of-water-on-a-blade-of-grass-Xm6KQjxOCu8"],
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_2.avif", "Marvin Zettl", "https://unsplash.com/photos/a-green-plant-with-water-droplets-on-it-9Dm00kaeo6Y"],
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_3.avif", "Stefan Weiß", "https://unsplash.com/photos/green-trees-with-white-light-4R7Lj4nP9Is"],
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_4.avif", "Joel Lee", "https://unsplash.com/photos/rain-drops-on-the-window-of-a-car-at-night-7-AS7MMcSkg"],
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_5.avif", "", ""],
        ["/IMG/Back/3-Drizzle/Night/Drizzle_night_6.avif", "Yu Xiao", "https://unsplash.com/photos/a-close-up-of-a-green-plant-with-water-droplets-on-it-lefMcIsNuO0"]]};


// Rain background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const RainPhotos = {
    "Day" : [
        ["/IMG/Back/5-Rain/Day/Rain_day_2.avif", "Foad Roshan", "https://unsplash.com/photos/water-droplets-on-glass-panel-jrp-tFVFn0s"],
        ["/IMG/Back/5-Rain/Day/Rain_day_3.avif", "Noah Silliman", "https://unsplash.com/photos/water-drops-on-glass-i2J9jnvaAbU"],
        ["/IMG/Back/5-Rain/Day/Rain_day_4.avif", "Mihály Köles", "https://unsplash.com/photos/green-grass-field-during-daytime-Pr74utIXahM"],
        ["/IMG/Back/5-Rain/Day/Rain_day_5.avif", "J F", "https://unsplash.com/photos/a-view-of-a-mountain-range-from-a-distance-sb8jpOmJX1s"],
        ["/IMG/Back/5-Rain/Day/Rain_day_6.avif", "Kristaps Grundsteins", "https://unsplash.com/photos/a-view-of-a-road-through-a-rain-covered-window-fAY23t1iA40"],
        ["/IMG/Back/5-Rain/Day/Rain_day_7.avif", "Alex Sukhanov", "https://unsplash.com/photos/green-grass-field-on-mountain-under-blue-sky-during-daytime-CqJUTrkLkr4"],
        ["/IMG/Back/5-Rain/Day/Rain_day_8.avif", "Shutter Verse", "https://unsplash.com/photos/a-rain-soaked-window-with-trees-in-the-background-AuTZAjMj6Lg"],
        ["/IMG/Back/5-Rain/Day/Rain_day_9.avif", "Behnam Mohsenzadeh", "https://unsplash.com/photos/a-green-hilly-landscape-Yj4BMY6wxJU"],
        ["/IMG/Back/5-Rain/Day/Rain_day_10.avif", "Nikolay Werner", "https://unsplash.com/photos/a-grassy-hill-with-a-road-jzAW8nffnCI"]],
    "Night" : [
        ["/IMG/Back/5-Rain/Night/Rain_night_1.avif", "yapo zhou", "https://unsplash.com/photos/a-window-with-rain-falling-down-on-it-m24i99jzmDs"],
        ["/IMG/Back/5-Rain/Night/Rain_night_3.avif", "Ritvik Singh", "https://unsplash.com/photos/green-mountain-under-white-clouds-bzdWdRcVnao"],
        ["/IMG/Back/5-Rain/Night/Rain_night_4.avif", "Miroslav Škopek", "https://unsplash.com/photos/a-dark-blue-sky-with-clouds-and-trees-qWbgKrLOEkg"]]};


// Snow background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const SnowPhotos = {
    "Day" : [
        ["/IMG/Back/6-Snow/Day/Snow_day_1.avif", "Alberto Restifo", "https://unsplash.com/photos/ground-covered-with-snow-cFplR9ZGnAk"],
        ["/IMG/Back/6-Snow/Day/Snow_day_2.avif", "Chris Biron", "https://unsplash.com/photos/snowy-mountain-JVtcrWcbj1c"],
        ["/IMG/Back/6-Snow/Day/Snow_day_3.avif", "Fabrizio Conti", "https://unsplash.com/photos/photo-of-clouds-Mbm0WnJ5emc"],
        ["/IMG/Back/6-Snow/Day/Snow_day_4.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-snow-covered-forest-filled-with-lots-of-trees-306LC_hn9qc"],
        ["/IMG/Back/6-Snow/Day/Snow_day_5.avif", "Lucian", "https://unsplash.com/photos/snow-covered-mountain-during-daytime-v_mTgSs6UiY"],
        ["/IMG/Back/6-Snow/Day/Snow_day_6.avif", "Stijn Verplancke", "https://unsplash.com/photos/trees-covered-with-snow-tsStT0oQhY8"]],
    "Night" : [
        ["/IMG/Back/6-Snow/Night/Snow_night_1.avif", "", ""],
        ["/IMG/Back/6-Snow/Night/Snow_night_2.avif", "Geetangey", "https://unsplash.com/photos/snow-capped-mountains-glow-under-the-suns-first-light-3YfjMj93Ljs"],
        ["/IMG/Back/6-Snow/Night/Snow_night_3.avif", "Luke Paris", "https://unsplash.com/photos/black-and-white-bed-sheet-7FMNsEWrlos"]]};


// Atmosphere background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const AtmospherePhotos = {
    "Day" : [
        ["/IMG/Back/7-Atmosphere/Day/Atmos_day_1.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-mountain-covered-in-fog-with-trees-in-the-background-JiplrgrRtgI"],
        ["/IMG/Back/7-Atmosphere/Day/Atmos_day_2.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-view-of-a-mountain-range-from-a-distance-uBVe_XzJscM"],
        ["/IMG/Back/7-Atmosphere/Day/Atmos_day_3.avif", "Paul Pastourmatzis", "https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg"],
        ["/IMG/Back/7-Atmosphere/Day/Atmos_day_4.avif", "Tai Jyun Chang", "https://unsplash.com/photos/mountains-covered-with-fogs-580TcQCVJ_4"],
        ["/IMG/Back/7-Atmosphere/Day/Atmos_day_5.avif", "Fabrizio Conti", "https://unsplash.com/photos/aerial-photography-of-mountains-k6GpdsPJSZw"]],
    "Night" : [
        ["/IMG/Back/7-Atmosphere/Night/Atmos_night_1.avif", "Pascal Debrunner", "https://unsplash.com/photos/mountain-covered-with-fog-at-daytime-bOr1ym-36tw"],
        ["/IMG/Back/7-Atmosphere/Night/Atmos_night_2.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-flock-of-birds-flying-over-a-foggy-forest-TnL2a9hoDvI"],
        ["/IMG/Back/7-Atmosphere/Night/Atmos_night_3.avif", "Mohammad Alizade", "https://unsplash.com/photos/view-of-mountains-during-golden-hour-CDu0x1Aiils"],
        ["/IMG/Back/7-Atmosphere/Night/Atmos_night_4.avif", "Ash Edmonds", "https://unsplash.com/photos/landscape-photography-of-mountains-v0Qujn-zHJk"]]};


// Clear background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const ClearPhotos = {
    "Day" : [
        ["/IMG/Back/8-Clear/Day/Clear_day_0.avif", "Jānis Beitiņš", "https://unsplash.com/photos/green-grass-field-under-blue-sky-during-daytime-FTDfoEWqHqs"],
        ["/IMG/Back/8-Clear/Day/Clear_day_1.avif", "AV Media", "https://unsplash.com/photos/a-large-group-of-sand-dunes-under-a-blue-sky-yBuqz-6swl4"],
        ["/IMG/Back/8-Clear/Day/Clear_day_2.avif", "Cole Ciarlello", "https://unsplash.com/photos/a-large-field-of-grass-with-a-mountain-in-the-background-uPcGH87EW6k"],
        ["/IMG/Back/8-Clear/Day/Clear_day_3.avif", "Henrique Malaguti", "https://unsplash.com/photos/green-grass-field-under-blue-sky-during-daytime-4hD_35bxHSU"],
        ["/IMG/Back/8-Clear/Day/Clear_day_4.avif", "FloatFlower Huang", "https://unsplash.com/photos/a-green-mountain-with-a-blue-sky-in-the-background-SU9IO8KoHlA"],
        ["/IMG/Back/8-Clear/Day/Clear_day_5.avif", "Jenelle", "https://unsplash.com/photos/hay-stocks-on-grassland-_6YXOv-l7AI"],
        ["/IMG/Back/8-Clear/Day/Clear_day_6.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-boat-is-on-the-water-in-front-of-a-mountain-Rjh78If2DNQ"],
        ["/IMG/Back/8-Clear/Day/Clear_day_7.avif", "Umut YILMAN", "https://unsplash.com/photos/blue-body-of-water-a5lowPMcf70"],
        ["/IMG/Back/8-Clear/Day/Clear_day_8.avif", "Charles MingZ", "https://unsplash.com/photos/a-grassy-field-with-mountains-in-the-distance-wxAYDCi2G-4"],
        ["/IMG/Back/8-Clear/Day/Clear_day_9.avif", "Spencer DeMera", "https://unsplash.com/photos/rolling-green-hills-under-a-clear-blue-sky-dYhqxyxQIN4"],
        ["/IMG/Back/8-Clear/Day/Clear_day_10.avif", "David Thielen", "https://unsplash.com/photos/brown-wooden-fence-on-green-grass-field-under-blue-sky-and-white-clouds-during-daytime-z6oauD8K52Q"],
        ["/IMG/Back/8-Clear/Day/Clear_day_9.avif", "Anna Mircea", "https://unsplash.com/photos/a-wide-open-field-with-a-dirt-road-running-through-it-jhP9c_mpkRI"]],
    "Night" : [
        ["/IMG/Back/8-Clear/Night/Clear_night_1.avif", "Ashwini Chaudhary", "https://unsplash.com/photos/the-night-sky-with-stars-above-a-mountain-range-MDJTh4-gJH4"],
        ["/IMG/Back/8-Clear/Night/Clear_night_2.avif", "Fabrizio Conti", "https://unsplash.com/photos/blue-sky-c3wsMnxQZDw"],
        ["/IMG/Back/8-Clear/Night/Clear_night_3.avif", "Nidheesh Kavalan", "https://unsplash.com/photos/silhouette-of-mountains-under-blue-sky-Ha501MB_XE8"]]};


// Clouds background photos - location / author / link
///////////////////////////////////////////////////////////////////////////////////////
const CloudsPhotos = {
    "Day" : [
        ["/IMG/Back/9-Clouds/Day/Clouds_day_1.avif", "Artem Anokhin", "https://unsplash.com/photos/photo-of-white-clouds-V4qjYCac7y8"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_2.avif", "Carl Kho", "https://unsplash.com/photos/a-plane-flying-in-the-sky-with-a-lot-of-clouds-wFnfMj02BRs"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_3.avif", "Fabrizio Conti", "https://unsplash.com/photos/white-clouds-zbzD6fhTugQ"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_4.avif", "Marc Wieland", "https://unsplash.com/photos/cloud-photo-zrj-TPjcRLA"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_5.avif", "Pascal Debrunner", "https://unsplash.com/photos/a-view-of-a-mountain-covered-in-clouds-7_Fn67QFPOg"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_6.avif", "Sourabh Adhya", "https://unsplash.com/photos/a-scenic-view-of-the-ocean-from-the-top-of-a-mountain-NA2vas9R8To"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_7.avif", "Adriel Kloppenburg", "https://unsplash.com/photos/green-grass-field-and-mountain-at-distance-en-5xoYnjTE"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_8.avif", "Erik Mclean", "https://unsplash.com/photos/white-cloudy-sky-during-daytime-CKJYAcSc3WE"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_9.avif", "Maccy", "https://unsplash.com/photos/a-view-of-the-sky-and-clouds-from-an-airplane-_F4MzL_cI8E"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_10.avif", "Rodion Kutsaiev", "https://unsplash.com/photos/grass-field-at-daytime-PEm_sLmJT-w"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_11.avif", "Oleg Mitiukhin", "https://unsplash.com/photos/white-clouds-and-blue-sky-during-daytime-2gJa-AUtAOc"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_12.avif", "Adrian Jakob", "https://unsplash.com/photos/yellow-petaled-flowers-on-green-hilltop-during-daytime-zqB_CKAjUNc"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_13.avif", "Vas Soshnikov", "https://unsplash.com/photos/green-grass-field-under-white-clouds-during-daytime-64TxHHoBwSo"],
        ["/IMG/Back/9-Clouds/Day/Clouds_day_14.avif", "Michelle Spollen", "https://unsplash.com/photos/island-surround-by-green-sea-under-cloudy-sky-dC2FsjoXsPQ"]],
    "Night" : [
        ["/IMG/Back/9-Clouds/night/Clouds_night_1.avif", "Andriyko Podilnyk", "https://unsplash.com/photos/silhouette-photography-of-mountain-E6ne6IUNxZw"],
        ["/IMG/Back/9-Clouds/night/Clouds_night_2.avif", "CHUTTERSNAP", "https://unsplash.com/photos/gray-clouds-rk2s0sm8xF4"]]};
