import { ClinicalTrial } from "../main/models/trial";
import { Patient } from "../main/models/patient";

describe("ClinicalTrial unit tests", () => {
  // Normal patient
  describe("No particular disease", () => {
    it("should decrease value and surgeryIn", () => {
      expect(
        new ClinicalTrial([new Patient("test", 2, 3)]).updateValue()
      ).toEqual([new Patient("test", 1, 2)]);
    });

    it("should decrease twice as fast after surgery", () => {
      expect(
        new ClinicalTrial([new Patient("test", -2, 4)]).updateValue()
      ).toEqual([new Patient("test", -3, 2)]);
    });

    it("should decrease until value reach 0", () => {
      expect(
        new ClinicalTrial([new Patient("test", -2, 0)]).updateValue()
      ).toEqual([new Patient("test", -3, 0)]);
    });

    it("should be an error as value in constructor is under 0", () => {
      // How it is dealed now is that it updates and gives 0 for the value
      expect(
        new ClinicalTrial([new Patient("test", -2, -4)]).updateValue()
      ).toEqual([new Patient("test", -3, 0)]);
    });
  });

  // Multiple sclerosis patient
  describe("Multiple sclerosis disease", () => {
    it("should increase before surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Multiple sclerosis", 4, 4)
        ]).updateValue()
      ).toEqual([new Patient("Multiple sclerosis", 3, 5)]);
    });

    it("should increase twice as fast after surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Multiple sclerosis", -2, 4)
        ]).updateValue()
      ).toEqual([new Patient("Multiple sclerosis", -3, 6)]);
    });

    it("should increase until value reach 50", () => {
      expect(
        new ClinicalTrial([
          new Patient("Multiple sclerosis", -2, 49)
        ]).updateValue()
      ).toEqual([new Patient("Multiple sclerosis", -3, 50)]);
    });
  });

  // Pancreatic cancer patient
  describe("Pancreatic cancer", () => {
    it("should stay similar", () => {
      expect(
        new ClinicalTrial([
          new Patient("Pancreatic cancer", 4, 4)
        ]).updateValue()
      ).toEqual([new Patient("Pancreatic cancer", 4, 4)]);
    });
  });

  // Chronic obstructive pulmonary disease patient
  describe("Chronic obstructive pulmonary disease", () => {
    it("should increase before surgery in more than ten days", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", 16, 4)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", 15, 5)]);
    });

    it("should increase two times before surgery in less than ten days", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", 10, 4)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", 9, 6)]);
    });

    it("should increase three times before surgery in less than five days", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", 5, 4)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", 4, 7)]);
    });

    it("should drop to 0 after surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", 0, 20)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", -1, 0)]);
    });

    it("should drop to 0 after surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", -2, 20)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", -3, 0)]);
    });

    it("should increase until value reach 50", () => {
      expect(
        new ClinicalTrial([
          new Patient("Chronic obstructive pulmonary disease", 4, 49)
        ]).updateValue()
      ).toEqual([new Patient("Chronic obstructive pulmonary disease", 3, 50)]);
    });
  });

  // Hepatocellular carcinoma patient
  describe("Hepatocellular carcinoma", () => {
    it("should decrease value two times before surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Hepatocellular carcinoma", 2, 4)
        ]).updateValue()
      ).toEqual([new Patient("Hepatocellular carcinoma", 1, 2)]);
    });

    it("should decrease value four times after surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Hepatocellular carcinoma", -2, 6)
        ]).updateValue()
      ).toEqual([new Patient("Hepatocellular carcinoma", -3, 2)]);
    });

    it("should decrease until value reach 0 before surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Hepatocellular carcinoma", 3, 1)
        ]).updateValue()
      ).toEqual([new Patient("Hepatocellular carcinoma", 2, 0)]);
    });

    it("should decrease until value reach 0 after surgery", () => {
      expect(
        new ClinicalTrial([
          new Patient("Hepatocellular carcinoma", -2, 3)
        ]).updateValue()
      ).toEqual([new Patient("Hepatocellular carcinoma", -3, 0)]);
    });
  });
});
