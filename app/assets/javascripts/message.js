$(function(){

  function buildHTML(message) {
    // console.log(message.user_name);
    // console.log(message.content);
    // console.log(message.image);
    // console.log(message.created_at);
    if (message.image) {
      var html =
        `<div class = "message-wrapper">
          <div class = "message-wrapper__name">
            ${message.user_name}
          </div>
          <div class = "message-wrapper__date">
            ${message.created_at}
          </div>
          <div class = "message-wrapper__under">
            <p class="message-wrapper__under__text">
              ${message.content}
            </p>
            <img class="lower-message__image" src="${message.image}">
          </div>
        </div>`
    return html;
    } else {
      var html =
        `<div class = "message-wrapper">
          <div class = "message-wrapper__name">
            ${message.user_name}
          </div>
          <div class = "message-wrapper__date">
            ${message.created_at}
          </div>
          <div class = "message-wrapper__under">
            <p class="message-wrapper__under__text">
              ${message.content}
            </p>
          </div>
        </div>`
    return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.main-messages').append(html);
      $('form')[0].reset();
    })
  });
});