import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css"

const Hotel=()=>{
    return(
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
                
            </div>
        </div>
      </div>
    </div>
    )
};
export default Hotel;
