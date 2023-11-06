import React from 'react';
import { Section } from '../Section';
import MainCard from '../Card/MainCard';
import { Icon, IconType } from '../Icon';
import SC from './style';
import { Button } from '../Button';

export const Contact = () => {
  const onClick = React.useCallback((type: 'twitter' | 'github') => {
    switch (type) {
      case 'twitter':
        window.open('https://twitter.com/20yuteo', '_blank');
        break;
      case 'github':
        window.open('https://github.com/20yuteo', '_blank');
      default:
        break;
    }
  }, []);

  return (
    <Section backgroundcolor={'Surface'}>
      <Section.Body>
        <Section.Title>Contact</Section.Title>
        <SC.CardContainer>
          <MainCard>
            <MainCard.Content>
              <SC.ContentWrapper>
                Twitter
                <Button color={'Primary'} onClick={() => onClick('twitter')}>
                  <Icon name={IconType.Twitter} size={24} color={'#1DA1F2'} />
                </Button>
              </SC.ContentWrapper>
            </MainCard.Content>
          </MainCard>
          <MainCard>
            <MainCard.Content>
              <SC.ContentWrapper>
                Twitter
                <Button color={'Primary'} onClick={() => onClick('github')}>
                  <Icon name={IconType.GitHub} size={24} />
                </Button>
              </SC.ContentWrapper>
            </MainCard.Content>
          </MainCard>
        </SC.CardContainer>
      </Section.Body>
    </Section>
  );
};
