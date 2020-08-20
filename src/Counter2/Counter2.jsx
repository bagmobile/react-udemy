import React from "react";
import {ClickedContext} from "../App"

export default props => {
    return (
        <div style={{
            border: `3px solid #cde`,
            padding: `5px`, width: `100px`, margin: `0 auto`
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Yes</p> : null}
            </ClickedContext.Consumer>
        </div>
    );
}