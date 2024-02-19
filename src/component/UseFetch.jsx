import { useState , useEffect } from "react";
const UseFetch = (url) => {
    const [user, setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {
        console.log("use effect ran");
    const fetchUserData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setUser(data.results[0]);
            setIsLoading(false)
        })
        .catch((err) =>{
            console.log(err);
        });
    }
    fetchUserData()
}, []);
    return {user , isLoading}
}
 
export default UseFetch;