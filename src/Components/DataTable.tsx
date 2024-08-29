// DataTable.tsx
import React, { useEffect, useState } from 'react';
import './DataTable.css';
import AddPlayer from './DataTableComponents/AddPlayer';
import Flag from 'react-world-flags';
import countryFlags from './DataTableComponents/CountryFlag';
import TeamTable from './TeamTable';
import { FaEdit, FaRandom } from 'react-icons/fa';
import { AiOutlineSync } from "react-icons/ai";
import axios from 'axios';

interface PlayerData {
  id: number;
  name: string;
  description: string;
  checked: boolean;
  level: number;
  position: string;
  shirtNumber: number
  nation: string
}

function DataTable() {
  const [data, setData] = useState<PlayerData[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [team1, setTeam1] = useState<PlayerData[]>([]);
  const [team2, setTeam2] = useState<PlayerData[]>([]);
  const [showTeams, setShowTeams] = useState<boolean>(false);



  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/player');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };
  useEffect(() => {
    fetchPlayers();
  }, []);
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map(item => ({ ...item, checked: newSelectAll })));
  };
   
  const handleCheckboxChange = (id: number) => {
    setData(data.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    const selectedItems = data.filter(item => item.checked);
    if (selectedItems.length === 0) {
      alert('Please select players to shuffle.');
      return;
    }
    if (selectedItems.length % 2 != 0) {
      alert('Please select even players for 2 teams');
      return;
    }
    const shuffledItems = selectedItems.sort(() => 0.5 - Math.random());
    const mid = Math.ceil(shuffledItems.length / 2);
    setTeam1(shuffledItems.slice(0, mid));
    setTeam2(shuffledItems.slice(mid));
    setShowTeams(true);
  };

  const sShuffle = () => {
    const allPlayers = [...team1, ...team2].sort(() => 0.5 - Math.random());  
    const mid = Math.ceil(allPlayers.length / 2);
    setTeam1(allPlayers.slice(0, mid));
    setTeam2(allPlayers.slice(mid));  
    
  };


  const handleBalance = () => {
    const selectedPlayers = [...team1, ...team2];
    const levels = selectedPlayers.map(player => player.level);
  
    function findMinimalDifferencePartition(levels: number[]) {
      const totalSum = levels.reduce((a, b) => a + b, 0);
      const halfSum = totalSum / 2;
      const n = levels.length;
      const subsetSize = Math.floor(n / 2);
  
      const dp: boolean[][] = Array(subsetSize + 1).fill(false).map(() => Array(Math.floor(halfSum) + 1).fill(false));
      const usedIndices: Set<number>[][] = Array(subsetSize + 1).fill(null).map(() => Array(Math.floor(halfSum) + 1).fill(null).map(() => new Set<number>()));
  
      dp[0][0] = true;
  
      for (let k = 0; k < n; k++) {
        const level = levels[k];  
        for (let i = subsetSize; i > 0; i--) {
          for (let j = Math.floor(halfSum); j >= level; j--) {
            if (dp[i - 1][j - level] && !usedIndices[i - 1][j - level].has(k)) {
              dp[i][j] = true;
              usedIndices[i][j] = new Set(usedIndices[i - 1][j - level]);
              usedIndices[i][j].add(k);
            }
          }
        }
      }
  
      let bestSum = 0;
      for (let j = Math.floor(halfSum); j >= 0; j--) {
        if (dp[subsetSize][j]) {
          bestSum = j;
          break;
        }
      }
  
      const subset1: number[] = [];
      const subset2: number[] = [];
      const usedIndicesSet: Set<number> = usedIndices[subsetSize][bestSum];
      
      for (let k = 0; k < levels.length; k++) {
        if (usedIndicesSet.has(k)) {
          subset1.push(levels[k]);
        } else {
          subset2.push(levels[k]);
        }
      }
  
      return { subset1, subset2 };
    }
    

    const { subset1, subset2 } = findMinimalDifferencePartition(levels);
    // console.log("Levels: ",levels)
    // console.log("Subset 1:", subset1); 
    // console.log("Subset 2:", subset2);
  
     
    const newTeam1: PlayerData[] = [];
    const newTeam2: PlayerData[] = [];
  
    // Map levels back to players
    subset1.forEach(level => {
      const index = selectedPlayers.findIndex(player => player.level === level);
      if (index !== -1) {
        newTeam1.push(selectedPlayers[index]);
        selectedPlayers.splice(index, 1);
      }
    });
  
    subset2.forEach(level => {
      const index = selectedPlayers.findIndex(player => player.level === level);
      if (index !== -1) {
        newTeam2.push(selectedPlayers[index]);
        selectedPlayers.splice(index, 1);
      }
    });
    setTeam1(newTeam1);
    setTeam2(newTeam2);
  
  };



  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.includes(searchTerm)
  );

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const getFlagCode = (nation: string) => {
    return countryFlags[nation] || ""
  };

  const handleEdit = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    });
  };
  
  




  return (
    <div className="container">

      <div className="headers ">
        <button className="filter-btn">Filter</button>
        <input type="text" placeholder="Search..." className="search-bar" value={searchTerm} onChange={handleSearch} />
        <button className="add-customer-btn" onClick={handleShow}>+ Add player</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Level</th>
            <th>Pos</th>
            <th>Nation</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" checked={item.checked} onChange={() => handleCheckboxChange(item.id)} /></td>
              <td>{item.id}</td>
              <td>{item.name}<br />{item.shirtNumber} </td>
              <td>{item.description}</td>
              <td><span className={`level ${item.level}`}>{item.level}</span></td>
              <td><span className={`position ${item.position}`}>{item.position}</span></td>
              {/* <td className={item.balance.startsWith('-') ? 'negative' : 'positive'}>{item.balance}</td> */}
              <td><Flag className="flag" code={getFlagCode(item.nation)}/>{item.nation}</td>
              <td>{item.shirtNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <span>1-20 of 97</span>
        <div className="pagination">
          <span>Rows per page: 20</span>
          <span>20/20</span>
        </div>
      </div>
      
      <button onClick={handleSubmit} className="submit-btn">Send to Match</button>
      <div className="line">Teams</div>
      
      {showTeams && (
        <div className="teams-container">
          <TeamTable team={team1} title="Team 1" />
          
          <TeamTable team={team2} title="Team 2" />
          
        </div>
        
      )}
      {showTeams && 
        <div className="button-container">
            <button onClick={handleBalance} className="makeTeam-btn"><AiOutlineSync/>Balance Team</button>
            <button onClick={sShuffle} className="shuffle-btn"><FaRandom/>Shuffle</button>
            <button onClick={handleEdit} className="edit-btn"><FaEdit/>Edit</button>

        </div>}
      <div className="line"></div>
      <AddPlayer show={show} handleClose={handleClose} fetchPlayer={fetchPlayers} />
    </div>
    
    
  );
};

export default DataTable;