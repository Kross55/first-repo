import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.users
}

export const getStateUsers = createSelector (getUsers, (users) => {//селектор от которого зависим и то что он досттаёт из state
    return users.filter(u => true)//fake фильтрация
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
} 

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
} 

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
} 

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
} 

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
} 