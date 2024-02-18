import api from "@/lib/api";
import { PatientData } from "@/components/patient-data-form/Form";
export const getPatientData = async () => {
  return api.get("/get-patient-data");
};

export const getPatientDataById = async (id: number) => {
  return api.get(`/get-patient-by-id/${id}`);
};

export const addPatientData = async (data: PatientData) => {
  return api.post("add-patient-data", data);
};

export const deletePatientData = async (id: number) => {
  console.log("id", id);
  return api.delete(`/delete-patient-data/${id}`);
};
