window.onload = function () {
  emailjs.init("TWUJ8bfiP0YkBecVO"); // 🔑 Твій public key

  const name = localStorage.getItem('playerName');
  const greeting = document.getElementById('greeting');
  if (name) {
    greeting.innerText = `Привіт, ${name.toUpperCase()}!`;
  }

  const btn = document.getElementById('confirmBtn');
  btn.addEventListener('click', submitEmail);
};

function submitEmail() {
  const email = document.getElementById('email').value.trim();
  const name = localStorage.getItem('playerName') || "Гравець";

  if (!email.includes('@') || !email.includes('.')) {
    alert('Будь ласка, введіть коректну електронну адресу.');
    return;
  }

  const templateParams = {
    name: name,
    email: email
  };

  emailjs.send("service_fx1lemo", "template_d1xxure", templateParams)
    .then(() => {
      localStorage.setItem('playerEmail', email);
      alert(`Ми надіслали підтвердження на ${email}`);
      window.location.href = 'rules.html'; // ✅ змінено на rules.html
    })
    .catch(error => {
      alert("Сталася помилка при надсиланні листа. Спробуйте ще раз.");
      console.error(error);
    });
}