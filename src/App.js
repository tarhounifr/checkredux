import AddTask from './Components/AddTask/AddTask'
import ListTask from './Components/ListTask/ListTask';

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
    <AddTask/>
    <ListTask/>
    </div>
  );
}

export default App;
