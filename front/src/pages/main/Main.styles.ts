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
        margin: 5px 5px;
    
    h4{
        margin: 0;
        padding: 0;
    }

    ul{
        position: relative;
        gap: 12px;
        display: flex;
        align-items: center;
        overflow: hidden;
        list-style-type: none;
        padding: 0px;
        margin: 10px 0px;
        padding: 0px 0px;
        border-radius: 0px 0px 10px 10px;
        background-color: #35383d;
        width: 1334px;
        button{
                opacity: 0.1;
            }
       

        &:hover{
            button{
                opacity: 1;
            }
        }
    }


    li{
        position: relative;
        width: 320px;
        margin: 10px 0px;
        height: auto;
        margin-left: 0px;
        color: #fff;
        background-color: #1e2022;
        font-weight: 800;
        border-radius: 5px;
        padding: 10px;
        transition: 0.2s;
        cursor: pointer;

        &:hover{
            background-color: rgba( 0, 0, 0, 0.25);
        }
        
    }

    
`;

export const TextContainer = styled.div`
     
        color: #fff;
        text-align: center;
        background-color: #35383d;
        border-radius: 10px 10px 0px 0px;
        padding: 10px 20px;
        margin: 10px 0px;

        h2{
        font-weight: 900;
        margin: 0;
        padding: 0;
        }
        p{
            margin: 0;
            padding: 0;
        }
`;

export const List = styled.li`
display: none;
`;


export const Tier = styled.div`
    text-align: center;
    border-radius: 9999px;
    width: 30px;
    height: 30px;
    display: flex;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    p{
        font-weight: 900;
        padding: 0;
        margin: 0;
    }
`;

export const Stier = styled(Tier)`
    background-color: #ff7f7f;
    

   
`;

export const ATier = styled(Tier)`
    background-color: #ffbf7f;
`;


export const BTier = styled(Tier)`
    background-color: #ffff7f;
`;


export const Logo = styled.img`
    width: 50px;
    background-color: #555;
    padding: 5px 10px;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;


export const ImgGuns = styled.img`
width: 300px;
`;

