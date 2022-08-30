// $(document).ready(function () {
var jumpm = document.getElementById('jumpm');//"跳跃音效"
var jntm = document.getElementById('jntm');
var squatsm = document.getElementById('squatsm');
var ccyd = document.getElementById('ccyd');
var dyc = document.getElementById('dyc');
var jg = document.getElementById('jg');
var music = document.getElementById('music');
var ybmusic = document.getElementById('ybmusic');
var over = document.getElementById('over');//"死亡音效"

const game = document.querySelector('#game');
const dino = document.querySelector('#dino');//querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
const block = document.querySelector('#block');
const airblock = document.querySelector('#airblock');
const yellowblock = document.querySelector('#yellowblock');
const blueblock = document.querySelector('#blueblock');


var count = true;//count为true时可以摁按键

window.addEventListener('keydown', event => {//element.addEventListener(event, function, useCapture) 当事件(event)发生时,就会执行function(); event => 相当于 function(event) {...}
    console.log(event);
    if ((event.code === 'Space' || event.code == 'ArrowUp') && count === true) {//event.code == '键位' 用于判断摁下'键位
        count = false;
        start = true;
        if (judge0 == false) {
            jumpm.play();
        } else if (judge0 == true && sorce <= 300) {
            jntm.play();
        }
        const blockLeft = parseFloat(
            getComputedStyle(block).getPropertyValue('left')//getComputedStyle()方法用于获取指定元素的 CSS 样式,getPropertyValue()方法用于返回指定css的属性值
        );
        dino.classList.add('jumpClass');//classList 属性返回元素的类名 可以用add(),remove()方法来给其增加和移除类
        document.getElementById("dino").style.backgroundImage = "url('../../assets/game/png/jump.png')";
        setTimeout(() => {//setTimeout(function()，毫秒) 时间到了, 就会执行function()
            dino.classList.remove('jumpClass');
            document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/tsk.gif')";
        }, 400);
        setTimeout(() => {
            count = true;
        }, 430)

    } else if (event.code === 'ArrowDown' && count === true) {
        squatsm.play();
        dino.classList.add('squatsClass');
        document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/dribble.gif')";
        count = false;
        setTimeout(() => {//setTimeout(function()，毫秒) 时间到了, 就会执行function()
            dino.classList.remove('squatsClass');
            document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/tsk.gif')";
        }, 300);
        setTimeout(() => {
            count = true;
        }, 330)
    } else if (event.code == 'ArrowRight' && count == true) {

        if (skill == 0) {
            ccyd.play();
            document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/ccyd.gif')";
            count = false;
            setTimeout(() => {//setTimeout(function()，毫秒) 时间到了, 就会执行function()
                document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/tsk.gif')";
            }, 500);
            setTimeout(() => {
                count = true;
            }, 530)
        } else if (skill > 0) {
            jg.play();
            invincibility = true;
            document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/rotating.gif')";
            count = false;
            skill -= 1;
            document.getElementById("skillnum").innerHTML = "可用技能点数:" + skill;
            setTimeout(() => {//setTimeout(function()，毫秒) 时间到了, 就会执行function()
                document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/dribble.gif')";
            }, 1000);
            setTimeout(() => {
                count = true;
            }, 1030);
            setTimeout(() => {
                invincibility = false;//1.5s无敌
                document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/tsk.gif')";
            }, 1500);
        }
    } else if (event.code == 'ArrowLeft' && count == true) {
        music.play();
        document.getElementById("dino").style.backgroundImage = "url('../../assets/game/png/music.png')";
        count = false;
        setTimeout(() => {//setTimeout(function()，毫秒) 时间到了, 就会执行function()
            document.getElementById("dino").style.backgroundImage = "url('../../assets/game/gif/tsk.gif')";
            bgmnum += 1;
        }, 300);
        setTimeout(() => {
            count = true;
            open = false;
        }, 330)
    }
});

var skill = 0;//可用技能次数
var invincibility = false;
var available = true;
//var k1 = 1;

