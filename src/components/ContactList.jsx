import React from "react";
import ContactRow from "./ContactRow";
import axios from "axios";


export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    async function getAPIDataAxios() {
      try {
        const response = await axios.get(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        setContacts(response.data);
      } catch (error) {
        console.log("error getting API data", error);
      }
    }
    getAPIDataAxios();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}
