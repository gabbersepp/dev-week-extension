export interface ITalk {
    date: string;
    from: [number, number];
    to: [number, number];
    id: string;

    // transient
    conflict?: boolean;
}