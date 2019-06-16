<template>
    <div class='container is-fluid'>
        <div class='section'>
            <div class='checklist-box'>
                <!-- Header -->
                <h1>Checklist</h1>

                <!-- New Item Input -->
                <TodoInput
                    @addItem='addItem($event)'
                />

                <hr v-show='checklistItems.length > 0' />

                <!-- Checklist Items -->
                <ChecklistItem
                    v-for='item in checklistItems'
                    @deleteItem='deleteItem($event)'
                    :key='item.key'
                    :itemTitle='item.title'
                    :indexKey='item.key'
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Checklist.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .checklist-box {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        border-radius: 5px;
        border: 1px solid #E7EAEC;
        box-shadow: 0px 0px 4px rgba(134, 134, 134, 0.21);
        padding: 15px 15px 15px 15px;
    }
</style>