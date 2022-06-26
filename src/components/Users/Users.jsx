import React from "react";
import s from "./User.module.css";

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    return props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg",
        followed: false,
        fullName: "Ivan",
        status: "I am a boss",
        location: { country: "Ukraine", city: "Odesa" },
      },//u
      {
        id: 2,
        photoUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg",
        followed: true,
        fullName: "Slava",
        status: "I am a boss too",
        location: { country: "Ukraine", city: "Sarata" },
      },//u
      {
        id: 3,
        photoUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg",
        followed: false,
        fullName: "Igor",
        status: "I am a boss too",
        location: { country: "Ukraine", city: "Vinnica" },
      }//u
    ])
   }
  debugger;
  return <div> 
        {props.users.map( u => <div className={s.users} key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed
                  ? <button onClick={ () => {props.follow(u.id)}}>Follow</button>
                  : <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      )}
    </div>
};

export default Users;
