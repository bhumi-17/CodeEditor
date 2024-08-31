//components
import Home from "./components/home.jsx";
import DataProvider from "./context/DataProvider.jsx";
function App() {
  return (
       <DataProvider>  
           <Home />
       </DataProvider>
  

 
  );
}

export default App;
