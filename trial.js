export class Patient {
  constructor(disease, surgeryIn, value) {
    this.disease = disease;
    this.surgeryIn = surgeryIn;
    this.value = value;
  }
}

export class ClinicalTrial {
  constructor(patients = []) {
    this.patients = patients;
  }

  updateNormalPatient(patient) {
    if (patient.surgeryIn >= 1) {
      patient.value--;
    } else {
      patient.value -= 2;
    }
    patient.surgeryIn--;
    return patient;
  }

  updateSclerosisPatient(patient) {
    if (patient.surgeryIn >= 1) {
      patient.value++;
    } else {
      patient.value += 2;
    }
    patient.surgeryIn--;
    return patient;
  }

  updatePancreaticPatient(patient) {
    return patient;
  }

  updatePulmonaryPatient(patient) {
    if (patient.surgeryIn >= 1) {
      if (patient.surgeryIn > 10) {
        patient.value++;
      } else if (patient.surgeryIn <= 10 && patient.surgeryIn > 5) {
        patient.value += 2;
      } else if (patient.surgeryIn <= 5) {
        patient.value += 3;
      }
    } else {
      patient.value = 0;
    }
    patient.surgeryIn--;
    return patient; 
  }

  rectifyValue(patient) {
    if (patient.value < 0) {
      patient.value = 0;
    } else if (patient.value > 50) {
      patient.value = 50;
    }
    return patient;
  }

  updateValue() {
    for (var i = 0; i < this.patients.length; i++) {
      switch(this.patients[i].disease) {
        case "Multiple sclerosis":
          this.patients[i] = this.updateSclerosisPatient(this.patients[i]);
          break;
        case "Pancreatic cancer":
          this.patients[i] = this.updatePancreaticPatient(this.patients[i]);
          break;
        case "Chronic obstructive pulmonary disease":
          this.patients[i] = this.updatePulmonaryPatient(this.patients[i]);
          break;
        default:
          this.patients[i] = this.updateNormalPatient(this.patients[i]);
      }
      this.patients[i] = this.rectifyValue(this.patients[i]);
    }

    return this.patients;
  }
}
