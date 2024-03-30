import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ieehzbyuuxfozirbxwet.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZWh6Ynl1dXhmb3ppcmJ4d2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjE4MjcsImV4cCI6MjAyNzM5NzgyN30.6PuDEy_p1N3gHtTTpe8Q0pnpIdu0gPirQidovDenDu0");

  function App() {
    const [journeys, setJourneys] = useState([]);

    useEffect(() => {
      getJourneys();
    }, []);

    async function getJourneys() {
      const { data } = await supabase.from("journeys").select();
      setJourneys(data);
    }

    return (
      <ul>
        {journeys.map((journey) => (
          <li key={journey.title}>{journey.title}</li>
        ))}
      </ul>
    );
  }

  export default App;
