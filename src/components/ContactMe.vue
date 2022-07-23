<template>
  <div class="contact-me" id="contact">
    <div class="contact-me_wrapper">
      <h1 class="title" id="contact-me-title">Send me a message!</h1>
      <h2 class="sub-title" id="contact-me-sub-title">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h2>
      <form>
        <div class="input-group">
          <label
            id="contact-me-name-input"
            :class="{ 'invalid-input': !isValidName }"
          >
            <span>Your name</span>
            <input
              type="text"
              name="name"
              v-model="name"
              @change="() => onCheckValid('name')"
              placeholder="Enter your name"
              required
            />
          </label>
          <label
            id="contact-me-email-input"
            :class="{ 'invalid-input': !isValidEmail }"
          >
            <span>Email</span>
            <input
              type="email"
              name="email"
              v-model="email"
              @change="() => onCheckValid('email')"
              placeholder="Enter your email address"
              required
            />
          </label>
        </div>
        <label
          id="contact-me-message"
          :class="{ 'invalid-input': !isValidMessage }"
        >
          <span>Message</span>
          <textarea
            name="message"
            v-model="message"
            @change="() => onCheckValid('message')"
            placeholder="Hi, I have a project that you maybe interested in. How soon can you hop on to discuss this? ^^"
            required
          ></textarea>
        </label>
        <DButton
          @click.prevent="submitForm"
          :label="'Submit'"
          class="mt-10"
          :disabled="!isValidName || !isValidEmail || !isValidMessage"
        />
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, inject, onMounted, onUnmounted } from 'vue';
import DButton from './base/DButton.vue';

export default defineComponent({
  name: 'ContactMe',
  components: { DButton },
  setup() {
    const axios = inject('axios'); // inject axios
    const addAnimationWhenShowUp = inject('addAnimationWhenShowUp'); // inject addAnimationWhenShowUp
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const endpoint = 'https://formspree.io/f/xoqrgkar';
    const isValidName = ref(true);
    const isValidEmail = ref(true);
    const isValidMessage = ref(true);
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const successAlertElement = document.getElementById('success-alert-badge');
    const errorAlertElement = document.getElementById('error-alert-badge');
    const onCheckValid = (field) => {
      if (field === 'name') {
        isValidName.value = !!name.value;
      }
      if (field === 'email') {
        isValidEmail.value = emailRegex.test(email.value);
      }
      if (field === 'message') {
        isValidMessage.value = !!message.value;
      }
    };
    const submitForm = async () => {
      onCheckValid('name');
      onCheckValid('email');
      onCheckValid('message');
      if (isValidName.value && isValidEmail.value && isValidMessage.value) {
        const data = {
          name: name.value,
          email: email.value,
          message: message.value,
        };
        try {
          await axios.post(endpoint, data);
          successAlertElement.classList.add('displayed-alert');
          setTimeout(() => {
            successAlertElement.classList.remove('displayed-alert');
          }, 4000);
          name.value = '';
          email.value = '';
          message.value = '';
          isValidName.value = true;
          isValidEmail.value = true;
          isValidMessage.value = true;
        } catch (error) {
          errorAlertElement.classList.add('displayed-alert');
          setTimeout(() => {
            errorAlertElement.classList.remove('displayed-alert');
          }, 4000);
          throw new Error(error);
        }
      }
    };

    onMounted(() => {
      addAnimationWhenShowUp('contact-me-title', 'show-up-from-top');
      addAnimationWhenShowUp('contact-me-sub-title', 'show-up-from-bottom');
      addAnimationWhenShowUp('contact-me-message', 'show-up-from-bottom');
      addAnimationWhenShowUp('contact-me-name-input', 'show-up-from-left');
      addAnimationWhenShowUp('contact-me-email-input', 'show-up-from-right');
    });
    onUnmounted(() => {
      window.removeEventListener('scroll');
    });
    return {
      name,
      email,
      message,
      isValidName,
      isValidEmail,
      isValidMessage,
      submitForm,
      onCheckValid,
    };
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
    .sub-title {
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
      .invalid-input {
        > span {
          @apply text-[#e55039];
        }
        input,
        textarea {
          @apply border-b-[#e55039] text-[#e55039];
        }
        input::placeholder,
        textarea::placeholder {
          @apply text-[#e55039];
        }
      }
    }
  }
}
</style>
