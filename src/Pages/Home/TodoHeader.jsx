import React from "react";
import styled from "styled-components";

const TodoHeaderBlock = styled.div`
    margin-top: 4vh;
    margin-left: 6vw;
    font-size: 1.56rem;

    @media all and (min-width: 300px) and (max-width: 1023px) {
        margin-top: 4vh;
        margin-left: 6vw;
        font-size: 1.56rem;
    }
`;

const TodoHeader1 = () => {
    return (
        <TodoHeaderBlock>
            <div>루틴 이름</div>
            {/* 패키지 이름 받아오기 */}
        </TodoHeaderBlock>
    );
};

export default TodoHeader1;  
