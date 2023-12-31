import React from "react"
import { Section } from "../Section"
import MainCard from "../Card/MainCard"
import { Button } from '../Button';
import SC from "./style";

export const Blog = () => {

    const onClick = React.useCallback((type: "ProhibitBrowserBack" | "WhatIsDNS") => {
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
        <Section backgroundcolor={"Accent03"}>
            <Section.Body>
                <Section.Title>Blog</Section.Title>
                <SC.BlogBody>
                    <MainCard>
                        <MainCard.Content>
                            ブラウザバックを禁止したくなったら
                            <Button color='Primary' onClick={() => onClick("ProhibitBrowserBack")}>
                                Read More...
                            </Button>
                        </MainCard.Content>
                    </MainCard>
                    <MainCard>
                        <MainCard.Content>
                            DNSとは？？？(備忘録)
                            <Button color='Primary' onClick={() => onClick("WhatIsDNS")}>
                                Read More...
                            </Button>
                        </MainCard.Content>
                    </MainCard>
                </SC.BlogBody>
            </Section.Body>
        </Section>
    )
}