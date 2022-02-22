// 數量加減
function qty() {
    var aAdd = document.querySelectorAll(".add");
    var sub = document.querySelectorAll(".sub");
    for (var i = 0; i < aAdd.length; i++) {
        aAdd[i].onclick = function () {
            var num = Number(this.previousElementSibling.value);
            num++;
            this.previousElementSibling.value = num;
            // var price = this.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
            // this.nextElementSibling.firstElementChild.innerHTML = price * num;
        }
    }
    for (var i = 0; i < sub.length; i++) {
        sub[i].onclick = function () {
            var num = Number(this.nextElementSibling.value);
            if(num>1){
                num--;
            }
            this.nextElementSibling.value = num;
            // var price = this.previousElementSibling.firstElementChild.innerHTML;
            // this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = price * num;
        }
    }

}


$(document).ready(function () {
    $(".header_page").load("header.html");
    $(".footer_page").load("footer.html");
});


// 置頂按鈕:點選後回到頂端
function topfunction() {
    document.documentElement.scrollTop = 0;
}

// 商品分類列表:點選後跳到該分類

// 加入購物車button按下後，header購物車+1

// 跳頁面
function btncheckout() {
    window.location.href = 'shoppingchar.html';
}

function btn_grouporder() {
    window.location.href = 'orderpage_group_order_on.html';
}

function btn_group1() {
    window.location.hash = "#group_1";
}

function btn_group2() {
    window.location.hash = "#group_2";
}

function btn_group3() {
    window.location.hash = "#group_3";
}

function btn_orderdisaplay(){
    window.location.href = 'orderdisaplay.html';
}




// 複製揪團連結
function copyinput() {
    document.getElementById('copyinput').select()
    document.execCommand('copy')
}
