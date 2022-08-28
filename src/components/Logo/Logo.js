import React from 'react';
import './Logo.css';
import thinking from './thinking.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
 			<img style={{paddingTop: '5px'}} alt='logo' src={thinking}/>
		</div>
	);
}

export default Logo;