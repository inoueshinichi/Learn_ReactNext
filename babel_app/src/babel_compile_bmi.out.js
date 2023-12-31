// BabelでコンパイルするJSプログラム

'use strict';

// BMIの計算クラスを定義

class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.bmi = this.calc();
    }

    calc() {
        var heightM = this.height / 100;
        return this.weight / heightM ** 2;
    }

    print() {
        var res = '普通';
        if (this.bmi >= 25) res = "肥満";else if (this.bmi >= 18.5) res = "普通";else res = "痩せ";
        console.log('BMI=' + this.bmi + ', ' + res);
    }
}

// テスト
var bmi = new BMI(164.4, 61.0);
bmi.print();

//# sourceMappingURL=babel_compile_bmi.out.js.map