/**
 * @author raito.ochi
 */

/**
 * メインのクラス
 */
function App() {
    //================== コンストラクタ ==================//
    // Google Mapの初期化
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 12,
        center: new google.maps.LatLng(35.694668, 139.743212)
    });

    // 各インスタンスを作成
    var dataManager = new DataManager();
    var formManager = new FormManager();
    var bukkenViewManager = new BukkenViewManager(map);

    // 検索ボタンが押されたかどうかを50msごとに監視
    setInterval('app.watchButtonClicked();', 50);

    //===================== メソッド =====================//
    /**
     * 検索ボタンが押されていれば地図を更新する
     */
    this.watchButtonClicked = function () {
        // 検索ボタンが押されていなければ何もしない
        if (!formManager.isClicked()) return;

        // 入力されている検索条件を取得
        var cond = formManager.getCond();

        // 検索条件に合致する物件のリストを取得
        var bukkenInfoList = dataManager.search(cond);
        // 物件リストの各物件のピンを地図上に立てる
        //bukkenViewManager.update(bukkenInfoList);

        var heatmapData = [];

        for (var bukken of bukkenInfoList) {
            heatmapData.push(new google.maps.LatLng(bukken.lat, bukken.lng));
            console.log(bukken.lat + " " + bukken.lng);
        }
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius: 80,//半径
            //gradient: []
        });
        heatmap.setMap(map);
    }
}

var app = new App();