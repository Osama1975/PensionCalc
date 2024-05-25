function calculatePension() {
    const baseSalaryInput = document.getElementById('baseSalary');
    const yearsOfServiceInput = document.getElementById('yearsOfService');

    const baseSalary = parseFloat(baseSalaryInput.value);
    const yearsOfService = parseFloat(yearsOfServiceInput.value);

    // التحقق من أن المدخلات غير فارغة وأنها أرقام صحيحة
    if (!baseSalaryInput.value || isNaN(baseSalary) || !Number.isInteger(baseSalary)) {
        alert('يرجى إدخال قيمة صحيحة للراتب الاسمي (عدد صحيح).');
        baseSalaryInput.focus();
        return;
    }

    if (!yearsOfServiceInput.value || isNaN(yearsOfService) || !Number.isInteger(yearsOfService)) {
        alert('يرجى إدخال قيمة صحيحة لسنوات الخدمة (عدد صحيح).');
        yearsOfServiceInput.focus();
        return;
    }

    const educationLevel = document.getElementById('educationLevel').value;

    // الحسابات الأساسية
    let pensionSalary = baseSalary * 0.025 * yearsOfService;

    // التأكد من أن الراتب التقاعدي لا يتجاوز الراتب الاسمي
    if (pensionSalary > baseSalary) {
        pensionSalary = baseSalary;
    }

    const costOfLivingAllowance = pensionSalary * 0.01 * yearsOfService;

    // تحديد مخصصات الشهادة بناءً على الشهادة المختارة
    let educationAllowanceRate;
    switch (educationLevel) {
        case "none":
            educationAllowanceRate = 0;
            break;
        case "highschool":
            educationAllowanceRate = 0.05;
            break;
        case "diploma":
            educationAllowanceRate = 0.1;
            break;
        case "bachelor":
            educationAllowanceRate = 0.15;
            break;
        case "master":
            educationAllowanceRate = 0.2;
            break;
        case "doctorate":
            educationAllowanceRate = 0.25;
            break;
        default:
            educationAllowanceRate = 0;
            break;
    }
    const educationAllowance = pensionSalary * educationAllowanceRate;

    // حساب الراتب التقاعدي المتوقع
    let expectedPension = pensionSalary + costOfLivingAllowance + educationAllowance;

    // التأكد من أن الراتب التقاعدي المتوقع لا يقل عن 600000
    if (expectedPension < 600000) {
        expectedPension = 600000;
    }

    // تنسيق الأرقام وعرض النتائج في النافذة المنبثقة
    document.getElementById('pensionSalary').textContent = `الراتب التقاعدي: ${Math.floor(pensionSalary).toLocaleString()} دينار`;
    document.getElementById('costOfLivingAllowance').textContent = `مخصصات غلاء المعيشة: ${Math.floor(costOfLivingAllowance).toLocaleString()} دينار`;
    document.getElementById('educationAllowance').textContent = `مخصصات الشهادة: ${Math.floor(educationAllowance).toLocaleString()} دينار`;
    document.getElementById('expectedPension').textContent = `الراتب التقاعدي المتوقع: ${Math.floor(expectedPension).toLocaleString()} دينار`;

    // عرض النافذة المنبثقة
    document.getElementById('resultsPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultsPopup').style.display = 'none';
}
