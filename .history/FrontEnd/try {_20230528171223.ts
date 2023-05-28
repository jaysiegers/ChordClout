try {
  const response = await fetch("https://spotify23.p.rapidapi.com/playlist/", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b2502866msh1562b56ffc5a076p17e390jsnb44c2cd5ff67',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}