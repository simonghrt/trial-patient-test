import { Patient, NormalPatient, PancreaticPatient, 
  PulmonaryPatient, CarcinomaPatient, SclerosisPatient } from "./patient";

/**
 *  Class representing a clinical trial
 */
export class ClinicalTrial {
  constructor(patients = []) {
    this.patients = [];
    for (var i = 0; i < patients.length; i++) {
      switch(patients[i].disease) {
        case "Multiple sclerosis":
          this.patients.push(new SclerosisPatient(patients[i].disease, patients[i].surgeryIn, patients[i].value));
          break;
        case "Pancreatic cancer":
          this.patients.push(new PancreaticPatient(patients[i].disease, patients[i].surgeryIn, patients[i].value));
          break;
        case "Chronic obstructive pulmonary disease":
          this.patients.push(new PulmonaryPatient(patients[i].disease, patients[i].surgeryIn, patients[i].value));
          break;
        case "Hepatocellular carcinoma":
          this.patients.push(new CarcinomaPatient(patients[i].disease, patients[i].surgeryIn, patients[i].value));
          break;
        default:
          this.patients.push(new NormalPatient(patients[i].disease, patients[i].surgeryIn, patients[i].value));
      }
    }
  }

  /**
   *  Rectify value of a patient in case it's under 0 or below 50
   *  @param {Patient} patient - The patient to consider
   */
  rectifyValue(patient) {
    if (patient.value < 0) {
      patient.value = 0;
    } else if (patient.value > 50) {
      patient.value = 50;
    }
    return patient;
  }

  /**
   *  Updates all patients of the trial
   */
  updateValue() {
    for (var i = 0; i < this.patients.length; i++) {
      this.patients[i].update();
      this.patients[i] = this.rectifyValue(this.patients[i]);
    }

    return this.patients;
  }
}
