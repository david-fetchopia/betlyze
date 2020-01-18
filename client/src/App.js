import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "../src/utils/API";
import GameCard from "../src/components/GameCard"

class App extends Component {
  state = {
    NBAdata_h2h: [],
    NBAdata_spread: [],
    NBAdata_totals: []
  }

  componentDidMount() {
    var test = {};
    API.getData()
      .then(res => {
        //this.setState({NBAdata:res.data.data})
        this.setState({ NBAdata_h2h: res.data.data })
        console.log(this.state.NBAdata_h2h);
      })
    API.getSpreadData()
      .then(res1 => {
        //console.log(res1.data.data);
        this.setState({ NBAdata_spread: res1.data.data });
        console.log(this.state.NBAdata_spread);
      })
    API.getTotalsData()
      .then(res2 => {
        this.setState({ NBAdata_totals: res2.data.data });
        console.log(this.state.NBAdata_totals);
      })


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bet Analyze</h2>
        </div>
        <h3>Money Line</h3>
        {this.state.NBAdata_h2h.map(item =>
          <GameCard data={item}>

          </GameCard>
        )}
        <div className="spreads">
          <h3>Spreads</h3>
          {this.state.NBAdata_spread.map(item =>
            <p>{item.teams[0]} ({item.sites[0].odds.spreads.points[0]}) *{item.sites[0].odds.spreads.odds[0]} vs {item.teams[1]} ({item.sites[0].odds.spreads.points[1]}) *{item.sites[0].odds.spreads.odds[1]}</p>
          )}
        </div>
        <div className="overunder">
          <h3>Over and Under</h3>
          {this.state.NBAdata_totals.map(item => 
            <p>{item.teams[0]} VS {item.teams[1]} <b>Over and Under {item.sites[0].odds.totals.points[0]}</b></p>
          )
          }
        </div>
      </div>

    );
  }
}

export default App;

{/* <div>
            <p>{API.convertTime(item.commence_time)}</p>
            <p>{item.teams[0]} <b>{item.sites[0].odds.h2h[0]}</b> VS {item.teams[1]} <b>{item.sites[0].odds.h2h[1]}</b></p>
          </div>
   */}