import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return content.map((item, index) => <p key={index}>{item}</p>);
        }
        return content;
    };

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={handleToggle} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {renderContent()}
                </div> 
            </div>
        </>
    );
}
