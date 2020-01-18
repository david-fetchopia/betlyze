import axios from "axios";

const oddsKey = "00470abdb04fa0006d64a18d142e6d80";
const sport_key = 'upcoming'; // display next 8 games
const region = 'us' // uk,eu,au
const market = 'h2h' // h2h,spreads,totals
// ?apiKey=' + oddsKey + '&sport=basketball_nba&region=us'
export default {

    getData: function() {
        return axios.get('https://api.the-odds-api.com/v3/odds/', {
            params: {
                api_key: oddsKey,
                sport: 'basketball_nba',
                region: region,
                mkt: market,
            }
        });
    },
    getSpreadData: function() {
        return axios.get('https://api.the-odds-api.com/v3/odds/', {
            params: {
                api_key: oddsKey,
                sport: 'basketball_nba',
                region: region,
                mkt: 'spreads',
            }
        });
    },
    getTotalsData: function() {
        return axios.get('https://api.the-odds-api.com/v3/odds/', {
            params: {
                api_key: oddsKey,
                sport: 'basketball_nba',
                region: region,
                mkt: 'totals',
            }
        });
    },
    convertTime: (unix_timestamp) => {
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var day = date.getDate();
        var month = months[date.getMonth()];
        var year = date.getFullYear();
        var formattedTime = hours + ':' + minutes.substr(-2) + ' ' + day + ' ' + month + ' ' + year;
        return formattedTime;
    }
}