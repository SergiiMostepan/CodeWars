'use strict';
const BonusFunc = (salary, bonus) => {
    let newSalary = bonus ? salary * 10 : salary;
    return `\u00A3${String(newSalary)}`;
}
BonusFunc(533, true);
BonusFunc(533, false);
BonusFunc(1000, true);