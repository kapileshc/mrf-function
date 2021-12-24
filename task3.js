//c.Get all the countries info using forEach function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    let ans=t.forEach(element => {
      console.log("countryname:"+element.name)
      console.log("countrycapital:"+element.capital)
      console.log("countryflag:"+element.flag)
    });
    
  } else {

    console.log("Data is not available");

  }
};

xhr.send();