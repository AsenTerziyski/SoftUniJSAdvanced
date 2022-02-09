function notify(message) {

  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';

  setTimeout(function () {
    notification.style.display = 'none';
  }, 1000)

  notification.addEventListener('click', (e) => {
    console.log(e);
    e.target.style.display = 'none';

  })
}