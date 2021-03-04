const fetch = require('node-fetch');
const models = require('./server/models/fplModels');

// const players = [];

// Player.create({
//   playerName: 'Greg LR',
// });

fetch('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Chelsea', {
  'method': 'GET',
  'headers': {
    'x-rapidapi-key': '47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86',
    'x-rapidapi-host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
  }
})
  .then((response) => {
    const parsedData = response.json();
    return parsedData;
  })
  .then((data) => {
    data.players.forEach((element) => {
      console.log('PLAYER NAME===============', element.playerName);
      models.Player.create({
        playerName: element.playerName,
      });
      // players.push(element.playerName);
    });
    // console.log('player array1: ', players);
    // this.setState({
      //   data: players
    // })
    // console.log('state with players1: ', this.state)
    // return this.state
  })
  .catch((err) => {
    console.error(err);
  });
// setTimeout(
  //   fetch('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Liverpool', {
    //     'method': 'GET',
//     'headers': {
  //       'x-rapidapi-key': '47569b0262msh68318e4b3997bafp1db910jsn387cd3658c86',
//       'x-rapidapi-host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
//     }
//   })
//     .then((response) => {
  //       const parsedData = response.json();
//       console.log('json data ', parsedData);
//       return parsedData;
//     })
//     .then((data) => {
  //     // const players = [];
  //     // let copy = this.state.data.map(el=>el)
  //     // console.log('copy: ', copy)
  //     // copy.forEach(el=>{
    //     //   players.push(el)
    //     // })
//       data.players.forEach((element) => {
  //         players.push(element.playerName);
//       });
//       console.log('player array2: ', players);
//     // this.setState({
  //     //   data: players
//     // })
//     // console.log('state with players2: ', this.state)
//     // return this.state
//     })
//     .then(resetData())
//     .catch((err) => {
  //       console.error(err);
//     }), 0,
// );

// function createEntry(player) {
//   Player.create({
//     playerName: player,
//   });
// }

// async function resetData(arr) {
//   console.log('entry', arr);
//   await 
//   players.forEach((entry) => {
//     createEntry(entry);
//   });
// }
