import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/filterSelector";

export const selectContact = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContact = createSelector(
    [selectContact, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
)