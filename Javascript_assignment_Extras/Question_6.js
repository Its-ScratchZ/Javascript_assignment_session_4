// Scenario: I wanted to store data related to a specific object. For that create an object which would store some information related to the laptop you use.

let MySpecs = {
    Name         : "Lenovo Legion 5 Pro 2021",
    GPU          : "RTX 3070 8GB Laptop GPU",
    RAM          : "32 GB",
    SSD          : "2 TB",
    Refresh_Rate : "165 HZ",
    Display      : "2k Display, 500 nits brightness",
    Resolution   : "16:10",
    Price : function(){
        console.log("Visit this link to know more :","https://itti.com.np/lenovo-legion-5-pro-price-nepal")
    }
}

console.log(MySpecs)
MySpecs.Price()

