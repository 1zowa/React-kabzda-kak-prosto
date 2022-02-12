import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followUnfollow, getUsers, moreUsers} from "../../redux/users-reducer";
import Spinner from "../common/Spinner/Spinner";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersC extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    moreUsers = () => {
        this.props.moreUsers(this.props.page)
    }

    followOrUnfollow = (id) => {
        this.props.followUnfollow(id)
    }

    render() {
        return (<>
                {this.props.isFetching
                    ? <div style={{position: 'absolute'}}><Spinner/></div>
                    : null}
                <Users {...this.props} moreUsers={this.moreUsers}
                       followOrUnfollow={this.followOrUnfollow}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {getUsers,moreUsers,followUnfollow}),
    withAuthRedirect
)(UsersC);
