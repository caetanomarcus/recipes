import React, {Fragment} from "react"
import Header from "../components/Header"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Main from "../components/Main"
import About from "../components/About"
import Subscribe from "../components/Subscribe/Subscribe"
import Footer from "../components/Footer/Footer"


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
  }

  body {
   color: #373737;
   /* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const query = graphql `
  query {
    mydata {
      headers {
        rc {
          url
        }
        menuList
        title
        background {
          url
        }
      }
      mains {
        title
      }
      recipesLists {
        name
        image {
          url
        }
      }
      abouts {
        background {
          url
        }
        description
        title
      }
      subscribes {
        title
        subtitle
        button
      }
      socialLists {
        media {
          url
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {

  console.log(data)

  const header = data.mydata.headers[0];
  const mainTitle = data.mydata.mains[0].title;
  const recipesList = data.mydata.recipesLists;
  const about = data.mydata.abouts[0];
  const subscribe = data.mydata.subscribes[0];
  const socialList = data.mydata.socialLists;

  return (
   <Fragment>
     <GlobalStyle />
      <Header 
      logo={header.rc.url}
      menuList={header.menuList}
      title={header.title}
      background={header.background.url}
      />
      <Main 
      title={mainTitle}
      recipes = {recipesList}
      />
      <About
      background={about.background.url}
      description={about.description}
      title={about.title}
      />
     <Subscribe 
      title={subscribe.title}
      subtitle={subscribe.subtitle}
      button={subscribe.button}
     />
     <Footer 
      socialList={socialList}
      menu = {header.menuList}
     />
   </Fragment>
  )
}

export default IndexPage
