import styled from "styled-components";




export const MainComponent = styled.main`
background-color: #111;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;


export const Banner = styled.div`
    width: 70vw;
    margin: 20px 0px;
    

    img{
        width: 100%;
    }
`;

export const Descriptions = styled.div`
    width: 70vw;
    margin: 50px 0px;
    background-color: #2A2C30;
    padding: 10px 10px;
    border-radius: 10px 10px 0px 0px;
    text-align: flex-start;
    p{
        text-align: center;
        color: #fff;
        margin: 0 0;
        padding: 0 0;
    }

    img{
        width: 200px;
    }
    ul{
        list-style-type: none;
        display: flex;
        gap: 0.5rem;
        color: #fff;
    }

    li{
        padding: 10px 20px;
        background-color: #111;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s;
        &:hover{
            background-color: rgba( 255, 140, 0, 0.95);
        }
    }
`;

export const WarzoneDiv = styled.div`
    display: flex;
    color: #fff;
    margin: 10px 0px;
    
`;

export const WarzoneText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: #9D9FA1;
     h3{
        margin: 0 5px;
        padding: 0;
        color: #fff;
    }

    h6{
        margin: 0 5px;
        padding: 0;
    }
`;

export const GunsBox = styled.div`
    
    
    background-color: #2A2C30;
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 0px 0px 10px 10px;
`;

export const Guns = styled.div`
    width: 100%;
        text-align: flex-start;
        margin: 5px 5px;

    h2{
        color: #fff;
        font-weight: 600;
        background-color: #35383d;
        border-radius: 10px 10px 0px 0px;
        padding: 10px 20px;
        margin: 10px 5px;
    }

    h4{
        margin: 0;
        padding: 0;
    }

    ul{
        position: relative;
        display: flex;
        gap: 0.725rem;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        list-style-type: none;
        padding: 0px;
        margin: 10px 5px;
        padding: 0px 10px;
        border-radius: 0px 0px 10px 10px;
        background-color: #35383d;
    }


    li{
        position: relative;
        width: 320px;
        margin: 10px 0px;
        height: auto;
        color: #fff;
        background-color: #1e2022;
        font-weight: 800;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }

    img{
        width: 300px;
    }
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
    }

`;

export const RightButton = styled(leftRightButtons)`
    right: 15px;
    

    img{
        width: 30px;
    }
`;