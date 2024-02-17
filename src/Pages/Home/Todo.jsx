import React from "react";
import NavBar from "../Nav/Nav.jsx";
import TodoHeader from "./TodoHeader";
import TodoSection1 from "./TodoSection1";
import TodoSection2 from "./TodoSection2";

const Todo = () => {



    return (
        <div className="Todo">
            <NavBar />
            <TodoHeader />
            {/* <TodoSection1 /> */}
            <TodoSection2 />
        </div>
    );
};

export default Todo;