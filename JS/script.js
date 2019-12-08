$(function () {
  //GLOBAL VARAIBLES
  const $title = $("#title");
  const $input = $("#other-title");
  const $selectDesign = $("#design");
  const $design = $("#design option");
  const $tshirtColor = $("#color");
  const $tshirtOptions = $("#color option");

  let $total = $(".activities");
  const $checkboxes = $total.children().children(); //store all input checkboxes
  let conferencePrice = 0;
  /** ------------------Input Feild Section--------------------------
   * set the focus on the first text field **/
  $(window).on("load", () => {
    $("#name").focus();
    manageTheme();
    // createPriceField()
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

  66
  // Register for activities section

  //create field for the total field
  // console.log($activities);
  function createPriceField() {
    let paragraphField = "<p>Total: <span>" + conferencePrice + "</span></p>";

    $total.append(paragraphField);
  }

  // function removePriceField() {
  //   $total.remove(`<p>Total: ${conferencePrice}</p>`);
  // }

  //listening for change in activities
  $checkboxes.on("change", function (event) {
    let clicked = event.target;
    let clickedCost = $(clicked).attr("data-cost");
    let clickedTime = $(clicked).attr('data-day-and-time')
    clickedCost = clickedCost.slice(1, 4);

    console.log(clicked)
    console.log(clickedCost)
    console.log(clickedTime)
    // let getDataCostChecked = $(event.target).is(':checked')

    for (let i = 0; i < $checkboxes.length; i++) {
      let checkboxTime = $($checkboxes[i]).attr('data-day-and-time');
      if (clickedTime === checkboxTime && clicked !== $checkboxes[i]) {
        if ($(clicked).prop('checked')) {
          $($checkboxes[i]).attr('disabled', true);
        } else {
          $($checkboxes[i]).attr('disabled', false);
        }
      }
      console.log(checkboxTime)
    }

    function basicInfo() {}

  });
});