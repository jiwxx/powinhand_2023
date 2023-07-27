//1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴m_nav, 모바일 메뉴m_nav_open
//3. x버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 메뉴 m_nav_open
//변수생성
const m_navopen = document.querySelector('.m_nav_open');
const mnav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인
console.log(m_navopen,mnav,close);
//1.모바일 메뉴 숨기기
m_navopen.style.display = 'none';
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//2-1.햄버거 메뉴 클릭시 (객체. 메서드(이벤트,함수))
//객체 = 햄버거 메뉴m_nav, 모바일 메뉴m_nav_open
mnav.addEventListener('click',function(){
    //2-2.모바일 메뉴 보이기(객체.속성.속성=값)
    m_navopen.style.display='block'
})
//3. x버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 메뉴 m_nav_open
close.addEventListener('click',function(){
    m_navopen.style.display='none';
})
//속성
//이벤트
//메소드

