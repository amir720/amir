
    var countPlayers;
    var countSnakes;
    var countStairs;
    var pos=[];
    var str="";
    var tas1;
    var snakes=[];
    var stairs=[];
    var a_snakes=[[20,34],[50,81],[73,90],[44,60],[32,53],[47,62],[3,12],[92,94]];
    var a_stairs=[[10,31],[89,98],[42,54],[65,84],[20,44],[52,61],[3,13],[76,85]];
    var position=[-1,0,0,0,0];

    /////////////////////////////////make a random number between 1 to 6 ////

    function tas() {
       x = Math.floor((Math.random() * 6) + 1);
        return x;
    }

    ////////////////////////////////custom game /////////////////////////////

    $("#customStart").click(function () {
        $("#start").hide();

        countPlayers = $("#countPlayers").val();
        countSnakes = $("#countSnakes").val();
        countStairs = $("#countStairs").val();

        players=[];
        for(var k=1;k<=countPlayers;k++){
            players[k]=0;
        }

        for(var i=1;i<=countStairs;i++) {

            // stairs[i] = a_stairs[i];
            var id1 = prompt("لطفا ابتدای نردبان " + i + " را وارد کنید","");
            var id2 = prompt("لطفا انتهای نردبان " + i + " را وارد کنید","");
            if (id1>=id2) {
                do {
                    alert("ابتدای نردبان نباید از انتهای آن بزرگتر باشد !");
                    id1 = prompt("لطفا ابتدای نردبان " + i + " را وارد کنید","");
                    id2 = prompt("لطفا انتهای نردبان " + i + " را وارد کنید","");
                }
                while (id1 > id2);
            }
            for(item in stairs){
                do {
                    alert('salam');
                    var error=1;
                if (id1===stairs[item][0]||id1===stairs[item][1]){
                    alert("خانه" + id1 + "قبلا رزرو شده است");
                    id1 = prompt("لطفا ابتدای نردبان " + i + " را وارد کنید","");
                    error++;
                }
                if (id2===stairs[item][0]||id2===stairs[item][1]){
                    alert("خانه" + id2 + "قبلا رزرو شده است");
                    id2 = prompt("لطفا انتهای نردبان " + i + " را وارد کنید","");
                    error++;
                }
                if (id1===snakes[item][0]||id1===snakes[item][1]){
                    alert("خانه" + id1 + "قبلا رزرو شده است");
                    id1 = prompt("لطفا ابتدای نردبان " + i + " را وارد کنید","");
                    error++;
                }
                if (id2===snakes[item][0]||id1===snakes[item][1]){
                    alert("خانه" + id2 + "قبلا رزرو شده است");
                    id2 = prompt("لطفا انتهای نردبان " + i + " را وارد کنید","");
                    error++;

                }
                }while (error===0);
            }
                stairs.push([id1,id2]);

            document.getElementById('num' + id1).style.backgroundColor = "green";
            document.getElementById('num' + id2).style.backgroundColor = "lightgreen";
        }

        for(var j=1;j<=countSnakes;j++) {

            var id11 = prompt("لطفا دم مار " + j + " را وارد کنید","");
            var id22 = prompt("لطفا سر مار " + j + " را وارد کنید","");
            if (id11>=id22) {do {
                alert("سر مار نباید از دم آن کوچکتر باشد !");
                id11 = prompt("لطفا دم مار " +j + " را وارد کنید","");
                id22 = prompt("لطفا سر مار " + j + " را وارد کنید","");
            }
            while (id11 > id22);
            }

            for(item in snakes){
                alert("salam");
                do {
                    var error1=1;
                    if (id11===stairs[item][0]||id11===stairs[item][1]){
                        alert("خانه" + id11 + "قبلا رزرو شده است");
                        id11 = prompt("لطفا دم مار " + j + " را وارد کنید","");
                        error1++;
                    }
                    if (id22===stairs[item][0]||id22===stairs[item][1]){
                        alert("خانه" + id22 + "قبلا رزرو شده است");
                        id22 = prompt("لطفا سر مار " + j + " را وارد کنید","");
                        error1++;
                    }
                    if (id11===snakes[item][0]||id11===snakes[item][1]){
                        alert("خانه" + id11 + "قبلا رزرو شده است");
                        id11 = prompt("لطفا دم مار " + j + " را وارد کنید","");
                        error1++;
                    }
                    if (id22===snakes[item][0]||id22===snakes[item][1]){
                        alert("خانه" + id22 + "قبلا رزرو شده است");
                        id22= prompt("لطفا انتهای نردبان " + j + " را وارد کنید","");
                        error1++;
                    }

                }while (error1===0);
            }

            snakes.push([id11,id22]);
            document.getElementById('num' + id11).style.backgroundColor = "red";
            document.getElementById('num' + id22).style.backgroundColor = "darkred";
        }

        $("#insert").hide();
        $("#play").fadeIn();

        for(var k=1 ;k<=countPlayers ;k++){
            str +="<div class='blockk'>";
            str +="player";
            str +=k;
            str +="<br>";
            str +="<a class='a' href='#' onclick='play("+ k +")'>";
            str +="<img src='thumb.jpg'>";
            str +="</a>";
            str +="<br>";
            str +="pos"+k+" = ";
            pos[k]= 0;
            str +="<span class='span'>";
            str +="</span>";
            str+="<hr>";
            str +="</div>";
        }
        document.getElementById("play").innerHTML=str;
        $(".a").hide();
        $(".a").eq(0).show();

        $(".blockk").eq(0).css("border","10px solid dodgerblue");
        $(".blockk").eq(1).css("border","10px solid blueviolet");
        $(".blockk").eq(2).css("border","10px solid brown");
        $(".blockk").eq(3).css("border","10px solid fuchsia");
    });

    ////////////////////////////////generate the strat button////////////////

    $("#start").click(function () {
        if ($("#countPlayers").val()!==""
            &&$("#countSnakes").val()!==""
            &&$("#countStairs").val()!=="") {

            countPlayers = $("#countPlayers").val();
            countSnakes = $("#countSnakes").val();
            countStairs = $("#countStairs").val();


            players=[];
            for(var k=1;k<=countPlayers;k++){
                players[k]=0;
            }

            for(var i=0;i<countStairs;i++){
                stairs[i]=a_stairs[i];
                var id1 =stairs[i][0];
                var id2 =stairs[i][1];
                document.getElementById('num'+id1).style.backgroundColor="green";
                document.getElementById('num'+id2).style.backgroundColor="lightgreen";

            }

            for(var j=0;j<countSnakes;j++) {
                snakes[j]=a_snakes[j];
                var id11 =snakes[j][0];
                var id22 =snakes[j][1];
                document.getElementById('num'+id11).style.backgroundColor="red";
                document.getElementById('num'+id22).style.backgroundColor="darkred";

            }

            $("#insert").hide();
            $("#play").fadeIn();

            for(var k=1 ;k<=countPlayers ;k++){
                str +="<div class='blockk'>";
                str +="player";
                str +=k;
                str +="<br>";
                str +="<a class='a' href='#' onclick='play("+ k +")'>";
                str +="<img src='thumb.jpg'>";
                str +="</a>";
                str +="<br>";
                str +="pos"+k+" = ";
                pos[k]= 0;
                str +="<span class='span'>";
                str +="</span>";
                str+="<hr>";
                str +="</div>";
            }
            document.getElementById("play").innerHTML=str;
            $(".a").hide();
            $(".a").eq(0).show();

            $(".blockk").eq(0).css("border","10px solid dodgerblue");
            $(".blockk").eq(1).css("border","10px solid blueviolet");
            $(".blockk").eq(2).css("border","10px solid brown");
            $(".blockk").eq(3).css("border","10px solid fuchsia");
    }
    else alert("لطغا فیلد های زیر را تکمیل کنید");
    });

    /////////////////////////////////play game/////////////////////////////

    function play(x) {
            countPlayers=parseInt(countPlayers);

            x = parseInt(x);
                if (pos[x] !== 0) {
                    document.getElementById("num" + pos[x]).className = "default";
                }
                pos[x]=parseInt(pos[x]);
                z=100-position[x];
                console.log(z);
                tas1=tas();
                document.getElementById('dice').innerHTML=tas1;
                if(z<6){
                    if (tas1<=z) {
                        pos[x] = position[x] + tas1;
                        if (pos[x]===100){
                            if(x===1){$("body").css("backgroundColor","dodgerblue");}
                            if(x===2){$("body").css("backgroundColor","blueviolet");}
                            if(x===3){$("body").css("backgroundColor","brown");}
                            if(x===4){$("body").css("backgroundColor","fuchsia");}
                            alert("player number " + x + "is WINNER");
                            alert("player number " + x + "is WINNER");
                            alert("player number " + x + "is WINNER");
                            alert("player number " + x + "is WINNER");
                            $(".blockk").hide();
                        }
                    }
                    else {
                        pos[x]=position[x];
                    }

                }
                if (z>6){
                    pos[x] = position[x] + tas1;
                }

                for (item in position) {
                    position[item]=parseInt(position[item]);
                    if (pos[x] === position[item]) {
                        item=parseInt(item);
                        x=parseInt(x);
                        if (x!==item){
                            position[item] = 0;
                            pos[item]=0;
                            y=item-1;
                            document.getElementsByClassName('span')[y].innerHTML=position[item];
                            alert("player" + item + " is out ");
                            }
                    }
                }

                for (item in snakes) {
                    if (pos[x] === snakes[item][1]) {
                        pos[x] = snakes[item][0];
                    }
                }

                for (item in stairs) {
                    if (pos[x] === stairs[item][0]) {
                        pos[x] = stairs[item][1];
                    }
                    console.log(pos[x]);
                }

                position[x] = pos[x];
                $idn = "num" + position[x];

            //////////////////player 1////////////////////////////

            if (x===1) {
                document.getElementById("num" + position[x]).className = "dodgerblue";
                document.getElementsByClassName('span')[0].innerHTML=position[x];
                if(countPlayers===1){
                        $(".a").hide();
                        $(".a").eq(0).show();
                    }
                    else {
                    $(".a").hide();
                    $(".a").eq(x).show();
                }
                }

                /////////////////player 2/////////////////////////////
                if (x===2) {
                    document.getElementById("num" + position[x]).className = "blueviolet";
                    document.getElementsByClassName('span')[1].innerHTML=position[x];

                    // $(".p").eq(1).innerHTML=pos[x];
                    if(countPlayers===2){
                        $(".a").hide();
                        $(".a").eq(0).show();
                    }
                    else{
                        $(".a").hide();
                        $(".a").eq(x).show();
                    }
                }

            /////////////////////player 3/////////////////////////////

            if (x===3) {
                    document.getElementById("num" + position[x]).className = "brown";
                document.getElementsByClassName('span')[2].innerHTML=position[x];

                if(countPlayers===3){
                        $(".a").hide();
                        $(".a").eq(0).show();
                    }
                    else {
                        $(".a").hide();
                        $(".a").eq(x).show();
                    }
                }

            ///////////////////////////////player 4///////////////////////

            if (x===4) {
                    document.getElementById("num" + position[x]).className = "fuchsia";
                document.getElementsByClassName('span')[3].innerHTML=position[x];

                if(countPlayers===4){
                        $(".a").hide();
                        $(".a").eq(0).show();
                    }
                    else {
                    $(".a").hide();
                    $(".a").eq(x).show();
                }
                }

        }