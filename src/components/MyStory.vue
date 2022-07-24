<template>
  <div class="my-story">
    <div class="my-story_wrapper">
      <div class="content">
        <h1>Over the <br />past 4 years,</h1>
        <p>
          I've built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </p>
        <p>
          Currently, I work at Shopify as a Senior UX Developer and
          Accessibility advocate crafting thoughtful and inclusive experiences
          that adhere to web standards for over a million merchants across the
          world.
        </p>
        <p>
          Before now, I was Principal Frontend Engineer at hellotax, where I
          worked on a suite of tools and services tailored at providing fast,
          automated VAT Registration / filings & Returns solutions for
          multi-channel sellers across Europe.
        </p>
        <p>
          Prior to hellotax, I was Senior frontend engineering contractor with
          Pixel2HTML, building JavaScript applications and interfaces for orgs
          and individuals.
        </p>
        <p>
          I once also led the frontend team at a Russian startup, Conectar
          through building multiple React applications into a single robust
          learning platform.
        </p>
      </div>
      <div class="image-zone">image</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyStory',
});
</script>
<style lang="scss" scoped>
.my-story {
  @apply w-full bg-primary min-h-[100vh] py-10 flex items-center;
  .my-story_wrapper {
    @apply max-w-[1280px] w-full h-full mx-auto flex justify-center items-center;
    .content {
      @apply w-1/2;
      h1 {
        @apply text-[64px] leading-[100%] text-secondary font-bold max-w-[28vw] mb-8;
      }
      p {
        @apply text-[18px] text-white font-normal max-w-[28vw] mb-5;
      }
    }
    .image-zone {
      @apply w-1/2 h-full;
    }
  }
}
</style>
