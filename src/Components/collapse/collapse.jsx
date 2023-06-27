import './Collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse(props) {

	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<div className="collapse" >
				<h3 className='collapse_title' onClick={handleToggle} >
					{props.title}
					<img
						className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
						src={arrow}
						alt="show content"
					/>
				</h3>
				<div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
					{props.content}
				</div>
			</div>
		</>
	);
}
