/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ContactList from './components/contactList'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Contact selected:</div>
      ) : (
        <ContactList />
        )}
    </>
  );
}

export default App
