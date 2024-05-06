import { DetailBox, DetailContainer, DetailContent, Detailed, ImgDetails } from "./Guns.styles";

import BP50 from "../../assets/images/BP50.jpg";

export function GunsDetails(){
    return(
        <DetailContainer>
            <DetailBox>
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