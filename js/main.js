let searchInput = document.getElementById("searchInput")
let submit = document.getElementById("submit")

let firstObject = {}
let secondObject = {}
let thirdObject = {}


async function getData(city){
    let data = await fetch (`http://api.weatherapi.com/v1/forecast.json?key=df3861b243054744994132759232308&q=${city}&days=3&aqi=no&alerts=no`)
    let res = await data.json()
    firstObject = res.location
    secondObject = res.current
    thirdObject = res.forecast.forecastday
    // console.log(firstObject);
    // console.log(secondObject);
    // console.log(thirdObject);
    display()
}
getData("london")


let city = ""
searchInput.addEventListener("keyup", function(e){
 city = e.target.value.toLowerCase();
 getData(city)
})

function display(){
    let temp = ""
 for (let x in firstObject){
  for (let y in secondObject){
    for (let z in thirdObject){
        temp = `
        <div class="row g-0">
      <div class="todayForecast col-md-4 ">
        <div class="">
          <div class="titleToday text-center p-2">
           <p class="text-muted ">${thirdObject[0].date}</p>
          </div>
          <div class="todayContent p-4">
            <p class="text-light p-2 fs-3" id="cityName">${firstObject.name}</p>
            <p class="text-white fw-bolder p-4" id="todaysDegree">${secondObject.temp_c}°C</p>

   <img src="http://${secondObject.condition.icon}" class="p-3 " alt="">
        <h6 class="text-info p-2">${secondObject.condition.text}</h6>
   <span class="text-light px-1"><img src="images/icon-umberella.png" alt=""> ${thirdObject[z].day.daily_chance_of_rain}%</span>
      <span class="text-light px-1"><img src="images/icon-wind.png" alt=""> ${secondObject.wind_kph} km/h</span>
      <span class="text-light px-1"><img src="images/icon-compass.png" alt=""> ${secondObject.wind_dir}</span>
          </div>
        </div>

      </div>
      <div class="tomorrowsForecast col-md-4 ">
        <div class="">
          <div class="titleTomorrow text-center p-2">
            <p class="text-muted">${thirdObject[1].date}</p>
            
            </div>
          <div class="tomorrowContent p-4 text-center">
            <p class="text-white fw-bolder p-4 fs-2" id="tomorrowsDegree">Max: ${thirdObject[1].day.maxtemp_c}°C</p>
            <p class="text-white fw-bolder p-4 fs-2" id="tomorrowsDegree">Min: ${thirdObject[1].day.mintemp_c}°C</p>
      <img src="http://${thirdObject[1].day.condition.icon}" class="p-3 " alt="">
      <h6 class="text-info p-2">${thirdObject[1].day.condition.text}</h6>
      
          </div>
        </div>

      </div>
      <div class="afterTomorrowsForecast col-md-4">
        <div class="">
          <div class="titleAfterTomorrow p-2 text-center">
            <p class="text-muted">${thirdObject[2].date}</p>
           
          </div>
        <div class="afterTomorrowContent p-4 text-center">
            
        <div><p class="text-white fw-bolder p-4 fs-2" id="afterTomorrowsDegree">Max: ${thirdObject[2].day.maxtemp_c}°C</p></div>
        <div><p class="text-white fw-bolder p-4 fs-2" id="afterTomorrowsDegree">Min: ${thirdObject[2].day.mintemp_c}°C</p></div>
            

      <img src="http://${thirdObject[2].day.condition.icon}" class="p-3 " alt="">
      <h6 class="text-info p-2">${thirdObject[2].day.condition.text}</h6>
      
          </div>
        </div>

      </div>
    </div>        
        `
    }
  }

 }
 document.getElementById("degreeSection").innerHTML = temp

}






