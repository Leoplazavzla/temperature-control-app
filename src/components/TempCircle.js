import styled from "styled-components";

export const TempCircle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
        width: 250px;
        height: 250px;
        background-color: ${props => props.tempColor};
        border: solid white 8px;
        border-radius: 50%
        `