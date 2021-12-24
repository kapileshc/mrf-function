
// d.Print the countires that uses US dollar as currency?
let xhr = new XMLHttpRequest()

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

xhr.onload = function () {
    
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response)
        let ans = t.filter((u) => {
            return u.currencies[0].code==="USD";
        });
        console.log(ans)
        
    }
}
xhr.send()