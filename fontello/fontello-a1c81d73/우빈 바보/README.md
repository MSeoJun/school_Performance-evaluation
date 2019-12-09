# Final_School_Test
## 마지막 수행평가
---
- 아직 정확한 내용을 모름
- 현재 미완성 상태임
---
1.인사
2.목차
3.설명
---
```
Audio 객체를 사용하여 음악을 사용가능하게 함

backgroundImage 를 랜덤으로 만들어주는 사이트가 있음
(새로고침 시 마다 다른 배경이미지)

이벤트 리스너 를 사용하여 매 페이지 마다 다른 배경이미지와 텍스트를 제공하지만 음악이 끊기거나 URL 주소가 바뀌지 않아도 됨
```
---
```html
콘텐츠를 가운데로 정렬
<style>
.content {
    position:fixed;
    top:50%;
    transfrom: translateY(-50%);
    //Parallax 효과

    background-attachment:fixed;
    overflow:hidden;
}
</style>
```
---
```javascript
// 음악을 설정 
<script>
    var audio = new Audio('주소');
    //실행시에는 audio.play();


//이벤트 리스너
    addEventListener('click',(event) => {
        alert('Hello');
    });
</script>
```
---
![Image](./2-12Final.JPG)