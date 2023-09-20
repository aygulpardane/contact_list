/* eslint-disable no-unused-vars */
import React from "react"
import {useState} from "react"
import ContactList from "./contactList"

// here we will render a separate ContactRow component for each contact in the ContactList component
// make sure to pass the data down as props
const ContactRow = ({setSelectedContactId, contact}) => {
    return (
        <tr
            onClick={() => {
                setSelectedContactId(contact.id);
            }}
        >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow
