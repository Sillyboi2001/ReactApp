import React from "react";
import Button from "../button/button";
import Images from '../images/images'
const Body = () => {
    return(
        <><div class="container1">
            <div class="row">
                <h2>Children's section</h2>
                <div>Interesting books for young ones</div>
            </div>
            <div class="img">
                <Images />
                <Button />
            </div>
            <div class="img">
                <Images />
                <Button />
            </div>
            <div class="img">
                <Images />
                <Button />
            </div>
            <div class="img">
                <Images />
                <Button />
            </div>
            <div class="img">
                <Images />
                <Button />
            </div>
        </div><div class="container1">
                <div class="row">
                    <h2>Top picks for you</h2>
                </div>
                <div class="img">
                    <img src="../images/download (5).jpg" alt="" />
                    <Button />
                </div>
                <div class="img">
                    <img src="../images/download (8).jpg" alt="" />
                    <Button />
                </div>
                <div class="img">
                    <img src="../images/download (10).jpg" alt="" />
                    <Button />
                </div>
                <div class="img">
                    <img src="../images/download (7).jpg" alt="" />
                    <Button />
                </div>
                <div class="img">
                    <img src="../images/84105002-256-k764841.jpg" alt="" />
                    <Button />
                </div>
            </div></>
    )
}

export default Body;