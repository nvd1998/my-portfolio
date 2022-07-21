<template>
  <MainHeader />
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import MainHeader from "../components/header/MainHeader.vue";
export default defineComponent({
  components: { MainHeader },
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>
