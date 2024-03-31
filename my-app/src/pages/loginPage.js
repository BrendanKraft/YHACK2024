import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import {useNavigate} from 'react-router-dom';

const supabase = createClient(
    "https://ieehzbyuuxfozirbxwet.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZWh6Ynl1dXhmb3ppcmJ4d2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjE4MjcsImV4cCI6MjAyNzM5NzgyN30.6PuDEy_p1N3gHtTTpe8Q0pnpIdu0gPirQidovDenDu0"
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async(event) => {
        if (event == "SIGNED_IN") {
            navigate("/discover");
        } else {
            navigate("/");
        }
    })


    return (
        <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                appearance={{theme: ThemeSupa}}
                theme="dark"
                providers = {["discord"]}
            />
        </header>
      </div>
    );
  }
  
  export default Login;