import styled from "styled-components";

export const Wrapper = styled.div `
    background-color: #F2F4F1;
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 140px 0;
`;

export const SocialBox = styled.div `

`;

export const Menu = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img `
    width: 57px;
    margin-right: 16px;
    cursor: pointer;
`;

export const MenuItem = styled.li `
   list-style: none;
    font-size: 24px;
    color: #373737;
    margin-left:73px;
    padding: 15px;
    border: 5px solid rgba(255, 255, 255, 0);
    cursor: pointer;

    :hover{
        border:5px solid #373737;
       
    }
`;