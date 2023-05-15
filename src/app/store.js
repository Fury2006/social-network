import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chat/chatSlice";
import dialogsReducer from "../features/dialogs/dialogsSlice";

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        dialogs: dialogsReducer
    }
})