import styled from 'styled-components'

function Menu({setTheme}) {
  return (
    <MenuStyled>
        <div className="buttons">
            <div className="button" onClick={() => setTheme('light')}>
                <div className="circle light"></div>
                <p className='text-color'>Light</p>
            </div>
            <div className="button" onClick={() => setTheme('dark')}>
                <div className="circle dark"></div>
                <p className='text-color'>Dark</p>
            </div>
            <div className="button" onClick={() => setTheme('green')}>
                <div className="circle green"></div>
                <p className='text-color'>Green</p>
            </div>
            <div className="button" onClick={() => setTheme('yellow')}>
                <div className="circle yellow"></div>
                <p className='text-color'>Yellow</p>
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
        box-shadow: var(--box-sh);
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
            .text-color{
                color: var(--text-color);
            }
        }
    }
`;

export default Menu