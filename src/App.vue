<template>
  <router-view />
  <div id="error-alert-badge" class="error-alert-badge">
    ❌ Error: Something wrong!!!
  </div>
  <div id="success-alert-badge" class="success-alert-badge">
    ✔️ Success: Message's been delivered ^^
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
<style lang="scss" scoped>
.error-alert-badge {
  @apply fixed left-1/2 transform -translate-x-1/2 px-10 py-5 min-w-[300px] bg-[#e55039] text-white text-[18px] font-medium opacity-0;
}
.success-alert-badge {
  @apply fixed left-1/2 transform -translate-x-1/2 px-10 py-5 min-w-[300px] bg-[#78e08f] text-white text-[18px] font-medium opacity-0;
}
.displayed-alert {
  animation-name: showUpFromTopThenDisappear;
  animation-duration: 4s;
  animation-timing-function: ease;
}
</style>
