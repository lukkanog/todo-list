<template>
    <div class="wrapper">
        <div class="progress-bar" :style="`width: ${progress}%`"> </div>
        <p class="progress-text">{{ progress }}%</p>
    </div>
</template>

<script>
import eventbus from "../eventbus";
export default {
    data: () => ({
        progress: 0
    }),
    // methods: {

    // }
    // mounted() {
    //     eventbus.onTaskAmmountUpdate(() => {

    //     })
    // }
}
</script>

<style scoped>
    .wrapper{
        height: 1.5rem;
        width: 80vw;
        border: 2px solid #fff;
    }

    .progress-text{
        position: relative;
        text-align: center;
        width: 100%;
        left: 0%;
        top: -100%;
    }

    .progress-bar{
        background-color: #0b8a75;
        height: 100%;
        position: relative;
        top: 0;
    }
</style>