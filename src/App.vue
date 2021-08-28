<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar />
		<task-input />
		<task-list />
	</div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue"
import TaskList from "./components/TaskList.vue"
import TaskInput from "./components/TaskInput.vue"

export default {
	components: {
		ProgressBar,
		TaskList,
		TaskInput
	}
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
