function showHide() {
  let icon = document.querySelector('.icon'),
      input = document.getElementById('password');

  if (input.type === 'password') {
    input.type = 'text'; 
  } else {
      input.type = 'password';
    }

  icon.classList.toggle('is-active');

}