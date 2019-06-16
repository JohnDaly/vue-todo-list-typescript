import { shallowMount } from '@vue/test-utils';
import Checklist from '@/components/index.vue';

describe('Checklist.vue', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(Checklist, {});
    expect(wrapper.text()).toMatch('Checklist');
  });
});
