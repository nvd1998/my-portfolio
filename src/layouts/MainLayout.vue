<template>
  <div class="main-layout">
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MainHeader from '../components/header/MainHeader.vue';
import MainFooter from '../components/footer/MainFooter.vue';
export default defineComponent({
  components: { MainHeader, MainFooter },
  name: 'MainLayout',
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.main-layout {
  @apply relative;
}
</style>
