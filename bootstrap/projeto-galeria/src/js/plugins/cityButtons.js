import $ from 'jquery'          // importando jquery

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300          // para a animação

// função para filtrar a cidade
function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null       // se city for 'null' o target sempre será true
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

//plugin
$.fn.cityButtons = function () {
    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })


    // botão de todas as cidades... já estará ATIVO
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})
