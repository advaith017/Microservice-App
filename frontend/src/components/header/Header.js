import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFutbol, faClock } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import "./header.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'
import {Calendar} from 'react-date-range'
import TimePicker from 'react-time-picker'




const Header = () => {

  const[destination, setDestination] = React.useState("")
  const[openDate, setOpenDate] = React.useState(false)

  // const [date, setDate] = React.useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection'
  //   }
  // ]);

    const[time,setTime] = React.useState("06:00")

    const[date, setDate] = React.useState(new Date());
    const pick = (date) => {
      setDate(date)
    }

    const navigate = useNavigate() 
    const handleSearch = () => {
    navigate('/turfs', {state: {destination, date,time}})
    }


  return (
    <div className="header">
      <div className="headerContainer">
        <div className='headerList'>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Turfs</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Why us?</span>
            </div>
        </div>
        <h1 className="headerTitle">Welcome To Bengaluru's favorite football destination</h1>
        <p className="headerDesc">
          With word class facilities and a team of experienced coaches, we are the best place to play football in Bengaluru
        </p>
        <button className="headerBtn">Book a Turf</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon ={faFutbol} className="headerIcon" />
            <input
              type="text"
              placeholder="Search for a turf"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>    
          <div className="headerSearchItem">
            <FontAwesomeIcon icon ={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date,"MM/dd/yyyy")}`} </span>
            {/* {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="date"
              />} */}

            {openDate && <Calendar className ="date" onChange={item => setDate(item)} />} 
          </div>
          <div className='headerSeachItem'>
          <FontAwesomeIcon icon={faClock} className="headerIcon"  />
          <input
              type="text"
              placeholder="Time: 06:00 to 18:00"
              className="headerTimeInput"
              onChange={e=>setTime(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch} >Search</button>
        </div>
        </div>

       
    </div>
    </div>

  )
}

export default Header