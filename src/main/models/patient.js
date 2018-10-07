/**
 *  Class representing a patient
 */
export class Patient {
  constructor(disease, surgeryIn, value) {
    this.disease = disease;
    this.surgeryIn = surgeryIn;
    this.value = value;
  }

  update() {
    return this;
  }
}

/**
 *  Class representing a normal patient (no particular disease)
 *  @extends Patient
 */
export class NormalPatient extends Patient {
  update() {
    if (this.surgeryIn >= 1) {
      this.value--;
    } else {
      this.value -= 2;
    }
    this.surgeryIn--;
  }
}

/**
 *  Class representing a patient with Multiple sclerosis
 *  @extends Patient
 */
export class SclerosisPatient extends Patient {
  update() {
    if (this.surgeryIn >= 1) {
      this.value++;
    } else {
      this.value += 2;
    }
    this.surgeryIn--;
  }
}

/**
 *  Class representing a patient with Pancreatic cancer
 *  @extends Patient
 */
export class PancreaticPatient extends Patient {
  update() {}
}

/**
 *  Class representing a patient with Chronic obstructive pulmonary disease
 *  @extends Patient
 */
export class PulmonaryPatient extends Patient {
  update() {
    if (this.surgeryIn >= 1) {
      if (this.surgeryIn > 10) {
        this.value++;
      } else if (this.surgeryIn <= 10 && this.surgeryIn > 5) {
        this.value += 2;
      } else if (this.surgeryIn <= 5) {
        this.value += 3;
      }
    } else {
      this.value = 0;
    }
    this.surgeryIn--;
  }
}

/**
 *  Class representing a patient with Hepatocellular carcinoma
 *  @extends Patient
 */
export class CarcinomaPatient extends Patient {
  update() {
    if (this.surgeryIn >= 1) {
      this.value -= 2;
    } else {
      this.value -= 4;
    }
    this.surgeryIn--;
  }
}
