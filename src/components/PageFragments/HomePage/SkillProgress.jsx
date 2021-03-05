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
<<<<<<< HEAD
          text="Microservices"
        />
        <ProgressBar
          percent={90}
          text="MySql"
=======
          text="Angular"
        />
        <ProgressBar
          percent={90}
          text="Spring Boot"
>>>>>>> 978cc9674000e0c4e73a96d9f3daf519f22777f6
        />
        <ProgressBar
          percent={78}
          text="MongoDb"
        />
        <ProgressBar
          percent={80}
<<<<<<< HEAD
          text="AWS"
=======
          text="BootStrap"
>>>>>>> 978cc9674000e0c4e73a96d9f3daf519f22777f6
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
