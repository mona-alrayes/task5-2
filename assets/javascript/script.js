function convertUnits() {
    const value = parseFloat(document.getElementById('valueInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    // تحويل القيم إلى متر
    if (fromUnit === 'km') {
        result = value * 1000; // كيلومتر إلى متر
    } else if (fromUnit === 'cm') {
        result = value / 100; // سنتيمتر إلى متر
    } else {
        result = value; // متر إلى متر
    }

    // تحويل القيم من متر إلى الوحدة المطلوبة
    if (toUnit === 'km') {
        result /= 1000; // متر إلى كيلومتر
    } else if (toUnit === 'cm') {
        result *= 100; // متر إلى سنتيمتر
    }

    // عرض النتيجة
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `النتيجة: ${result} ${toUnit === 'km' ? 'كيلومتر' : toUnit === 'cm' ? 'سنتيمتر' : 'متر'}`;
}

