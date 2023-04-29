import React from 'react'
import './searchItem.css'
import {Turf} from './interfaces.ts'
import { el } from 'date-fns/locale'
import{ Container, Grid, Header, List } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

const SearchItem = ({ destination,date,time }) => {

  const [turfs,setTurfs] = React.useState([])
  const [d,setDate]=React.useState([])
  const [t,setTime]=React.useState([])

  React.useEffect(()=>{
    // const getTurfs = async() => {
    // }
    // getTurfs();
    (
      async() => {
        //   var response = await fetch('http://0.0.0.0:8000/api/turfs')
        //   var data = await response.json();
        //  data =data.find(obj => obj.title === destination);
         var mnt= date.getMonth()+1
         var d=date.getFullYear()+'-'+mnt+'-'+date.getDate()
         console.log(d)
          var response = await fetch(`http://0.0.0.0:8000/api/turfs/${destination}/${d}/${time}`,{
            method:'GET'
          })
         var data = await response.json();
          setTurfs(data);
          setDate(d);
          setTime(t);


      }
    )();
  },[])
  const navigate = useNavigate() 
  const book = async (id) => {
    await fetch(`http://0.0.0.0:8001/api/turfs/${id}/book`,{
    method:'POST',
    headers:{'Content-Type':'application/json'}
    })
  navigate('/success', {state: {destination, date,time}})
  }

    // const search = async(id: number) => {
    //       const response = await fetch(`http://0.0.0.0:8000/api/turfs/${id}`,{
    //         method:'GET'
    //       })
    //       const data = await response.json();
    //       setTurfs(data);
    // }

  return (
    <div>
      <List>
{/*         
        {turfs.map(t => {
          return(
           
            <List.Item class ="searchItem" key ={t.id}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqukdQWiQbSMQzoAX8KKqVKa40oSxQrbAFeg&usqp=CAU" alt="" class="siImg"/>
              <List.Content className="siTitle" >
                {t.title}
              </List.Content>
              <List.Content>{t.booked}</List.Content>
             
            </List.Item>
          )
        })} */}
        <List.Item class ="searchItem" key ={turfs.id}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqukdQWiQbSMQzoAX8KKqVKa40oSxQrbAFeg&usqp=CAU" alt="" class="siImg"/>
               <div >
              <List.Content className="siTitle" >
                {turfs.title}
              </List.Content>
              <List.Content className="siDesc" >
                {d}
              </List.Content>
              <List.Content className="siDetails" >
                {t}
              </List.Content>
              <List.Content>{turfs.booked}</List.Content>
             <button className='Btn' onClick={()=>book(turfs.id)}>Book Now!</button>
             </div>
            </List.Item>
            
      </List>
    </div>
  )
}

export default SearchItem

{/* <div class="searchItem">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqukdQWiQbSMQzoAX8KKqVKa40oSxQrbAFeg&usqp=CAU" alt="" class="siImg"/>
    <div className="siDesc">
<h1 className="siTitle">Tower Street Apartments</h1>
<span className="siDistance">500m from center</span>
<span className="siTaxi0p">Free Studs</span>
<span className="siSubtitle">
Contains two 10x10 turfs with a 5x5 goal post.
</span>
<span className="siFeatures">
Book Now!
</span>
<span className="siCancel0p">Free cancellation </span>
<span className="siCancel0pSubtitle">
You can cancel later, so lock in this great price today!
</span>
</div>
<div className="siDetails"></div>
</div>
  ) */}