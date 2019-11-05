// 리듬 라인
var body = document.querySelector('body');
var D = document.getElementById('D');
var F = document.getElementById('F');
var J = document.getElementById('J');
var K = document.getElementById('K');

// 음악 시작
var audio = new Audio();
audio.src='./canonbbak.mp3';
const start = document.getElementById('lines');
const play = document.getElementById('play');
const timer = document.getElementById('timer');

// 리듬 블럭
// D라인
const d_1 = document.getElementById('d_block1');
const d_2 = document.getElementById('d_block2');
const d_3 = document.getElementById('d_block3');
const d_4 = document.getElementById('d_block4');
const d_5 = document.getElementById('d_block5');
const d_6 = document.getElementById('d_block6');
const d_7 = document.getElementById('d_block7');
const d_8 = document.getElementById('d_block8');
// F라인
const f_1 = document.getElementById('f_block1');
const f_2 = document.getElementById('f_block2');
const f_3 = document.getElementById('f_block3');
const f_4 = document.getElementById('f_block4');
const f_5 = document.getElementById('f_block5');
const f_6 = document.getElementById('f_block6');
const f_7 = document.getElementById('f_block7');
// J라인
const j_1 = document.getElementById('j_block1');
const j_2 = document.getElementById('j_block2');
const j_3 = document.getElementById('j_block3');
const j_4 = document.getElementById('j_block4');
const j_5 = document.getElementById('j_block5');
const j_6 = document.getElementById('j_block6');
const j_7 = document.getElementById('j_block7');
// K라인
const k_1 = document.getElementById('k_block1');
const k_2 = document.getElementById('k_block2');
const k_3 = document.getElementById('k_block3');
const k_4 = document.getElementById('k_block4');
const k_5 = document.getElementById('k_block5');
const k_6 = document.getElementById('k_block6');

// 판정 선
const line = document.getElementById('line');

// 점수
const score = document.getElementById('score');
var result = 0;
score.innerText = `점수 : ${result}`

//라인 눌렀을때 반응
body.addEventListener('keypress',(e) => {
    console.log(this.line.offsetTop);

    // 스페이스바 눌렀을 때 음악 재생
    if(e.keyCode === 32) {
        setTimeout(() => {
            start.style.display= 'none'
            timer.innerText="3";
        });
        setTimeout(() => {
            timer.innerText="2";
        }, 1000);
        setTimeout(() => {
            timer.innerText="1";
        }, 2000);
        setTimeout(() => {
            timer.innerText="";
            audio.play();
        }, 3000);
    }

    // D라인 블럭
    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_1.offsetTop && d_1.offsetTop<=600) {
            // console.log('미르스띤');
            // console.log(result);
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_1.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_2.offsetTop && d_2.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_2.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_3.offsetTop && d_3.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_3.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_4.offsetTop && d_4.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_4.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_5.offsetTop && d_5.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_5.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_6.offsetTop && d_6.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_6.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_7.offsetTop && d_7.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_7.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(500<=d_8.offsetTop && d_8.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_8.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_9.offsetTop && d_9.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_9.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_10.offsetTop && d_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_10.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_11.offsetTop && d_11.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_11.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_12.offsetTop && d_12.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_12.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_13.offsetTop && d_13.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_13.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_14.offsetTop && d_14.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_14.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_15.offsetTop && d_15.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_15.style.display= 'none'
        } 
    }

    if(e.key === 'd') {
        D.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            D.style.removeProperty("background-color");
        }, 100);
        if(450<=d_16.offsetTop && d_16.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            d_16.style.display= 'none'
        } 
    }

    // F라인 블럭
    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_1.offsetTop && f_1.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_1.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_2.offsetTop && f_2.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_2.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_3.offsetTop && f_3.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_3.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_4.offsetTop && f_4.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_4.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_5.offsetTop && f_5.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_5.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_6.offsetTop && f_6.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_6.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_7.offsetTop && f_7.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_7.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_8.offsetTop && f_8.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_8.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_9.offsetTop && f_9.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_9.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_10.offsetTop && f_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_10.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_11.offsetTop && f_11.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_11.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_12.offsetTop && f_12.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_12.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_13.offsetTop && f_13.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_13.style.display= 'none'
        } 
    }

    if(e.key === 'f') {
        F.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            F.style.removeProperty("background-color");
        }, 100);
        if(450<=f_14.offsetTop && f_14.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            f_14.style.display= 'none'
        } 
    }

    // J라인 블럭
    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_1.offsetTop && j_1.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_1.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_2.offsetTop && j_2.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_2.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_3.offsetTop && j_3.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_3.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_4.offsetTop && j_4.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_4.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_5.offsetTop && j_5.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_5.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_6.offsetTop && j_6.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_6.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_7.offsetTop && j_7.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_7.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_8.offsetTop && j_8.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_8.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_9.offsetTop && j_9.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_9.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_10.offsetTop && j_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_10.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_11.offsetTop && j_11.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_11.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_12.offsetTop && j_12.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_12.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_13.offsetTop && j_13.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_13.style.display= 'none'
        } 
    }

    if(e.key === 'j') {
        J.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            J.style.removeProperty("background-color");
        }, 100);
        if(450<=j_14.offsetTop && j_14.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            j_14.style.display= 'none'
        } 
    }

    // K라인 블럭
    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_1.offsetTop && k_1.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_1.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_2.offsetTop && k_2.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_2.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_3.offsetTop && k_3.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_3.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_4.offsetTop && k_4.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_4.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_5.offsetTop && k_5.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_5.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_6.offsetTop && k_6.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_6.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_7.offsetTop && k_7.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_7.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_8.offsetTop && k_8.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_8.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_9.offsetTop && k_9.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_9.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_10.offsetTop && k_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_10.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_10.offsetTop && k_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_10.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_10.offsetTop && k_10.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_10.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_11.offsetTop && k_11.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_11.style.display= 'none'
        } 
    }

    if(e.key === 'k') {
        K.style.backgroundColor= 'rgba(255,255,255,0.4)';
        setTimeout(() => {
            K.style.removeProperty("background-color");
        }, 100);
        if(450<=k_12.offsetTop && k_12.offsetTop<=600) {
            this.result = this.result + 100;
            score.innerText = `점수 : ${this.result}`;
            k_12.style.display= 'none'
        } 
    }
});