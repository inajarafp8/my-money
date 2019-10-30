import React, {useState, useRef} from 'react';
import {Redirect} from  'react-router-dom';


const minAno = 2019;
const maxAno= 2022;

const AdicionarMes = () => {
    const refAno= useRef();
    const refMes= useRef();
    const [redir, setRdedir] = useState('');
    const anos = [];
    const meses = [];

    for(let i = minAno; i<= maxAno; i++){
        anos.push(i)
    }
    for(let i=1; i<= 12; i++){
        meses.push(i);
    }

    const zeroPad= num => {
        if(num < 10){
            return '0' +num
        }
        return num
    }

    const verMes= () => {
        setRdedir( refAno.current.value + '-' + refMes.current.value)
    }
    if(redir!=='') {
        return <Redirect to={'/movimentacoes/'+ redir} />
    }

    return (
        <React.Fragment>
            <h2>Adicionar Mês</h2>
            
            <select className='custom-select col-1 mb-1 mr-sm-1 mb-sm-0' ref = {refAno}>
                {anos.map(ano => <option key={ano} value={ano}>{ano}</option> )}
            </select>
            <select className='custom-select col-1 mb-1 mr-sm-1 mb-sm-0' ref = {refMes}>
                {meses.map(zeroPad).map(mes => <option key={mes} value={mes}>{mes}</option> )}
            </select>
            <button className='btn btn-primary' onClick= {verMes}>Adicionar mês</button>
       </React.Fragment>
    )
}

export default AdicionarMes;