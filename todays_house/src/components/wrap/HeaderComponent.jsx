import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import NavComponent from './NavComponent';

export default function HeaderComponent({isMypage}){

    const [state,setState] = React.useState({
        isLogin : false,
        isSub1 : false,
        isNav:false,
    })

    const onClickSub1=(e)=>{
        e.preventDefault();
        if(state.isSub1===true){
            setState({
                ...state,
                isSub1: false
            })
        }
        else{
            setState({
                ...state,
                isSub1: true
            })
        }
    }

    React.useEffect(()=>{
        const stored_email = sessionStorage.getItem('user_email');
        let isLogin = false;
        // 로그인이 된상태
        if(stored_email !== null){
            isLogin = true;
        }
        // 로그인 안된 상태
        else{
            isLogin = false;
        }
        setState({
            ...state,
            isLogin : isLogin,
        })
    },[])

    const onClickLogout = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('user_email');
        setState({
            ...state,
            isLogin : false
        })
    }

    const onMouseEnterNav=()=>{
        setState({
            ...state,
            isNav:true
        })
    }

    const onMouseLeaveNav = () => {
        setState({
            ...state,
            isNav:false
        })
    }

    React.useEffect(()=>{
        $('#mypagenav').css({height:'200px',"padding-top":"80px"});
        // $('#nav').css({position:"fixed" ,background:"#fff",padding:0,height:"50px"})
        if(state.isNav){
            $('#header').css({height:"130px"})
            $('#mypagenav').css({height:'250px',"padding-top":"130px"});
            $('#header #nav').css({"padding-top" : "0", "height":"50px", "border-top" : "1px solid #eaedef"})
        }
        else{
            $('#header').css({height:"80px"})
            $('#mypagenav').css({height:'200px',"padding-top":"80px"});
        }
    },[state.isNav])
    

    return (
        <>
            <div id='header'>
                <div className="container">
                    <div className="gap">
                        <div className="row1">
                            <div className="headbox">
                                <div className="left">
                                    <ul>
                                        <li>
                                            <Link to="/"><svg class="css-bsbra5" width="74" height="30" viewBox="0 0 74 30" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45"></path><rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect><path fill="#000" d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62"></path><path fill="#000" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45"></path></g></svg></Link>
                                        </li>
                                        <li><a href='!#' onMouseEnter={onMouseEnterNav}>커뮤니티</a></li>
                                        <li><a href="!#">쇼핑</a></li>
                                        <li><a href="!#">이사/시공/수리</a></li>
                                    </ul>
                                </div>
                                {
                                    state.isLogin && (
                                        <div className="login-right">
                                            <ul>
                                                <li>
                                                    <span className='_search_24 css-hkiqzb'></span>
                                                    <input type="text" name='home' id='home' placeholder='통합검색' />
                                                </li>
                                                <li>
                                                    <a href="!#"><span className='_scrap_outline_24 css-17vaqfq'></span></a>
                                                </li>
                                                <li><a href="!#"><span className='_notification_outline_24 css-17vaqfq'></span></a></li>
                                                <li><a href="!#"><span className='_cart_24 css-17vaqfq'></span></a></li>

                                                <li><Link to="/마이페이지" className='avartar-box'><img src="./images/avatar.png" alt="" /></Link></li>
                                                <li>
                                                    <button onClick={onClickSub1}>글쓰기</button>
                                                        {
                                                            state.isSub1 && (
                                                                <div className="sub">
                                                                    <ul>
                                                                        <li>
                                                                            <Link to="/사진업로드">
                                                                                <div><img src="./images/picture.svg" alt="" /></div>
                                                                                <h2>사진/동영상 올리기</h2>
                                                                                <h3>우리 집의 공간과 나의 일상을 기록해 보세요.</h3>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to="/집들이업로드">
                                                                                <div><img src="./images/home.svg" alt="" /></div>
                                                                                <h2>집들이 글쓰기</h2>
                                                                                <h3>집에 관한 이야기를 글로 작성해 보세요.</h3>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/nohow.svg" alt="" /></div>
                                                                                <h2>노하우 글쓰기</h2>
                                                                                <h3>다양한 인테리어 노하우를 공유해 주세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/sangpum.svg" alt="" /></div>
                                                                                <h2>상품 리뷰 쓰기</h2>
                                                                                <h3>상품 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/sigong.svg" alt="" /></div>
                                                                                <h2>시공 전문가 리뷰쓰기</h2>
                                                                                <h3>시공 전문가 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                                {
                                    !state.isLogin && (
                                        <div className="right">
                                            <ul>
                                                <li>
                                                    <span className='_search_24 css-hkiqzb'></span>
                                                    <input type="text" name='home' id='home' placeholder='통합검색'></input>
                                                </li>
                                                <li>
                                                    <a href="!#"><span className='_cart_24 css-17vaqfq'></span></a>
                                                </li>
                                                <li><Link to="/로그인">로그인</Link></li>
                                        
                                                <li><Link to="/회원가입">회원가입</Link></li>
                                    
                                                <li><Link to="/마이페이지">고객센터</Link></li>
                                                <li>
                                                    <button onClick={onClickSub1}>글쓰기</button>
                                                        {
                                                            state.isSub1 && (
                                                                <div className="sub">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/picture.svg" alt="" /></div>
                                                                                <h2>사진/동영상 올리기</h2>
                                                                                <h3>우리 집의 공간과 나의 일상을 기록해 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/home.svg" alt="" /></div>
                                                                                <h2>집들이 글쓰기</h2>
                                                                                <h3>집에 관한 이야기를 글로 작성해 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/nohow.svg" alt="" /></div>
                                                                                <h2>노하우 글쓰기</h2>
                                                                                <h3>다양한 인테리어 노하우를 공유해 주세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/sangpum.svg" alt="" /></div>
                                                                                <h2>상품 리뷰 쓰기</h2>
                                                                                <h3>상품 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="!#">
                                                                                <div><img src="./images/sigong.svg" alt="" /></div>
                                                                                <h2>시공 전문가 리뷰쓰기</h2>
                                                                                <h3>시공 전문가 리뷰를 작성하고 포인트도 받아 보세요.</h3>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {
                state.isNav && <span onMouseLeave={onMouseLeaveNav}><NavComponent  /></span>
                }
            </div>
            
        </>
    );
};
