import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AddUsers, checkFriendStatusAC, isFetchingAC, MoreUsers, SetUsers} from "../../redux/users-reducer";
import * as axios from "axios";

class UsersC extends React.Component {

    componentDidMount() {
        this.props.isFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=8`)
            .then(response => {
                this.props.SetUsers(response.data.items)
                this.props.isFetchingAC(false)
            })
    }

    moreUsers = () => {
        this.props.isFetchingAC(true)
        this.props.MoreUsers()
        setTimeout(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=8`)
                .then(response => {
                    this.props.AddUsers(response.data.items)
                        this.props.isFetchingAC(false)
                })
        },0)
    }

    render() {
        return (<>
            {this.props.isFetching
                ? <div style={{display:'flex', width:'100%', height: 'calc( 100vh - 107.59px)', justifyContent: 'center', alignItems:'center',position:"fixed",
                    zIndex:2,left: '200px', top: '100px' }}>
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                </div>
                :null}
                <Users users={this.props.users} page={this.props.page}
                       checkFollowStatus={this.props.checkFollowStatus}
                       SetUsers={this.props.SetUsers}
                       MoreUsers={this.moreUsers}
                       AddUsers={this.props.AddUsers}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDisaptchToProps = (dispatch) => {
    return {
        checkFollowStatus: (text, id) => dispatch(checkFriendStatusAC(text,id)),
        SetUsers: (list) => dispatch(SetUsers(list)),
        MoreUsers: () => dispatch(MoreUsers()),
        AddUsers: (list) => dispatch(AddUsers(list)),
        isFetchingAC: (fetch) => dispatch(isFetchingAC(fetch))
    }
}

const UsersContainer = connect(mapStateToProps,mapDisaptchToProps)(UsersC)

export default UsersContainer;
