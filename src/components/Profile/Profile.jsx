import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css"

import followerIcon from "../../assets/follower.svg";
import githubIcon from "../../assets/github.svg";
import discordIcon from "../../assets/discord.svg";

const Profile = () => {
  return (
    <div className="ProfileSection">
        <div className="User">
                <div className="UserSProfilePic">
                    <NavLink to="./edit">
                        <img src="https://www.asiamediajournal.com/wp-content/uploads/2022/10/Cute-PFP-for-fb.jpg"/>
                    </NavLink>
                </div>
            <div className="Name">
                Phurin Vanasrivilai
                </div>
            <div className="Email">
                65011463@kmitl.ac.th
            </div>
        </div>
        <div className="Contacts">
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={followerIcon} alt="followerIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    <span id="follower">1</span> follower
                </a>
                <div className="Dot" />
                <a className="ContactsText" href="#">
                    <span id="following">3</span> following
                </a>
            </div>
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={githubIcon} alt="githubIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    Github
                </a>
            </div>
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={discordIcon} alt="discordIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    Discord
                </a>
            </div>
        </div>
    </div>
  )
}

export default Profile