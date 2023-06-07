import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';



export default function SigninComponent(){
    const [state, setState] = React.useState({
        이메일 : '',
        비밀번호 : '',
    })
   
    // 이메일 
    const onChangeEmail = (e) => {
      const {value} = e.target;

      setState({
          ...state,
          이메일 : value
      })
    }

    const onChangePw = (e) => {

        const {value} = e.target;


        setState({
            ...state,
            비밀번호 : value
        })
    }

    const onSubmitSignin =(e)=>{
        e.preventDefault();
        let index = state.이메일.indexOf("@");
        console.log(state.이메일.substring(0, index));
        console.log(state.이메일.substring(index+1));
        const formData = {
            "user_email1": state.이메일.substring(0, index),
            "user_email2": state.이메일.substring(index+1),
            "user_pw": state.비밀번호
        }

        
        $.ajax({
            url: 'http://localhost:8080/JSP/ohouse/signin_action.jsp',
            type: 'POST',
            data: formData,
            dataType : 'json',
            success(res) {
                console.log('AJAX 성공!');
                console.log(res.result);
                if(res.result === '1'){
                    // session에 이메일 저장 
                    sessionStorage.setItem('user_email', state.이메일);
                    // main으로 이동 
                    window.location.href='/';
                }
                else if(res.result === '0'){
                    alert('비밀번호를 확인해주세요!');
                }
                else{
                    alert('이메일을 확인해주세요!');
                }
            },
            error(err) {
                console.log('AJAX 실패!' + err);
            }
        });
    }

    return (
        <div id='signin'>
            <form id="login-form" className="ohouse-login-form" onSubmit={onSubmitSignin}>
                <Link to="/"><svg width="147" height="50" viewBox="0 0 147 50" preserveAspectRatio="xMidYMid meet" className="css-1ekfro2 ebon26m3"><g fill="none" fill-rule="evenodd"><path fill="#35C5F0" d="M38.42 0H8.35C4.03 0 0 4.02 0 8.33v33.34C0 45.98 4.03 50 8.35 50h33.41c4.33 0 8.35-4.02 8.35-8.33V8.33C50.11 4.02 46.1 0 41.76 0h-3.34z"></path><path fill="#FFF" d="M36.73 26.02a3.31 3.31 0 0 1-3.31-3.3 3.31 3.31 0 0 1 3.31-3.31 3.31 3.31 0 0 1 3.31 3.3 3.31 3.31 0 0 1-3.31 3.31zm-2.47 8.7h-19.1V22.08l9.55-6.65 5.47 3.81a7.35 7.35 0 0 0-.86 3.47 7.4 7.4 0 0 0 4.94 6.97v5.02zm2.47-19.4c-.84 0-1.65.14-2.4.4l-7.93-5.5a2.97 2.97 0 0 0-3.39 0l-11.86 8.24a2.96 2.96 0 0 0-1.27 2.43v16.13a2.96 2.96 0 0 0 2.97 2.95h23.72a2.96 2.96 0 0 0 2.96-2.96v-7.44a7.4 7.4 0 0 0 4.61-6.85 7.4 7.4 0 0 0-7.41-7.4z"></path><g fill="#000"><path d="M77.46 37.1h-5.72v-5.18a1.68 1.68 0 0 0-3.37 0v5.18h-5.72a1.68 1.68 0 1 0 0 3.36h14.8a1.68 1.68 0 1 0 0-3.36M66.19 18.53c0-5.32 2.43-6.12 3.87-6.12 1.45 0 3.88.8 3.88 6.12v.42c0 5.32-2.43 6.12-3.87 6.12-1.45 0-3.87-.8-3.87-6.12v-.42zm3.87 9.9c4.47 0 7.25-3.63 7.25-9.48v-.42c0-5.85-2.78-9.48-7.24-9.48s-7.25 3.63-7.25 9.48v.42c0 5.85 2.78 9.48 7.25 9.48zm29.67-8.52H81.64a1.69 1.69 0 1 0 0 3.37h18.08a1.68 1.68 0 1 0 0-3.37m-1.8 17.96c-8.22 2.13-10.97.92-11.78.3-.52-.4-.76-.94-.76-1.72v-1H97.3c.93 0 1.69-.76 1.69-1.69v-5.88c0-.93-.76-1.68-1.69-1.68H83.7a1.68 1.68 0 1 0 0 3.36h11.92v2.52H83.7c-.94 0-1.69.76-1.69 1.69v2.68c0 1.82.72 3.34 2.07 4.38 1.39 1.08 3.41 1.61 6.05 1.61 2.38 0 5.26-.44 8.63-1.3a1.68 1.68 0 0 0 1.21-2.06 1.69 1.69 0 0 0-2.05-1.2M84.55 17H97.1a1.69 1.69 0 1 0 0-3.37H86.24V9.62a1.68 1.68 0 0 0-3.38 0v5.7c0 .94.76 1.69 1.69 1.69m59.83-8.5c-.93 0-1.7.75-1.7 1.68v13.57a1.69 1.69 0 0 0 3.38 0V10.18c0-.93-.75-1.69-1.68-1.69m-8.52 14.82a1.69 1.69 0 0 0 2.16 1 1.68 1.68 0 0 0 1.01-2.15c-.05-.15-1.16-3.1-3.92-5.21l4.29-4.76a1.68 1.68 0 0 0 .28-1.8 1.69 1.69 0 0 0-1.54-1h-10.5a1.68 1.68 0 1 0 0 3.36h6.72l-3.1 3.44v.01l-4.88 5.4a1.68 1.68 0 0 0 1.26 2.81c.46 0 .92-.19 1.25-.55l3.96-4.4c2.1 1.48 3 3.8 3.01 3.85m5.88 15.34h-8.14a.95.95 0 0 1-.95-.94v-2.26h10.04v2.26c0 .52-.42.94-.95.94m2.64-10.85c-.93 0-1.69.75-1.69 1.68v2.6h-10.04v-2.6a1.68 1.68 0 0 0-3.37 0v8.23a4.32 4.32 0 0 0 4.32 4.3h8.14a4.32 4.32 0 0 0 4.32-4.3v-8.23c0-.93-.75-1.68-1.68-1.68m-34.1-15.39c2.57 0 2.7 4.91 2.7 5.9 0 .98-.13 5.88-2.7 5.88-2.57 0-2.7-4.9-2.7-5.89 0-.98.13-5.89 2.7-5.89m0 15.15a5.33 5.33 0 0 0 4.8-3.04c.83-1.56 1.27-3.7 1.27-6.22s-.44-4.65-1.27-6.2a5.33 5.33 0 0 0-4.8-3.05 5.33 5.33 0 0 0-4.8 3.04c-.84 1.56-1.28 3.7-1.28 6.21s.44 4.66 1.28 6.22a5.33 5.33 0 0 0 4.8 3.04"></path><path d="M120.65 8.5c-.93 0-1.69.75-1.69 1.68v20.6c-2.23.69-6.66 1.3-12.04 1.3h-2.57a1.68 1.68 0 1 0 0 3.37h2.57c3.07 0 8.37-.27 12.05-1.19v5.6a1.68 1.68 0 0 0 3.37 0V10.19c0-.93-.76-1.69-1.69-1.69"></path></g></g></svg></Link>
                <ul>
                    <li>
                        <div className="form-group">
                            {/* <label htmlFor="username" hide>이메일</label> */}
                            <input
                            type="text"
                            id="username"
                            name="username"
                            position="top"
                            placeholder='이메일'
                            onChange={onChangeEmail}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="form-group">
                            {/* <label htmlFor="password">비밀번호</label> */}
                            <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='비밀번호'
                            onChange={onChangePw}
                            />
                        </div>
                    </li>
                    <button  type="submit" className="ohouse-login-form-button">
                        로그인
                    </button>

                    <li>
                        <div className="set-up1">
                            <h3><Link to="/비밀번호재설정">비밀번호 재설정</Link> </h3>
                            <h3><Link to='/'>회원가입</Link></h3>
                        </div>
                    </li>
                    <li>
                        <div className="set-up2">
                            <p>SNS계정으로 간편 로그인/회원가입</p>
                        </div>
                    </li>
                    <li>
                        <div className="sns">
                            <a href="!#"><svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#3B5998" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"></path><path fill="#FFF" d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z"></path></g></svg></a>
                            <a href="!#"><svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#FFEB00" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"></path><path fill="#3C2929" d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z"></path></g></svg></a>
                            <a href="!#"><svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#00C63B" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"></path><path fill="#FFF" d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z"></path></g></svg></a>
                        </div>
                    </li>
                    <li>
                        <div className="login-pro">
                           <a href="!#">로그인에 문제가 있으신가요?</a>
                        </div>
                    </li>
                    <li>
                        <div className="nomem-order">
                            <a href="!#">비회원 주문 조회하기</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
};

