import React from "react";
import * as S from "./styles";

const Header = ({
    title,
    logo,
    menuList,
    background
}) => {
    return (
        <S.HeaderContainer>
            <S.Container
            backgroundImage={background}
        >
                <S.TopHeader>
                    <S.Logo src={logo} alt="Logo" />
                    <S.List>
                        {menuList.map(item => (
                            <S.ListItem key={item.id}>
                                <a href={'#'+item.toLowerCase()}>{item}</a>
                            </S.ListItem>
                        ))}
                    </S.List>
                </S.TopHeader>
                <S.Title>{title}</S.Title>
        </S.Container>
        </S.HeaderContainer>
    )
}

export default Header;