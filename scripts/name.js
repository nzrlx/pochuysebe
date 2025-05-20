function submitName() {
  const name = document.getElementById('player-name').value.trim();
  if (!name) {
    alert('Введіть ваше імʼя');
    return;
  }

  localStorage.setItem('playerName', name);
  window.location.href = 'confirm.html';
}