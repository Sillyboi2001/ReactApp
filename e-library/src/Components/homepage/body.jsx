import React, { useEffect, useState } from "react";
import axios from "../api/axios";

export const userInfo = JSON.parse(localStorage.getItem('user-info'))

const Body = () => {
    const [book, setBook] = useState([]);

        useEffect(() => {
            const getBooks = async () => {
                try{
                const response = await axios.get('api/books', {
                    headers: {
                        'authorization': userInfo.token,
                    }
                })
                setBook(response.data.books)
            } catch (err) {
                console.log(err)
            }
        }
        getBooks();
        }, [])

    return(
        <>
       <div className="container1">
                <div className="row">
                    <h2>Top picks for you</h2>
                    <div>Interesting books for all</div>
                </div>
                {book.map((item) => {
                    return (
                        <>
                            <div className="img">
                                <img src={item.imageUrl} alt=''></img>
                                <button>BORROW</button>
                            </div>
                        </>
                    );
                })}
            </div>
            </>
    )
}

export default Body;