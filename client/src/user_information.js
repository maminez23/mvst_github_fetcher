import React from "react";


export  default function UserInformation (props){
    return(
        <div className="profile-informations-container">
            <a target="_blank" href={props.user.html_url}>
                    <img className="profile-image" src={props.user.avatar_url}/>
            </a>
            <br/>

            <div className="row">
                    {props.user.name}
            </div>
                    {props.user.bio}

            <div className="row">
                <a target="_blank" href={props.user.html_url}>
                    {props.user.login}
                </a>
            </div>
            <br/>

            <div className="row">
                    {props.user.location}
            </div>

        </div>
    );
}