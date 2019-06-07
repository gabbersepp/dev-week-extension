import { Component, Vue, Prop } from "vue-property-decorator";
import { ITalk } from './TypeDefinitions';

import "./style/day.scss";
import { sleep } from './Utils';

@Component
export default class Day extends Vue {
    @Prop()
    public talks!: ITalk[];   
    @Prop()
    public reInit!: () => void;

    private modifiedTalks: ITalk[] = [];

    public mounted(): void {
        if (!this.talks.length) {
            return;
        }

        this.talks.forEach((t: ITalk) => {
            if (this.talks.find((x: ITalk) => this.hasIntersection(x, t) || this.hasIntersection(t, x))) {
                t.conflict = true;
            }
        });

        this.modifiedTalks = this.talks;
    }

    private hasIntersection(t1: ITalk, t2: ITalk): boolean {
        return t1 !== t2 && t1.from[0] === t2.from[0] && t1.from[1] === t2.from[1];
    }

    private async remove(id: string): Promise<void> {
        const e: Element | null = document.querySelector(`input[value="${id}"]`);

        if (e) {
            (e as any).click();
            await sleep(800);
            this.reInit();
        }
    }
}