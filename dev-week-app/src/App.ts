import { Component, Vue } from 'vue-property-decorator';
import { sleep } from './Utils';

@Component({
  components: {

  }
})
export default class App extends Vue {

  private data: any[] = [];

  // trigger reading of calendar
  private async init(): Promise<void> {
    await sleep(5000);
    //read data
  }
}
