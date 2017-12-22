<template>
  <div class="elevation-demo">
    <md-content class="md-elevation-1">1</md-content>
    <md-content class="md-elevation-2">2</md-content>
    <md-content class="md-elevation-3">3</md-content>
    <md-content class="md-elevation-4">4</md-content>
    <md-content class="md-elevation-5">5</md-content>
    <md-content class="md-elevation-6">6</md-content>
    <md-content class="md-elevation-7">7</md-content>
    <md-content class="md-elevation-8">8</md-content>
    <md-content class="md-elevation-9">9</md-content>
    <md-content class="md-elevation-10">10</md-content>
    <md-content class="md-elevation-11">11</md-content>
    <md-content class="md-elevation-12">12</md-content>
    <md-content class="md-elevation-13">13</md-content>
    <md-content class="md-elevation-14">14</md-content>
    <md-content class="md-elevation-15">15</md-content>
    <md-content class="md-elevation-16">16</md-content>
    <md-content class="md-elevation-17">17</md-content>
    <md-content class="md-elevation-18">18</md-content>
    <md-content class="md-elevation-19">19</md-content>
    <md-content class="md-elevation-20">20</md-content>
    <md-content class="md-elevation-21">21</md-content>
    <md-content class="md-elevation-22">22</md-content>
    <md-content class="md-elevation-23">23</md-content>
    <md-content class="md-elevation-24">24</md-content>
  </div>
</template>

<script>
  // import 'vue-material/dist/theme/engine.scss'
  export default {
    name: 'FirstPage'
  }
</script>

<style lang="scss" scoped>

  @import '~vue-material/dist/theme/engine';

  .elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  .md-content {
    width: 100px;
    height: 100px;
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<!-- 
<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>
  export default {
    name: 'FistPage'
  }
</script>

<style lang="scss" scoped>
  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      background: md-get-palette-color(grey, 300);
    }

    &:nth-child(2) {
      background: md-get-palette-color(grey, 400);
    }

    &:nth-child(3) {
      background: md-get-palette-color(grey, 500);
    }
  }
</style> -->