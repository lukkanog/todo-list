<template>
    <div class="wrapper">
        <div class="progress-bar" :style="`width: ${progress}%`"> </div>
        <p class="progress-text">{{ progress }}%</p>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true,
            default: [],
        }
    },
    computed: {
        progress() {
            if (this.tasks) {
                const completedTasks = this.tasks.filter(x => x.completed);

                if (this.tasks.length <= 0 || completedTasks.length <= 0) 
                    return 0;

                return ((completedTasks.length / this.tasks.length) * 100).toFixed();
            }
        }
    }
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
        transition: .5s ease-in-out;
    }
</style>