import React, { useEffect, useState } from "react";
import { getUsers, getDevices } from "./services/api";

function App() {
    const [users, setUsers] = useState([]);
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data?.users || []));
        getDevices().then(data => setDevices(data?.devices || []));
    }, []);

    return (
        <div>
            <h1>Remote Admin Panel</h1>
            
            <h2>Users:</h2>
            {users.length > 0 ? (
                <ul>{users.map((user, index) => <li key={index}>{user}</li>)}</ul>
            ) : (
                <p>Loading or No Users Found</p>
            )}

            <h2>Devices:</h2>
            {devices.length > 0 ? (
                <ul>{devices.map((device, index) => <li key={index}>{device}</li>)}</ul>
            ) : (
                <p>Loading or No Devices Found</p>
            )}
        </div>
    );
}

export default App;
