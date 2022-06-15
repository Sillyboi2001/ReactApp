import React from "react";
import Button from "../button/button";

function Body() {
    return(
        <><div class="container1">
            <div class="row">
                <h2>Children's section</h2>
                <div>Interesting books for young ones</div>
            </div>
            <div class="img">
                <img src="../images/download (1).jpg" alt="" />
                <Button />
            </div>
            <div class="img">
                <img src="../images/download (2).jpg" alt="" />
                <Button />
            </div>
            <div class="img">
                <img src="../images/download (3).jpg" alt="" />
                <Button />
            </div>
            <div class="img">
                <img src="../images/download (4).jpg" alt="" />
                <Button />
            </div>
            <div class="img">
                <img src="../images/download.jpg" alt="" />
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