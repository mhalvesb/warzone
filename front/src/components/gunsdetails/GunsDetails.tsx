import { DetailBox, DetailContainer, DetailContent, Detailed, ImgDetails, XButtons, } from "./Guns.styles";

import styled from "styled-components";
import React from "react";
import BP50 from "../../assets/images/BP50.jpg";
import XButton from "../../assets/icons/remove.png";
import { useEffect, useState } from "react";


import Axios from "axios";

type GunsProps =
{
    callFunction: () => void;
    gunNames: string;
}

interface GunsData {
    gunName: string;
    gunImg: string;
    gunAttachments: [
        {
            attachName: string;
            attachment: string;
        }
    ];
}

export function GunsDetails({ callFunction, gunNames}: GunsProps){
    const [dados, setDados] = useState<GunsData[]>([]);
    const [data, setData] = useState<GunsData | null>(null);
    
    

    


    useEffect(() =>{
            const fetchData = async () =>{
            const response = await Axios.get("http://localhost:8080/");
            setDados(response.data);
            }
            fetchData();
    }, []);


    useEffect(() =>{
        dados.map((item, index) =>{
            if(item.gunName === gunNames){
                setData(item);
            }
        });
    }, [dados, gunNames]);


    function handleVisibility(){
        callFunction();
    }

    return(
        <DetailContainer>
            <DetailBox>
                <XButtons onClick={() => handleVisibility()} src={XButton}></XButtons>
                <h1>{data && data.gunName}</h1>
            <ImgDetails src={data && data.gunImg}></ImgDetails>
                <DetailContent>
                    {data && data.gunAttachments.map((item, index) =>{
                        return(
                            <Detailed key={index}>
                                <p>{item.attachName}</p>
                                <span>{item.attachment}</span>
                            </Detailed>
                        )
                    })}
                    

                    
                </DetailContent>
            </DetailBox>
                
        </DetailContainer>
    )
}