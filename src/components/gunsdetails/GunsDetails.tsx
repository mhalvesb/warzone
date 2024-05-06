import { DetailBox, DetailContainer, DetailContent, Detailed, ImgDetails, XButtons, } from "./Guns.styles";

import styled from "styled-components";

import BP50 from "../../assets/images/BP50.jpg";
import XButton from "../../assets/icons/remove.png";
import { useEffect, useState } from "react";


export function GunsDetails({ callFunction}: {callFunction: () => void}){
    
    
    function handleVisibility(){
        callFunction();
    }

    return(
        <DetailContainer>
            <DetailBox>
                <XButtons onClick={() => handleVisibility()} src={XButton}></XButtons>
                <h1>LOCKWOOD 680</h1>
            <ImgDetails src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-48f81e/gunFullDisplay"></ImgDetails>
                <DetailContent>
                    <Detailed>
                        <p>Cano Pesado Lore-9</p>
                        <span>Cano</span>
                    </Detailed>

                    <Detailed>
                        <p>Silenciador VT-7 SP</p>
                        <span>Boca</span>
                    </Detailed>

                    <Detailed>
                        <p>Projéteis OTAN 5.56</p>
                        <span>Munição</span>
                    </Detailed>

                    <Detailed>
                        <p>Carregador de 45 Projéteis</p>
                        <span>Carregador</span>
                    </Detailed>

                    <Detailed>
                        <p>Fita Aderente TRST</p>
                        <span>Cabo</span>
                    </Detailed>
                </DetailContent>
            </DetailBox>
                
        </DetailContainer>
    )
}