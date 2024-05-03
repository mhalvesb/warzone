import { Banner, Descriptions, Guns, GunsBox, LeftButton, List, MainComponent, RightButton, WarzoneDiv, WarzoneText } from "./Main.styles"


import leftArrow from "../../assets/icons/left-arrow.png";
import rightArrow from "../../assets/icons/right-arrow.png";

import {useState, useEffect} from "react";
import { listeners } from "process";

export function Main(){
    const [selectedLi, setSelectedLi] = useState(null);
    const [margin, setMargin] = useState(0);
    const [liIndex, setLiIndex] = useState(1);

    function setRight(event: any){
        const uls = event.target.parentNode.parentNode;
        const li = uls.querySelectorAll("li");
        const liCalc = Math.ceil((li.length / 2));
        console.log(liCalc);
        if(liIndex <= liCalc){
            setLiIndex( liIndex + 1);
            const newMargin = margin - 332;
            setMargin(margin - 332);
            
            li.forEach((list: HTMLElement) =>{
            list.style.left = `${newMargin}px`;
            });
            }
    }

    function setLeft(event: any){
        const uls = event.target.parentNode.parentNode;
        const li = uls.querySelectorAll("li");
        console.log(liIndex);
        if(liIndex > 1){
            const newMargin = margin + 332;
            setMargin(margin + 332);
            setLiIndex(liIndex - 1);
            li.forEach((lis: HTMLElement) =>{
            lis.style.left = `${newMargin}px`
            });
        }
        
    }

    useEffect(()=>{
        
    }, [margin, selectedLi]);
    

    return(
        <MainComponent>
            <Banner>
            </Banner>
            <Descriptions>
                <WarzoneDiv>
                    <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/lat3.png"></img>
                    <WarzoneText>
                        <h3>Warzone Best Loadouts</h3>
                        <h6>Last update 3 minutes ago</h6>
                    </WarzoneText>
                </WarzoneDiv>
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
                    <h2>TOP 10 GUNS</h2>
                    <ul>
                        <LeftButton onClick={(e) => setLeft(e)}><img src={leftArrow}></img></LeftButton>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay"></img>
                        </li>
                        
                        <RightButton onClick={(e) => setRight(e)}><img src={rightArrow}></img></RightButton>
                    </ul>
                </Guns>
                <Guns>
                    <h2>AR</h2>
                    <ul>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-4a5ba1/gunFullDisplay"></img>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>BR</h2>
                    <ul>
                        <li>
                            <h3>SVA 545</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></img>
                        </li>
                        <li>
                            <h3>SVA 545</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></img>
                        </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></img>
                            </li>
                        <li> 
                            <h3>SVA 545</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-wzstats-ca92ee/gunFullDisplay"></img>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>SMG</h2>
                    <ul>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>Shotgun</h2>
                    <ul>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>Rifle</h2>
                    <ul>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                    </ul>
                </Guns>
                <Guns>
                    <h2>Handgun</h2>
                    <ul>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                        <li>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-wzstats-4ac79b/gunFullDisplay" alt="striker 9"></img>
                        </li>
                    </ul>
                </Guns>
            </GunsBox>
        </MainComponent>
    )
}