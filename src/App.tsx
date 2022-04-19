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
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from "./components/context/User";
import { MutableRef } from './components/ref/MutableRef';
import { List } from './components/generics/List'
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

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
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="error" />
      <Heading>Place holder</Heading>
      <Oscar>
        <Heading>heading component</Heading>
      </Oscar>
      <Greet name='Trung' isLoggedIn={false} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      ></Button> */}

      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* 
      <Container
        styles={{ border: "1px solid #f1f1f1", padding: 20, display: "block" }}
      ></Container> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <MutableRef /> */}
      {/* <List items={["Hello", "Trung", "Nguyen"]} onClick={item => console.log(item)} /> */}
      {/* <List items={[1, 2, 3, 4, 5, 5]} onClick={item => console.log(item)} /> */}
      {/* <List items={[{ first: "Trung", last: 'Nguyen' }, { first: "Trung2", last: 'Nguyen2' }]} onClick={item => console.log(item)} /> */}
      {/* <RandomNumber value={0} isPositive /> */}
      {/* <Toast position="center" /> */}
      {/* <CustomButton variant="primary">
        click me
      </CustomButton> */}
      <Text com="h1" size="lg">Heading</Text>
      <Text com="p" size="md">paragraph</Text>
      <Text com="label" htmlFor="id" size="sm" color="secondary">label</Text>
    </div>
  );
}

export default App;
