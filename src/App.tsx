import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* <Greet name="Trung" messageCount={20} isLoggedIn={true} />*/}
      <PersonList names={nameList} />
      {/* <Status status="error" />
      <Heading>Place holder</Heading>
      <Oscar>
        <Heading>heading component</Heading>
      </Oscar>
      <Greet name='Trung' isLoggedIn={false} /> */}
      <Button
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      ></Button>

      <Input value="" handleChange={(event) => console.log(event)} />

      <Container
        styles={{ border: "1px solid #f1f1f1", padding: 20, display: "block" }}
      ></Container>
    </div>
  );
}

export default App;
