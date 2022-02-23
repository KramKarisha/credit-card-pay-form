import React from 'react';
//@ts-ignore
import Fail from '../assets/fail.png';
//@ts-ignore
import Success from '../assets/success.png';
import { MessegeProps } from '../types';

export const Messege = ({ checkSucccess }: MessegeProps) => {
	return (
		<div className={checkSucccess === undefined ? 'none' : 'success'}>
			{checkSucccess ? (
				<span>
					<img width={25} height={25} src={Success} alt="success" />
					Payment is success
				</span>
			) : (
				<span>
					<img width={25} height={25} src={Fail} alt="fail" />
					Payment failed
				</span>
			)}
		</div>
	);
};
