import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard(props) {
    return (
        <div className="card text-center m-3 shadow-lg " style={{ width: "18rem", borderRadius: "15px" }}>
            <img 
                src={props.image} 
                className="card-img-top rounded-circle mt-3" 
                style={{ width: "100px", height: "100px", margin: "auto" }} 
                alt="Profile"
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-muted">{props.designation}</p>
                <p className="card-text">{props.bio}</p>
                <button className="btn btn-primary btn-sm">Connect</button>
            </div>
        </div>
    )
}

export default UserCard;
