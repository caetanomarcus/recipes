import styled from "styled-components";

export const Container = styled.div `
    background-color: #F2F4F1;
    padding-top: 245px;
    padding-bottom: 10rem;
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

export const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 38px;
`

export const Card = styled.div `
    width: 30%;
    background-color: #fff;
    box-shadow: 0px 7px 6px #00000029;
`;

export const CardTitle = styled.p `
    font-size: 32px;
    text-align: center;
    margin: 190px 0;
    position: relative;

    ::before{
        content: "";
        display: block;
        width: 51px;
        height: 1px;
        border-bottom: 5px solid #373737;
        position: absolute;
        left: 50%;
        top: -70%;
        transform: translateX( -50%);
    }
`;

export const Image = styled.img `
    width: 100%;
`