import styled from "styled-components";




export const MainComponent = styled.main`
background-color: #333;



`;


export const GunsBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Guns = styled.div`
        text-align: center;

    h2{

    }

    h4{
        margin: 0;
        padding: 0;
    }

    ul{
        list-style-type: none;
        padding: 0px 20px;
        margin: 0px 5px;
        max-height: 500px;
        overflow-y: scroll;
    }

    li{
        color: #fff;
        font-weight: 800;
        border: 1px solid #fff;
        margin:0;
        padding: 10px;
        margin: 10px 0px;
        cursor: pointer;
    }

    img{
        width: 300px;
    }
`;