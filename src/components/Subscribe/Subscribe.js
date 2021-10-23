import React from "react";
import * as S from './styles';


const Subscribe = ({
    title,
    subtitle,
    button
}) => {
    return (
        <S.Container id="subscribe" >
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.Input placeholder="Your Email" />
            <S.Button>{button}</S.Button>
        </S.Container>
    );
}

export default Subscribe;