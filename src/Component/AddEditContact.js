import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/actions/contacts-action";
import { editContact } from "../redux/actions/contacts-action";

const AddEditContact = ({ addContact, editContact, editContactData }) => {
  useEffect(() => {
    setContact(editContactData);
  }, [editContactData]);
  const closeref = useRef();
  const [contact, setContact] = useState({
    name: "",
    pno: "",
    mail: "",
  });
  const handleChange = (name, value) => {
    const oldContacts = { ...contact };
    oldContacts[name] = value;
    setContact(oldContacts);
  };
  const handleSubmit = (contact) => {
    if (contact.id !== null && contact.id !== undefined) {
      editContact(contact, contact.id);
      let oldcontact = { ...contact };
      oldcontact.id = null;
      setContact(oldcontact);
    } else {
      addContact(contact);
    }
    setContact({
      name: "",
      pno: "",
      mail: "",
    });
    closeref.current.click();
  };
  return (
    <div>
      <div className="modal-dialog modal-dialog-center">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add / Edit Contact
            </h5>
            <button
              ref={closeref}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* form */}
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="John deo"
                  value={contact.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="+91 1234567890"
                  value={contact.pno}
                  onChange={(e) => handleChange("pno", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="johndeo@gmail.com"
                  className="form-control"
                  id="exampleInputPassword2"
                  value={contact.mail}
                  onChange={(e) => handleChange("mail", e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSubmit(contact)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AddEditContact;
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact, id) => dispatch(editContact(contact, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEditContact);
