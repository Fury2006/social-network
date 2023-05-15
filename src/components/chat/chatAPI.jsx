import ChatRouter from "./chatRouter";
import axios from 'axios'
import React from "react"


class ChatAPI extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLength}&page=${this.props.currentPage}`)
            .then(response => {

                this.props.setUsers({
                    users: response.data.items
                })

                this.props.setTotalAmount({
                    totalAmount: response.data.totalCount
                })
            })
    }

    onPageChanged = (pageNumber) => {

        this.props.toggleIsFetching(true)
        this.props.setUsers({
            users: []
        })

        
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLength}&page=${pageNumber}`)
            .then(response => {

                this.props.toggleIsFetching(false)

                this.props.setUsers({
                    users: response.data.items
                })

                this.props.setTotalAmount({
                    totalAmount: response.data.totalCount
                })
            })
    }


    render() {
        return (
            <ChatRouter { ...this.props } />
        )
    }
}

export default ChatAPI;