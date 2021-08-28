<template>
    <ul 
        class="tasks"
        v-if="tasks"
    >
        <div v-for="(task, i) in orderedTasks" :key="i">
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

    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    computed: {
        orderedTasks() {
            return this.tasks.sort(x => x.completed)
        }
    }
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
        margin: 1rem 0;
    }
</style>