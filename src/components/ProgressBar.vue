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
        totalTasks: 0,
        completedTasks: 0
    }),
    computed: {
        progress() {
            console.log(`total: ${this.totalTasks}`)
            console.log(`completas: ${this.completedTasks}`)

            if (this.totalTasks === 0 || this.completedTasks === 0)
                return 0
            
            return ((this.completedTasks / this.totalTasks) * 100).toFixed(2);
        }
    },
    mounted() {
        eventbus.onTaskCreation(() => {
            this.totalTasks++;
        });

        eventbus.onTaskUpdate((task, status) => {
            if (status) {
                this.completedTasks++;
                return;
            }
            
            this.completedTasks--;
        });

        eventbus.onTaskDelete(() => {
            this.totalTasks--;
        })
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