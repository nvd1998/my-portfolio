<template>
  <div class="main-header">
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainHeader",
  setup() {
    const headerItems = [
      {
        id: 0,
        label: "Home",
      },
      {
        id: 1,
        label: "About",
      },
      {
        id: 2,
        label: "Projects",
      },
      {
        id: 3,
        label: "Contact",
      },
    ];
  },
});
</script>
