import api from "@/lib/api";
import { PatientData } from "@/components/patient-data-form/Form";
export const getPatientData = async () => {
  return api.get("/get-patient-data");
};

export const getPatientDataById = async (id: any) => {
  console.log("id ", id);
  const endpoint = `/get-patient-data/${id.id}`;
  console.log("API endpoint: ", endpoint);
  return api.get(endpoint);
};

export const addPatientData = async (data: PatientData) => {
  return api.post("add-patient-data", data);
};

export const deletePatientData = async (id: number) => {
  console.log("id", id);
  return api.delete(`/delete-patient-data/${id}`);
};

export const updatePatientDataById = async (data: PatientData) => {
  console.log("data_in api", data);
  console.log("id", data.id);
  return api.put(`/update-patient-data/${data.id}`, data);
};
