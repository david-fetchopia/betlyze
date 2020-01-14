import React from "react";

function RequestForm(props) {
    return (
        <form className="request-form">
            <div className="request-group">
                <label htmlFor="phone">Target Phone Number:</label>
                <input name="phone" placeholder="type in phone to begin" />


            </div>
            <div>
                <label htmlFor="team-name">Enter your team to win:</label>
                <input name="team-name" />
            </div>
            <button type="submit">
                Bet
            </button>
        </form>
    )
}

export default RequestForm;