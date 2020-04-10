<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectColor(blue)">Load Blue Template</button>
        <button class="btn btn-success" @click="selectColor(green)">Load Green Template</button>
        <button class="btn btn-danger" @click="selectColor(red)">Load Red Template</button>
        <hr />
        <component v-if="selectedColor" :is="selectedColor.componentId">
          <h1 slot="title">{{ selectedColor.name }}</h1>
          <img slot="image" :src="selectedColor.link" :alt="selectedColor.name" />
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: () => {
    return {
      red: {
        name: "Red",
        link:
          "https://thumbs.dreamstime.com/z/print-learn-primary-colors-red-different-objects-color-educational-material-children-toddlers-137626443.jpg",
        componentId: "appRed"
      },
      green: {
        name: "Green",
        link:
          "https://thumbs.dreamstime.com/z/print-learn-primary-colors-green-different-objects-color-educational-material-children-toddlers-137626440.jpg",
        componentId: "appGreen"
      },
      blue: {
        name: "Blue",
        link:
          "https://thumbs.dreamstime.com/z/print-learn-primary-colors-blue-different-objects-color-educational-material-children-toddlers-137626384.jpg",
        componentId: "appBlue"
      },
      selectedColor: null
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    }
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>
