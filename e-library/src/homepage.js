import Body from "./components/homepage/body";
import Navbar from "./components/homepage/navbar";
import './homepage.css';

const Homepage = () => {
    return (
        <div className="App">
            <Navbar />
            <Body />
        </div>
    );
}

export default Homepage;