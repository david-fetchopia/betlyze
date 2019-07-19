//var express = require("express");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
//var app = express();

function parseChampionshipTeam(input) {
    var result = input.split(" ");
    result.splice(0,1);
    result.splice(10,1);
    result[9] += " State";
    result[12] += " Clippers"
    result.splice(13,1);
    result[13] += " Lakers";
    result.splice(14,1);
    result[18] += " Orleans";
    result.splice(19,1);
    result[19] += " York";
    result.splice(20, 1);
    result[20] += " City";
    result.splice(21,1);
    result[26] += " Antonio";
    result.splice(27,1);
    result.splice(30,);
    return result;
}

function parseChampionshipOdds(input) {
    var result = input.split("+");
    result.splice(0,1);
    result.splice(300,);
    return result;
}

axios.get("https://api.sportsdata.io/v3/nba/stats/json/Players/NY?key=86600b23e0354824817ada59ce29db5b").then(function(response) {
    console.log(response.data);
});

// axios.get("https://www.oddsshark.com/nba/odds#futures").then(function (response) {
//     var casinoColumnHeaders = ["OPENING", "bodog", "SPORTS INTERACTION", "BETONLINE.ag", "intertops", "betway", "PINNACLE", "5Dimes", "10bet", "sportbet"];
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);
//     var result = {}
    
//     result.team = parseChampionshipTeam($("div.op-team").text());
//     result.odd = parseChampionshipOdds($("div.op-future-item").text());
    
//     console.log(result.odd[0]);
//     console.log("Scrape Complete");
// });
