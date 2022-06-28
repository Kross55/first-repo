import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {//создаётся объект единожды
    if(this.props.users.length === 0){
        axios
          .get("https://social-network.samuraijs.com/api/1.0/users")//endpoint
          .then(response => {
            this.props.setUsers(response.data.items)
          })
    }}
    render(){//при каких-то изменениях вызывается рендер
    return (
        <div>
            {this.props.users.map(u => <div className={s.users} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> 
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )}
};

export default Users;