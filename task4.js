//  c.Print the total population of countries using reduce function?
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    let ans=t.filter((d)=>{
      return d.population;
    }).map((d)=> {
     return d.population;
    }).reduce((sum,d)=>{
      return sum+d;
    })
    console.log(`TotalPopulation:${ans}`);
  } else {

    console.log("Data is not available");

  }
};

xhr.send();