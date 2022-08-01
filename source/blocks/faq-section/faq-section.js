$(document).ready(function(){
  $('.faq-section__accordeon-title-container').click(function(){
    $(this).parent().toggleClass("faq-section__accordeon_opened");
    $(this).next('.faq-section__accordeon-text').slideToggle(300);
  })
})