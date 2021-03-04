import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'
import './styles.css'
class HelloWorld extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:  false,
      data: []
    }
  }

  componentDidMount(){

    setTimeout(fetch('/api')
      .then(res => res.json())
      .then(players => {
        this.setState({
          data: players,
        })
        console.log('players again: ', ...players)
        return players
      })
      // .then(data => console.log('players: ', data))
      .catch(err => console.log('Players.componentDidMount: get players: ERROR: ', err)), 1000);
  }

  // componentDidMount(){
  //   const promiseOne =  fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Liverpool", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
  //       "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
  //     }
  //   })

  //   const promiseTwo = fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Arsenal", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
  //       "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
  //     }
  //   })
  //   const promiseArray = [promiseOne, promiseTwo];
  //   Promise.all(promiseArray).then(response => {
  //     console.log('response: ', response)
  //     const parsedData = response.json()
  //     console.log('parsedData: ', parsedData)})
  //     .then(data => {
  //       console.log('maybe parsed data: ', data)
  //     });

  // }

//   componentDidMount(){
//     const players = [];
//     fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Arsenal", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
//         "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
//       }
//     })
//     .then(response => {
//       const parsedData = response.json()
//         return parsedData
//     })
//     .then(data=> {
//       data.players.forEach(element=>{
//         players.push(element.playerName)
//       })
//       console.log('player array1: ', players)
//       // this.setState({
//       //   data: players
//       // })
//       // console.log('state with players1: ', this.state)
//       // return this.state
//     })
//     .catch(err => {
//       console.error(err);
//     });
//     setTimeout(
//       fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Liverpool", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
//       "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
//     }
//   })
//   .then(response => {
//     const parsedData = response.json()
//     console.log('json data ', parsedData)
//     return parsedData
//   })
//   .then(data=> {
//     // const players = [];
//     // let copy = this.state.data.map(el=>el)
//     // console.log('copy: ', copy)
//     // copy.forEach(el=>{
//     //   players.push(el)
//     // })
//     data.players.forEach(element=>{
//       players.push(element.playerName)
//     })
//     console.log('player array2: ', players)
//     // this.setState({
//     //   data: players
//     // })
//     // console.log('state with players2: ', this.state)
//     // return this.state
//   })
//   .catch(err => {
//     console.error(err);
//   }), 0);
// //   setTimeout(
// //     fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Chelsea", {
// //     "method": "GET",
// //     "headers": {
// //       "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
// //       "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
// //     }
// //   })
// // .then(response => {
// //   const parsedData = response.json()
// //   return parsedData
// // })
// // .then(data=> {
// //   // const players = [];
// //   // let copy = this.state.data.map(el=>el)
// //   // console.log('copy: ', copy)
// //   // copy.forEach(el=>{
// //   //   players.push(el)
// //   // })
// //   data.players.forEach(element=>{
// //     players.push(element.playerName)
// //   })
// //   console.log('player array3: ', players)
// //   // this.setState({
// //   //   data: players
// //   // })
// //   // console.log('state with players2: ', this.state)
// //   // return this.state
// // })
// // .catch(err => {
// //   console.error(err);
// // }), 0);
//   setTimeout(
//     fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Tottenham", 
//     {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86",
//         "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com"
//       }
//     })
//     .then(response => {
//       const parsedData = response.json()
//       return parsedData
//     })
//     .then(data=> {
//       // const players = [];
//       // let copy = this.state.data.map(el=>el)
//       // console.log('copy: ', copy)
//       // copy.forEach(el=>{
//       //   players.push(el)
//       // })
//       data.players.forEach(element=>{
//         players.push(element.playerName)
//       })
//       console.log('player array4: ', players)
//       this.setState({
//         data: players
//       })
//       console.log('state with players4: ', this.state)
//       return this.state
//     })
//     .catch(err => {
//       console.error(err);
//     }), 0);
//   };
    
 
  
  render(){
    console.log('state data in RENDER: ', this.state.data)
    const data = []
    this.state.data.forEach((el, index)=>{
      console.log('id: ', el._id)
      data.push(<button key={`player: ${index}`}className='playerButton'>{el.playerName}</button>)
      console.log('el: ', el.playerName)
    })
    console.log('data: ', data)
    // if (this.state.loaded === false){
    //   return (
    //     <div>
    //       loading...
    //     </div>
    //   )
    // } else if (this.state.loaded) {

      return (
        <div>
          <h3>
              Pick your team here:
          </h3>
          <p className='buttonContainer' onClick={()=>{ }}>{data}</p>
        </div>
      );
    }

  // }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));