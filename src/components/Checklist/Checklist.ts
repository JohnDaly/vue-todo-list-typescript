// External Dependencies
import { Component, Vue } from 'vue-property-decorator';

// Internal Dependencies
import ChecklistItem from '../ChecklistItem/ChecklistItem.vue';
import TodoInput from '../TodoInput/TodoInput.vue';

@Component({
    components: { ChecklistItem, TodoInput },
})
export default class Checklist extends Vue {
    // Initial Data
    checklistItems: Array<{ key: number, title: string }> = [];

    // Methods
    addItem(newItem: string) {
        const listItems = this.checklistItems;
        const listLength = listItems.length;
        const key = (listLength !== 0) ? listItems[listLength - 1].key + 1 : 0;

        // Update the state
        this.checklistItems.push({ key, title: newItem });
    }

    deleteItem(indexKey: number) {
        const filteredItems = this.checklistItems.filter((item) => {
            return item.key !== indexKey;
        });

        // Update the state
        this.checklistItems = filteredItems;
    }
}
