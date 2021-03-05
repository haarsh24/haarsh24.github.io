import React from 'react';
import { Progress } from 'antd';

const ProgressBar = (props) => {
  const { text, percent } = props;
  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <Progress
         
          percent={percent || 0}
          showInfo={false}
          strokeWidth={22}
          status="active"
          strokeColor="#C651CD"
 
         trailColor="#242424"
        
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '-22px',
        marginLeft: '15px',
        color: '#100F10',
        fontSize: '14px',
        showInfo:'false'
      }}
      >
        <span>{text|| '' }</span>
      </div>
    </div>
  );
};

export default ProgressBar;
