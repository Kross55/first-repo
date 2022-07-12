import React from 'react'
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditeMode = () => {  //обычно метод создаётся - activateEditeMode(), это экспериментальный вариант, но он работает
        this.state.editMode = true
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditeMode }>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus