
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

const greet = "Bienvenidos a Betta Fishing Store"

  return <>
  
    <NavBar />
    <ItemListContainer greting={greet} />
  
    
    
  </>
}

export default App;
