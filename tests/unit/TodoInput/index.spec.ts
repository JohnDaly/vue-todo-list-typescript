// External Dependencies
import { shallowMount } from '@vue/test-utils';

// Internal Dependencies
import TodoInput from '@/components/TodoInput/index.vue';

describe('TodoInput.vue', () => {
    it('should render properly', () => {
        const wrapper = shallowMount(TodoInput, {});
        expect(wrapper).toMatchSnapshot();
    });
});
