<template>
  <div :class="displayValue ? 'menu-button' : 'hidden-menu-button'">
    <div class="menu-button_wrapper">
      <div class="icon-button" @click="displayValue = !displayValue"></div>
    </div>
    <div :class="'menu-list'">
      <a v-for="item in headerItems" :key="item.id" :href="item.to">{{
        item.label
      }}</a>
      <div class="say-hello">
        <p class="section-title">Say Hello</p>
        <a href="mailto:vietduc1703@gmail.com">My email</a>
        <a href="https://www.linkedin.com/in/nguyen-duc-72a42a177/"
          >My Linkedin</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MenuButton",
  setup() {
    const headerItems = [
      {
        id: 0,
        label: "Home",
        to: "#",
      },
      {
        id: 1,
        label: "About",
        to: "#about",
      },
      {
        id: 2,
        label: "Projects",
        to: "#projects",
      },
      {
        id: 3,
        label: "Contact",
        to: "#contact",
      },
    ];
    const displayValue = ref(false);
    return { headerItems, displayValue };
  },
});
</script>

<style lang="scss" scoped>
.hidden-menu-button {
  @apply absolute right-0 top-1/2 bg-transparent w-[90px] h-[70px] transition-all duration-300 pr-10 pt-[30px];
  transform: translateY(-30px);
  .menu-button_wrapper {
    @apply absolute top-[30px] right-10 w-[50px] h-[40px];
    .icon-button {
      @apply w-full h-full cursor-pointer;
      &::before {
        content: "";
        @apply absolute top-0 left-0 w-full h-[2px] transition-all duration-300 bg-primary;
      }
      &::after {
        content: "";
        @apply absolute bottom-5 right-0 w-[80%] h-[2px] transition-all duration-300  bg-primary;
      }
    }
  }
  .menu-list {
    @apply hidden;
    > a {
      @apply mb-5 text-[18px] text-primary;
    }
  }
}
.menu-button {
  @apply pt-[100px] absolute right-0 top-1/2 bg-white px-10 py-[30px] w-[350px] h-[500px] transition-all duration-300;
  transform: translateY(-30px);
  .menu-button_wrapper {
    @apply absolute top-[30px] right-10 w-[50px] h-[40px];
    .icon-button {
      @apply w-full h-full cursor-pointer;
      &::before {
        content: "";
        @apply absolute bottom-5 left-0 w-full h-[2px] bg-primary transition-all duration-300 transform rotate-[45deg];
      }
      &::after {
        content: "";
        @apply absolute bottom-5 right-0 w-full h-[2px] bg-primary transition-all duration-300 transform -rotate-[45deg];
      }
    }
  }
  .menu-list {
    @apply flex flex-col;
    > a {
      @apply text-[18px] text-primary font-medium transition-all duration-[0.4] p-[10px] rounded-[5px];
      &:hover {
        @apply bg-primary-hover;
      }
    }
    .say-hello {
      @apply flex flex-col mt-5;
      .section-title {
        @apply uppercase text-twinkle-blue text-[18px] font-medium p-[10px];
      }
      > a {
        @apply text-[18px] text-primary font-medium transition-all duration-[0.4] p-[10px] rounded-[5px];
        &:hover {
          @apply bg-primary-hover;
        }
      }
    }
  }
}
</style>
