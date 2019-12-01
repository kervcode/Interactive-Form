//GLOBAL VARAIBLES
const other = $('#other-title');
const title = $('#title')
const jobTitle = $('#title option');
const input = $('#other-title');
const selectDesign = $('#design'); 
const design = $('#design option');
const tshirtColor = $('#color');
const tshirtOptions = $('#color option');


// set the focus on the first text field
$(window).on('load', () => {
    $('#name').focus();
})

//initially hide text field for input
input.hide();

// reveal a text field when other option is selected in job role field
title.on('change', function (){ //why this does not work with arrow function
    if(this.value === 'other') {
        input.delay(100)
        .slideDown()
        // .show();
    } else {
        input.slideUp(150);
    }
})

//t-shirt section
 design.eq(0).hide();
//  tshirtColor.hide();
// console.log(tshirtColor.children().last())
// console.log(tshirtOptions.eq(0))

// tshirtColor.insertBefore(tshirtOptions.eq(0), "<option>Please select a T-shirt theme</option>")

// tshirtColor.each(function(index, element){
//     tshirtOptions.hide();
// })

// tshirtColor.prepend("<option>Please select a T-shirt theme</option>");

//  selectDesign.change(function(event){
//      console.log(event.target.nodeName)
//  })

tshirtColor.on('change', function(){
    
})


