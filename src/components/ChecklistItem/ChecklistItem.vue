<template>
    <b-field>
        <b-checkbox v-model='itemChecked' />
        <span class='item-static' :class="{'item-checked': itemChecked}" v-show='!editingItem' @dblclick='editItem'>
            {{itemTitleDone}}
        </span>
        <b-input v-model='itemTitleEdit' v-show='editingItem' :disabled='itemChecked' @blur="doneEdit"
            @keyup.native.enter="doneEdit" @keyup.native.esc="cancelEdit" expanded />
        <p class='control'>
            <button class='button is-danger' @click='deleteItem'>
                <b-icon icon='close' />
            </button>
        </p>
    </b-field>
</template>

<script lang="ts" src="./ChecklistItem.ts"></script>

<style scoped lang="scss">
.item-static {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  display: flex;
  align-items: center;
  border: 1px #dbdbdb solid;
  padding-left: 10px;
}

.item-checked {
  text-decoration: line-through;
}
</style>