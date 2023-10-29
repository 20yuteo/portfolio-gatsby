import React from "react"
import { Section } from "../Section"
import MainCard from "../Card/MainCard"
import { Button } from '../Button';

export const Blog = () => {

    const onClick = React.useCallback((type: "ProhibitBrowserBack") => {
        console.log(type)
        switch (type) {
            case "ProhibitBrowserBack":
                window.open("https://20yuteo.github.io/hugoapp/dont_browser_back/", "_blank")
                break;
            default:
                break;
        }
    }, []);

    return (
        <Section backgroundColor={"Accent03"}>
            <Section.Body>
                <Section.Title>Blog</Section.Title>
                    <MainCard>
                        <MainCard.Content>
                            ブラウザバックを禁止したくなったら
                            <Button label="Read More" color='Primary' onClick={() => onClick("ProhibitBrowserBack")} />
                        </MainCard.Content>
                    </MainCard>
            </Section.Body>
        </Section>
    )
}