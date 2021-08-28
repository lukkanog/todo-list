<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar :tasks="tasks"/>
		<task-input />
		<task-list :tasks="tasks"/>
	</div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue"
import TaskList from "./components/TaskList.vue"
import TaskInput from "./components/TaskInput.vue"
import eventbus from "./eventbus";

export default {
	components: {
		ProgressBar,
		TaskList,
		TaskInput
	},
	data:() => ({
		tasks: []
	}),
	methods: {
        createTask(taskName) {
            const existentTask = this.tasks.find(x => x.name === taskName)

            if (!existentTask) 
                this.tasks.unshift({name: taskName, completed: false})
        },

        updateTask(taskName) {
            const existentTask = this.tasks.find(x => x.name === taskName)

            if (existentTask)
                existentTask.completed = !existentTask.completed;
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
}
</script>

<style>
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;				
	}

	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, #42275a, #734b6d);
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
