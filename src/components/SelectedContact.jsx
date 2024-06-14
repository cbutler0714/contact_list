import React from "react";
import axios from "axios";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = React.useState({});

  function handler() {
    setSelectedContactId(null);
  }

  React.useEffect(() => {
    async function getAPIDataAxios() {
      try {
        const response = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        setContact(response.data);
      } catch (error) {
        console.log("error getting API data", error);
      }
    }
    if (selectedContactId) {
      getAPIDataAxios();
    }
  }, [selectedContactId]);
  return (
    <>
      <UserProfile contact={contact} />
      <button onClick={handler}>Back to list</button>
    </>
  );
}

const UserProfile = ({ contact }) => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-info">
        <h2>{contact.name}</h2>
        <p>
          <strong>Username:</strong> {contact.username}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`http://${contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.website}
          </a>
        </p>
      </div>
    </div>
  );
};
