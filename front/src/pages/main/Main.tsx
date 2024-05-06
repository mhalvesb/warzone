import { ATier, Banner, Descriptions, Guns, GunsBox, ImgGuns, List, Logo, MainComponent,Stier,TextContainer,WarzoneDiv, WarzoneText } from "./Main.styles"

import { LeftButton } from "./functions/SButtons.style";
import React from "react";
import { GunsDetails } from "../../components/gunsdetails/GunsDetails";

import { SettingButton } from "./functions/SButtons";
import { useState } from "react";

export function Main(){    

    const [visible, setVisible] = useState(false);
    const [gunName, setGunName] = useState("");
    function toggleVisibility(e){
        if(e){
            const list = e.target.parentNode;
            const gunName = list.querySelector("h3").textContent;
            setGunName(gunName);
        }
        
        setVisible(!visible);
    }

    return(
        <MainComponent>
            {visible && <GunsDetails callFunction={() => toggleVisibility()} gunNames={gunName}/>}
            <Banner>
            </Banner>
            <Descriptions>
                <ul>
                        <li>All</li>
                        <li>AR</li>
                        <li>BR</li>
                        <li>SMG</li>
                        <li>Shotgun</li>
                        <li>Rifle</li>
                        <li>Handgun</li>
                </ul>
            </Descriptions>

            <GunsBox>
            <Guns>
                    <TextContainer>
                        <h2>TOP 10 GUNS</h2>
                        <p>The Best Warzone Guns</p>
                    </TextContainer>
                    
                    <ul>
                        <SettingButton></SettingButton>
                        <li onClick={(e) => toggleVisibility(e)}>
                            <Stier><p>S+</p></Stier>
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-48f81e/gunFullDisplay"></ImgGuns>
                        </li>
                        <li onClick={(e) => toggleVisibility(e)}>
                            <Stier><p>S</p></Stier>
                            <h3>Striker 9</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/striker-9-bold/gunDisplayLoadouts"></ImgGuns>
                            <Logo src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1156eb6d-fb3d-49a1-848c-6fd3ab609fa7/dfpl99f-61415288-f2f5-4e5b-9386-4cccd6f49bad.png/v1/fill/w_1280,h_634/call_of_duty__modern_warfare_iii___logo__2023__by_wesleyvianen_dfpl99f-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM0IiwicGF0aCI6IlwvZlwvMTE1NmViNmQtZmIzZC00OWExLTg0OGMtNmZkM2FiNjA5ZmE3XC9kZnBsOTlmLTYxNDE1Mjg4LWYyZjUtNGU1Yi05Mzg2LTRjY2NkNmY0OWJhZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qrq4Z6I89BAY21aJrWZrjh83K-1NK9BwK8DqQ4XfbTU"></Logo>
                        </li>
                        <li onClick={(e) => toggleVisibility(e)}>
                            <Stier><p>S</p></Stier>
                            <h3>MCW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mcw-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li onClick={(e) => toggleVisibility(e)}>
                            <Stier><p>S</p></Stier>
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/sva-545-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li onClick={(e) => toggleVisibility(e)}> 
                            <Stier><p>S</p></Stier>
                            <h3>SOA Subverter</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/soa-subverter-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li> 
                            <Stier><p>S</p></Stier>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier>
                            <h3>Pulemyot 762</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier>
                            <h3>WSP 9</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/wsp-9-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li> 
                            <ATier><p>A</p></ATier>
                            <h3>BP50</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/bp50-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier> 
                            <h3>MTZ-556</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mtz-556-bold/gunDisplayLoadouts"></ImgGuns>
                        </li>
                        
                    </ul>
                </Guns>
                <Guns>
                <TextContainer>
                        <h2>TOP AR</h2>
                        <p>The Best Warzone AR</p>
                </TextContainer>
                    <ul>
                    <SettingButton></SettingButton>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></ImgGuns>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></ImgGuns>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                <TextContainer>
                        <h2>TOP BR</h2>
                        <p>The Best Warzone BR</p>
                </TextContainer>
                    <ul>
                    <SettingButton/>
                        <li>
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                        </li>
                        <li>
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                            </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                        </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                
                    <h2>SMG</h2>
                    <ul>
                    <SettingButton></SettingButton>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                
                    <h2>Shotgun</h2>
                    <ul>
                    <SettingButton></SettingButton>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>Rifle</h2>
                    <ul>
                    <SettingButton></SettingButton>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>Handgun</h2>
                    <ul>
                    <SettingButton></SettingButton>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <ImgGuns src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></ImgGuns>
                        </li>
                    </ul>
                </Guns>
            </GunsBox>
        </MainComponent>
    )
}