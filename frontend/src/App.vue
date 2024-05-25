<template>
  <header>

    <address class="address">
      <div class="address__container">
        <v-icon name="md-phone-outlined" fill="white"/>
      </div>
    </address>

    <a href="" class="flex items-center justify-center py-8">
      <img width="300" src="@/assets/305935814_742458257033222_1535551830658492468_n.jpg" alt="">
    </a>
    <div class="header-nav">
      <nav>
        <ul class="header-nav-left">
          <li><a class="nav_link" href="#">Home</a></li>
          <li><a class="nav_link" href="#">About</a></li>
          <li><a class="nav_link" href="#">Beauty</a></li>
          <li><a class="nav_link" href="#">Blog</a></li>
          <li><a class="nav_link" href="#">Shop</a></li>
          <li><a class="nav_link" href="#">Contacts</a></li>
        </ul>
        <div class="header-nav-right">
          <button class="search-button">
            <v-icon name="hi-search"></v-icon>
          </button>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero text-amber-50 text-center">
      <div class="hero__container">
        <h1 class="text-5xl font-bold w-5/12 mx-auto">Relax, Enjoy and Love Yourself</h1>
        <p class="w-5/12 mx-auto mt-5">Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!</p>
        <div class="hero-actions mt-10 flex justify-center">
          <ButtonBorder class="mr-5">view services</ButtonBorder>
         <ButtonFilled>book now</ButtonFilled>
        </div>
      </div>
    </section>
  </main>


</template>

<script>
import ButtonFilled from "@/components/ButtonFilled.vue";
import ButtonBorder from "@/components/ButtonBorder.vue";

export default {
  components: {ButtonBorder, ButtonFilled}
}
</script>

<style lang="scss" scoped>
header {
  background: #ffffff;
}
.address {
  background-color: #f49a8f;
}

.header-nav {
  @apply border-b border-t border-solid border-gray-300
}

nav {
  @apply flex items-center justify-center py-2 text-gray-700 font-semibold
}

.header-nav-left {
  @apply flex uppercase py-3
}

.header-nav-right {
  @apply border-l border-solid border-gray-300 p-3
}

.nav_link {
  @apply mx-5 py-5;
}

.search-button {

}

.hero {
  @apply py-20;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Полупрозрачный градиент */
      url('https://blossomthemesdemo.com/beauty-salon-lite/wp-content/uploads/sites/172/2022/09/StockSnap_VH22RVC5UT.jpg') no-repeat center center;
  background-position: 50% 50%;
  background-size: cover;
}
</style>