// External Dependencies
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Checklist extends Vue {
    // Props
    @Prop() indexKey!: number;
    @Prop() itemTitle!: string;

    // Initial Data
    itemChecked = false;
    editingItem = false;
    itemTitleDone = this.itemTitle;
    itemTitleEdit = this.itemTitle;

    // Methods

    editItem() {
        if (!this.itemChecked) {
            this.editingItem = true;
        }
    }

    cancelEdit() {
        this.editingItem = false;
        this.itemTitleEdit = this.itemTitleDone;
    }

    doneEdit() {
        this.itemTitleDone = this.itemTitleEdit;
        this.editingItem = false;
        if (this.itemTitleDone === '') {
            this.deleteItem();
        }
    }

    @Emit('deleteItem')
    deleteItem() {
        return this.indexKey;
    }
}
