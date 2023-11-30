export interface Review {
    id: string;
    id_inverter: string;
    id_user: string;
    value: number | null;
    comment: string | null;
    date: Date;
}
