<template>
  <div id="app">
    <!-- Dropdown Structure -->
    <!-- <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="mi mi-36 mi-menu"></i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><a class="dropdown-button" style="margin-top: -2px;" href="#!" data-activates="dropdown1">Dropdown<i class="mi mi-arrow-drop-down"></i></a></li>
        </ul>
      </div>
    </nav>

    <ul id="slide-out" class="side-nav">
      <li><div class="user-view">
        <div class="background">
          <img src="http://via.placeholder.com/350x150">
        </div>
        <a href="#!user"><img class="circle" src="http://via.placeholder.com/350x150"></a>
        <a href="#!name"><span class="white-text name">John Doe</span></a>
        <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div></li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
       <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li>
            <a class="collapsible-header">Dropdown<i class="material-icons">arrow_drop_down</i></a>
            <div class="collapsible-body">
              <ul>
                <li><a href="#!">First</a></li>
                <li><a href="#!">Second</a></li>
                <li><a href="#!">Third</a></li>
                <li><a href="#!">Fourth</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul> -->
    <!-- <md-button class="waves-effect waves-light">Hello, world!</md-button> -->
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
    <router-view/>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css' // This line here
// Vue.use(VueMaterial)

// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// Vue.use(Vuetify)

// import Vue from 'vue'
// import VueMaterialComponents from 'vue-material-components'
// import 'vue-material-components/assets/css/materialize.min.css'
// Vue.use(VueMaterialComponents)

// import Vue from 'vue'
// import VueCarousel from 'vue-carousel'
// Vue.use(VueCarousel)

// import 'material-icons/css/material-icons.min.css'
// import 'materialize-css/dist/css/materialize.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'app',
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
// $(document).ready(function () {
//   $('.dropdown-button').dropdown()
//   $('.button-collapse').sideNav()
//   $('.collapsible').collapsible()
//   $('.scrollspy').scrollSpy()
//   $('.carousel').carousel()
//   // $('.carousel.carousel-slider').carousel({fullWidth: true});
// })
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
</style>
