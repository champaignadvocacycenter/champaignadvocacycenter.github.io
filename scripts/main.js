
window.onscroll = stick;
window.onresize = resize;

/*--- STICKY SIDEBAR --*/

// var headerBottom is invisible div at bottom of header
// Grab it to find offset position of the sidebar nav
let headerBottom = document.getElementById("headerBottom");
let sidebar = document.getElementById("sidebar");
let content = document.getElementById("content");
let footer = document.getElementById("footer");

// Sticky is the position at which we want the sidebar to be stickied
let sticky = headerBottom.offsetTop;

// Bottom sticky
let stickyBottom = footer.offsetTop;

// Keep track of width bc fixed will resize relative to viewport
let width = sidebar.offsetWidth;

// Adjust fixed position on resize
function resize(){
    // Update sticky height
    sticky = headerBottom.offsetTop;

    // Width will be 1/4 content width as it takes up 3 cols
    width = content.offsetWidth/4;
    
    // Call to stick
    stick();
}

function stick() {
  sticky = headerBottom.offsetTop;
  stickyBottom = footer.offsetTop;

  let y = window.pageYOffset;

  if (y<sticky) {
    sidebar.classList.remove("sticky");
  }
  if ( y>=sticky ) {
    sidebar.classList.add("sticky");
    sidebar.classList.remove("stickyBottom");
    sidebar.style.width = width+"px";
  }
  if ( y+sidebar.offsetHeight>=stickyBottom){
    if (sidebar.classList.contains("sticky")){
      sidebar.classList.remove("sticky");
      sidebar.classList.add("stickyBottom");
    }
    sidebar.style.width = width+"px";
  }
  
  var position = $(this).scrollTop();
  let blurbs = document.getElementsByClassName("blurb");

  for(var i = 0; i < blurbs.length; i++){
    var target = blurbs[i].offsetTop;
    var id = blurbs[i].id;

    if (y >= target) {
      console.log(id);
      $('.nav > a').removeClass('active');
      $('.nav > a[href="#' + id + '"]').addClass('active');
    }
  }
}

// Smooth scrolling to links with hashes taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
});