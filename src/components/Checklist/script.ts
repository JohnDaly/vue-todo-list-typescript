// External Dependencies
import { Component, Vue, Prop } from 'vue-property-decorator';

// Internal Dependencies
import ChecklistItem from '../ChecklistItem/index.vue';
import TodoInput from '../TodoInput/index.vue';

export interface ChecklistTodo {
    key: string;
    title: string;
    completed: boolean;
}

@Component({
    components: { ChecklistItem, TodoInput },
})
export default class Checklist extends Vue {
    // Props
    @Prop() title!: string;

    // Initial Data
    checklistMap: { [key: string]: ChecklistTodo } = {};

    // Computed Data
    get checklistItems() {
        const mapKeys = Object.keys(this.checklistMap);
        return mapKeys.map((key) => this.checklistMap[key]);
    }

    // Methods

    /**
     * Creates a new item from the value of newItem
     * and adds it to the checklistMap
     */
    addItem(newItem: string) {
        const listItems = this.checklistItems;
        const listLength = listItems.length;
        const key = `${listLength + 1}_${newItem}`;

        // Update the state
        const newTodo: ChecklistTodo = { key, title: newItem, completed: false };
        this.checklistMap = { ...this.checklistMap, [key]: newTodo };
    }

    /**
     * Removes the item with the given todoKey from the checklistMap
     * @param todoKey String the key of the item to remove
     */
    deleteItem(todoKey: string) {
        const { [todoKey]: toDelete, ...rest } = this.checklistMap;

        // Update the state
        this.checklistMap = rest;
    }

    /**
     * Updates the item with the given todoKey
     * @param key String the key of the item to update
     * @param title String the title of the todo
     * @param completed Boolean whether or not the item is completed
     */
    updateItem({ key, title, completed }: ChecklistTodo) {
        // Update the state
        this.checklistMap = {
            ...this.checklistMap,
            [key]: { ...this.checklistMap[key], title, completed },
        };
    }
}
