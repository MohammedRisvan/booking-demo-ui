import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./hotel.css";



const Hotel=()=>{
    const photos=[
        {
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/418179487.webp?k=e8b09076c55a5c6671096a8847a3e47866470115dddd9a8170121cd12694f556&o="
        },
        {
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/235327050.webp?k=cea62e18a12a5a6c085a22cce06fd734a9e7799fca48bb6c5fee3e9c490d8948&o="
        },
        {
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/492449595.webp?k=128295650a0ccbbc3d17617a2a4d4adf2cc7509e93290b7fe7875f0baf3eae41&o="
        },{
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/85376143.webp?k=5f0055ef26ad5c7950d728654a01dc2e9a510c455a7a8dc26e9fed624620c86a&o="
        },
        {
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/134700733.webp?k=d2194b98d140a9521cedbe9c7f57fb0ecc8de05e645bd00f8905b796badbf596&o="
        },{
            src:"https://cf2.bstatic.com/xdata/images/hotel/square240/207922752.webp?k=f4bc1a580258e31feab20f722cf38dd4a3d466294cc6342b5abfd9fa706dc1be&o="
        }
    ]
    return(
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
            <div className="hotelTitle">
            <h1 >Grand Hotel</h1>
            <button >Reseve or Book Now!</button>
            </div>
            <div className="hotelAddress">
            <LocationOnOutlinedIcon/> 
            <span >Elton st 125 New york</span>
            </div>
            <span className="hotelDistance">
                Excellent location -500m from center
            </span>
            <span className="hotelPriceHighLight">
                Book a atay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
             {photos.map((photo)=>{
                return(
                    <div className="hotelImgWrapper">
                     <img src={photo.src} alt="" className="hotelImg" />
                    </div>
                )
             })}
            </div>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                    <p className="hotelDesc">
                        Located a 5-minute walk from St. Florian's Gate in Krakow, Tower 
                        Street Apartments has accommodations with air conditioning and free WiFi. 
                        The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flate-screen TV,
                        and a private bathroom with shower and a hairdryer. A fridge is  also
                        Located a 5-minute walk from St. Florian's Gate in Krakow, Tower 
                        Street Apartments has accommodations with air conditioning and free WiFi. 
                        The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flate-screen TV,
                        and a private bathroom with shower and a hairdryer. A fridge is  also
                    </p>
                </div>
                <div className="hotelDetailsPrice">
                    <h1>Perfect for a 9-night stay!</h1>
                    <span>
                        Located in the real heart of Krakow, this property has  an excellent lcation score of 9.8!
                    </span>
                    <h2>
                        <b>$980</b>(9 night)
                    </h2>
                    <button>Resever or book Now!</button>  
                </div>
            </div>
        </div>
      </div>
    </div>
    )
};
export default Hotel;
