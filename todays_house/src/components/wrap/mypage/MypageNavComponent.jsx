import React from 'react';
import $ from 'jquery';
import {Link, Outlet} from 'react-router-dom';

export default function MypageNavComponent () {
  
  const [state, setState] = React.useState({
    nav1 : '프로필',
    nav2 : '모두보기'
  })

  React.useEffect(() => {
    $('#mypagenav .top-nav-btn').on({
      click(e){
        e.preventDefault();
        let nav1 = '';
        $('.top-nav-btn').removeClass('on');
        $(this).toggleClass('on');
        nav1 = $(this)[0].innerHTML;
        if(nav1 === '프로필'){
          setState({
            ...state,
            nav1 : nav1,
            nav2 : '모두보기'
          })
        }
        else if(nav1 === '설정'){
          setState({
            ...state,
            nav1 : nav1,
            nav2 : '회원정보수정'
          })
        }
      }
    })

    $('#mypagenav .bottom-nav-btn').on({
      click(e){
        e.preventDefault();
        let nav2 = '';
        $('.bottom-nav-btn').removeClass('on');
        $(this).toggleClass('on');
        nav2 = $(this)[0].innerHTML;
        setState({
          ...state,
          nav2 : nav2
        })
      }
    })
  })

  return (
    <>
      <div id="mypagenav">
        <nav className='top-nav'>
              <ul>
                <li><a href="#!" className={`top-nav-btn ${state.nav1==='프로필'?'on':''}`}>프로필</a></li>
                <li><a href="#!" className={`top-nav-btn ${state.nav1==='설정'?'on':''}`}>설정</a></li>
              </ul>
            </nav>
            {
              state.nav1==='프로필' &&
              <nav className='bottom-nav'>
                <ul>
                  <li><a href="#!" className={`bottom-nav-btn ${state.nav2==='모두보기'?'on':''}`}>모두보기</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>사진</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>집들이</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>노하우</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>질문과답변</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>스크랩북</a></li>
                  <li><a href="#!" className='bottom-nav-btn'>좋아요</a></li>
                </ul>
              </nav>
            }
            {
              state.nav1==='설정' &&
              <nav className='bottom-nav'>
                <ul>
                  <li><Link to="/회원정보수정" className={`bottom-nav-btn${state.nav2==='회원정보수정'?' on':''}`}>회원정보수정</Link></li>
                  <li><Link to="/비밀번호변경" className='bottom-nav-btn'>비밀번호변경</Link></li>
                </ul>
              </nav>
            }
      </div>
      <Outlet />
    </>
  );
};

