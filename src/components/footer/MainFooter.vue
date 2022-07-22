<template>
  <div class="main-footer">
    <div class="main-footer_wrapper">
      <p class="slogan">Living, learning, & leveling up one day at a time.</p>
      <div>
        <p class="copyright">Handcrafted by me © Drake Nguyen 2022</p>

        <div class="social-list">
          <a href="https://www.facebook.com/dev.duc19" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
              class="social-icons"
            >
              <title>Facebook</title>
              <path
                id="social-icons"
                fill="none"
                stroke="#f8c291"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M7.5 15.5H2c-.83 0-1.5-.67-1.5-1.5V2C.5 1.17 1.17.5 2 .5h12c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-3.5V10H12l1-2.5h-2.5v-2c0-.55.45-.5 1-.5h1V2.5h-2c-.83 0-1.58.34-2.12.88S7.5 4.67 7.5 5.5v2h-2V10h2v5.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/dev_duc/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f8c291"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="social-icons"
            >
              <title>Instagram</title>
              <rect
                id="social-icons"
                stroke="#f8c291"
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
              ></rect>
              <path
                id="social-icons"
                stroke="#f8c291"
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              ></path>
              <line
                id="social-icons"
                stroke="#f8c291"
                x1="17.5"
                y1="6.5"
                x2="17.51"
                y2="6.5"
              ></line>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nguyen-duc-72a42a177/"
            target="_blank"
          >
            <svg
              class="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f8c291"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>LinkedIn</title>
              <path
                id="social-icons"
                stroke="#f8c291"
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect
                id="social-icons"
                stroke="#f8c291"
                x="2"
                y="9"
                width="4"
                height="12"
              ></rect>
              <circle
                id="social-icons"
                stroke="#f8c291"
                cx="4"
                cy="4"
                r="2"
              ></circle>
            </svg>
          </a>
          <a href="https://github.com/nvd1998" target="_blank"
            ><svg
              class="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f8c291"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>GitHub</title>
              <path
                id="social-icons"
                stroke="#f8c291"
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainFooter',
  setup() {
    const headerItems = [
      {
        id: 0,
        label: 'Home',
      },
      {
        id: 1,
        label: 'About',
      },
      {
        id: 2,
        label: 'Projects',
      },
      {
        id: 3,
        label: 'Contact',
      },
    ];
  },
});
</script>

<style lang="scss" scoped>
.main-footer {
  @apply w-full h-fit bg-primary;
  .main-footer_wrapper {
    @apply relative w-full max-w-[1600px] mx-auto py-10 flex items-center justify-between flex-wrap;
    .slogan {
      @apply text-[26px] text-center text-secondary font-medium my-8 w-[350px] mx-auto;
    }
    > div {
      @apply flex justify-between items-center w-full;

      .copyright {
        @apply text-[16px] text-secondary font-normal;
      }
      .social-list {
        @apply flex justify-between items-center;
        > a {
          &:hover {
            .social-icons {
              @apply transition-all duration-200 transform translate-y-[-3px];
            }
          }
          .social-icons {
            @apply w-5 h-5 mx-5 transition-all duration-200;
          }
        }
      }
    }
  }
}
</style>
