import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Oi, meu nome é Rafael! <br/>
        bem vindo ao meu portfólio pessoal.
      </SectionTitle>
      <SectionText>
        Vamo que vamo
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/rafaelromanoz'}>Veja mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;