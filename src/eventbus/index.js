import Vue from "vue"

export default new Vue({
    methods: {
        createNewTask(task) {
            this.$emit("taskCreate", task);
        },

        updateTask(task, status) {
            this.$emit("taskUpdate", task, status);
        },

        deleteTask(task) {
            this.$emit("taskDelete", task);
        },


        onTaskCreation(callback) {
            this.$on("taskCreate", callback);
        },

        onTaskUpdate(callback) {
            this.$on("taskUpdate", callback);
        },

        onTaskDelete(callback) {
            this.$on("taskDelete", callback);
        }

    }
})