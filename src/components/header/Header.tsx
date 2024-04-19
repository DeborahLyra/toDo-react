import styled from "styled-components"
import Logo from '../../assets/Logo.png'

export default function Header() {
    return (
        <HeaderContent>
            <div>
               <img src={Logo} alt='logotipo ToDo'/>
            </div>

        </HeaderContent>
    )
}

const HeaderContent = styled.header`
    width: 100%;
    height: 12.5rem;
    background-color: var(--gray-700);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 7.875rem;
        height: 3rem;
    }
`