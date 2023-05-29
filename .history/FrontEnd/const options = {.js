const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c9b2502866msh1562b56ffc5a076p17e390jsnb44c2cd5ff67',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

fetch('https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1EQoqCH7BwIYb7&offset=0&limit=100', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));