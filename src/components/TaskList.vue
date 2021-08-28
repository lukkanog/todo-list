<template>
    <ul 
        class="tasks"
        v-if="tasks"
    >
        <div v-for="(task, i) in tasks" :key="i">
            <task-card :name="task.name" :completed="task.completed"/>
        </div>
    </ul>
</template>

<script>
import TaskCard from "./TaskCard.vue";

export default {
    components: {
        TaskCard
    },

    data: () => ({
        tasks: [
            {
                name: "Lavar louça",
                completed: true
            },
            {
                name: "Lavar quintal",
                completed: false
            },
            {
                name: "Lavar quintal",
                completed: false
            },
            {
                name: "Lavar quintal",
                completed: false
            },
            {
                name: "Lavar quintal",
                completed: false
            },
            {
                name: "Lavar quintal",
                completed: false
            },
            {
                name: "Lavar quintal",
                completed: false
            }
        ],

    })
}
</script>

<style scoped>
    .tasks{
        width: calc(80vw - 2rem);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        align-content: flex-start;
        list-style: none;
    }
</style>