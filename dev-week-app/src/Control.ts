import { Vue, Component, Prop } from "vue-property-decorator";
import "./style/control.scss";

@Component
export default class Control extends Vue {
    @Prop()
    private showCalendar: boolean = false;
    @Prop()
    private onChange!: (val: boolean) => void;

    private close(): void {
        this.showCalendar = false;
        this.onChange(false);
    }

    private open(): void {
        this.showCalendar = true;
        this.onChange(true);
    }
}