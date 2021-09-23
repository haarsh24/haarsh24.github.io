import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div >
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
  
        />
        <ProgressBar
          percent={75}
          text="React Js"
        />
        <ProgressBar
          percent={85}
          text="HTML CSS"
        />
        <ProgressBar
          percent={90}
          text="Angular"
        />
      </Col>
      <Col xs={24} sm={24} md={12} >
        <ProgressBar
          percent={70}
          text="Microservices"
        />
        <ProgressBar
          percent={90}
          text="Java"
        />
        <ProgressBar
          percent={78}
          text="Spring Boot"
        />
        <ProgressBar
          percent={80}
          text="Node Js"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
