/* eslint-disable no-unused-vars */
import React from "react"
import {useState} from "react"
import ContactList from "./contactList"

const ContactRow = ({contact}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow
