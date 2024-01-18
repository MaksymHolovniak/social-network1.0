import { connect } from 'react-redux';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }
    onNextPage = (currentPage) => {
        let nextPage = currentPage + 1;
        this.props.requestUsers(nextPage, this.props.pageSize)
    }

    onBottomPage = (currentPage) => {
        let bottomPage = currentPage - 1;
        this.props.requestUsers(bottomPage, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : 
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onBottomPage={this.onBottomPage}
                onPageChanged={this.onPageChanged}
                onNextPage={this.onNextPage}
                followingInProgress={this.props.followingInProgress}
            />
        }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, {follow, unfollow, requestUsers}),
    withAuthRedirect   
)(UsersContainer)