/**
 * @author raito.ochi
 */

/**
 * ピン（マーカー）の情報を扱うクラス
 */
function BukkenViewManager(map) {
    //================== コンストラクタ ==================//
    var pins = []; // ピンのオブジェクトの配列

    //===================== メソッド =====================//
    /**
     * 物件情報のリストを受け取り、ピンを立てる。
     */
    this.update = function (bukkenInfoList) {
        // pinsの初期化
        for (var pin of pins) {
            pin.del();
            delete pin;
        }
        pins.length = 0;
        // ピンのオブジェクトの配列を新しく作成
        for (var bukkenInfo of bukkenInfoList) {
            pins.push(new Pin(bukkenInfo, map));
        }
        // 検索した物件情報をリストで表示

        var bukkenCount = 0;
        var bukkenInfoListNameSample = [];
        var subElement = document.getElementById('bukken_subList');
        
        for (var bukkenInfo of bukkenInfoList) {
            if (bukkenInfoListNameSample.indexOf(bukkenInfo.tatemono_name) == -1) {
                bukkenInfoListNameSample.push(bukkenInfo.tatemono_name);
                insertHTMLElement_subList('bukken_subList', generateHTMLElement_subList(bukkenInfo));
                bukkenCount++;
                if (bukkenCount > 3) {
                    break;
                }
            }
        }

    }


}

/**
 * ピンのオブジェクト
 */
function Pin(bukkenInfo, map) {
    //================== コンストラクタ ==================//
    var marker = new google.maps.Marker({ // Google Map上のマーカーのオブジェクト
        map: map,
        icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        position: new google.maps.LatLng(bukkenInfo.lat, bukkenInfo.lng)
    });


    // 地図上のマーカーがクリックされた際に呼ばれるイベントハンドラの設定
    google.maps.event.addListener(marker, 'click', onClick.bind(this));

    //===================== メソッド =====================//
    /**
     * マーカーの画像を設定する
     */
    this.setIcon = function (url) {
        marker.setIcon(url);
    }

    /**
     * 地図上のマ7ーカーがクリックされた際の処理
     */
    function onClick() {
        // 物件情報を画面に表示
        insertHTMLElement('bukken', generateHTMLElement(bukkenInfo));
    }

    // pinを消す
    this.del = function () {
        if (marker) {
            marker.setMap(null);
            delete marker;
        }
    }
}

/**
 * 物件情報のHTML要素を生成
 */
 /* HTML要素を、指定したidを持つ要素内に挿入
 */
function insertHTMLElement(id, element) {
    var target = document.getElementById(id);
    target.appendChild(element);
}

function generateHTMLElement(bukkenInfo) {
    var element = document.createElement('div');
    element.setAttribute('id', 'bukken');
    element.setAttribute('class', 'tatemono');

    var innerHTML = '\
            <div id="bukken-image" class="image"><img src="./Img/home.jpg" width="200" height="200"></div>\
            <div id="cotent" class="content-text">\
                <div id="tatemono_name"><#tatemono_name></div>\
                <div id="otherinfo">築<#chikunensu>年<br>\
                    賃料<#chinryo>円<br>\
                    駅から<#ekitoho>分<br>\
                    地上<#flore>階<br>\
                    間取り<#madori><br>\
                    敷金<#shikikin>円<br>\
                    礼金<#reikin>円<br>\
                    </div>\
                </div>\
            </div>';


    // 物件情報を置換
    innerHTML = innerHTML.replace('<#tatemono_name>', escapeText(bukkenInfo.tatemono_name));
    innerHTML = innerHTML.replace('<#chikunensu>', bukkenInfo.chikunensu);
    innerHTML = innerHTML.replace('<#chinryo>', bukkenInfo.chinryo);
    innerHTML = innerHTML.replace('<#shikikin>', bukkenInfo.shikikin);
    innerHTML = innerHTML.replace('<#reikin>', bukkenInfo.reikin);
    innerHTML = innerHTML.replace('<#madori>', bukkenInfo.madori);
    innerHTML = innerHTML.replace('<#ekitoho>', bukkenInfo.ekitoho);
        innerHTML = innerHTML.replace('<#flore>', bukkenInfo.flore);

    element.innerHTML = innerHTML;
    return element;
}

function generateHTMLElement_subList(bukkenInfo) {
    var element = document.createElement('div');
    element.setAttribute('id', 'bukken_subList');
    element.setAttribute('class', 'tatemono2');

    var innerHTML = '\
            <div id="bukken-image" class="image"><img src="./Img/home.jpg" width="200" height="200"></div>\
            <div id="cotent" class="content-text">\
                <div id="tatemono_name"><#tatemono_name></div>\
                <div id="otherinfo">築<#chikunensu>年<br>\
                    賃料<#chinryo>円<br>\
                    駅から<#ekitoho>分<br>\
                    <#flore>階<br>\
                    間取り<#madori><br>\
                    敷金<#shikikin>円<br>\
                    礼金<#reikin>円<br>\
                </div>\
            </div>';

    // 物件情報を置換
    innerHTML = innerHTML.replace('<#tatemono_name>', escapeText(bukkenInfo.tatemono_name));
    innerHTML = innerHTML.replace('<#chikunensu>', bukkenInfo.chikunensu);
    innerHTML = innerHTML.replace('<#chinryo>', bukkenInfo.chinryo);
    innerHTML = innerHTML.replace('<#shikikin>', bukkenInfo.shikikin);
    innerHTML = innerHTML.replace('<#reikin>', bukkenInfo.reikin);
    innerHTML = innerHTML.replace('<#madori>', bukkenInfo.madori);
    innerHTML = innerHTML.replace('<#ekitoho>', bukkenInfo.ekitoho);
    innerHTML = innerHTML.replace('<#flore>', bukkenInfo.flore);
    element.innerHTML = innerHTML;
    return element;
}

/**
 * 特殊な意味を持つ文字をエスケープする
 */
function escapeText(text) {
    return text.replace(/[&'`"<>]/g, function (match) {
        return {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;',
        }[match]
    });
}

function insertHTMLElement_subList(id, element) {
    var target = document.getElementById(id);
    target.appendChild(element);
}