import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const supabase = createClient(
    "https://zmulsnklihhbxkwkbzxn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWxzbmtsaWhoYnhrd2tienhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MzcxMzAsImV4cCI6MjAyNzQxMzEzMH0.sjP-Ywayey9EMrlgM_0Rs_wmdC2Eq9s4hNlNXmVbXi8"
);

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
      <div className="App">
        <header className="App-header">
            <h1>Success</h1>
            <button onClick={() => signOutUser()}>Sign Out</button>
        </header>
      </div>
    );
  }
  
  export default Success;