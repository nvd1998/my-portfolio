<template>
  <div class="homepage">
    <main-banner />
    <contact-me />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContactMe from "../components/ContactMe.vue";
import MainBanner from "../components/MainBanner.vue";

export default defineComponent({
  components: { MainBanner, ContactMe },
  name: "HomePage",
});
</script>
<style lang="scss" scoped>
.homepage {
}
</style>
