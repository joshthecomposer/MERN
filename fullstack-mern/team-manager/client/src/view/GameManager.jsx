import React from 'react'
import GameDecision from '../component/GameDecision'

const GameManager = (props) => {
    const { allPlayers, setAllPlayers } = props;
    return (
        <>
            <div className="flex justify-center my-5">
                <table className="table w-full md:w-1/2 border-2 border-neutral-100 border-separate border border-slate-500">
                    <thead className="bg-neutral-100">
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPlayers.map((player) => (
                                <tr key={player._id}>
                                    <td className="border border-slate-500">{player.firstName} { player.lastName }</td>
                                    <td className="capitalize border border-slate-500">{player.position}</td>
                                    <td className='border border-slate-500 flex justify-center'>
                                        <GameDecision playerState={ player.isPlaying } id={player._id} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GameManager