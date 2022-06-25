import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div className={s.users} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;