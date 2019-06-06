import { Component, Vue, Prop } from "vue-property-decorator";
import { ITalk } from './TypeDefinitions';

import "./style/day.scss";

@Component
export default class Day extends Vue {
    @Prop()
    public talks!: ITalk[];    

    public mounted(): void {
        this.talks.forEach((t: ITalk) => {
            if (this.talks.find((x: ITalk) => this.hasIntersection(x, t) || this.hasIntersection(t, x))) {
                t.conflict = true;
            }
        });
    }

    private hasIntersection(t1: ITalk, t2: ITalk): boolean {
        const b1: boolean = t1 != t2 && t1.from[0] >= t2.from[0] && t1.from[0] <= t2.to[0];
        return b1;
    }
}