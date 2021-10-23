import styled from "styled-components";


export const Container = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DFE4DE;
    padding: 167px 0;
`;

export const Title = styled.h2 `
    font-size: 40px;
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    

`;

export const Subtitle = styled.p `
    font-size: 32px;
    text-align: center;
    margin-bottom: 42px;
`;

export const Input = styled.input `
    background-color: #EFF1EE;
    outline: none;
    border: none;
    width: 792px;
    height:120px;
    padding: 50px;
    font-size: 24px;
    margin-bottom: 40px;
   

`;

export const Button = styled.button `
    outline: none;
    border: 6px solid #373737;
    cursor: pointer;
    background-color: transparent;
    width: 240px;
    height: 81px;
    font-size: 24px;
    font-weight: 600;
    color: #373737;
`;