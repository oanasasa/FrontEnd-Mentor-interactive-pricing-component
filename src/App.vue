<script setup lang="ts">
  import PricingCard from './components/PricingCard.vue';
</script>

<template>
  <div class="pricipal-section">
    <div class="title-text">
      <h1>Simple, trafic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>

    </div>
    <div>
      <PricingCard />
    </div>
  </div>
</template>

<style scoped>
.pricipal-section{
  @apply pt-10 pb-10 mr-auto ml-auto max-w-xl text-center before:content-[''] before:bg-gray before:w-full before:h-1/2 before:absolute before:left-0 before:top-0 before:-z-10 before:rounded-bl-full ;
}
.pricipal-section h1{
  @apply mb-5;
}
.title-text{
  @apply before:content-[""] bg-hero-title-text bg-no-repeat bg-center pt-10 mb-10
}
</style>
