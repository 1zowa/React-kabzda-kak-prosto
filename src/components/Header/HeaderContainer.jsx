import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getMyProfile} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfile()
    }


    render() {
        console.log(this.props.isAuth)
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {getMyProfile})(HeaderContainer)