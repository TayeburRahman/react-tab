import React, { useEffect, useState } from 'react';
import DetailsModal from './DetailsModal';
import Modals from './Modal'; // Make sure to provide the correct path to your Modal component

const Problem2 = () => {
    const [showAllContactsModal, setShowAllContactsModal] = useState(false);
    const [showUSContactsModal, setShowUSContactsModal] = useState(false); 
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [allContacts, setAllContacts] = useState([]);
    const [showContactDetailsModal, setShowContactDetailsModal] = useState(false);
    const [usContacts, setUSContacts] = useState([]);

    // Fetch contacts from API
    const fetchContacts = async (country = '') => {
        try {
            const response = await fetch(`https://contact.mediusware.com/api${country ? `/country-contacts/${country}/` : '/contacts/'}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data.results || [];
        } catch (error) {
            console.error('Error fetching contacts:', error);
            return [];
        }
    };

    useEffect(() => {
        const loadContacts = async () => {
            const allContactsData = await fetchContacts('');
            const usContactsData = await fetchContacts('United States');

            setAllContacts(allContactsData);
            setUSContacts(usContactsData);
        };

        loadContacts();
    }, []);

    

    const handleAllContacts = () => {
        setShowUSContactsModal(false);
        setShowAllContactsModal(true);
    };

    const handleUSContact = () => {
        setShowAllContactsModal(false);
        setShowUSContactsModal(true);

    };
 

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setShowContactDetailsModal(true);
      };
    

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

 


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={handleAllContacts}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" onClick={handleUSContact}>US Contacts</button>
                </div>
            </div>


            <Modals setShow={setShowAllContactsModal} show={showAllContactsModal} handleAllContacts={handleAllContacts} handleUSContact={handleUSContact} >
                <h5>All Contacts</h5>
                {allContacts.map((contact) => (
                    <div className='listItem' key={contact.id} onClick={() => handleContactClick(contact)}
                    style={{cursor: "pointer", marginTop: "5px"}}
                    >
                        {contact.name} - {contact.phone}
                    </div>
                ))}
                
            </Modals>

            <Modals setShow={setShowUSContactsModal} show={showUSContactsModal} handleAllContacts={handleAllContacts}  handleUSContact={handleUSContact} >
                <h5>US Contacts</h5>
                {usContacts.map((contact) => (
                    <div className='listItem' key={contact.id} onClick={() => handleContactClick(contact)}
                    style={{cursor: "pointer", marginTop: "5px"}}
                    >
                        {contact.name} - {contact.phone}
                    </div>
                ))}

                
            </Modals>

            <DetailsModal setShow={setShowContactDetailsModal} show={showContactDetailsModal}>
        {/* Content for Modal C */}
        <h5>Contact Details</h5>
        {/* Display details of the selectedContact */}
        {selectedContact && (
          <div>
            Name: {selectedContact.name}
            <br />
            Phone: {selectedContact.phone}
            <br />
            Country: {selectedContact.country.name}
          </div>
        )}
      </DetailsModal>
        </div>
    );
};

export default Problem2;
