import react from 'react';

import { Container, Content, LocationDate, CurrentTemperature, CurrentStats, TodayWeather, WeekWeather } from './styles';

export default function Clima(){
  return(
    <Container>
      <Content>

        <LocationDate className="location-and-date">
          <h1>João Pinheiro, MG</h1>
          <div>Quarta 25 de Novembro</div>
        </LocationDate>


        <CurrentTemperature>
          <div className="img-wrapper">
            <img src="icons/mostly-sunny.svg" alt=""></img>
          </div>
          <div className="temperature-wrapper">
            <strong >21&deg;</strong>
            <p>Mostly Sunny</p>
          </div>
        </CurrentTemperature>


        <CurrentStats>
          <div>
            <strong>23&deg;</strong>
            <p>High</p>
            <strong>14&deg;</strong>
            <p>Low</p>
          </div>
          <div>
            <strong>7mph</strong>
            <p>Wind</p>
            <strong>0%</strong>
            <p>Rain</p>
          </div>
          <div>
            <strong>05:27</strong>
            <p>Sunrise</p>
            <strong>20:57</strong>
            <p>Sunset</p>
          </div>
        </CurrentStats>

        <TodayWeather>
          <h2>Today's weather</h2>
          <div>
            <div>
              <strong>3am</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>14&deg;</p>
            </div>
            <div>
              <strong>6am</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>16&deg;</p>
            </div>
            <div>
              <strong>9am</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>17&deg;</p>
            </div>
            <div>
              <strong>12pm</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>19&deg;</p>
            </div>
            <div>
              <strong>3pm</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>21&deg;</p>
            </div>
            <div>
              <strong>6pm</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>20&deg;</p>
            </div>
            <div>
              <strong>9pm</strong>
              <img src="icons/mostly-sunny.svg" alt=""></img>
              <p>18&deg;</p>
            </div>
          </div>
        </TodayWeather>

        <WeekWeather>
          <h2>Next 5 days</h2>
          <div>
            <div>
              <div>
                <strong>Tue</strong>
                <p>30/7</p>
              </div>
              <div>
                <img src="icons/sunny.svg" alt="Sunny"></img>
              </div>
              <div>
                <strong>10&deg;</strong>
                <p>Low</p>
              </div>
              <div>
                <strong>21&deg;</strong>
                <p>High</p>
              </div>
              <div>
               <strong> 0%</strong>
                <p>Rain</p>
              </div>
              <div>
                <strong>12mph</strong>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </WeekWeather>
      </Content>
    </Container>
  )
}