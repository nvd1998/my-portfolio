<template>
  <div class="main-header" id="main-header">
    <div class="main-header_wrapper">
      <a href="#">DRAKE</a>
      <MenuButton />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue';
import MenuButton from './MenuButton.vue';
export default defineComponent({
  name: 'MainHeader',
  components: { MenuButton },
  setup() {
    onMounted(() => {
      const headerElement = document.getElementById('main-header');
      const menuButtonElement = document.getElementById('menu-button_wrapper');
      const toggleHeaderClass = () => {
        if (window.scrollY !== 0) {
          headerElement.classList.add('scrolled-main-header');
          menuButtonElement.classList.add('scrolled-hidden-menu-button');
        } else {
          headerElement.classList.remove('scrolled-main-header');
          menuButtonElement.classList.remove('scrolled-hidden-menu-button');
        }
      };
      window.addEventListener('scroll', toggleHeaderClass);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', toggleHeaderClass);
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
.main-header {
  @apply fixed top-0 left-0 z-[2] flex justify-center items-center bg-transparent h-[100px] w-full;
  .main-header_wrapper {
    @apply relative w-full py-10 flex justify-between items-center px-5;
    > a {
      @apply pt-5 text-secondary uppercase text-[30px] font-bold;
    }
  }
}
@media screen and (min-width: 1200px) {
  .main-header {
    .main-header_wrapper {
      @apply max-w-[1600px];
    }
  }
}
@media screen and (max-width: 1199px) {
  .main-header {
    .main-header_wrapper {
      @apply max-w-full;
    }
  }
}
@media screen and (max-width: 900px) {
  .main-header {
    .main-header_wrapper {
      > a {
        @apply pt-0;
      }
    }
  }
  .scrolled-main-header {
    @apply bg-[#0a3d62] h-fit;
    .main-header_wrapper {
      @apply p-5;
      > a {
        @apply text-[25px] transition-all duration-500 pt-0;
      }
    }
  }
}
</style>
