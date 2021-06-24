import { createStore } from "redux";
import contactsReducer from "./reducers/contacts";

const store = createStore(contactsReducer);

export default store;
