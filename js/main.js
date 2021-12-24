
/* Select the class to be hovered
Using $(this) to make it general for all divs
i could use animate with css but would make one for each div as the filling color changes
*/
$('.features .content').hover(function () {
    let x = $(this).children('div.preButton').children('button.btn').css('border-left-color');
    $(this).children('div.preButton').children('span').css({'width':'100px','background-color':x})
    
    $(this).children('div.preButton').children('span').text('More') ;
},
function () {   
    $(this).children('div.preButton').children('span').text('')
    $(this).children('div.preButton').children('span').css({'width':'0px'})
        }
    
) 
/*$('.features .content').hover(function () {
    let x = $(this).children('button').css('border-left-color');
    console.log(x)
    $(this).children('button').css({'background':x,'color':'white','background-position-x':'20%'})
},
function () {   
    $('div.prsButton').text('')
         $('div.prseButton').css({'width':'0px','z-index':'-1'})
        }
    
)*/
$('#others').click(function () {
    $('#other-links').fadeToggle('slow')
}

)

