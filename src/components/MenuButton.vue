<template>
  <div class="menu-button">
    <div class="main-header_wrapper">
      <div class="icon-button"></div>
    </div>
    <div>
      <a v-for="item in headerItems" :key="item.id" :href="item.to">{{
        item.label
      }}</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuButton',
  setup() {
    const headerItems = [
      {
        id: 0,
        label: 'Home',
        to: '#',
      },
      {
        id: 1,
        label: 'About',
        to: '#about',
      },
      {
        id: 2,
        label: 'Projects',
        to: '#projects',
      },
      {
        id: 3,
        label: 'Contact',
        to: '#contact',
      },
    ];
    return { headerItems };
  },
});
</script>

<style lang="scss" scoped>
.menu-button {
}
</style>
