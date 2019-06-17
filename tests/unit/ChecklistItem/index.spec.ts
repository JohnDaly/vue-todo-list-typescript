// External Dependencies
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';

// Internal Dependencies
import ChecklistItem from '@/components/ChecklistItem/index.vue';
import { ChecklistTodo } from '@/components/Checklist/script';

describe('ChecklistItem.vue', () => {
    it('should render properly', () => {
        const wrapper = shallowMount(ChecklistItem, {});
        expect(wrapper).toMatchSnapshot();
    });

    it('should emit onChange when the itemChecked is changed', () => {
        const testKey = 'testTodo';
        const testTitle = 'Test Todo';
        const wrapper = shallowMount(ChecklistItem, {
            propsData: {
                todoKey: testKey,
                title: testTitle,
                completed: false,
            },
        });

        // Update the state of the wrapper, which should
        // trigger the onChange event
        wrapper.setData({ itemChecked: true });

        const watchedValueBefore = false;
        const watchedValueAfter = true;
        const expectedEvent: [ChecklistTodo, boolean, boolean] = [{
            key: testKey,
            title: testTitle,
            completed: true,
        }, watchedValueAfter, watchedValueBefore];

        const emittedEvents = wrapper.emitted();
        expect(emittedEvents.onChange.length).toBe(1);
        expect(emittedEvents.onChange[0]).toEqual(expectedEvent);
    });

    it('should emit onChange when the itemTitleDone is changed', () => {
        const testKey = 'testTodo';
        const testTitle = 'Test Todo';
        const wrapper = shallowMount(ChecklistItem, {
            propsData: {
                todoKey: testKey,
                title: testTitle,
                completed: false,
            },
        });

        // Update the state of the wrapper, which should
        // trigger the onChange event
        wrapper.setData({ itemTitleDone: 'New Todo Title' });

        const watchedValueBefore = testTitle;
        const watchedValueAfter = 'New Todo Title';
        const expectedEvent: [ChecklistTodo, string, string] = [{
            key: testKey,
            title: watchedValueAfter,
            completed: false,
        }, watchedValueAfter, watchedValueBefore];

        const emittedEvents = wrapper.emitted();
        expect(emittedEvents.onChange.length).toBe(1);
        expect(emittedEvents.onChange[0]).toEqual(expectedEvent);
    });

    it('should emit deleteItem if an empty edited todo is submitted', () => {
        // create an extended `Vue` constructor
        const localVue = createLocalVue();

        // install plugins as normal
        localVue.use(Buefy);

        const testKey = 'testTodo';
        const testTitle = 'Test Todo';
        const wrapper = mount(ChecklistItem, {
            propsData: {
                todoKey: testKey,
                title: testTitle,
                completed: false,
            },
            localVue,
        });

        // Update the state so that the todo is being edited
        // and the content is empty
        wrapper.setData({ editingItem: true, itemTitleEdit: '' });

        // Trigger an 'enter' press on the input
        const inputField = wrapper.find('.input');
        inputField.trigger('keyup.enter');

        const emittedEvents = wrapper.emitted();
        expect(emittedEvents.deleteItem.length).toBe(1);
        expect(emittedEvents.deleteItem[0]).toEqual([testKey]);
    });
});
