import { Outlet, Link } from "react-router-dom";
import './homepage.css';

const Homepage = () => {
    return (
        <div className="App">
            <div class="container">
        <div class="head">E-LIBRARY</div>
        <div class="search"><input type="text" placeholder="Search..."/></div>
        <div class="dropdown">
            <button class="dropbtn">Silasmanas</button>
            <div class="dropdown-content">
            <Link to="./profile.html">My profile</Link>
            <Link to="#">Inbox</Link>
            <Link to="#">Notifications</Link>
            <Link to="#">Help</Link>
            <Link to="#">Settings</Link>
            <Link to="../index.html">Logout</Link>
            </div>
            <Outlet/>
          </div>
          
    </div>    
    <div class="container1">
        <div class="row">
            <h2>Children's section</h2>
            <div>Interesting books for young ones</div>
        </div>
        <div class="img">
            <img src="../images/download (1).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (2).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (3).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (4).jpg" alt=""/>
            <div>
                <button>OUT OF STOCK</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download.jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
    </div>
    <div class="container1">
        <div class="row">
            <h2>Top picks for you</h2>
        </div>
        <div class="img">
            <img src="../images/download (5).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (8).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (10).jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/download (7).jpg" alt=""/>
            <div>
                <button>OUT OF STOCK</button>
            </div>
        </div>
        <div class="img">
            <img src="../images/84105002-256-k764841.jpg" alt=""/>
            <div>
                <button>BORROW</button>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Homepage;