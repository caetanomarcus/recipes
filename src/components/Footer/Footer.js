import React from "react";
import * as S from './styles'


const Footer = ({
    socialList,
    menu
}) => {
    return (
        <S.Wrapper>
            <S.Container>
            <S.SocialBox>
                {socialList.map((social, index) => (
                    <S.Image key={index} src={social.media.url} alt={'rede social'} />
                ))}
            </S.SocialBox>
            <S.Menu>
                {menu.map((item, index) => (
                    <S.MenuItem key={index}>
                        <a href={'#'+item.toLowerCase()}>{item}</a>
                    </S.MenuItem>
                ))}
            </S.Menu>
        </S.Container>
        </S.Wrapper>
    )
}

export default Footer;