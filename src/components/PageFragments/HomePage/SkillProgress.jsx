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
          text="Java"
        />
        <ProgressBar
          percent={85}
          text="Spring Boot"
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
          text="MySql"
        />
        <ProgressBar
          percent={78}
          text="MongoDb"
        />
        <ProgressBar
          percent={80}
          text="AWS"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
