import React from "react";
import SC from "./style";
import { Card } from "../Card";
import { Section } from "../Section";

export const AboutMe = () => {
    return(
        <Section>
            <Section.Body>
                <Section.Title>
                    About Me
                </Section.Title>
                <SC.ImgContainer>
                    <SC.Img src={'/eto_ushi_head.png'} />
                </SC.ImgContainer>
                <SC.Content>
                    <Card>
                        <SC.ItemTitle>
                            Jobs
                        </SC.ItemTitle>
                        <SC.ItemList>
                            <SC.ListItem>
                                Eto Ushi
                            </SC.ListItem>
                            <SC.ListItem>
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                            </SC.ListItem>
                            <SC.ListItem>
                                BBBB
                            </SC.ListItem>
                        </SC.ItemList>
                    </Card>
                    <Card>
                        <SC.ItemTitle>
                            Skills
                        </SC.ItemTitle>
                        <SC.ItemList>
                            <SC.ListItem>
                                Eto Ushi
                            </SC.ListItem>
                            <SC.ListItem>
                                AAAAAA
                            </SC.ListItem>
                            <SC.ListItem>
                                BBBB
                            </SC.ListItem>
                        </SC.ItemList>
                    </Card>
                </SC.Content>
            </Section.Body>
        </Section>
    )
}