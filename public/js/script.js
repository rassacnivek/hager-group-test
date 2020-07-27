$(document).ready(function () {
    $(document).on('click', '.countries__list-item', function () {
        if ($(this).hasClass('active') === false) {
            $('.countries__list-item').toggleClass('active')
            $('.informations__contact_information-address').toggle();
        }
    })

    $(document).on('click', '.discover', function () {
        const img = $(this).data('work')
        $('.modal .modal__content-image').css('background-image', $(this).closest('.works__list-item').css('background-image'))
        $('.description__buttons-discover').attr('url', `${$('.description__buttons-discover').attr('url')}${$(this).data('work')}`)
        $('.overlay').css('display', 'flex')
    })

    $(document).on('click', '.modal .description__buttons-close', function () {
        $('.overlay').hide()
    })

    $(document).on('click', '.header__left-hamburger', function () {
        $('.header__left-nav').toggle()
        $('.header__left-hamburger').hide()
        $('.header__left-cross').css('display', 'flex')
    })

    $(document).on('click', '.header__left-cross', function () {
        $('.header__left-nav').toggle()
        $('.header__left-cross').hide()
        $('.header__left-hamburger').css('display', 'flex')
    })
})