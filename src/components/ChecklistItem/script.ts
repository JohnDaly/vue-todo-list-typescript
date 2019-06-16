// External Dependencies
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';

// Internal Dependencies
import { ChecklistTodo } from '../Checklist/script';

@Component
export default class ChecklistItem extends Vue {
    // Props
    @Prop() todoKey!: string;
    @Prop() title!: string;
    @Prop() completed!: boolean;

    // Initial Data
    itemChecked = false;
    editingItem = false;
    itemTitleDone = this.title;
    itemTitleEdit = this.title;

    // Methods

    /**
     * Sets the value of 'editingItem' to true if the item
     * hasn't already been checked off as completed
     */
    editItem() {
        if (!this.itemChecked) {
            this.editingItem = true;
        }
    }

    /**
     * Reverts the item back to its previous description
     * and hides the editing input field
     */
    cancelEdit() {
        this.editingItem = false;
        this.itemTitleEdit = this.itemTitleDone;
    }

    /**
     * Sets the description of the item to the value of the
     * input field that is used to edit the description. If the user
     * has entered a blank value, the item is deleted
     */
    doneEdit() {
        this.itemTitleDone = this.itemTitleEdit;
        this.editingItem = false;
        if (this.itemTitleDone === '') {
            this.deleteItem();
        }
    }

    /**
     * Emits the 'deleteItem' event, with the value
     * being the indexKey of the this item
     */
    @Emit('deleteItem')
    deleteItem() {
        return this.todoKey;
    }

    /**
     * Emits the 'completedItem' event, with the value
     * being the todoKey of the item
     */
    @Watch('itemChecked')
    @Watch('itemTitleDone')
    @Emit('onChange')
    updateItem(): ChecklistTodo {
        return {
            key: this.todoKey,
            title: this.itemTitleDone,
            completed: this.itemChecked,
        };
    }
}
