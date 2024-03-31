import React, {useEffect, useState} from 'react';

function journeyCard(props){
    const navigate = useNavigate();
    return(
        <div className="card">
            <h2>{props.h2}</h2>
            <button onClick={() => navigate("/journey")} className="startButton">Start Journey</button>
        </div>
    );
}
export default journeyCard;