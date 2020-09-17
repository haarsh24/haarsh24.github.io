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
          text="ReactJS"
        />
        <ProgressBar
          percent={85}
          text="Java"
        />
        <ProgressBar
          percent={90}
          text="NodeJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12} >
        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={80}
          text="dotNet"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
