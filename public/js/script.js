$(document).ready(function(){
    $(document).on('click', '.countries__list-item', function(){
        if($(this).hasClass('active') === false){
            $('.countries__list-item').toggleClass('active')
            $('.informations__contact_information-address').toggle();
        }
    })
})