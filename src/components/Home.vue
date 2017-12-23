<template>
  <div class="container-fluid">
    <carousel-3d>
      <slide :index="0">
        Slide 1 Content
      </slide>
      <slide :index="1">
        Slide 2 Content
      </slide>
      <slide :index="2">
        Slide 2 Content
      </slide>
      <slide :index="3">
        Slide 2 Content
      </slide>
      <slide :index="4">
        Slide 2 Content
      </slide>
    </carousel-3d>
<!--     <div class="carousel">
      <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
      <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
      <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
      <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
      <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
    </div>
    <div class="row">
      <div class="col s1">1</div>
      <div class="col s1">2</div>
      <div class="col s1">3</div>
      <div class="col s1">4</div>
      <div class="col s1">5</div>
      <div class="col s1">6</div>
      <div class="col s1">7</div>
      <div class="col s1">8</div>
      <div class="col s1">9</div>
      <div class="col s1">10</div>
      <div class="col s1">11</div>
      <div class="col s1">12</div>
    </div>
       <div class="row">
    <div class="col s12 m9 l10">
      <div id="introduction" class="section scrollspy">
        <p>Content </p>
      </div>

      <div id="structure" class="section scrollspy">
        <p>Content </p>
      </div>

      <div id="initialization" class="section scrollspy">
        <p>Content </p>
      </div>
    </div>
    <div class="col hide-on-small-only m3 l2">
      <ul class="section table-of-contents">
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#structure">Structure</a></li>
        <li><a href="#initialization">Intialization</a></li>
      </ul>
    </div>
  </div> -->
  </div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'Home',
  components: {
    Carousel3d,
    Slide
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is:')
  }
}

// $(document).ready(function () {
//   $('.carousel').carousel();
//   // $('.carousel.carousel-slider').carousel({fullWidth: true});
// })
</script>

<style>

</style>
