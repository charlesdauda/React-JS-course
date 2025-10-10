import React from 'react'


const ScoreboardApp = () => {
    const players = [
         { id: 1, name: "Charles", score: 80 },
          { id: 2, name: "Winfred", score: 45 }
    ];
    return (
    <section>
        {players.map((play =>(
            <Scoreboard key={play} name={play.name} score={play.score}/>
        )))}
    </section>
    )
}

const Scoreboard = ({name,score}) => {
    <h1>Welcome</h1>
    if(score >= 50){
        return <h1>{name}, You are the winner</h1>
    }else{
        return <h1>{name}, Keep Trying</h1>
    }
}

export default ScoreboardApp; 