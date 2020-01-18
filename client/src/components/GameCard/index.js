import React from "react";
import "./style.css";
import API from "../../utils/API"

function GameCard(props) {
    return (
        <div className="card">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">*</th>
                        <th scope="col">{props.data.teams[0]}</th>
                        <th scope="col">{props.data.teams[1]}</th>
                        <th scope="col">{API.convertTime(props.data.commence_time)}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="h2h"></th>
                        <td>{props.data.sites[0].odds.h2h[0]}</td>
                        <td>{props.data.sites[0].odds.h2h[1]}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameCard;