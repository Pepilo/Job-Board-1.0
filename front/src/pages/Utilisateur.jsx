import ky from "ky";
import { useState, useEffect } from "react";

export function Utilisateur() {
    const [data, setData] = useState();
    const [ payload, setPayload ] = useState();

    const getAnnonces = async () => {
        try {
            const data = await ky.get(`http://localhost:8080/${payload.user_role}/${payload.id}`).json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        const token = localStorage.getItem('Authorization');
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 
        setPayload(JSON.parse(window.atob(base64)));
    }, [])
    
    useEffect(() => {
        if (payload) {
            console.log(payload);
            getAnnonces();
        }
      }, [payload]);
      

    return (
        <>

        </>
    )
}