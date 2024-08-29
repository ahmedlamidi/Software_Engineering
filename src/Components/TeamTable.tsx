import React from 'react';
import './DataTable.css';

interface PlayerData {
  id: number;
  name: string;
  position: string;
  level: number;
}

interface TeamTableProps {
  team: PlayerData[];
  title: string;
}

const TeamTable: React.FC<TeamTableProps> = ({ team, title }) => {
  return (
    <div className="team-table">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Pos</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {team.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td><span className={`position ${player.position}`}>{player.position}</span></td>
              <td>{player.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;