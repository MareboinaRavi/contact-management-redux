const initialContacts = {
  contacts: [
    {
      name: "Ravi",
      pno: 7702943670,
      mail: "mareboinaravi446@gmail.com",
    },
  ],
  contact: {},
};
const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts };
    }
    case "EDIT_CONTACT": {
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return { ...state, contacts };
    }
    case "DELETE_CONTACT": {
      let contacts = [...state.contacts];
      contacts.splice(action.id, 1);
      return { ...state, contacts };
    }
    case "GET_SINGLE_CONTACT":
      return {
        ...state,
        contact: {
          ...state.contacts[action.index],
          id: action.index,
        },
      };
    default:
      return state;
  }
};

export default contactsReducer;
