// External Dependencies
import { Component, Vue } from 'vue-property-decorator';

// Internal Dependencies
import Checklist from '@/components/Checklist/index.vue';

@Component({
  components: { Checklist },
})
export default class App extends Vue {}
