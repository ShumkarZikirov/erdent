import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { BsInfoCircle } from "react-icons/bs";
import {times} from "../../arrays/times";
import './enroll.scss'
const Enroll = () => {
    const [value, onChange] = useState(new Date());

    return(
      <div className={'enroll'}>
            <div className={'enroll-main'}>
                <div className={'enroll-main__title'}>
                    <h3>Записаться</h3>
                    <h4>Выберите дату</h4>
                </div>
                <div className={'enroll-main__calendar'}>
                        <Calendar className={'calendar'} onChange={onChange} value={value}  defaultView={"month"} maxDetail={'month'} minDetail={'month'} next2Label={null} prev2Label={null}/>
                </div>
                <div className={'enroll-main__info'}>
                    <p className={'enroll-main__info-icon'}><BsInfoCircle/></p>
                    <div>
                        <div>
                            <span className={'white'}></span>
                            <p>Свободно</p>
                        </div>
                        <div>
                            <span className={'yellow'}></span>
                            <p>Не подтверждено</p>
                        </div>
                        <div>
                            <span className={'blue'}></span>
                            <p>Записан(а)</p>
                        </div>
                        <div>
                            <span className={'red'}></span>
                            <p>Занято</p>
                        </div>
                    </div>
                </div>
                <div className={'enroll-main__times'}>
                    <h3>Выберите время</h3>
                    <div>
                        {
                            times.map((elem,index) => {
                                return(
                                    <div className={'enroll-main__times-block'}>
                                        <p>{elem.min}</p>
                                        <p>{elem.max}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Enroll

