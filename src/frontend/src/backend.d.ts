import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    status: string;
    city: string;
    name: string;
    submittedAt: bigint;
    email: string;
    message?: string;
    preferredDate?: string;
    phone: string;
    roofSize?: string;
}
export interface SubmitLeadArgs {
    city: string;
    name: string;
    email: string;
    message?: string;
    preferredDate?: string;
    phone: string;
    roofSize?: string;
}
export interface Product {
    id: bigint;
    name: string;
    description: string;
    imageUrl?: string;
    category: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteLead(id: bigint): Promise<boolean>;
    getCallerUserRole(): Promise<UserRole>;
    getLeads(): Promise<Array<Lead>>;
    getProducts(): Promise<Array<Product>>;
    isCallerAdmin(): Promise<boolean>;
    submitLead(args: SubmitLeadArgs): Promise<bigint>;
    updateLeadStatus(id: bigint, status: string): Promise<boolean>;
}
