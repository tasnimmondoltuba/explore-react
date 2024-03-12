import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = ()=>{
        const newPlayers = team + 1;
        setTeam(newPlayers);
    }
    const handleRemove = ()=>{
        const newPlayers = team - 1;
        setTeam(newPlayers);
    }
    const teamStyle ={
        border:'2px solid purple',
        padding:'15px',
        margin:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>REMOVE</button>
        </div>
    )
}