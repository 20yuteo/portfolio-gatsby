import React from "react";
import SC from "./style";
import { Card } from "../Card";

export const AboutMe = () => {
    return(
        <SC.Section>
            <SC.Body>
                <SC.Title>
                    About Me
                </SC.Title>
                <SC.ImgContainer>
                    <SC.Img src={'/eto_ushi_head.png'} />
                </SC.ImgContainer>
                <SC.Content>
                    <Card>
                        <SC.ItemTitle>
                            Name
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
                    <Card>
                        <SC.ItemTitle>
                            Name
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
                    <Card>
                        <SC.ItemTitle>
                            Name
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
            </SC.Body>
        </SC.Section>
    )
}