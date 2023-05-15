import { createSlice } from "@reduxjs/toolkit"

const time = () => {
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

    if (hours > 12) {
        hours -= 12
        hours = hours > 9 ? hours : `0${hours}`
        return `${hours}:${minutes} PM`
    }

    hours = hours > 9 ? hours : `0${hours}`

    return `${hours}:${minutes} AM`
}

const initialState = {
    users: [

    ],

    messages: [{
        sender: 'companion',
        text: 'hello',
        time: time()
    }],
    newMessageText: '',

    isFetching: false,

    currentPage: 1,
    totalAmount: 0,
    pageLength: 100
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        updateMessageText(state, action) {
            state.newMessageText = action.payload
        },

        sendMessage(state, action) {

            state.messages.push({
                sender: 'you',
                text: state.newMessageText,
                time: time()
            })

            state.newMessageText = ''
        },

        setUsers(state, action) {
            state.users = [...action.payload.users]
        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload.currentPage
        },

        setTotalAmount(state, action) {
            state.totalAmount = action.payload.totalAmount
        },

        toggleIsFetching(state, action) {
            state.isFetching = action.payload
        }
    }
})

export const {
    updateMessageText,
    sendMessage,
    setUsers,
    setCurrentPage,
    setTotalAmount,
    toggleIsFetching } = chatSlice.actions

export default chatSlice.reducer