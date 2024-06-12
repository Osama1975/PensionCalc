function calculatePension() {
    const baseSalaryInput = document.getElementById('baseSalary');
    const certificateallocationsInput = document.getElementById('certificateallocations');
    const universityallocationsInput = document.getElementById('universityallocations');
    const scientifcallocationsInput = document.getElementById('scientifcallocations');

    const baseSalary = parseFloat(baseSalaryInput.value);
    const universityallocations = parseFloat(universityallocationsInput.value);
    const certificateallocations = parseFloat(certificateallocationsInput.value);
    const scientifcallocations = parseFloat(scientifcallocationsInput.value);

    let baseSalarymulti =baseSalary*2;
    let allocationsall=universityallocations+certificateallocations+scientifcallocations;
    let pensionSalary=(Math.min(baseSalarymulti,allocationsall)+baseSalary)*0.8;
   
    // التحقق من أن المدخلات غير فارغة وأنها أرقام صحيحة
    if (!baseSalaryInput.value || isNaN(baseSalary) || baseSalary <= 0) {
        alert('يرجى إدخال قيمة صحيحة للراتب الاسمي.');
        baseSalaryInput.focus();
        return;
    }

    if (!certificateallocationsInput.value || isNaN(certificateallocations) || certificateallocations < 0) {
        alert('يرجى إدخال قيمة صحيحة لمخصصات الشهادة.');
        certificateallocationsInput.focus();
        return;
    }
    if (!universityallocationsInput.value || isNaN(universityallocations) || universityallocations < 0) {
        alert('يرجى إدخال قيمة صحيحة لمخصصات الخدمة الجامعية.');
        universityallocationsInput.focus();
        return;
    }
   
    if (!scientifcallocationsInput.value || isNaN(scientifcallocations) || scientifcallocations < 0) {
        alert('يرجى إدخال قيمة صحيحة لمخصصات اللقب العلمي.');
        scientifcallocationsInput.focus();
        return;
    }

   
if(pensionSalary<600000){
    pensionSalary=600000;
}
  

    // تنسيق الأرقام وعرض النتائج في النافذة المنبثقة
    document.getElementById('pensionSalary').textContent = ` الراتب التقاعدي المحتسب: ${Math.floor(pensionSalary).toLocaleString()} دينار`;
   
    // عرض النافذة المنبثقة
    document.getElementById('resultsPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultsPopup').style.display = 'none';
}
