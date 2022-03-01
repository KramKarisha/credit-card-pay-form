import React from 'react';
//@ts-ignore
import Fail from '../assets/fail.png';
//@ts-ignore
import Success from '../assets/success.png';
import { MessegeProps } from '../types';

const style = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '25px',
};

export const Messege = ({ checkSucccess }: MessegeProps) => {
  return (
    <div className={checkSucccess === undefined ? 'none' : 'success'}>
      {checkSucccess ? (
        <span style={style}>
          <img style={{ marginRight: '15px' }} width={35} height={35} src={Success} alt="success" />
          Payment is success
        </span>
      ) : (
        <span style={style}>
          <img style={{ marginRight: '15px' }} width={35} height={35} src={Fail} alt="fail" />
          Payment failed
        </span>
      )}
    </div>
  );
};
