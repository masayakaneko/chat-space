$(function(){
  function buildHTML(message) {
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
      var html = buildHTML(data);
      $('.main-messages').append(html);
      $('.main-messages').animate({ scrollTop: $('.main-messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});