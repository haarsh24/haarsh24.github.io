import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi I am Kumar Harsh, a 22 year old passionate web developer from Ranchi ,Jharkhand .
  I love developing amazing websites using modern JavaScript 
   technologies like ReactJs / AngularJs and NodeJs. Apart from this, I am a music enthusiast
    I love playing guitar and producing my own music.`,
   
  paraTwo: `Currently I am working as a <b>Full Stack Developer </b> by using Javascript technologies like Angular  Js for  frontend and Spring Boot for Backend.
  I also have hands on experience working with <b>React js </b> and <b>Node js</b> and have created several projects using these technologies.
I am always open to learn new thing and explore other technologies
.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['kumar', 'kumar harsh', 'Harsh', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Kumar Harsh']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Ranchi, Jharkhand, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="pizza.jpg"
            alt="Pizza image"
            textH4="Pizza Lover"
            textH3="Pizza = Happy me"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="guitar.jpg"
            alt="Guitar"
            textH4="Guitarist"
            textH3="Where words fails, music speaks"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="music-pro.jpg"
            alt="music production image"
            textH4="Music Production"
            textH3="Love creating my own Music"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Information Technology"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
