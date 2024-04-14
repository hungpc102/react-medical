import { apiBase } from "./api_base";

export const apiCoordinator = {
    patientToWaitingRoom: `${apiBase}/coordinator/patientToWaitingRoom`,
    updateStatusClinic: `${apiBase}/coordinator/updateStatusClinic`,
    saveResultMedical: `${apiBase}/coordinator/saveResultMedical`
}