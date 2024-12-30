class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    get name() {
        return this._name;
        takeVacationDays(daysOff)
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
        takeVacationDays(daysOff)
    }
};

class doctor extends HospitalEmployee {
    constructor(name, insurance) {
        this._name = name;
        this._remainingVacationDays = 20;
        this._insurance = insurance;
    }
}
class Nurse extends HospitalEmployee {
    constructor(certifications) {
        this._certifications = certifications;
        this._name = name;
        this._remainingVacationDays = 20;
    }
}