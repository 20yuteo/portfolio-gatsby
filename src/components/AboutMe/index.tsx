import React from 'react';
import SC from './style';
import { ColorfulCard } from '../Card/ColorfulCard';
import { Section } from '../Section';

export const AboutMe = () => {
  return (
    <Section>
      <Section.Body>
        <Section.Title>About Me</Section.Title>
        <SC.ImgContainer>
          <SC.Img src={'/eto_ushi_head.png'} />
        </SC.ImgContainer>
        <SC.Content>
          <ColorfulCard>
            <SC.ItemTitle>Introduce Myself</SC.ItemTitle>
            <SC.ItemList>
              <SC.ListItem>✏️: 20yuteo</SC.ListItem>
              <SC.ListItem>👨‍💻: Web Engneer</SC.ListItem>
            </SC.ItemList>
          </ColorfulCard>
          <ColorfulCard>
            <SC.ItemTitle>Skills</SC.ItemTitle>
            <SC.ItemList>
              <SC.ListItem>FrontEnd: React.js</SC.ListItem>
              <SC.ListItem>FrontEnd: Vue.js</SC.ListItem>
              <SC.ListItem>BackEnd: Laravel</SC.ListItem>
              <SC.ListItem>BackEnd: Java</SC.ListItem>
              <SC.ListItem>BackEnd: Ruby on Rails</SC.ListItem>
            </SC.ItemList>
          </ColorfulCard>
        </SC.Content>
      </Section.Body>
    </Section>
  );
};
