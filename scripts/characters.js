function selectCharacter(name) {
    localStorage.setItem('character', name);
    alert(`Ви обрали персонажа: ${name}`);
  
  }