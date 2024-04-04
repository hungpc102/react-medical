import { apiBase } from "./api_base";

export const apiMedicalRecord = {
    create: `${apiBase}/medicalRecord`,
    filter: `${apiBase}/medicalRecord/getByFilter`
} 