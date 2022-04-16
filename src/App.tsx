import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const nameList = [
    {
      first: "Trung",
      last: "Nguyen",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Trung" messageCount={20} isLoggedIn={true} />
      <PersonList names={nameList} /> */}
      <Status status="error" />
      <Heading>Place holder</Heading>
      <Oscar>
        <Heading>heading component</Heading>
      </Oscar>
      <Greet name='Trung' isLoggedIn={false} />
    </div>
  );
}

export default App;
