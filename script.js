var messageBox = document.querySelector('.js-messsage');
  
  var btn = document.querySelector('.js-msg-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-msg-close');

  btn.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
   console.log(element);
    element.addEventListener('click',function (e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});