import { HeaderComponent } from "./Header.styles" 
import CodImg from "../../assets/images/Call_of_Duty_Warzone_Logo.png";

export function Header(){
    return(
        <HeaderComponent>
                <img src={CodImg}/>
                <h1>Warzone Loadout</h1>
        </HeaderComponent>
    )
}