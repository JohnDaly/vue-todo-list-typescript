// External Dependencies
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TodoInput extends Vue {
    // Initial Data
    newItem = '';

    // Computed Data
    get disableAddItem() {
        return this.newItem === '';
    }

    @Emit('addItem')
    addItem() {
        const valueToEmit = this.newItem;
        this.newItem = '';
        return valueToEmit;
    }
}
