import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  NavbarDropdown,
  NavbarDropdownContent,
  DropDownItem,
  DropDownHeader,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <div>
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projetos Front-end</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit, type }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Visite</ExternalLinks>
                <ExternalLinks href={source}>Código</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
      <SectionDivider />
    </Section>
    <Section nopadding id="projectsbe">
      <SectionTitle main>Projetos Back-end</SectionTitle>
    </Section>
    <NavbarDropdown>
      <DropDownHeader>Links para repositórios dos projetos</DropDownHeader>
      <NavbarDropdownContent>
        <DropDownItem href='https://github.com/rafaelromanoz/talker-manager-api-node' target="_blank">Talker Manager API (Node-Express)</DropDownItem>
        <DropDownItem href='https://github.com/rafaelromanoz/mysql-normalization' target="_blank">MySQL-Normalizations (MySQL)</DropDownItem>
        <DropDownItem href='https://github.com/rafaelromanoz/mongodb-aggregations-project' target="_blank">MongoDB Aggregations(MongoDB)</DropDownItem>
        <DropDownItem href='https://github.com/rafaelromanoz/mongodb-commerce-project' target="_blank">MongoDB Commerce (MongoDB)</DropDownItem>
        <DropDownItem href='https://github.com/rafaelromanoz/vocabulary-booster-mysql-project' target="_blank">MySQL Vocabulary Booster(MySQL)</DropDownItem>
        <DropDownItem href='https://github.com/rafaelromanoz/docker-todo-project' target="_blank">Docker TODO-List(Docker)</DropDownItem>
        <DropDownItem>asdsa</DropDownItem>
      </NavbarDropdownContent>
    </NavbarDropdown>
</div>
);

export default Projects;
