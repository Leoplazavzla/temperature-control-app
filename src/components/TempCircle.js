import styled from "styled-components";

export const TempCircle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: ${props => props.tempColor};
        border: "black";
        border-radius: 50%
        `