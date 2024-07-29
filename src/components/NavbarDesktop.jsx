import React, { useState,useEffect,useRef} from 'react';
import './NavbarDesktop.css';
import img2 from './map_per.png';

const Navbardesktop = () => {
    const [showSecondNav, setShowSecondNav] = useState(false);
    const [showMapModal, setshowMapModal] = useState(false);
    const [showDateModal, setshowDateModal] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedCheckIn, setSelectedCheckIn] = useState(null);
    const [selectedCheckOut, setSelectedCheckOut] = useState(null);
    const [showGuestModal, setShowGuestModal] = useState(false);

    const secondNavRef = useRef(null);
    const mapModalRef = useRef(null);
    const dateModalRef = useRef(null);
    const guestModalRef = useRef(null);
    
   
    const updateAddGuestInput = () => {
        const { adults, children, infants, pets } = guestCounts;
        const guests = adults + children + infants;
        let result = [];
        if (guests > 0) result.push(`${guests} guest${guests > 1 ? 's' : ''}`);
        if (pets > 0) result.push(`${pets} pet${pets > 1 ? 's' : ''}`);
        return result.length > 0 ? result.join(', ') : 'Add guests';
    };
    const [guestCounts, setGuestCounts] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0
    });

    const clearAllCounts = () => {
        setGuestCounts({
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0
        });
    };



    const generateCalendar = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const days = [];

        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            days.push(
                <div
                    key={`day-${i}`}
                    className="calendar-day"
                    onClick={() => selectDate(date)}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    const selectDate = (date) => {
        if (!selectedCheckIn || (selectedCheckIn && selectedCheckOut)) {
            setSelectedCheckIn(date);
            setSelectedCheckOut(null);
        } else {
            if (date > selectedCheckIn) {
                setSelectedCheckOut(date);
            } else {
                setSelectedCheckOut(selectedCheckIn);
                setSelectedCheckIn(date);
            }
        }
    };

    const handleAddGuestInputClick = (e) => {
        e.stopPropagation();
        setShowSecondNav(true);
        setShowGuestModal(true);
        setshowMapModal(false);
        setshowDateModal(false);
    };

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            return newDate;
        });
    };

    // Update check-in and check-out input values
    useEffect(() => {
        const checkInInput = document.getElementById('checkIn');
        const checkOutInput = document.getElementById('checkOut');
        if (checkInInput && checkOutInput) {
            checkInInput.value = selectedCheckIn ? selectedCheckIn.toLocaleDateString() : '';
            checkOutInput.value = selectedCheckOut ? selectedCheckOut.toLocaleDateString() : '';
        }
        const handleOutsideClick = (event) => {
            const anyWhereBtn = document.getElementById('where-btn');
            const anyWeekBtn = document.getElementById('any-weekBtn');
            const addGuestBtn = document.getElementById('addGuests');

            if (
                !anyWhereBtn.contains(event.target) &&
                !anyWeekBtn.contains(event.target) &&
                !addGuestBtn.contains(event.target) &&
                !secondNavRef.current?.contains(event.target) &&
                !mapModalRef.current?.contains(event.target) &&
                !dateModalRef.current?.contains(event.target) &&
                !guestModalRef.current?.contains(event.target)
            ) {
                setShowSecondNav(false);
                setshowMapModal(false);
                setshowDateModal(false);
                setShowGuestModal(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectedCheckIn, selectedCheckOut,showGuestModal]);
    const handleGuestIncrement = (type) => {
        setGuestCounts(prevCounts => ({
            ...prevCounts,
            [type]: prevCounts[type] + 1
        }));
    };

    const handleGuestDecrement = (type) => {
        setGuestCounts(prevCounts => ({
            ...prevCounts,
            [type]: Math.max(0, prevCounts[type] - 1)
        }));
    };

    const handleAnyWhereInputClick = (e) => {
        e.stopPropagation();
        setShowSecondNav(true);
        setshowMapModal(true)
        //False
        setshowDateModal(false)
        setShowGuestModal(false);
    };
    const handleAnyWeekInputClick = (e) => {
        e.stopPropagation();
        setShowSecondNav(true);
        setshowDateModal(true)
        //False
        setshowMapModal(false)
        setShowGuestModal(false);
    };

    const handleMapModal = (e)=>{
        e.stopPropagation();
        setshowMapModal(true)
        //False
        setshowDateModal(false)
        setShowGuestModal(false);
    }

    const handleRegionClick = (event) => {
        const region = event.currentTarget.getAttribute('data-region');
        setSelectedRegion(region);
        console.log('Selected region:', region);
    };
    const handleCheckInOut = (e)=>{
        setShowSecondNav(true);
        setshowDateModal(true)
        //False
        setshowMapModal(false)
        setShowGuestModal(false);
        console.log('Hello CheckIn')
    }

    return (
        <div>
            <nav className="navbar-desktop">
            <div className="search-container">
                    <input type="text" placeholder="Anywhere" id="where-btn" onClick={handleAnyWhereInputClick} />
                    <div className="divider"></div>
                    <input type="text" placeholder="Any week" id="any-weekBtn" onClick={handleAnyWeekInputClick} />
                    <div className="divider"></div>
                    <input type="text" placeholder="Add guests" id="addGuests"onClick={handleAddGuestInputClick}  />
                    <button className="search-button">&#x1F50D;</button>
                </div>
                <div className="right-section">
                    <button className="icon-button">&#x1F310;</button>
                    <div className="user-menu">
                        <button className="icon-button">&#x2630;</button>
                        <button className="icon-button">&#x1F464;</button>
                    </div>
                </div>
            </nav>
            <nav className="navbar-mobile">
                <div className="navbar-mobile-left">
                    <button className="cross-icon-button">x</button>
                    <button className="mobile-button">🟦</button> 
                    <div>
                        <h4>Get the app</h4>
                        <p>The fastest,easiest way</p>
                    </div>           
                </div>
                <div className="navbar-mobile-right">
                    <button className="open-app-button">USE APP</button>
                </div>
            </nav>
            {showSecondNav && (
                <div id="second-nav" ref={secondNavRef}>
                    <div className="second-nav-content">
                    <div className="search-option">
                            <label>Where</label>
                            <input type="text" id="where-input" placeholder="Canada" value={selectedRegion} onClick={handleMapModal}/>
                        </div>
                        <div className="search-option">
                            <label>Check in</label>
                            <input type="text" placeholder="Add dates" value="Jul 24" id="checkIn" onClick={handleCheckInOut} />
                        </div>
                        <div className="search-option">
                            <label>Check out</label>
                            <input type="text" placeholder="Add dates" value="Aug 14" id="checkOut" onClick={handleCheckInOut}/>
                        </div>
                        <div className="search-option">
                            <label>Who</label>
                            <input type="text" placeholder="Add guests" id="whoInputValue"value={updateAddGuestInput()} readOnly onClick={handleAddGuestInputClick} />
                        </div>
                        <button className="search-button" aria-label="Search">
                            <span className="search-icon">🔍</span>
                        </button>
                    </div>
                </div>
            )}
            {showMapModal && (
                    <div id="map-modal" ref={mapModalRef}>
                    <h3>Search by region</h3>
                    <div className="region-grid">
                        <div className="region-item" data-region="I'm flexible" onClick={handleRegionClick}>
                            <img src={img2} alt="I'm flexible"/>
                            <p>I'm flexible</p>
                        </div>
                        <div className="region-item" data-region="Southeast Asia"onClick={handleRegionClick}>
                            <img src={img2} alt="Southeast Asia"/>
                            <p>Southeast Asia</p>
                        </div>
                        <div className="region-item" data-region="Canada"onClick={handleRegionClick}>
                            <img src={img2} alt="Canada"/>
                            <p>Canada</p>
                        </div>
                        <div className="region-item" data-region="Europe"onClick={handleRegionClick}>
                            <img src={img2} alt="Europe"/>
                            <p>Europe</p>
                        </div>
                        <div className="region-item" data-region="Thailand"onClick={handleRegionClick}>
                            <img src={img2} alt="Thailand"/>
                            <p>Thailand</p>
                        </div>
                        <div className="region-item" data-region="Middle East"onClick={handleRegionClick}>
                            <img src={img2} alt="Middle East"/>
                            <p>Middle East</p>
                        </div>
                    </div>
                </div>
            )}
            {showDateModal && (
                <div id="date-picker-modal" ref={dateModalRef}>
                    <div className="date-picker-header">
                        <h3>Select dates</h3>
                        <button id="close-date-picker">✕</button>
                    </div>
                    <div className="date-picker-tabs">
                        <div className="date-picker-tab active">Dates</div>
                        <div className="date-picker-tab">Months</div>
                        <div className="date-picker-tab">Flexible</div>
                    </div>
                    <div className="calendars">
                        <div className="calendar">
                            <div className="calendar-header">
                                <button className="prev-month"onClick={handlePrevMonth}>←</button>
                                <h4 id="month1">
                                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </h4>
                                <button className="next-month"onClick={handleNextMonth}>→</button>
                            </div>
                            <div className="calendar-grid" id="calendar1">
                            {generateCalendar(currentDate.getFullYear(), currentDate.getMonth())}
                            </div>
                        </div>
                        <div className="calendar">
                            <div className="calendar-header">
                                <button className="prev-month"onClick={handlePrevMonth}>←</button>
                                <h4 id="month2">
                                {new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
                                        .toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </h4>
                                <button className="next-month"onClick={handleNextMonth}>→</button>
                            </div>
                            <div className="calendar-grid" id="calendar2">
                            {generateCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1)}
                            </div>
                        </div>
                    </div>
                    <div className="date-range-options">
                        <div className="date-range-option">Exact dates</div>
                        <div className="date-range-option">± 1 day</div>
                        <div className="date-range-option">± 2 days</div>
                        <div className="date-range-option">± 3 days</div>
                        <div className="date-range-option">± 7 days</div>
                    </div>
                </div>
            )}
            {showGuestModal && (
                <div id="guestModal" className="modal" ref={guestModalRef}>
                    {['adults', 'children', 'infants', 'pets'].map((type) => (
                        <div key={type} className="guest-type">
                            <div className="guest-info">
                                <div className="guest-name">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                                <div className="guest-age">
                                    {type === 'adults' ? 'Ages 13 or above' : 
                                     type === 'children' ? 'Ages 2-12' : 
                                     type === 'infants' ? 'Under 2' : 
                                     'Bringing a service animal?'}
                                </div>
                            </div>
                            <div className="counter">
                                <button 
                                    className="decrement" 
                                    disabled={guestCounts[type] === 0}
                                    onClick={() => handleGuestDecrement(type)}
                                >
                                    -
                                </button>
                                <span>{guestCounts[type]}</span>
                                <button 
                                    className="increment"
                                    onClick={() => handleGuestIncrement(type)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={clearAllCounts}>Clear</button>
                </div>
            )}
            <hr id='divide-1' />
        </div>
    );
};

export default Navbardesktop;