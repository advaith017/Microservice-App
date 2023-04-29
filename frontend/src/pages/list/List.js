import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import "./list.css"
import { DateRange } from 'react-date-range'
import {Calendar} from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem.js'
import { useNavigate } from 'react-router-dom'
const List = () => {
  const location = useLocation()
  const[destination, setDestination] = React.useState(location.state.destination)
  const[date, setDate] = React.useState(location.state.date)
  const[time, setTime] = React.useState(location.state.time)
  const[openDate, setOpenDate] = React.useState(false)

  const navigate = useNavigate() 
  const handleSearch = () => {
  navigate('/turfs', {state: {destination, date,time}})
  }
  
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div class="listContainer">
        <div class="listWrapper">
          <div class="listSearch">
            <h1 class="lsTitle">Search</h1>
            <div class="lsItem">
              <label >Destination</label>
              <input onChange={e=>setDestination(e.target.value)}  placeholder={destination} type="text"/>
            </div>
            <div class="lsItem">
              <label >Check in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date,"MM/dd/yyyy")}`}</span>
            {openDate && (<Calendar  onChange={item => setDate(item)} />)}
            </div>
              <button onClick={handleSearch}>Search</button>
          </div>
          <div class="listResult">
            <SearchItem destination ={destination} date={date} time={time}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List