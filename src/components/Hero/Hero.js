import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo <br/>
        ao meu portfólio pessoal!
      </SectionTitle>
      <SectionText>
        Vamo que vamo
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Veja mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;