import React from "react";
import { Link } from "react-router-dom";

const Box = props => {
					
	return (
        <div className="col-md-6">
            <span>
                <div className="row">
                    <div className="col-md-2">
                        <img src={props.imageURL} alt="waec"/>
                    </div>
                    <div className="col-md-10">
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                        <Link className="bigbutton">Get Started</Link>
                    </div>
                </div>
            </span>
        </div>
	);
};
export default Box;