//b. Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    let ans=t.filter(data =>data.population <=200000).map(data =>data.name)
    console.log(ans);
    
  } else {

    console.log("Data is not available");

  }
};

xhr.send();