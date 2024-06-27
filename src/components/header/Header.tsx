
import  React, { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "./header.css";
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import 'react-date-range/dist/styles.css'; // Import main css file
import 'react-date-range/dist/theme/default.css'; // Import theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


interface Options {
    adult:number,
    children:number,
    room:number
}
interface Props {
    type?:string;
}


const Header:React.FC<Props>= ({type}) => {
    const [destination,setDestination]=useState<String>("")
    const [openDate,setOpenDate]=useState<boolean>(false)
    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleSelect = (ranges:RangeKeyDict) => {
        setDate([ranges.selection]);
    };
    const [openOptions,setOpenOptions]=useState<boolean>(false);
    const [options,setOptions]=useState<Options>({
        adult:1,
        children:0,
        room:1,
    });
    const navigate=useNavigate();
    const handleOption=(name:keyof Options,operation:string)=>{
        setOptions((prev)=>{return{
            ...prev,[name]:operation=="i"?prev[name]+1:prev[name]-1
        }})
    }
    const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }

    return (
        <div className="header">
            <div className={type=='list'?"  headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <HotelIcon />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FlightIcon />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <DirectionsCarIcon />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <HotelIcon />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <LocalTaxiIcon />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                { type!=='list'&&
                <><h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <HotelIcon className="headerSearchIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                            onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <CalendarMonthOutlinedIcon className="headerSearchIcon" />
                        <span onClick={()=>{setOpenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")}to${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                       {openDate&& <DateRange
                            editableDateInputs={true}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <AccessibilityOutlinedIcon className="headerSearchIcon" />
                        <span onClick={()=>{setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult}adult .${options.children}children .${options.room}room`}</span>
                    {openOptions&&<div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button
                            disabled={options.adult<=1} 
                            className="optionCounterButton" onClick={()=>{handleOption("adult","d")}}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>{handleOption("adult","i")}}>+</button>
                            </div>
                        </div>
                    <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.children<1} 
                            className="optionCounterButton" onClick={()=>{handleOption("children","d")}}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton"onClick={()=>{handleOption("children","i")}}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.room<=1} 
                            className="optionCounterButton" onClick={()=>{handleOption("room","d")}}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>{handleOption("room","i")}}>+</button>
                            </div>
                        </div>
                    </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    );
};

export default Header;
