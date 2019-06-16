<template>
    <b-field>
        <b-input v-model='newItem' expanded @keyup.native.enter='addItem' />
        <p class='control'>
            <button class='button is-primary' @click='addItem'>
                Add
            </button>
        </p>
    </b-field>
</template>

<script lang="ts" src="./TodoInput.ts"></script>

<style scoped lang="scss"></style>