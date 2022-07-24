<template>
  <button class="common-button">
    <div class="hovered-background"></div>
    <span>{{ label }}</span>
    <svg
      class="icon-right-arrow"
      width="72"
      height="22"
      viewBox="0 0 72 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="icon-right-arrow"
        fill="none"
        stroke="#3c6382"
        stroke-width="2"
        stroke-miterlimit="0"
        d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
      ></path>
    </svg>
  </button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DButton',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.common-button {
  @apply relative px-[60px] py-4 w-fit border border-primary flex justify-center items-center cursor-pointer bg-snow;
  @media screen and (max-width: 576px) {
    @apply px-[30px] py-2;
  }
  &:disabled {
    @apply cursor-not-allowed;
  }
  .hovered-background {
    @apply absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-200;
  }
  &:hover {
    .hovered-background {
      @apply w-full;
    }
    #icon-right-arrow {
      stroke: white;
    }
    > span {
      @apply text-white;
    }
  }
  > span {
    @apply uppercase text-[18px] tracking-[1px] font-medium mr-5;
    @media screen and (max-width: 576px) {
      @apply text-[14px];
    }
  }
  .icon-right-arrow {
    @apply w-[46px] h-6;
    @media screen and (max-width: 576px) {
      @apply w-[30px];
    }
  }
}
</style>
