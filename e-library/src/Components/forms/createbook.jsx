import React from "react";

const CreateBook = () => {
    return(
        <form >
        <h2>Create your book</h2>
        <div className="input-box">
            <input type="text" placeholder="Title"/>
        </div>
        <div className="input-box">
           <textarea placeholder="Description" rows="4" columns="50"></textarea>
        </div>
        <div className="input-box">
            <input type="text" placeholder="Author"/>
        </div>
        <div className="input-box">
            <input type="text" placeholder="Price"/>
        </div>
        <div className="input-box">
            <input type="file"/>
        </div>
        <div className="input-box">
            <input type="submit" value="Create your book"/>
        </div>
    </form>
    )
}

export default CreateBook