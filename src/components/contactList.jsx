/* eslint-disable no-unused-vars */
import React from "react"
import {useState} from "react"
import ContactRow from "./contactRow"
import { useEffect } from "react";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

const ContactList = ({setSelectedContactId}) => {

    const [contacts, setContacts] = useState(dummyContacts);

    // as the first argument, useEffect takes a function, as the second argument it takes an array
    // in this case, an empty dependency array to ensure out component will rin the effect
    // only once after the component has mounted

    // define an async function that fetches our data and sets it into state
    // use a try/catch statement which console.error's the potential error
    useEffect(() => {
      async function fetchContacts () {
        try {
          const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
          const result = await response.json();
          // use the setContacts updater function to update the state (contacts) on the website
          // we have it set to the result we got from fetching the API
          setContacts(result);
        } catch (error) {
          console.error(error);
        }
      }
      // don't forget to call the function after you have defined it
      fetchContacts()
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
                    // map over the contacts array (this is the state)
                    // for each contact, return a ContactRow component
                    // pass the signle contact into the component as a prop
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

export default ContactList;
