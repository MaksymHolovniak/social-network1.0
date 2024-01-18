import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />

    }
}


class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.userId;
            }
            if(userId) {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
            }
        }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)