import "./searchItem.css";

const SearchItem=()=>{
    return(
        <div className="searchItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" 
            alt="room image" 
            className="siImg" 
            />
            <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500 from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            Entire studio ~ 1 bathroom / 21m^2 1 full bed 
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later , so lock in this great price today!
        </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetaileTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See avilability</button>
                </div>
            </div>
        </div>
    )
}
export default SearchItem