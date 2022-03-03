const API_KEy = 'c3f50ba5df26ac35b562878f9b11ee09';
// console.log(API_KEy);
const showWeather=()=>{
    const inputField=document.getElementById('input-field').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${API_KEy}&units=metric`;
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayWeather(data))

}

const showDetails=(id,text)=>{
    const cityName=document.getElementById(id);
    cityName.innerText=text;
};
const showIcon=(ID,value)=>{
    const icon=document.getElementById(ID);
    icon.setAttribute("src",`http://openweathermap.org/img/wn/${value}@2x.png`);
    icon.innerText=value;
}

const displayWeather=(temperature)=>{
    showDetails("city-name",temperature.name);
    showDetails("celcius",temperature.main.temp);
    showDetails("weather",temperature.weather[0].main);
    showIcon('icon-show',temperature.weather[0].icon);
   
   }