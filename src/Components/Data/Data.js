import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



const Data = (props) => {
    // console.log(props.emploee);
    const { name, age, study, result, demand, img } = props.emploee;
    return (
        <div className="">
            <div className='' style={{minWidth:'280px'}}>
                <div className="p-3 bg-success m-2 rounded-3">
                    <div className='p-2'>
                        <img className='img-fluid rounded-circle' src={img} style={{ width: '100px', height: '100px' }} alt="img" />
                    </div>
                    <div className="text-start p-1 text-center text-light">
                        <h5>Name: {name}</h5>
                        <h3>Age: {age}</h3>
                        <h4>Study: {study}</h4>
                        <h2>Result: {result}</h2>
                        <h4>Demand: {demand}</h4>
                        <button onClick={()=>props.handleAddCart(props.emploee)} className='btn-outline-primary  rounded-pill my-2 px-3 py-2'><FontAwesomeIcon icon={faCartPlus} /> Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;