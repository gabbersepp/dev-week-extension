import { Component, Vue } from 'vue-property-decorator';
import { sleep } from './Utils';
import { ICalendar } from './TypeDefinitions';
import Day from "./Day";

@Component({
  components: {
    Day
  }
})
export default class App extends Vue {

  private calendar: ICalendar = {
    days: {}
  };

  // trigger reading of calendar
  public async created(): Promise<void> {
    await sleep(5000);
    //read data
    this.calendar = JSON.parse("{\"MO., 24. JUNI 2019\":[{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"8\",\"45\"],\"to\":[\"9\",\"00\"],\"title\":\"Begrüßung durch den Veranstalter\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"9\",\"00\"],\"to\":[\"10\",\"00\"],\"title\":\"Keynote: ## Modularisierung 4.0 – Kritik der modulithischen Unvernunft\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Style Transfer AI – Wie neuronale Netze Kunst erzeugen\"},{\"date\":\"MO., 24. JUNI 2019\",\"from\":[\"10\",\"30\"],\"to\":[\"11\",\"30\"],\"title\":\"Microservices – Threat Modeling als Digitales Frühwarnsystem\"}]}");

  }
}
