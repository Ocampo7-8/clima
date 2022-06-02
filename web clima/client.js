function consultaclima(){
  let city= document.getElementById("city").value
  const options = {
    method: "GET"
  };
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa35be9ac1ec313219da98b20fd26fa6`, options)
    .then(response => response.json())
    .then(data => {
      let temp=document.getElementById("temp").innerHTML=(((data.main.temp)-273.15).toFixed(2)+("°"))
      let sky=document.getElementById("sky").innerHTML=(data.weather[0].main)
      let icon= (data.weather[0].icon)
      let wind=document.getElementById("wind").innerHTML=(data.wind.speed+(" m/s"))
    document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png`)
 
    }).catch((err)=>{
      console.log("error",err)
    })
}