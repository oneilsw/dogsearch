import React, {useState} from 'react';
import './App.css';
import Search from './Search'
import PictureGallery from './PictureGallery'

const App = () => {

  const [ breed, setBreed ] = useState("");
  const [sources, setSources] = useState([]);

  const getBreed = (selectedBreed) => {
    setBreed(selectedBreed)
    // console.log(breed, selectedBreed);
    getSources()
  }

  const getSources = () => {
    let arrayOfSources = "";
    // for(var i=1; i >= 9; i++) {
      fetch(`https://dog.ceo/api/breed/` + breed + `/images/random`)
      .then(r=>r.json())
      .then(data=>{ console.log(data.message);
        arrayOfSources = data.message;
        
      })
    // }
    console.log(arrayOfSources)
  }

  return (
    <div className="App">
      <Search getBreed={getBreed}/>
      <PictureGallery sources={sources}/>
    </div>
  );
}

export default App;
