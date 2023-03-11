export type Event = {
    id:number;
    date: string;
    address:string;
    title:string;
    description:string;
    photo:string;
};
 export type State = {
    events: Event[];
    error: undefined|string;
 }