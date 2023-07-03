<template>
    <div class="pricing-card">
        <div class="about-pricing">
            <p class="pageviews">100k pageviews</p>
            <div>
               <p class="price-number">$<input v-model="currentPrice"  type="number"/><span>/month</span></p>
            </div>
        </div>
        <div class="pricing-container">
            <input v-model="currentPrice" type="range" min="0" max="32" class="pricing-bar" /> 
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
const currentPrice = ref(16);

</script>

<style scoped>
.pricing-card{
    @apply p-10 mr-auto ml-auto max-w-xl text-center bg-white shadow-lg rounded-3xl z-10 relative;
}
.about-pricing{
    @apply flex flex-row gap-3 justify-between pt-2 pb-9;
}
.pricing-container{
    @apply flex flex-row justify-center relative;
}
.pricing-bar{
    @apply w-full h-1 bg-gray;
}
.pricing-button{
    @apply w-10 h-10 rounded-full bg-green absolute block top-1/2 -translate-y-1/2 cursor-pointer;
}
.price-number input{
    @apply pointer-events-none w-14 font-bold text-4xl;
}
.price-number span{
    @apply text-text-gray font-semibold text-lg;
}
.price-number{
    @apply text-blue-dark flex flex-row align-middle text-4xl font-bold;
}
</style>