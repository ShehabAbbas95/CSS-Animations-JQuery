
/* Select the class to be hovered
Using $(this) to make it general for all divs
i could use animate with css but would make one for each div as the filling color changes
*/
$('.features .content').hover(function () {
    /* Animate the div and change its style */
    let x = $(this).children('button').css('border-left-color');
    $(this).children('div.preButton').animate({width:'99px'},'fast')
    $(this).children('div.preButton').css({'color':'white','background':x,'z-index':'1'}) ;
    $(this).children('div.preButton').text('More') ;
},
function () {   
    /* remove the Animation of the div and change its style */
    $('div.preButton').text('')
         $('div.preButton').css({'width':'0px','z-index':'-1'})
        }
    
    /*  console.log(wide) */
)
