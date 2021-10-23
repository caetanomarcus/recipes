import React from "react";
import * as S from "./styles";

const Main = ({
    title,
    recipes
}) => {
    return (
        <S.Container id="recipes">
            <S.Title>{title}</S.Title>
            <S.CardContainer>
            {recipes.map(recipe => (
               <S.Card key={recipe.id}>
                   <S.Image src={recipe.image.url} alt={recipe.name} />
                     <S.CardTitle>{recipe.name}</S.CardTitle>

                </S.Card>
              ))}
            </S.CardContainer>
        </S.Container>
    )
}

export default Main;