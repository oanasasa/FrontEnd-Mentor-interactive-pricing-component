<template>
    <div class="pricing-card">
        <div class="about-pricing">
            <p class="pageviews">100k pageviews</p>
            <div>
                <p class="price">$16.00<span>/month</span></p>
            </div>
        </div>
        <div class="pricing-container">
            <progress id="pricingProgress" value="0" max="100" class="pricing-bar"></progress>
            <button class="pricing-button"></button>
        </div>
        {{ price  }}
        {{ doubleCounter }}
        <button @click="increment" >increment</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const price = ref(3)

const doubleCounter = computed(() => {
    return price.value * 2;
})

const increment = () => {
    price.value++;
}
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
    @apply w-3 h-3 rounded-full bg-green absolute block top-1/2 -translate-y-1/2 cursor-pointer;
}
</style>