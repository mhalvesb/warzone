import styled from "styled-components";





export const ImgDetails = styled.img`
    width: 500px;
    margin: auto;
    padding: 10px;
`;

export const DetailContainer = styled.div`
    width: 99vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(10px);
    top: 0;
    right: 0;
    transition: 0.2s;
    animation-name: blur;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @keyframes blur{
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }

    }
`;

export const XButtons = styled.img`
width: 25px;
position: absolute;
right: 10px;
cursor: pointer;
`;


export const DetailBox = styled.div`
    display: flex;
    position: relative;
    height: 500px;
    border-radius: 5px;
    flex-direction: column;
    background-color: rgba(42, 44, 48, 0.6);
    border: 1px solid orange;
    padding: 10px;
    h1{
        margin: 0;
        padding: 0;
        margin: 0 auto;
        color: #fff;
    }
`;

export const DetailContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;


export const Detailed = styled.div`
    background-color: rgba(230,126, 4, 0.1);
    border: 1px solid orange;
    border-radius: 2px;
    border-bottom: 1px solid orange;
    padding: 10px 10px 10px 5px;
    margin: 5px 2px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    p{
        color: rgba(230,126, 4, 1);
        text-transform: uppercase;
        margin: 0;
        padding: 0;
    }

    span{
        color: #999;
    }
`;