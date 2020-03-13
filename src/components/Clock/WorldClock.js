import React from 'react'

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        error: null,
        isLoaded: false,
        local:"America/Fortaleza"
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    tick() {
      let {local} = this.state;
      let url = "http://worldtimeapi.org/api/timezone/" + local;
      fetch (url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            date: Date(result.datetime)
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error           
          });
        }
      )
    }
  
    render() {
      let {date, isLoaded, error, local} = this.state;
      if (error){
        return(
          <div>
            <h2>World Clock :/({error.message})</h2>
          </div>
        );
      }
      else if (!isLoaded){
        return(
          <div>
            <h2>World Clock is Loading...</h2>
          </div>
        );
      } 
      else{
 return (
        <div>
          <h2>World Clock is {date}.</h2>
        </div>
      );
      }
     
    }
  }
  export default WorldClock;