$(function() {
  //GLOBAL VARAIBLES
  const $title = $("#title"),
    $input = $("#other-title"),
    $selectDesign = $("#design"),
    $design = $("#design option"),
    $tshirtOptions = $("#color option");

  let $checkboxInputs = $(".activities"), //store all input checkboxes
    conferencePrice = 0,
    totalActivityCost = $checkboxInputs.append("<p>Total: $0</p>"),
    total = $(".activities p");
  const $checkboxes = $checkboxInputs.children().children();
  /** Input Feild Section -- set the focus on the first text field **/
  $(window).on("load", () => {
    $("#name").focus();
    // createPriceField()
  });
  /** Job Role Section: set the focus on the first text field **/
  //initially hide text field for input
  $input.hide();

  // reveal a text field when other option is selected in job role field
  $title.on("change", function() {
    //why this does not work with arrow function
    if (this.value === "other") {
      $input.delay(100).slideDown();
      // .show();
    } else {
      $input.slideUp(150);
    }
  });
  /** T-Shirt Infor Section: set the focus on the first text field **/
  $design.eq(0).hide();

  // Hide all color themes
  $tshirtOptions.each(function(i, element) {
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

  // show appropriate color
  // for selected theme
  $selectDesign.on("change", function(event) {
    console.log($(event.target).val()); //can't call nodeName() - Why?
    $tshirtOptions.each(function(i, element) {
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

  //listening for change in activities
  $checkboxes.on("change", function(event) {
    let clicked = event.target;
    let clickedCost = $(clicked).attr("data-cost");
    let clickedTime = $(clicked).attr("data-day-and-time");
    clickedCost = clickedCost.slice(1, 4);

    // calculate the conference price
    if ($(clicked).prop("checked")) {
      conferencePrice += parseInt(clickedCost);
    } else {
      conferencePrice -= parseInt(clickedCost);
    }
    //append conference price to the page
    $(total).text("Total  $:" + conferencePrice);
    // console.log(conferencePriceDOM.last().text())
    console.log(" $" + conferencePrice);

    for (let i = 0; i < $checkboxes.length; i++) {
      let checkboxTime = $($checkboxes[i]).attr("data-day-and-time");
      if (clickedTime === checkboxTime && clicked !== $checkboxes[i]) {
        if ($(clicked).prop("checked")) {
          $($checkboxes[i]).attr("disabled", true);
        } else {
          $($checkboxes[i]).attr("disabled", false);
        }
      }
    }
  });
  // Form validation Section
  const form = $("form");
  const payment = $("#payment");
  const paymentOption = payment.children();
  // const creditCardInfo = $("#credit-card");
  const nameInput = $("#name");
  // const email = $("#mail").val();
  const emailInput = $("#mail");
  const activityInput = $(".activities");
  const creditCardNumber = $("#cc-num");
  const zipCode = $("#zip");
  const cvv = $("#cvv");
  const submit = $("button");

  nameInput.on("input", function() {
    // console.log($(nameInput).val())
  });

  paymentOption.each(function(i, option) {
    if (option.value === "select method") {
      $(option)
        .attr("disabled", true)
        .attr("hidden", true)
        .removeAttr("selected", "");
    }
    if (option.value === "Credit Card") {
      $(option).attr("selected", "selected");
    }
  });

  payment.on("change", function(e) {
    console.log(e.target.value);
    if (e.target.value === "PayPal" || e.target.value === "Bitcoin") {
      creditCardInfo.delay(150).slideUp();
    } else if (e.target.value === "Credit Card") {
      creditCardInfo.delay(150).slideDown();
    }
  });
  // console.log(nameInput);

  function isValidName(nameInput) {
    return /^[a-zA-Z]{2,25}$/.test(nameInput);
  }

  function isValidEmail(email) {
    return /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
  }

  function formatCreditCard(creditCardNumber) {
    return;
  }

  // at least one activity is selected
  $(".activities input").addClass("rouge");
  console.log($(".activities input:checkbox:checked").length);
  function isSelected() {
    let checkboxActivities = $(".activities input");
    if ($(".activities input:checkbox:checked").length < 1) {
      $(".activities legend").before(
        "<span>Please select an activity or more</span>"
      );
    } else {
    }
  }

  function isEmpty(field) {
    if ($(field).val() === "") {
      return $(field)
        .attr("placeholder", "This field cannot be left empty")
        .addClass("rouge");
    }
  }

  submit.on("click", function(e) {
    e.preventDefault();
    isEmpty(nameInput);
    isEmpty(emailInput);
    isEmpty(creditCardNumber);
    isSelected();
    console.log(isValidName($(nameInput).val()));
  });
});
