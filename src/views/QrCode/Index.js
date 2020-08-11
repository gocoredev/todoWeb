import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles'
import Qr from 'qrcode.react'

//Components
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

function QrCode() {

    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false)
    async function SaveMac(){
        if(!mac)
            alert('Informe o Número que Apareceu no Celular')
        else {
            await localStorage.setItem('@todo/macaddress', mac)
            setRedirect(true);
            window.location.reload()
        }
    }

    return(
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <Header/>
                <S.Content>
                    <h1>Capture o QRCODE pelo seu APP</h1>
                    <p>Suas atividades serão sincronizadas com a do seu celular</p>
                    <S.QrCodeArea>
                        <Qr value="getmacaddress" size={350} /> 
                    </S.QrCodeArea>
                    <S.ValidationCode>
                        <span>Digite a Númeração que apareceu no seu Celular</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                        <button type="button" onClick={SaveMac}>Sincronizar</button>
                    </S.ValidationCode>
                    
                </S.Content>

            <Footer/>
        </S.Container>
    )
}

export default QrCode;