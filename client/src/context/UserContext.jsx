import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [allUsersData, setAllUsersData] = useState(null)
    const getCurrentUser = async () => {
        try {
            let result = await axios.get("http://localhost:3000/api/user/currentUser", {withCredentials: true})
            console.log(result.data)
            setUserData(result.data?.user)
        } catch (error) {
            console.log(error)
            setUserData(null)

        }
    }

    const getAllUsers = async () => {
        try {
            let result = await axios.get("http://localhost:3000/api/user/getAllUsers", {withCredentials: true})
            console.log(result.data)
            setAllUsersData(result.data?.users)
        } catch (error) {
            console.log(error)
            setAllUsersData(null)
        }
    }

    useEffect(() => {
        getCurrentUser()
        getAllUsers()
    }, [])

  return (
    <userDataContext.Provider value={{userData, setUserData, allUsersData, setAllUsersData}}>
        {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
