function FormManager() {

    var chikunensu = new FormSliderNumber('#chikunensu', 'chikunensu.to');
    var chinryo_from = new FormSliderNumber('#jogen', 'chinryo.from');
    var chinryo_to = new FormSliderNumber('#kagen', 'chinryo.to');
    var ekitoho = new FormSliderNumber('#toho', 'ekitoho.to');
    var flore = new FormSliderNumber('#flore', 'flore.from');
    var forms = [
        chikunensu,
        chinryo_from,
        chinryo_to,
        ekitoho,
        flore,
    ];

    //===================== メソッド =====================//
    this.isDarty = function () {
        return forms.some(function (e, i, a) {
            return e.isDarty();
        });
    };

    this.getCond = function () {
        darty = false;
        var cond = {};
        for (var form of forms) {
            var c = form.getCond()
            for (var key in c) {
                cond[key] = c[key];
            }
        }
        return cond;
    }
}

function FormSliderNumber(elemId, columnName) {
    var slider;
    var darty = true;
    var num = null;
    $(function () {
        slider = $(elemId).slider({tooltip: 'always'});
    });
    $(function () {
        slider.on('slide', function () {
            darty = true;
            num = parseInt(slider.slider('getValue'));
        })
    });
    this.isDarty = function () {
        return darty;
    }
    this.getCond = function () {
        darty = false;
        var cond = {};
        if (num !== null) {
            cond[columnName] = num;
        }
        return cond;
    }
}