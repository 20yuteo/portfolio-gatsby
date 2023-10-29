import React from "react"
import { Section } from "../Section"
import MainCard from "../Card/MainCard"
import { Button } from '../Button';
import SC from "./style";

export const Blog = () => {

    const onClick = React.useCallback((type: "ProhibitBrowserBack" | "WhatIsDNS") => {
        console.log(type)
        switch (type) {
            case "ProhibitBrowserBack":
                window.open("https://20yuteo.github.io/hugoapp/dont_browser_back/", "_blank")
                break;
            case "WhatIsDNS":
                window.open("https://20yuteo.github.io/hugoapp/what_is_dns/", "_blank")
                break;
            default:
                break;
        }
    }, []);

    return (
        <Section backgroundColor={"Accent03"}>
            <Section.Body>
                <Section.Title>Blog</Section.Title>
                <SC.BlogBody>
                    <MainCard>
                        <MainCard.Content>
                            ブラウザバックを禁止したくなったら
                            <Button label="Read More" color='Primary' onClick={() => onClick("ProhibitBrowserBack")} />
                        </MainCard.Content>
                    </MainCard>
                    <MainCard>
                        <MainCard.Content>
                            DNSとは？？？(備忘録)
                            <Button label="Read More" color='Primary' onClick={() => onClick("WhatIsDNS")} />
                        </MainCard.Content>
                    </MainCard>
                </SC.BlogBody>
            </Section.Body>
        </Section>
    )
}