<template>
  <div class="main-footer">
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainFooter",
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