setInterval(() => {//setInterval(function(), milliseconds); 方法会不停地调用函数function(),如果后面没有加millseconds,就会不断地调用function()
    //如果setInterval(function(),millseconds);中function不带括号则function过一定时间就执行一次,加括号则到了时间只执行一次
    const dinoBottom = parseFloat(//parse有解析的意思,那么parseFloat()表示函数可解析一个字符串，并返回一个浮点数。
        getComputedStyle(dino).getPropertyValue('bottom')
    );
    const dinoheight = parseFloat(
        getComputedStyle(dino).getPropertyValue('height')
    );
    const blockLeft = parseFloat(
        getComputedStyle(block).getPropertyValue('left')//getComputedStyle()方法用于获取指定元素的 CSS 样式,getPropertyValue()方法用于返回指定css的属性值
    );
    const airblockLeft = parseFloat(
        getComputedStyle(airblock).getPropertyValue('left')
    );
    const yellowblockLeft = parseFloat(
        getComputedStyle(yellowblock).getPropertyValue('left')
    );
    const blueblockLeft = parseFloat(
        getComputedStyle(blueblock).getPropertyValue('left')
    );
    if ((blockLeft < 280 && blockLeft > 210 && dinoBottom <= 200) || (airblockLeft < 280 && airblockLeft > 200 && !(dinoheight < 200 || dinoBottom >= 200))) {//判断dino是否遇到两种block
        if (invincibility === false) {//不是无敌状态下
            over.play();
            console.log('游戏结束');//控制台输出游戏结束

            setTimeout(() => {
                if(start === true){
                    window.location.reload(); //游戏结束刷新页面
                    alert("游戏结束,点击确定或者按空格刷新页面.");
                    start = false;
                }
            },45);
        }
    }
    if (yellowblockLeft < 208 && yellowblockLeft > 200 && dinoBottom > 208) {
        available = false;
        ybmusic.play();
        if (sorce <= 50) {
            sorce += 5;
        } else if (sorce <= 300) {
            sorce += 10;
        } else {
            sorce += 30;
        }
        setTimeout(() => {
            available = true;
        }, 250)
    }
    if (blueblockLeft < 208 && blueblockLeft > 200 && dinoBottom > 200 && available == true) {
        available = false;
        ybmusic.play();
        skill += 1;
        document.getElementById("skillnum").innerHTML = "可用技能次数:" + skill;
        setTimeout(() => {
            available = true;
        }, 250)
    }
});

var sorce = 0;

function addsorce() {
    if (sorce <= 30) {
        sorce += 1;
    } else if (sorce <= 80) {
        sorce += 2;
    } else if (sorce <= 300) {
        sorce += 3;
    } else {
        sorce += 5;
    }
    document.getElementById("sorce").innerHTML = "分数:" + sorce;
}

setInterval(() => {
    if (start == true) {//游戏开始时分数才会涨
        addsorce();
    }
}, 500);

var judge = false;//分数到达一定放音乐
var judge0 = false;//和跳跃音效切换有关

function check() {
    if (sorce >= 200 && judge == false) {
        dyc.play();
        judge = true;
        setTimeout(() => {
            judge0 = true;
        }, 7000);
    }
}

if (judge == false) {
    setInterval(check, 1000);
}

//如何让障碍物随机生成并且不会引起死局的情况
//大致思路,将动画封装在一个类中,然后通过方法调用该类,然后没调用时隐藏,调用时显


function addblock() {
    //move1
    if (1) {
        if (sorce <= 30) {//进入第一阶段
            block.classList.add('move1Class');
            setTimeout(() => {
                block.classList.remove('move1Class');
                document.getElementById("block").style.display = "none";
            }, 900);
        } else if (sorce <= 80) {//进入第二阶段
            block.classList.remove('move1Class');
            block.classList.add('move1fast1Class');
            setTimeout(() => {
                block.classList.remove('move1Class');
                document.getElementById("block").style.display = "none";
            }, 850);
        } else if (sorce <= 300) {
            block.classList.remove('move1fast1Class');
            block.classList.add('move1fast2Class');
            setTimeout(() => {
                block.classList.remove('move1Class');
                document.getElementById("block").style.display = "none";
            }, 650);
        } else {
            block.classList.remove('move1fast2Class');
            block.classList.add('move1fast3Class');
            setTimeout(() => {
                block.classList.remove('move1Class');
                document.getElementById("block").style.display = "none";
            }, 550);
        }
        document.getElementById("block").style.display = "block";


    }
}

function addairblock() {
    //move2
    if (1) {
        if (sorce <= 30) {//进入第一阶段
            airblock.classList.add('move2Class');
            setTimeout(() => {
                airblock.classList.remove('move2Class');
                document.getElementById("airblock").style.display = "none";
            }, 900);
        } else if (sorce <= 80) {//进入第二阶段
            airblock.classList.remove('move2Class');
            airblock.classList.add('move2fast1Class');
            setTimeout(() => {
                airblock.classList.remove('move2Class');
                document.getElementById("airblock").style.display = "none";
            }, 850);
        } else if (sorce <= 300) {
            airblock.classList.remove('move2fast1Class');
            airblock.classList.add('move2fast2Class');
            setTimeout(() => {
                airblock.classList.remove('move2Class');
                document.getElementById("airblock").style.display = "none";
            }, 650);
        } else {
            airblock.classList.remove('move2fast2Class');
            airblock.classList.add('move2fast3Class');
            setTimeout(() => {
                airblock.classList.remove('move2Class');
                document.getElementById("airblock").style.display = "none";
            }, 550);
        }
        document.getElementById("airblock").style.display = "block";

    }
}

