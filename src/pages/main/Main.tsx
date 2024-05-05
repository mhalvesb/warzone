import { ATier, Banner, Descriptions, Guns, GunsBox, List, MainComponent,Stier,WarzoneDiv, WarzoneText } from "./Main.styles"

import { LeftButton } from "./functions/SButtons.style";

import { SettingButton } from "./functions/SButtons";

export function Main(){    
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
                        <SettingButton></SettingButton>
                        <li>
                            <Stier><p>S+</p></Stier>
                            <h3>DG 58-LSW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/dg-58-lsw-wzstats-48f81e/gunFullDisplay"></img>
                        </li>
                        <li>
                            <Stier><p>S</p></Stier>
                            <h3>Striker 9</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/striker-9-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li>
                            <Stier><p>S</p></Stier>
                            <h3>MCW</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mcw-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li>
                            <Stier><p>S</p></Stier>
                            <h3>SVA 545</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/sva-545-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li> 
                            <Stier><p>S</p></Stier>
                            <h3>SOA Subverter</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/soa-subverter-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li> 
                            <Stier><p>S</p></Stier>
                            <h3>Mors</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mors-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier>
                            <h3>Pulemyot 762</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/pulemyot-762-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier>
                            <h3>WSP 9</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/wsp-9-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li> 
                            <ATier><p>A</p></ATier>
                            <h3>BP50</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/bp50-bold/gunDisplayLoadouts"></img>
                        </li>
                        <li>
                            <ATier><p>A</p></ATier> 
                            <h3>MTZ-556</h3>
                            <img src="https://imagedelivery.net/BN5t48p9frV5wW3Jpe6Ujw/mtz-556-bold/gunDisplayLoadouts"></img>
                        </li>
                        
                    </ul>
                </Guns>
                <Guns>
                    <h2>AR</h2>
                    <ul>
                    <SettingButton></SettingButton>
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
                    </ul>
                </Guns>
                <Guns>
                    <h2>BR</h2>
                    <ul>
                    <SettingButton/>
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
                    <SettingButton></SettingButton>
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
                    <SettingButton></SettingButton>
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
                    <SettingButton></SettingButton>
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
                    <SettingButton></SettingButton>
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