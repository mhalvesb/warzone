import styled from "styled-components";


export const ButtonDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const leftRightButtons = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    z-index: 1;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.15);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    transition: 0.2s;
    &:hover{
        background-color: rgba( 255, 140, 0, 0.95);
    }
`;


export const LeftButton = styled(leftRightButtons)`
   left: 15px;
    

    img{
        width: 30px;
        pointer-events: none;
    }

`;

export const RightButton = styled(leftRightButtons)`
    right: 15px;

    img{
        width: 30px;
        pointer-events: none;
    }
`;