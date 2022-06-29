const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialeState = {
  users: [],
  pageSize: 5,        //5 users on the page
  totalUsersCount: 0,
  currentPage: 1      //всегда поиск начинается с первой страницы      //page #3 is current
};

const friendsReducer = (state = initialeState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId) ? { ...u, followed: false } : u)
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId) ? { ...u, followed: true } : u)
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,//чтобы выводилась только та часть юзеров, что мы запросили
      };
    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage: action.currentPage,//перезаписываем текущую страницу, изначально была 3
      }
    case SET_TOTAL_USERS_COUNT:
      return{
        ...state,
        totalUsersCount: action.count,//перезаписываем общее число юзеров, было 0
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });//userId: userId
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setСurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default friendsReducer;
