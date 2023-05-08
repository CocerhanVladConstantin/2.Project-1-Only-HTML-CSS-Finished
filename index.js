  //radio presentation
  var counter = 1;
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 10) {
    counter = 1;
    }
  }, 5000);

  //counter products

  function increaseCount(a, b) {
        var input = b.previousElementSibling;
        var value = parseInt(input.value, 10); 
        value = isNaN(value)? 0 : value;
        value ++;
        input.value = value;
      }
      function decreaseCount(a, b) {
        var input = b.nextElementSibling;
        var value = parseInt(input.value, 10); 
        if (value > 1) {
          value = isNaN(value)? 0 : value;
          value --;
          input.value = value;
        }
      }

  //product collapsible

  const collapsibles = document.querySelectorAll(".product-page-more-details-option");

      collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", function () {
          this.classList.toggle("active");
          const content = this.querySelector(".product-page-more-details-option-content");
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      });
