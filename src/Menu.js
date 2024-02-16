import React from 'react'
import styled from 'styled-components'

function Menu() {
  return (
    <MenuStyled>
        <div className="buttons">
            <div className="button">
                <div className="circle light"></div>
                Light
            </div>
            <div className="button">
                <div className="circle dark"></div>
                Dark
            </div>
            <div className="button">
                <div className="circle green"></div>
                Green
            </div>
            <div className="button">
                <div className="circle yellow"></div>
                Yellow
            </div>
        </div>
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    height: 10vh;
    align-items: center;
    .buttons {
        border-top: 3px solid var(--border);
        display: flex;
        align-items: center;
        background-color: var(--bg-menu);
        margin-top: 1rem;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 6px 5px 15px rgba(0,0,0, 0.2);
        .button{
            display: flex;
            align-items: center;
            cursor: pointer;
            &:not(:last-child) {
                margin-right: 2rem;
            }
            .circle {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background-color: var(--circle-color);
                border: 2px solid var(--border);
                margin-right: .3rem;
                display: flex;
                align-items: center;
            }
        }
    }
`;

export default Menu