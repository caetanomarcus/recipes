import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 35px;
    width: 100%;
    height: 140vh;
    color: #373737;
`;

export const Container = styled.div `
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 40%;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const TopHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 60px;
    padding-top: 50px;
`;

export const Logo = styled.img `
    width: 68px;
    height: 68px;
`;

export const List = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
   

`;

export const ListItem = styled.li `
    list-style: none;
    font-size: 24px;
    color: #373737;
    margin-left:73px;
    padding: 15px;
    border: 5px solid rgba(255, 255, 255, 0);

    :hover{
        border:5px solid #373737;
       
    }
`;

export const Title = styled.h1 `
    font-size: 150px;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);
`