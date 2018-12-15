import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component { 

constructor() {
        super();
        this.state = {
            name: '',
            users: [{ name: 'simran'}, {name: 'john'}],
        };
    }

    handleEditing = (idx) => (evt) => {
        const newusers = this.state.users.map((user, sidx) => {
            if (idx !== sidx) return user;
            return { ...user, name: evt.target.value };
        });

        this.setState({ users: newusers });
    }



    handleAddUser = () => {
        this.setState({
            users: this.state.users.concat([{ name: '' }])
        });
    }

    handleRemoveUser = (idx) => () => {
        this.setState({
            users: this.state.users.filter((s, sidx) => idx !== sidx)
        });
    }

    render() {
        return (
            <form>
                {/* ... */}
                <h3>Phone Directory</h3>

                {this.state.users.map((user, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`User #${idx + 1}`}
                            value={user.name}
                            onChange={this.handleEditing(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveUser(idx)} className="small">x</button>
                    </div>
                ))}
                <br />
                <button type="button" onClick={this.handleAddUser} className="small">Add User</button>
            </form>
        )
    }
}
export default App;
