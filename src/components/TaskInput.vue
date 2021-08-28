<template>
    <form 
        @submit.prevent="handleSubmit"
        class="task-form"
    >
        <input 
            v-model="taskName" 
            class="task-input"
            name="task-input" 
            type="text" 
            placeholder="Adicionar tarefa"
        >
        <input
            class="task-submit" 
            type="submit" 
            value="+"
        >
    </form>
</template>

<script>
import eventbus from "../eventbus";
export default {
    data: () => ({
        taskName: '',
    }),
    methods:  {
        handleSubmit() {
            eventbus.createNewTask(this.taskName);
            this.taskName = "";
        }
    }
}
</script>

<style scoped>
    .task-form{
        display: flex;
        max-height: 3rem;
        margin: 1rem 0;
        border: 1px solid #fff;

    }

    .task-input{
        background: #ffffff20;
        outline: none;
        padding: .5rem .5rem;
        border: unset;
        color: #ddd;
    }

    .task-input::placeholder{
        color: #ddd;
    }

    .task-submit{
        height: unset;
        width: 50px;
        color: #fff;
        background: #5daff1;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>