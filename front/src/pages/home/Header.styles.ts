import styled from "styled-components";


export const HeaderComponent = styled.header`
    background-color: #222;
    width: 100%;
    color: #111;
    gap: 2rem;
    padding: 10px 0px;
    overflow: hidden;

    h1{
        color: #fff;
        margin: 0;
        padding: 0;
    }

    img{
        width: 100px;
        height: auto;
    }

`;


export const HeaderContent = styled.div`
    width: calc(70vw);
    margin: auto;
    display: flex;
    justify-content: space-between;
`;
