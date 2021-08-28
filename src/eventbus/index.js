import Vue from "vue"

export default new Vue({
    methods: {
        createNewTask (task) {
            this.$emit("taskCreate", task);
        },
        onTaskCreation (callback) {
            this.$on("taskCreate", callback);
        }
    }
})