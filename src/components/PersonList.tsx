import { Person } from "./Person"

type PersonListProps = {
  names: {
    first: string,
    last: string
  }[]
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