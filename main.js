
const form = document.getElementById("myForm");

form.addEventListener("submit",(e)=>{

    var country = document.getElementById("country").value
    var url = "https://api.covid19api.com/live/country/" + country;
    covidData(url)
    e.preventDefault()
})

 async function covidData(url){
   let response = await fetch(url);
  
   let data = await response.json()
   console.log(data)

   let length = data.length;
   let index = length -1;

   let confirmed = document.getElementById("confirmed");
   let recovered = document.getElementById("recovered");
   let deaths = document.getElementById("deaths");

   confirmed.innerHTML = ("Total Confirmed Cases : "  + data[index].Confirmed)
   recovered.innerHTML = ("Total Recovered Cases : "  + data[index].Recovered)
   deaths.innerHTML = ("Total Deaths :" + data[index].Deaths)

}
 
