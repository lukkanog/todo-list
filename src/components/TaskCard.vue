<template>
    <div 
        class="card" 
        :class="completed? 'done' : 'not-done'"
        @click="changeTaskStatus"
    >
        <div class="card-text">
            {{ name }}
        </div>
        <span 
            class="delete-button"
            @click.stop="deleteTask"
        >
            x
        </span>

    </div>
</template>

<script>
import eventbus from "../eventbus";

export default {
    props: {
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        changeTaskStatus() {
            eventbus.updateTask(this.name)
        },

        deleteTask() {
            eventbus.deleteTask(this.name)
        }
    }
}
</script>

<style scoped>
    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        transition: .3s ease-in-out;
        cursor: pointer;
        min-width: 250px;
    }

    .card::before{
        content: '';
        display: block;
        width: 10px;
        height: calc(100px + 2rem);
        background: inherit;
        filter: brightness(60%);
    }

    .card:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 15px #ffffff20;
    }

    .card-text{
        text-align: center;
        padding: .5rem 1rem;
    }

    .done{
        background-color: #009765;
        
    }

    .done .card-text {
        text-decoration: line-through;
    }

    .not-done{
        background-color: #8f0339;
    }

    .delete-button{
        align-self: flex-start;
        background: #00000050;
        padding: .0rem .5rem .25rem .5rem;
        margin: 0;
        border-radius: 100%;
        cursor: pointer;
    }

    .delete-button:hover{
        filter: brightness(150%);
    }
</style>