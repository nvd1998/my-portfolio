<template>
  <div class="homepage">
    <main-banner />
    <contact-me />
    <!-- <my-story /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ContactMe from '../components/ContactMe.vue';
import MainBanner from '../components/MainBanner.vue';
import MyStory from '../components/MyStory.vue';

export default defineComponent({
  components: { MainBanner, ContactMe, MyStory },
  name: 'HomePage',
});
</script>
<style lang="scss" scoped>
.homepage {
}
</style>
