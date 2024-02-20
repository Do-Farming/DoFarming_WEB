import React, { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from "../Nav/Nav.jsx";
import TodoHeader from "./TodoHeader";
import TodoSection1 from "./TodoSection1";
import TodoSection2 from "./TodoSection2";

const Todo = () => {
    const [hasTrack, setHasTrack] = useState(false);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const token = localStorage.getItem('authToken'); 

                const response = await axios.get(
                    'https://dofarming.duckdns.org/api/v1/track',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                setHasTrack(response.data.length > 0);
            } catch (error) {
                console.error('Error fetching track:', error);
            }
        };

        fetchTrack();
    }, []);

    return (
        <div className="Todo">
            <NavBar />
            <TodoHeader />
            {hasTrack ? <TodoSection2 /> : <TodoSection1 />}
        </div>
    );
};

export default Todo;
