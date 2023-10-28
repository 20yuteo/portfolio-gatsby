import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import SEO from "../components/SEO"
import "../styles/global.css"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Header } from "../components/Header"
import { AboutMe } from "../components/AboutMe"
import { Blog } from "../components/Blog"

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <SEO />
      <Header />
      <AboutMe />
      <Blog />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
