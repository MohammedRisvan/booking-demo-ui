import { useLocation } from "react-router-dom";
import "./list.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import { format } from "date-fns";

import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

interface LocationState {
    destination: string;
    data: Range[];
    options: {
        adulth: number;
        children: number;
        room: number;
    }
}

const List = () => {
    // const location = useLocation<LocationState | undefined>();
    const location = useLocation()
    console.log(location);
    const [destination, setDestination] = useState<string>(location.state.destination)
    const [date, setDate] = useState<any>(location.state.date);
    const [options, setOptions] = useState<any>(location.state.options);
    const [openDate, setOpenDate] = useState<boolean>(true);


    return (<div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination_</label>
                        <input type="text" onChange={(e) => { setDestination(e.target.value) }} value={destination} />
                    </div>
                    <div className="lsItem">
                        <label> Check-in Date</label>
                        <span onClick={() => { setOpenDate(!openDate) }}>{`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange onChange={(item: any) => { setDate([item.selection]) }}
                            minDate={new Date()}
                            ranges={date} />}
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                        <div className="lspOptionItem">
                            <span className="lsOptionText">
                                Min price<span>per night</span>
                            </span>
                            <input type="number" className="lsOpetionInput" />
                        </div>
                        <div className="lspOptionItem">
                            <span className="lsOptionText">
                                Max price<span>per night</span>
                            </span>
                            <input type="number" className="lsOpetionInput" />
                        </div>
                        <div className="lspOptionItem">
                            <span className="lsOptionText">
                                Adult
                            </span>
                            <input type="number" min={1} className="lsOpetionInput" placeholder={options.adult} />
                        </div>
                        <div className="lspOptionItem">
                            <span className="lsOptionText">
                                Children
                            </span>
                            <input type="number" min={0} className="lsOpetionInput" placeholder={options.children} />
                        </div>
                        <div className="lspOptionItem">
                            <span className="lsOptionText">
                                Room
                            </span>
                            <input type="number" min={1} className="lsOpetionInput" placeholder={options.room} />
                        </div>
                        </div>
                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                </div>
            </div>
        </div>
    </div>)
};
export default List;