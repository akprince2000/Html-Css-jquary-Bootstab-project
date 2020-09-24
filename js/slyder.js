
$(document).ready(function() {
  $('.box_skitter_large').skitter({
    theme: 'clean', // minimalist, round, clean, square
    numbers_align: 'center', // Alignment of numbers/dots/thumbs
    progressbar: true, // Displays progress bar
    dots: true, // <a href="https://www.jqueryscript.net/tags.php?/Navigation/">Navigation</a> with dots
    preview: true // Preview with dots
  });
});





$('.box_skitter_large').skitter({

  // <a href="https://www.jqueryscript.net/animation/">Animation</a> velocity
  velocity: 1,

  // Interval between transitions
  interval: 2500, 

  // Default animation
  animation: '',

  // Numbers display
  numbers: false,

  // Navigation display
  navigation: false,

  // Label display
  label: true,

  // Easing default
  easing_default: '',

  // The skitters box (internal)
  skitter_box: null,

  // @deprecated
  time_interval: null,

  // Image link (internal)
  images_links: null,

  // Actual image (internal)
  image_atual: null,

  // Actual link (internal)
  link_atual: null,

  // Actual label (internal)
  label_atual: null,

  // Actual target (internal)
  target_atual: '_self',

  // Skitter width (internal)
  width_skitter: null,

  // Skitter height (internal)
  height_skitter: null,

  // Image number loop (internal)
  image_i: 1,

  // Is animating (internal)
  is_animating: false,

  // Is hover skitter_box (internal)
  is_hover_skitter_box: false,

  // Smart randomly (internal)
  random_ia: null,

  // Randomly sliders
  show_randomly: false,

  // Navigation with thumbs
  thumbs: false,

  // Hide numbers and navigation
  hide_tools: false,

  // Fullscreen mode
  fullscreen: false,

  // Loading data from XML file
  xml: false,

  // Navigation with dots
  dots: true,

  // Final opacity of elements in hide_tools
  opacity_elements: 0.75,

  // Interval animation hover elements hide_tools 
  interval_in_elements: 200, 

  // Interval animation out elements hide_tools
  interval_out_elements: 300, 

  // Onload Callback
  onLoad: null,

  // Function call to change image
  imageSwitched: null,

  // @deprecated
  max_number_height: 20,

  // Alignment of numbers/dots/thumbs
  numbers_align: 'center',

  // Preview with dots
  preview: false,

  // Focus slideshow
  focus: false,

  // Focus active (internal)
  foucs_active: false,

  // Option play/pause manually
  controls: false,

  // Displays progress bar
  progressbar: false,

  // CSS progress bar
  progressbar_css: {},

  // Is paused (internal)
  is_paused: false,

  // Is blur (internal)
  is_blur: false,

  // Is paused time (internal)
  is_paused_time: false,

  // Time start (internal)
  time_start: 0,

  // Elapsed time (internal)
  elapsedTime: 0,

  // Stop animation to move mouse over it.
  stop_over: true,

  // Enable navigation keys
  enable_navigation_keys: false,

  // Specific animations
  with_animations: [],

  // Function call to go over the navigation buttons
  // mouseOverButton: function() { $(this).stop().animate({opacity:0.5}, 200); }, 
  mouseOverButton: null, 

  // Function call to go out the navigation buttons
  // mouseOutButton: function() { $(this).stop().animate({opacity:1}, 200); }, 
  mouseOutButton: null, 

  // Sets whether the slideshow will start automatically
  auto_play: true, 

  // Label animation type
  label_animation: 'slideUp', 

  // Theme
  theme: null, 

  responsive: {
    small: {
      animation: 'fade',
      max_width: 768
    },
    medium: {
      max_width: 1024
    }
  }

});