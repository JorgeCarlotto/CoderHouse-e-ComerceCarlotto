
import NavBar from'./components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

// const greet = "Bienvenidos a Betta Fishing Store"

  return <>
  
    <NavBar />
    {/* <ItemListContainer greting={greet} /> */}
    <ItemDetailContainer/>

  
    
    
  </>
}

export default App;
