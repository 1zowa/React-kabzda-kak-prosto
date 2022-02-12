import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, SetProfileUsers} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        if (this.props.isAuth === true) {
            this.props.getProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {SetProfileUsers, getProfile}),
    withAuthRedirect
)(ProfileContainer)