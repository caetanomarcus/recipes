import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`;

export const Image = styled.img  `
    width: 50%;
`;

export const TextContainer = styled.div `
    width: 50%;
`;

export const Title = styled.h2 `
    font-size: 40px;
    text-align: center;
    position: relative;
    margin-bottom: 136px;
    
    ::after{
        content: "";
        display: block;
        width: 104px;
        height: 1px;
        border-bottom: 6px solid #373737;
        position: absolute;
        left: 50%;
        bottom: -55%;
        transform: translateX( -50%);
    }
`;

export const Text = styled.p `
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
`