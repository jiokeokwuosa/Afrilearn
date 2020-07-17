import React from "react";
import { Link } from "react-router-dom";

const Box = props => {
					
	return (
        <div className="col-md-6">
            <span>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <Link className="bigbutton">Get Started</Link>
            </span>
        </div>
	);
};
export default Box;