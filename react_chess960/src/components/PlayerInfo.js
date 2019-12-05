import React, {useEffect, useState} from 'react';

const PlayerInfo = ({match}) => {
    console.log(match.params)
    let [player, setPlayer] = useState({
                                            player: {
                                                name: 'test', 
                                                lastName: 'test'
                                            }, 
                                            history: [
                                                {seed: 345},
                                                {seed: 98}
                                                ]
                                        })
    useEffect(()=>{
    //  api.get(`/user/$id`)
                    //.then(res=> res.user)
                    // .then(data=> setPlayer(data))
    })
    
    return (
        <div className='player-info'>
            <div className='player-personal'>
                <h1>{`${player.player.name} ${player.player.lastName}`}</h1>
            </div>
            <div className='player-history'>
                <h4>Previous Games</h4>
                <ul>
                    {player.history.map((a)=>(
                        <li>{a.seed}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PlayerInfo