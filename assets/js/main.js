// Toggle 'active' class on click
document.querySelectorAll(".popover_parent a").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".popover_parent > a").forEach(function (el) {
      if (el !== this) {
        el.parentElement.classList.remove("active");
      }
    }, this);
    this.parentElement.classList.toggle("active");
  });
});

// Hide the dropdown when clicked off
document.addEventListener("click", function (event) {
  if (!event.target.closest(".popover_parent")) {
    // Hide the menus.
    document.querySelectorAll(".popover_parent.active").forEach(function (el) {
      el.classList.remove("active");
    });
  }
});

const close_mobile = document.getElementById("close-nav-mobile");

close_mobile.addEventListener("click", function () {
  document.querySelectorAll(".popover_parent.active").forEach(function (el) {
    el.classList.remove("active");
  });
});
