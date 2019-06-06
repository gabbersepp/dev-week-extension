export interface ICalendar {
    days: {[key: string]: ITalk[]};
}

export interface ITalk {
    date: string;
    from: [number, number];
    to: [number, number];

    // transient
    conflict?: boolean;
}