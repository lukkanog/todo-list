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
import eventbus from "../eventbus";
export default {
    components: {
        TaskCard
    },

    data: () => ({
        tasks: []
    }),

    methods: {
        createTask(taskName) {
            const existentTask = this.tasks.find(x => x.name === taskName)

            if (!existentTask) {
                this.tasks.unshift({name: taskName, completed: false})
            }
            
        },
        updateTask(taskName, status) {
            const existentTask = this.tasks.find(x => x.name === taskName)

            if (existentTask)
                existentTask.completed = status;
        },
        deleteTask(taskName) {
            this.tasks = this.tasks.filter(x => x.name !== taskName)
        }
    },

    mounted() {
        eventbus.onTaskCreation(task => {
            this.createTask(task);
        });

        eventbus.onTaskUpdate((task, status) => {
            this.updateTask(task, status);
        });

        eventbus.onTaskDelete((task, status) => {
            this.deleteTask(task);
        })
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