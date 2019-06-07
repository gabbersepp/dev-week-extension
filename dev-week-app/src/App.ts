import { Component, Vue } from 'vue-property-decorator';
import { sleep } from './Utils';
import { ITalk } from './TypeDefinitions';
import Day from "./Day";
import Control from "./Control";
import { getData } from './DevWeekParser';

@Component({
  components: {
    Day,
    Control
  }
})
export default class App extends Vue {

  private calendar: {[key: string]: ITalk[]} = {};

  private showCalendar: boolean = true;

  private talksLength: number = 0;

  public init(): void {
    this.calendar = getData();
    this.talksLength = Object.keys(this.calendar).map((x: string) => this.calendar[x].length).reduce((x, y) => x + y);
    //this.calendar = JSON.parse("{\"MO., 24. JUNI 2019\":[{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"8\",\"45\"],\"to\":[\"9\",\"00\"],\"title\":\"Begrüßung durch den Veranstalter\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"9\",\"00\"],\"to\":[\"10\",\"00\"],\"title\":\"Keynote: ## Modularisierung 4.0 – Kritik der modulithischen Unvernunft\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Style Transfer AI – Wie neuronale Netze Kunst erzeugen\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Microservices – Threat Modeling als Digitales Frühwarnsystem\"}],\"DI., 25. JUNI 2019\":[{\"date\":\"DI., 25. JUNI 2019\",\"from\":[\"9\",\"00\"],\"to\":[\"17\",\"00\"],\"title\":\"Mathematische Berechnung mit Python\"},{\"date\":\"DI., 25. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Mit Infer.NET intelligente Software bauen\"},{\"date\":\"DI., 25. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Inclusive Design, weil es keinen Menschen nach Norm gibt\"}],\"MI., 26. JUNI 2019\":[{\"date\":\"MI., 26. JUNI 2019\",\"from\":[\"11\",\"45\"],\"to\":[\"12\",\"45\"],\"title\":\"How JSR 385 could have Saved the Mars Climate Orbiter\"},{\"date\":\"MI., 26. JUNI 2019\",\"from\":[\"11\",\"45\"],\"to\":[\"12\",\"45\"],\"title\":\"Eine Therapiesitzung zu Namen\"}]}");
  }

  private onChangeVisibility(val: boolean) {
    this.showCalendar = val;

    if (val) {
      this.init();
    }
  }
}
