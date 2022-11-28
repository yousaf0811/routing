import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
const Userlist = () => {
    const uname = useParams();
    const [usersdata, setUsersdata] = useState([]);
    const userdata = () => {
        console.log(uname.username)
        fetch('https://jsonplaceholder.typicode.com/users/' + uname.username)
            .then(response => response.json())
            .then(json => setUsersdata(json))
    }
    useEffect(() => {
        userdata();
    }, []);
    return (
        <>
            <h1>User List Page</h1>
            <h3>{usersdata.email}</h3>
            <h3>{usersdata.name}</h3>
            <h3>{usersdata.username}</h3>
        </>
    )
}
export default Userlist
