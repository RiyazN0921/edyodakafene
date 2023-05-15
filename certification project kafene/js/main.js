$(document).ready(function(){
    $('.nav-link').click(function (e) { 
        e.preventDefault();
        $('.active').removeClass('active');
        $(e.target).addClass('active')
        
    });
    
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        let targetUrl = e.target.href;
        location.assign(targetUrl)
    });
  });