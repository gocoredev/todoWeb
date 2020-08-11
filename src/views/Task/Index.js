import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles'
import api from '../../services/api';
import {format} from 'date-fns'
import isConnected from '../../utils/isConnected'

//Components
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import TypeIcons from '../../utils/typeIcons';
import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()






  async function LoadTaskDetails() {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save() {
      //VALIDAR DADOS
      if(!title)
      return alert('Adicione um titulo')
      else if(!description)
      return alert('Descrição')
      else if(!type)
      return alert('Adicione uma tipo na Tarefa')
      else if(!date)
      return alert('Adicione uma data')
      else if(!hour)
      return alert('Adicione um Horario')



      if(match.params.id) {

        await api.put(`/task/${match.params.id}`, {
          macaddress: isConnected,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`
        }).then(() => setRedirect(true))

      } else {

          await api.post('/task', {
              macaddress: isConnected,
              type,
              title,
              description,
              when: `${date}T${hour}:00.000`
            }).then(() => setRedirect(true))
        }
      }

  async function Remove(){

    const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res == true){
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true))
    } 

  }

  useEffect(() => {
    if(!isConnected)
    setRedirect(true);
    
    LoadTaskDetails()
  }, [])

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
        <S.Form >

            <S.TypeIcons>
                {
                    TypeIcons.map((icon, index) => (
                        index > 0 && 
                        <button type="button" onClick={() => setType(index)}>
                            <img src={icon} alt="Tipo Tarefa" className={type && type != index && 'inative' } />
                        </button>
                    ))
                }
            </S.TypeIcons>

            <S.Input>
                <span>Titulo</span>
                <input type="text" placeholder="Digite o Titulo" onChange={e => setTitle(e.target.value)} value={title}/>
            </S.Input>

            <S.TextArea>
                <span>Descição</span>
                <textarea rows={5} placeholder="Detalhes da Tarefa" onChange={e => setDescription(e.target.value)} value={description}/>
            </S.TextArea>
                
            <S.Input>
                <span>Data</span>
                <input type="date" onChange={e => setDate(e.target.value)} value={date} />
                <img src={iconCalendar} alt="calendario"/>
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" onChange={e => setHour(e.target.value)} value={hour} />
                <img src={iconClock} alt="calendario"/>
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                    <span>Concluido </span>
                </div>

                {match.params.id && <button type="button" onClick={Remove}>
                    Excluir
                </button>}
            </S.Options>

            <S.Save>
                <button type="button" onClick={Save} >Salvar</button>
            </S.Save>
        </S.Form>  
      <Footer />
    </S.Container>
  )
}

export default Task;
