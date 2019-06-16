// External Dependencies
import { shallowMount } from '@vue/test-utils';

// Internal Dependencies
import Checklist from '@/components/Checklist/index.vue';

describe('Checklist.vue', () => {
    it('should render properly', () => {
        const wrapper = shallowMount(Checklist, {});
        expect(wrapper).toMatchSnapshot();
    });
});
