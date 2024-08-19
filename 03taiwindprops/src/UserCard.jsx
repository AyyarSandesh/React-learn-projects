import { useDeferredValue } from "react";

function UserCard({ name, age, location }) {
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
  export default UserCard;