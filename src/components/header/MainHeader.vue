<template>
  <div class="main-header">
    <div class="main-header_wrapper">
      <div class="text-secondary uppercase text-[30px] font-bold">DRAKE</div>
      <MenuButton />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MenuButton from './MenuButton.vue';
export default defineComponent({
  name: 'MainHeader',
  components: { MenuButton },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.main-header {
  @apply fixed top-0 left-0 z-[2] flex justify-center items-center bg-transparent h-[100px] w-full;
  .main-header_wrapper {
    @apply relative w-full max-w-[1600px] py-10 flex justify-between items-center;
  }
}
</style>
