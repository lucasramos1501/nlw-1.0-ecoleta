import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './style.css'

const SalvedPoint = () => {
    const history = useHistory();
    
    useEffect(() => {
        setTimeout(() => {
            history.push('');
        }, 3000)
    }, [history])

    return (
        <div id="salved-point">
            <FiCheckCircle className="icon" />
            <h1 id="msg">Cadastro Realizado com Sucessso!</h1>
        </div>
    );
}

export default SalvedPoint;