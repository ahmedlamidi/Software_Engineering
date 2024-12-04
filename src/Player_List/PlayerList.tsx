import { useState } from "react";
// import PlayerID from '../mongo.js'

interface Player {
    id: number;
    name: string;
    level: number;
    isAvailable: boolean;
}

function PlayerList() {
    const [players, setPlayers] = useState<Player[]>([]);
    const examplePlayer: Player[] = [
        { id: 1, name: 'Player 1', level: 3, isAvailable: true },
        { id: 2, name: 'Player 2', level: 2, isAvailable: true },
        { id: 3, name: 'Player 3', level: 4, isAvailable: true },
        { id: 4, name: 'Player 4', level: 5, isAvailable: true },
        { id: 5, name: 'Player 5', level: 1, isAvailable: true },
        { id: 6, name: 'Player 6', level: 2, isAvailable: true },
        { id: 1, name: 'Player 1', level: 3, isAvailable: true },
        { id: 2, name: 'Player 2', level: 2, isAvailable: true },
        { id: 3, name: 'Player 3', level: 4, isAvailable: true },
        { id: 4, name: 'Player 4', level: 5, isAvailable: true },
        { id: 5, name: 'Player 5', level: 1, isAvailable: true },
        { id: 6, name: 'Player 6', level: 2, isAvailable: true },
    ];
    const toggleAvailability = async (id : number, isAvailable: boolean) => {
        isAvailable = !isAvailable
        // await PlayerID.collection('players').doc(id).update({ isAvailable: !isAvailable });
    };

    return (
        <div>
            <h2>Courses Management</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Available</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {examplePlayer.map(player => (
                        <tr key={player.id}>
                            <td><input type="checkbox" />
                                {/* <button onClick={() => toggleAvailability(player.id, player.isAvailable)}>
                                    {player.isAvailable ? 'Mark Unavailable' : 'Mark Available'} */}
 
                                    
                                
                            </td> 
                            <td>{player.name}</td>
                            <td>{player.level}</td>
                            <td>{player.isAvailable ? 'Yes' : 'No'}</td>
                                                             
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;


