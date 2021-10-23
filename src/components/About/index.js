import React from "react";
import * as S from "./styles";


const About = ({
    title,
    description,
    background
}) => {
    return (
        <S.Container id="about">
            <S.Image src={background} />
            <S.TextContainer>
                <S.Title>{title}</S.Title>
                <S.Text>{description}</S.Text>
            </S.TextContainer>
        </S.Container>
    )
}

export default About;