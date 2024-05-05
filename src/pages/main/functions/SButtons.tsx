import React, { useState} from "react";

import { ButtonDiv, LeftButton, RightButton } from "./SButtons.style";

import leftArrow from "../../../assets/icons/left-arrow.png";
import rightArrow from "../../../assets/icons/right-arrow.png";


export const SettingButton = () =>{

    const [margin, setMargin] = useState(0);
    const [liIndex, setLiIndex] = useState(1);

        const setRight = (event: any) =>{
        console.log(liIndex);
        const uls = event.target.parentNode.parentNode;
        const li = uls.querySelectorAll("li");
        const liCalc = Math.ceil((li.length / 2));
        
        if(liIndex <= liCalc){
            const newLiIndex = liIndex + 1;
            setLiIndex(newLiIndex);
            const newMargin = margin - 332;
            setMargin(margin - 332);
            
            li.forEach((list: HTMLElement) =>{
            list.style.left = `${newMargin}px`;
            });
            }
    }
    
        const setLeft = (event: any) =>{
        const uls = event.target.parentNode.parentNode;
        const li = uls.querySelectorAll("li");
        console.log(liIndex);
        if(liIndex > 1){
            console.log(liIndex);
            const newMargin = margin + 332;
            const newLiIndex = liIndex - 1;
            setMargin(margin + 332);
            setLiIndex(newLiIndex);
            li.forEach((lis: HTMLElement) =>{
            lis.style.left = `${newMargin}px`
            });
        }
    }
    return(
        <ButtonDiv>
            <LeftButton onClick={setLeft}><img src={leftArrow}></img></LeftButton>
            <RightButton onClick={setRight}><img src={rightArrow}></img></RightButton>
        </ButtonDiv>
        
    )
}



