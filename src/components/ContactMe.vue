<template>
  <div class="contact-me">
    <div class="contact-me_wrapper">
      <p>Send me a message!</p>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <form @submit.prevent="submitForm">
        <label>
          <span>Email</span>
          <input type="email" name="email" v-model="email" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" v-model="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactMe",
  setup() {
    const email=ref('');
    const message = ref(''),
    const endpoint = 'https://formspree.io/f/mjvlnezr';
    const submitForm = async () => {
      const data = {
        email: email.value,
        message: message.value,
      };
      const response = await this.$axios.post(endpoint, data);
    };
    return {email, message, submitForm}
  },
});
</script>

<style lang="scss" scoped>
.contact-me {
  @apply h-[100vh] w-full;
  .contact-me_wrapper {
    @apply max-w-[1440px] w-full h-full;
  }
}
</style>
