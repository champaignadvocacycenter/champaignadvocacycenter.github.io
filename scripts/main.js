
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
}