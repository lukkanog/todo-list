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
import eventbus from "../eventbus";
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

    }),

    methods: {
        createTask(taskName) {
            const existentTask = this.tasks.find(x => x.name === taskName)

            if (!existentTask) {
                this.tasks.unshift({name: taskName, completed: false})
            }
            
        }
    },

    mounted () {
        eventbus.onTaskCreation(task => {
            this.createTask(task);
        })
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