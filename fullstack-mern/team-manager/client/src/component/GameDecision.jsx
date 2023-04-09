import React from 'react'
import axios from 'axios'

const GameDecision = (props) => {
    const { playerState, id } = props

    const handlePlayerState = (i) => {
        console.log(i);
        console.log(playerState);
        console.log(id);
        axios.put("http://localhost:8000/api/players/" + id, { isPlaying: i })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div className="flex gap-1">
            <p
                className="border border-neutral-300 rounded px-2 hover:cursor-pointer"
                style={playerState === 1 ? { backgroundColor: "#86efac" } : null}
                onClick={() => handlePlayerState(1)}>
                Playing
            </p>
            <p
                className="border border-neutral-300 rounded px-2 hover:cursor-pointer"
                style={playerState === 0 ? { backgroundColor: "#fda4af" } : null}
                onClick={() => handlePlayerState(0)}>
                Not Playing
            </p>
            <p
                className="border border-neutral-300 rounded px-2 hover:cursor-pointer"
                style={playerState === -1 ? { backgroundColor: "#fcd34d" } : null}
                onClick={() => handlePlayerState(-1)}>
                Undecided
            </p>
        </div>
    )
}

export default GameDecision