//yellow
function addyellowblock() {
    yellowblock.classList.add('yellowmoveClass');
    document.getElementById("yellowblock").style.display = "block";

    setTimeout(() => {
        yellowblock.classList.remove('yellowmoveClass');
        document.getElementById("yellowblock").style.display = "none";
    }, 900);
}

//blue
function addblueblock() {
    blueblock.classList.add('bluemoveClass');
    document.getElementById("blueblock").style.display = "block";

    setTimeout(() => {
        blueblock.classList.remove('bluemoveClass');
        document.getElementById("blueblock").style.display = "none";
    }, 900);
}

//决定怪的刷新频率
var n1 = 4;
var n2 = 5;

if (sorce <= 50) {//进入第二阶段
    n1 = 3;
    n2 = 5;
} else if (sorce <= 100) {
    n1 = 3;
    n2 = 4;
} else {
    n1 = 2;
    n2 = 3;
}

var start = false;//游戏未开始时不生成

function produceblock() {
    var num;//num为生成的随机数
    num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;//1到100之间的随机数

    if (num % n1 == 0) {
        setTimeout(addblock(), 100);
    } else if (num % n2 == 0) {
        setTimeout(addairblock(), 100);
    } else if (num % 7 == 0) {
        setTimeout(addyellowblock(), 100);
    } else if (num % 11 == 0) {
        setTimeout(addblueblock(), 100);
    }

}

setInterval(() => {
    if (start == true) {
        produceblock();
    }
}, 1000);//生成时间的间隔

//背景音乐的切换
var bgmnum = 1;
var cyclenum = 0;
var open = false;

musiccontrol = document.querySelector('.musiccontrol')    //对应audio标签
musicsource = document.querySelector('.musicsource')    //对应source标签

setInterval(() => {
    if (sorce < 200) {
        if (bgmnum == 0) {
            if (cyclenum > 0) {
                musiccontrol.pause();
            }
        }
        if (bgmnum == 1 && open == false) {
            if (cyclenum > 0) {
                musicsource.src = "../../assets/game/mp3/maria.mp3";
                musiccontrol.load();
            }
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 2 && open == false) {
            musiccontrol.pause();
            musicsource.src = "../../assets/game/mp3/troubleMaker.mp3";
            musiccontrol.load();
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 3) {
            bgmnum = 0;
            open = false;
            cyclenum++;
        }
    } else if (sorce >= 200 && sorce <= 300) {
        if (open == true) {
            musiccontrol.pause();
            open = false;
        }
        cyclenum = 0;
        bgmnum = 1;
    } else if (sorce <= 900 && sorce > 300) {
        if (bgmnum == 0) {
            if (cyclenum > 0) {
                musiccontrol.pause();
            }
        }
        if (bgmnum == 1 && open == false) {
            if (cyclenum >= 0) {
                musicsource.src = "../../assets/game/mp3/Fire.mp3";
                musiccontrol.load();
            }
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 2 && open == false) {
            musiccontrol.pause();
            musicsource.src = "../../assets/game/mp3/Front.mp3";
            musiccontrol.load();
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 3) {
            bgmnum = 0;
            open = false;
            cyclenum++;
        }
    } else if (sorce > 900 && sorce <= 950) {
        if (open == true) {
            musiccontrol.pause();
            open = false;
        }
        cyclenum = 0;
        bgmnum = 1;
    } else {
        if (bgmnum == 0) {
            if (cyclenum > 0) {
                musiccontrol.pause();
            }
        }
        if (bgmnum == 1 && open == false) {
            if (cyclenum >= 0) {
                musicsource.src = "../../assets/game/mp3/sliverSrapes.mp3";
                musiccontrol.load();
            }
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 2 && open == false) {
            musiccontrol.pause();
            musicsource.src = "../../assets/game/mp3/Final.mp3";
            musiccontrol.load();
            musiccontrol.play();
            open = true;
        }
        if (bgmnum == 3) {
            bgmnum = 0;
            open = false;
            cyclenum++;
        }
    }
}, 300)
