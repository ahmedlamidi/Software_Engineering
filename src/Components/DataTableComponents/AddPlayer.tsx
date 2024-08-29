//AddPlayer.tsx
import React, { useState } from 'react';
import '../DataTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';

interface Box {
  show: boolean;
  handleClose: () => void;
  fetchPlayer: () => void;
}

const AddPlayer =  ({ show, handleClose, fetchPlayer } : Box) => {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    description: '',
    level: 1,
    position: '',
    shirtNumber: 0,
    nation: '',
  
  });
  const playerPositions = [
      "GK", "CB", "RB", "LB", "RWB", "LWB","DM","CM","AM","RM", "LM", "RW", "LW", "CF", "SW",
    ]
  const countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

  playerPositions.sort()

  const positionOptions = playerPositions.map(position => ({
    value: position,
    label: position
  }));

  const countriesOptions = countries.map(country => ({
    value: country,
    label: country
  }))
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPlayer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChangePos = (selectedOption: any) => {
    setNewPlayer(prevState => ({
      ...prevState,
      position: selectedOption ? selectedOption.value : ''
    }));
  };
  const handleSelectChangeNation = (selectedOption: any) => {
    setNewPlayer(prevState => ({
      ...prevState,
      nation: selectedOption ? selectedOption.value : ''
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:5000/player",{ ...newPlayer, id: Date.now(), checked: false})
    .then(response => {
      console.log("Player added:", response.data);
      fetchPlayer();
    })
    .catch(err => console.log(err))


    setNewPlayer({ name: '', description: '', level: 1, position: '', shirtNumber: 0, nation: 'Vietnam', });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={newPlayer.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={newPlayer.description} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formLevel">
            <Form.Label>Level</Form.Label>
            <Form.Control as="select" name="level" value={newPlayer.level} onChange={handleChange} required>
              {[1,2,3,4,5].map(level => (
                <option key={level} value={level}>{level}</option>
              )
              )}  
            </Form.Control>
          </Form.Group>

          {/* <Form.Group controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control as="select" name="position" value={newPlayer.position} onChange={handleChange} required>
              {playerPositions.map(position => (
                <option key={position} value={position}>{position}</option>
              )
              )}  
            </Form.Control>
          </Form.Group> */}


          <Form.Group controlId="formPosition">
            <Form.Label>Position</Form.Label>
              <Select 
                options={positionOptions}
                name="position"
                value={positionOptions.find(option => option.value === newPlayer.position)}
                onChange={handleSelectChangePos}
                isClearable
              />
          </Form.Group>

          <Form.Group controlId='formNation'>
            <Form.Label>Country</Form.Label>
              <Select
                options={countriesOptions}
                name="nation"
                value={countriesOptions.find(option => option.value === newPlayer.nation)}
                onChange={handleSelectChangeNation}
                isClearable
              />
          </Form.Group>
              
          
          <Form.Group controlId='formShirtNumber'>
            <Form.Label>Shirt Number</Form.Label>
            <Form.Control type="text" name="shirtNumber" value={newPlayer.shirtNumber} onChange={handleChange} required/>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            Add New Player  
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPlayer;