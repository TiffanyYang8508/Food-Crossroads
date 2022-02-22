        // 置頂按鈕:點選後回到頂端
        function topfunction() {
            document.documentElement.scrollTop = 0;
        }

        // 商品分類列表:點選後跳到該分類

        // 加入購物車button按下後，header購物車+1

        // 跳頁面
        function btncheckout(){
            window.location.href='shoppingchar.html';
        }
        
        function btn_grouporder(){
            window.location.href='orderpage_group_order_on.html';
        }

        function btn_group1(){
            window.location.hash = "#group_1";
        }

        function btn_group2(){
            window.location.hash = "#group_2";
        }

        function btn_group3(){
            window.location.hash = "#group_3";
        }


        // 複製揪團連結
        function copyinput(){
          document.getElementById('copyinput').select()
          document.execCommand('copy')
        }
