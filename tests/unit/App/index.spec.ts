// External Dependencies
import { shallowMount } from '@vue/test-utils';

// Internal Dependencies
import App from '@/containers/App/index.vue';

describe('App.vue', () => {
    it('should render properly', () => {
        const wrapper = shallowMount(App, {});
        expect(wrapper).toMatchSnapshot();
    });
});
