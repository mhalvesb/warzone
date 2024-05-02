import styled from "styled-components";




export const MainComponent = styled.main`
height: 100vh;
background-color: #333;



`;


export const GunsBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const Guns = styled.div`
        text-align: center;
    h4{
        margin: 0;
        padding: 0;
    }

    ul{
        list-style-type: none;
        padding: 0;
    }

    li{
        color: #fff;
        font-weight: 800;
        border: 1px solid #fff;
        margin:0;
        padding: 10px;
        margin: 5px 0px;
        cursor: pointer;
    }

    img{
        width: 300px;
    }
`;