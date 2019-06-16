// External Dependencies
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TodoInput extends Vue {
    // Initial Data
    newItem = '';

    @Emit('addItem')
    addItem() {
        const valueToEmit = this.newItem;
        this.newItem = '';
        return valueToEmit;
    }
}
