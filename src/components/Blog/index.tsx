import React from "react"
import { Section } from "../Section"
import { ColorfulCard } from "../Card/ColorfulCard"
import MainCard from "../Card/MainCard"

export const Blog = () => {
    return (
        <Section backgroundColor={"Accent03"}>
            <Section.Body>
                <Section.Title>Blog</Section.Title>
                <a href="https://20yuteo.github.io/hugoapp/dont_browser_back/" target="blank" style={{
                    textDecoration: "none",
                    color: "black"
                }}>
                    <MainCard content="ブラウザバックを禁止したくなったら" />
                </a>
            </Section.Body>
        </Section>
    )
}