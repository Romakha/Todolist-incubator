import './App.css';
import {Todolist} from './components/Todolist';

function App() {
  const task1 = [
    {id: 1, title: "HTML&CSS", isDone:true},
    {id: 2, title: "JS", isDone:true},
    {id: 3, title: "React", isDone:false}
  ] 




  return (
    <div className="App">
      <Todolist title="What to learn" tasks={task1}/>
    </div>
  );
}

export default App;

