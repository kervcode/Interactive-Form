$(function () {
  //GLOBAL VARAIBLES
  const $title = $("#title");
  const $input = $("#other-title");
  const $selectDesign = $("#design");
  const $design = $("#design option");
  const $tshirtColor = $("#color");
  const $tshirtOptions = $("#color option");

  let $total = $(".activities");
  const $activities = $total.children().children(); //store all input checkboxes
  let conferencePrice = 0;
  /** ------------------Input Feild Section--------------------------
   * set the focus on the first text field **/
  $(window).on("load", () => {
    $("#name").focus();
    manageTheme();
    createPriceField()
  });
  /** ------------------Job Role Section--------------------------
   * set the focus on the first text field **/
  //initially hide text field for input
  $input.hide();

  // reveal a text field when other option is selected in job role field
  $title.on("change", function () {
    //why this does not work with arrow function
    if (this.value === "other") {
      $input.delay(100).slideDown();
      // .show();
    } else {
      $input.slideUp(150);
    }
  });
  /** ----------- T-Shirt Infor Section--------------------------
   * set the focus on the first text field **/
  $design.eq(0).hide();

  // Hide all color themes
  function manageTheme() {
    $tshirtOptions.each(function (i, element) {
      if (
        $(element)
        .eq(i)
        .val() !== "cornflowerblue"
      ) {
        $(this)
          // .eq(i) //returned undefined when left uncommented
          .attr("disabled", true)
          .attr("hidden", true);
      } else {
        $(this)
          .before("<option>Please select a T-shirt theme</option>")
          .attr("selected", "selected");
        $("#color option:selected")
          .removeAttr("selected")
          .attr("hidden", true);
      }
    });
  }

  // show appropriate color for selected theme
  $selectDesign.on("change", function (event) {
    console.log($(event.target).val()); //can't call nodeName() - Why?
    $tshirtOptions.each(function (i, element) {
      if ($(event.target).val() === "js puns") {
        $tshirtOptions
          .slice(0, 3)
          .removeAttr("hidden")
          .removeAttr("disabled");
        $tshirtOptions
          .slice(3, 6)
          .attr("hidden", true)
          .attr("disabled", true);
      } else if ($(event.target).val() === "heart js") {
        $tshirtOptions
          .slice(3, 6)
          .removeAttr("hidden")
          .removeAttr("disabled");
        $tshirtOptions
          .slice(0, 3)
          .attr("disabled", true)
          .attr("hidden", true);
      }
    });
  });
  // Register for activities section

  //create field for the total field
  // console.log($activities);
  function createPriceField() {
    let paragraphField = "<p>Total: <span>" + conferencePrice + "</span></p>";

    $total.append(paragraphField)

  }

  // function removePriceField() {
  //   $total.remove(`<p>Total: ${conferencePrice}</p>`);
  // }

  //listening for change in activities
  $activities.on("change", function (event) {
    let clickedInput = $(event.target);
    let getDataCost = $(clickedInput).attr("data-cost");
        getDataCost = getDataCost.slice(1, 4)
    // let getDataCostChecked = $(event.target).is(':checked')
    let getDataCostChecked = ($(this).prop('checked') ==true)
    let dataDayAndTime = $(clickedInput).attr("data-day-and-time")

    if ($(getDataCostChecked)) {
      conferencePrice = conferencePrice + parseInt(getDataCost);
      // createPriceField();
    } else {
      conferencePrice = conferencePrice - parseInt(getDataCost);
    }

    // check for conflicting activities
    for (let i = 0; i < $activities.length; i++) {
      let $checkedActivity = $($activities[i]).attr("data-day-and-time");
        if ((dataDayAndTime === $checkedActivity) && clickedInput !== $activities[i]){


            // if (($(this).prop('checked') ==false) && $checkedActivity === dataDayAndTime ){
            //   $($activities[i]).attr('disabled', true)
            // } else {
            //   $($activities[i]).attr('disabled', false)
            // }
          }
    }


    // console.log($(clickedInput).prop('checked'))

function basicInfo(){
  
}






    // check created variables 
    // console.log(getDataCost)
    // console.log(clickedInput)
    // console.log($activities)
    // console.log(dataDayAndTime)














   /*
      //disable overlapsing time slot
      for (let activity in $activities) {
        // console.log($($activities[activity]).attr('data-day-and-time'))
        if (dataDayAndTime === $($activities[activity]).attr('data-day-and-time')) {
          console.log($($activities[activity]).attr('data-day-and-time'))
        }
      }
  */

    // const 
    // // getDataCost = getDataCost;
    // console.log(getDataCost);
    // // console.log(clickedInput);
    // if (clickedInput.is(':checked')) {
    //   ConferencePrice = parseInt(ConferencePrice + getDataCost);
    //   console.log(ConferencePrice);
    // }
    // // console.log($(event.target));
    // // console.log($(event.target).attr('data-cost'))
    // console.log(typeof getDataCost);
    // console.log(typeof ConferencePrice);

    // console.log(ConferencePrice);
    // // console.log($(this).attr("data-day-and-time"));
  });
});