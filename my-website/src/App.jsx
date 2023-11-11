import React, { Component } from 'react';
import Navber from './Navber';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shortTitle : {
        sTitle1 : "Lionel Andrés Messi Cuccitini",
        sTitle2 : "Lionel Andrés Messi Cuccitini",
        sTitle3 : "Lionel Andrés Messi Cuccitini"
      },
      longTitle : {
        lTitle1 : "Lionel Messi in National Team",
        lTitle2 : "Lionel Messi in  Barcelona",
        lTitle3 : "Lionel Messi in  Inter Meime"
      },
      paragraph : {
        para1 : "Since then, Messi has scored 106 goals in 178 international appearances, making him the country's all-time top scorer; he surpassed Gabriel Batistuta's record of 54 goals with a free kick against the United States in the semi-final of the Copa América Centenario on 21 June 2016.",
        para2 : "Barca did explore the option of bringing Messi back, but they could not guarantee their financial situation would allow it. This was exactly what led to Messi leaving Barcelona in 2021. He had agreed to a new contract but, because of salary cap rules, they were unable to register him to play in La Liga",
        para3 : "Messi has 11 goals in 13 matches with Inter Miami. It is 8-1-4 when he plays; seven of those matches were on the team's run to winning its first trophy by claiming the Leagues Cup, and another was in the U.S. Open Cup semifinal. Inter Miami is 1-3-2 in its six matches without Messi since he joined the club."
      },
      positon : {
        position1 : "Position : 10",
        position2 : "Position : 10",
        position3 : "Position : 10",
      },
      time : {
        time1 : "17 August 2005 to ...",
        time2 : "16 October, 2004 to May 2021.",
        time3 : "15 July, 2023 to ...",
      }
    }
  }



  render() {
    return (
        <div className='container'>
          <Navber/>
          <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <img src="images/1.jpg" class="d-block w-100 myImage" alt="Sorry" />
                  </div>
                  <div className="col-md-6">
                    <p className='shortTitle mt-3'>{this.state.shortTitle.sTitle1}</p>
                    <h3 className='longTitle'>{this.state.longTitle.lTitle1}</h3>
                    <p className='shortTitle'>{this.state.paragraph.para1}</p>
                    <p className='position'>{this.state.positon.position1}</p>
                    <p className='shortTitle'>{this.state.time.time1}</p>
                  </div>
                </div>
              </div>

              <div class="carousel-item ">
                <div className="row">
                    <div className="col-md-6">
                      <img src="images/2.jpg" class="d-block w-100 myImage" alt="Sorry" />
                    </div>
                    <div className="col-md-6">
                      <p className='shortTitle mt-3'>{this.state.shortTitle.sTitle2}</p>
                      <h3 className='longTitle'>{this.state.longTitle.lTitle2}</h3>
                      <p className='shortTitle'>{this.state.paragraph.para2}</p>
                      <p className='position'>{this.state.positon.position2}</p>
                      <p className='shortTitle'>{this.state.time.time2}</p>
                    </div>
                  </div>
                </div>

              <div class="carousel-item ">
              <div className="row">
                  <div className="col-md-6">
                    <img src="images/3.webp" class="d-block w-100 myImage" alt="Sorry" />
                  </div>
                  <div className="col-md-6">
                    <p className='shortTitle mt-3'>{this.state.shortTitle.sTitle3}</p>
                    <h3 className='longTitle'>{this.state.longTitle.lTitle3}</h3>
                    <p className='shortTitle'>{this.state.paragraph.para3}</p>
                    <p className='position'>{this.state.positon.position3}</p>
                    <p className='shortTitle'>{this.state.time.time3}</p>
                  </div>
                </div>          
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
    </div>
        
    );
  }
}

export default App;