import { useState } from 'react';
import './App.css';
import ShowButton from './components/ShowButton';
import ShowPhrase from './components/ShowPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json';

function App() {
  
  const quote = randomArr(arr);
  const [randomPhrase, setrandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr)
  const [image, setImage] = useState(photo)

  const appStyles = {
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`,
  }

  return (
     <div className='app' style={appStyles}>
      <h1 className='app_title'>Galleta de la Fortuna</h1>
      <ShowButton
        setrandomPhrase = {setrandomPhrase}
        setImage = {setImage}   
      />
      <ShowPhrase
        randomPhrase = {randomPhrase}      
      />
     </div> 
  )
}

export default App
