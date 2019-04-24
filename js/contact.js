console.log('it works');

$(document).ready(function () {
    $('.Send').click(function (event) {
        console.log('Clicked Button')
        
        var name = $('.First-Name', '.Last-Name').val()
        var email = $('.Email').val()
        var subject = $('.Subject').val()
        var message = $('.Message').val()
        var statusElm = $('.status')
        statusElm.empty();

        if(email.length > 5 && email.includes ('@', '.') && email.includes('.')) {
        } else {
            console.log('Email is incorrect')
        }
        
        if (subject.length >= 2) {
            
        } else {
            console.log('Invalid subject line')
        }
        
        if (message.length >=10) {
            
        }else {
            console.log('Message needs to be alteast 10 characters')
        }
    })
})