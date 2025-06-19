import { useState } from 'react';
import './App.css';
import { data } from './Data';

function App() {
  const [gifts, setGifts] = useState(data);
  console.log(data)
  return (
    <div>
    <div className="container">
      <h1>List of {gifts.length} gifts</h1>
    </div>

       {gifts.map((element => {
      const {id, gifty, image} = element;

      return(<div key={id}>
        <div className="container">
        <h2> {id} - {gifty} </h2>
        </div>
        <div className="container">
        <img src={image} width="300px" alt='various gifts'/>  
        </div>
        <div className="container">
          <button>add</button>
        </div>
      </div>)
    }))}
     <div className="container">
    <button onClick={()=> setGifts([])}>Delete all</button>
    </div>
    </div>
  );
}

export default App;
