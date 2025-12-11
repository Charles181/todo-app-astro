/// <reference path="../.astro/types.d.ts" />

declare namespace App {
    interface Locals {
        user: {
            id: string;
            name: string;
            role: string;
            score: number;
            avatar?: string | null;
        } | null;
    }
}
