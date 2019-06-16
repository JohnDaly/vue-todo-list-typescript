// External Dependencies
import { shallowMount } from '@vue/test-utils';

// Internal Dependencies
import ChecklistItem from '@/components/ChecklistItem/index.vue';

describe('ChecklistItem.vue', () => {
    it('should render properly', () => {
        const wrapper = shallowMount(ChecklistItem, {});
        expect(wrapper).toMatchSnapshot();
    });
});
