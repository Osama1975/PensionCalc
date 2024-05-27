function calculatePension() {
    const baseSalaryInput = document.getElementById('baseSalary');
    const averageBaseSalaryInput = document.getElementById('averageBaseSalary');
    const yearsOfServiceInput = document.getElementById('yearsOfService');

    const baseSalary = parseFloat(baseSalaryInput.value);
    const averageBaseSalary = parseFloat(averageBaseSalaryInput.value);
    const yearsOfService = parseFloat(Math.round(yearsOfServiceInput.value));
   
    // التحقق من أن المدخلات غير فارغة وأنها أرقام صحيحة
    if (!baseSalaryInput.value || isNaN(baseSalary) || baseSalary <= 0) {
        alert('يرجى إدخال قيمة صحيحة للراتب الاسمي.');
        baseSalaryInput.focus();
        return;
    }

    if (!averageBaseSalaryInput.value || isNaN(averageBaseSalary) || averageBaseSalary <= 0) {
        alert('يرجى إدخال قيمة صحيحة لمعدل الراتب الاسمي لآخر 36 شهرًا.');
        averageBaseSalaryInput.focus();
        return;
    }

    if (!yearsOfServiceInput.value || isNaN(yearsOfService) || yearsOfService <= 0) {
        alert('يرجى إدخال قيمة صحيحة لسنوات الخدمة.');
        yearsOfServiceInput.focus();
        return;
    }

    const educationLevel = document.getElementById('educationLevel').value;

    // الحسابات الأساسية باستخدام معدل الراتب الاسمي لآخر 36 شهرًا
    let pensionSalary = averageBaseSalary * 0.025 * yearsOfService;

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
        case "doctorate":
                educationAllowanceRate = 0.20;
                break;
        case "master":
                educationAllowanceRate = 0.15;
                 break;
        case "bachelor":
                educationAllowanceRate = 0.10;
                 break;
        case "diploma":
                educationAllowanceRate = 0.05;
                break;
        case "Secondary":
                 educationAllowanceRate = 0.0;
                break;
        default:
                 educationAllowanceRate = 0;
                break;
    }
    const educationAllowance = pensionSalary * educationAllowanceRate;

    // حساب الراتب التقاعدي المتوقع
    let expectedPensionbase = pensionSalary + costOfLivingAllowance + educationAllowance;
    let expectedPension = pensionSalary + costOfLivingAllowance + educationAllowance;
    let livelihood=100000;

    // التأكد من أن الراتب التقاعدي المتوقع لا يقل عن 600000
    if (expectedPension < 500000) {
        expectedPension = 500000;
    }

    // تنسيق الأرقام وعرض النتائج في النافذة المنبثقة
    document.getElementById('pensionSalary').textContent = ` الراتب التقاعدي حسب المعادلة: ${Math.floor(pensionSalary).toLocaleString()} دينار`;
    document.getElementById('costOfLivingAllowance').textContent = `مخصصات الغلاء : ${Math.floor(costOfLivingAllowance).toLocaleString()} دينار`;
    document.getElementById('educationAllowance').textContent = `مخصصات الشهادة: ${Math.floor(educationAllowance).toLocaleString()} دينار`;
    document.getElementById('expectedPensionbase').textContent = `الراتب التقاعدي الاساسي: ${Math.floor(expectedPensionbase).toLocaleString()} دينار`;
    document.getElementById('livelihood').textContent = `مبلغ تحسين المعيشة: ${Math.floor(livelihood).toLocaleString()} دينار`;
    if(expectedPension<=1000000){
    document.getElementById('expectedPension').textContent = `الراتب التقاعدي النهائي: ${Math.floor(expectedPension+livelihood).toLocaleString()} دينار`;
    }else{
        livelihood=0;
        document.getElementById('expectedPension').textContent = `الراتب التقاعدي النهائي: ${Math.floor(expectedPension).toLocaleString()} دينار`;
        document.getElementById('livelihood').textContent = `مبلغ تحسين المعيشة: ${Math.floor(livelihood).toLocaleString()} دينار`;
    }
    // عرض النافذة المنبثقة
    document.getElementById('resultsPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultsPopup').style.display = 'none';
}
