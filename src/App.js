import React from 'react';
import './App.css';
import Content from './components/Content';
import TitleRed from './components/TitleRed';
import TitleBlue from './components/TitleBlue';
import Title from './components/Title';
import { getDateString, diffDates } from './DateHelper';

const firstDate = new Date('2020-08-09T17:00:00.000Z');
const today = new Date();
const deliverDate = new Date('2021-05-19T17:00:00.000Z');

function App() {
  return (
    <div className="App">
      <Content>
        <TitleRed text="Ngày 1" />
        <Title text={getDateString(firstDate)} />
        <TitleRed text="Nay đã được" />
        <Title text={diffDates(firstDate, today)} />
        <TitleRed text="Ngày dự sanh" />
        <Title text={getDateString(deliverDate)} />
        <TitleBlue text={'Còn lại: ' + diffDates(today, deliverDate)} />
      </Content>
    </div>
  );
}

export default App;
