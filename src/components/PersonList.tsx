import { Person } from "./Person"
import { Name } from '../types/Person.types';

type PersonListProps = {
  names: Name[]
}
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <Person name={name} />
      ))}
    </div>
  );
}