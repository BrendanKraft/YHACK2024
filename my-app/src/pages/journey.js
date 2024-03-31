import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import rocket from './rocket.png';
import moon from './moon.png';
import { fetchData } from './discover.js';
import getJourneyID from './discover.js';
import "./journey.css";
import 'bootstrap/dist/css/bootstrap.css';


const supabase = createClient(
  "https://ieehzbyuuxfozirbxwet.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZWh6Ynl1dXhmb3ppcmJ4d2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjE4MjcsImV4cCI6MjAyNzM5NzgyN30.6PuDEy_p1N3gHtTTpe8Q0pnpIdu0gPirQidovDenDu0"
);

function Journey() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  var id = getJourneyID();


  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }
  const [data, setData] = useState([]);
  const tableName = 'journeys';

  async function fetchData() {
    const { data, error } = await supabase.from(tableName).select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    console.log(data[0]);
    setData(data[0]);
    id = 1;
  }


  useEffect(() => {
    fetchData();
  }, []);
  let k = 0;
  async function placeDivs() {
    const stepDivs = data.map((step, index) => {
      const mystyle = {
        position: "absolute",
        top: 98 - (index + 1) * 2 + "%",
      };
      return (
        <div class="step-card" style={mystyle}>
          <div class="step-card-body">
            <h5 class="step-card-title">{step.step_title}</h5>
            <h6 class="step-card-subtitle mb-2 text-body-secondary">Step 1</h6>
            <p class="step-card-text">{step.step_desc}</p>
            <a href="#" class="stepcard-link">Card link</a>
            <a href="#" class="stepcard-link">Another link</a>
          </div>
        </div>
      );
    });
  }



  return (


    <div>
      <header>
        <h1 id="title">Journey</h1>
        <button id="SignOut" onClick={() => signOutUser()}>Sign Out</button>
      </header>
      <hr></hr>
      <body>
        <div class="container">
          <div class="sliding-background" onLoad={fetchData}>
            <div class="space stars1"></div>
            <div class="space stars2"></div>
            <div class="space stars3"></div>
            <div class="step-card">
              <div class="step-card-body">
                <h5 class="step-card-title">Getting Started</h5>
                <h6 class="step-card-subtitle mb-2 text-body-secondary"></h6>
                <p class="step-card-text">{}</p>
                <a href="#" class="stepcard-link">Card link</a>
                <a href="#" class="stepcard-link">Resources(links)</a>
              </div>
            </div>
          </div>
        </div>
          <div class="row">
            <div class="col-4">
              <div id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
              </div>
            </div>
            <div class="col-8">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                <h4 id="list-item-1">Item 1</h4>
                <p>...</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>...</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>...</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>...</p>
              </div>
            </div>
          </div>


          <img src={rocket} alt="rocket" id="rocket"></img>


      </body>

    </div>
  );
}

export default Journey;