import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import SEO from "../components/SEO"
import "../styles/global.css"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Header } from "../components/Header"
import { AboutMe } from "../components/AboutMe"
import { Blog } from "../components/Blog"
import { Portfolio } from "../components/Portfolio"
import { Contact } from "../components/Contact"
import { ScrollContext, useScrollContext, PageNameKey } from "@/hooks/useScrollContext"


const GlobalStyle = createGlobalStyle`
  ${reset}
`

const IndexPage: React.FC<PageProps> = () => {
  const {onClick, scrollY} = useScrollContext();

  return (
    <ScrollContext.Provider value={{
      onClick,
      scrollY
    }}>
      <GlobalStyle />
      <SEO />
      <Header />
      <AboutMe />
      <Blog />
      <Portfolio />
      <Contact />
    </ScrollContext.Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
