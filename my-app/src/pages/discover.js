import "./discoverStyle.css";
import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import rocket from './rocket.png';
import moon from './moon.png';
//import Journey from './journey';

const supabase = createClient(
  "https://ieehzbyuuxfozirbxwet.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZWh6Ynl1dXhmb3ppcmJ4d2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjE4MjcsImV4cCI6MjAyNzM5NzgyN30.6PuDEy_p1N3gHtTTpe8Q0pnpIdu0gPirQidovDenDu0"
);
var journey_id;

function Discover() {
    
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    
  async function signOutUser() {
    const {error} = await supabase.auth.signOut();
    navigate("/");
  }
  async function journey(id) {
    journey_id = id;
    navigate("/journey");
  }
  function getJourneyID(){
    return  journey_id;
  }
  const tableName = 'journeys';

  // Fetch data from the table
  async function fetchData() {
    const { data, error } = await supabase.from(tableName).select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    //console.log(data);
    setData(data);
  }  
  

  useEffect(() => {
    fetchData();
  }, []);

  function renderCards() {
    return data.map((item, index) => (
      <div key={index} className="card1">
        <h2 id = "cardh2">{item.title}</h2>
        <button onClick={() => journey(item.id)} className="startButton">Start Journey</button>
        <p id = "cardp">{item.description}</p>
      </div>
    ));
  }

//   async function addData(){
//     console.log("addData");
//     const data = fetchData();
//     var cards = document.getElementById("CardContainer");
//       cards.innerHTML += "HI";
//     for (let i = 0; i < data.length; i++){
//       //var cards = document.getElementById("CardContainer");
//       //cards.innerHTML += "HI";/*+
//       /*"<button onClick={() => journey()} className='startButton'>Start Journey</button>"+
//       "<p id = 'cardp'></p>"+
//       "</div>";*/
      
//      /*
//       <div className="card">
//       <h2 id = "cardh2">data[i].title</h2>
//       <button onClick={() => journey()} className="startButton">Start Journey</button>
//       <p id = "cardp"></p>
//       </div>;
//       */
//       //let name = data[i].name ect
//       //data[i] //.properties'
//       //document.getElementById("cardh2").innerHTML +=  
//     }
//   }
    //window.onload = addData();
    return (
      
      <div>
        <header>
          <h1 id = "title">Discover</h1>
        <button id = "SignOut" onClick={() => signOutUser()}>Sign Out</button>
        </header>
        <hr id="break"></hr>
        <body>
        <div class="CardContainer">
          {renderCards()}
        </div>
        <img src = {rocket} alt = "rocket" id = "rocket"></img>
        <img src = {moon} alt = "moon" id = "moon"></img>
        <div class="space stars1"></div>
        <div class="space stars2"></div>
        <div class="space stars3"></div>
        </body>
        
      </div>
    );
  }
  
  export default Discover;