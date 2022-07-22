<template>
  <div class="contact-me">
    <div class="contact-me_wrapper">
      <h1 class="title">Send me a message!</h1>
      <h2 class="short-description">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h2>
      <form>
        <div class="input-group">
          <label>
            <span>Your name</span>
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="Enter your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="Enter your email address"
            />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            v-model="message"
            placeholder="Hi, I have a project that you maybe interested in. How soon can you hop on to discuss this? ^^"
          ></textarea>
        </label>
        <DButton @click.prevent="submitForm" :label="'Submit'" class="mt-10" />
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, inject } from 'vue';
import DButton from './base/DButton.vue';

export default defineComponent({
  name: 'ContactMe',
  components: { DButton },
  setup() {
    const axios = inject('axios'); // inject axios
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const endpoint = 'https://formspree.io/f/xoqrgkar';
    const submitForm = async () => {
      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      const response = await axios.post(endpoint, data);
    };
    return { name, email, message, submitForm };
  },
});
</script>

<style lang="scss" scoped>
.contact-me {
  @apply min-h-[100vh] w-full py-10 bg-snow flex justify-center items-center;
  .contact-me_wrapper {
    @apply max-w-[1440px] w-full h-full mx-auto flex flex-col justify-center items-center;
    .title {
      @apply text-[50px] text-center font-bold max-w-[600px] text-primary mb-5;
    }
    .short-description {
      @apply text-[25px] text-center font-bold max-w-[500px] text-dark-sapphire mb-20;
    }
    > form {
      @apply w-full max-w-[860px] mx-auto flex flex-col justify-center items-center;
      .input-group {
        @apply grid grid-cols-2 gap-[50px] w-full;
      }
      label {
        @apply flex flex-col mb-10 w-full;
        > span {
          @apply text-[18px] text-lighter-primary mb-[10px];
        }
      }
    }
  }
}
</style>
