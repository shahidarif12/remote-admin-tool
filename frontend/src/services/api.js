import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Update if using a different backend address

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return null;
    }
};

export const getDevices = async () => {
    try {
        const response = await axios.get(`${API_URL}/devices`);
        return response.data;
    } catch (error) {
        console.error("Error fetching devices:", error);
        return null;
    }
};
