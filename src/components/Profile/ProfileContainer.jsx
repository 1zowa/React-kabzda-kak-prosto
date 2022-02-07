import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {SetProfileUsers} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then( response => {
                this.props.SetProfileUsers(response.data)
            })
    }

    render() {
        return(
                <Profile {...this.props}/>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps,{SetProfileUsers})(ProfileContainer)