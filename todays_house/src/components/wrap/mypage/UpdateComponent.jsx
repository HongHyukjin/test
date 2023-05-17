import React, {useRef} from 'react';
import $ from 'jquery';

export default function UpdateComponent () {

  const onClickDelImage = (e) => {
    e.preventDefault();
    console.log("img delete");
    $('.input .img_upload img').attr("src", "./img/avatar.avif");
    $('.input .img_del').css({"display":"none"})
  }

  const imageInput = useRef();

  const onClickImageUpload = (e) => {
    console.log("img upload btn click");
    e.preventDefault();
    imageInput.current.click();
  }

  const onChangeImage = (e) => {
    console.log("img upload");
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) =>{
      $('.input .img_upload img').attr("src", event.target.result);
    }
    reader.readAsDataURL(file);
    $('.input .img_del').css({"display":"block"})
  }

  return (
    <div id="update">
      <div className="container">
        <div className="gap">
          <div className="content">
            <h1>회원정보수정</h1>
            <form name="update_form" id="updateForm" action="">
              <div>
                <div className='label'>
                  <label htmlFor="">이메일</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="email" id="email" className='half'/>
                  <span>@</span>
                  <input type="text" name="domain" id="domain" className='half'/>
                  <p>이메일을 변경하시려면 운영자에게 메일을 보내주세요.</p>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">별명</label>
                  <p>*필수항목</p>
                </div>
                <div className='input'>
                  <input type="text" name="nickname" id="nickname" />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">홈페이지</label>
                </div>
                <div className='input'>
                  <input type="text" name="homepage" id="homepage" placeholder='https://ohou.se'/>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">성별</label>
                </div>
                <div className='input-radio'>
                  <ul>
                    <li><input type="radio" name="gender" id="gender1" value="남성" />남성</li>
                    <li><input type="radio" name="gender" id="gender2" value="여성" />여성</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">생년월일</label>
                </div>
                <div className='input'>
                  <input type="text" name="birth" id="birth" placeholder='YYYY-MM-DD' />
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">프로필 이미지</label>
                </div>
                <div className="input">
                  <input type="file" name="file" id="file" accept='image/*' ref={imageInput} onChange={onChangeImage} />
                  <button className='img_upload' onClick={onClickImageUpload}>
                    <img src="./img/avatar.avif" alt="" />
                  </button>
                  <button className='img_del' onClick={onClickDelImage}>
                    <img src="./img/img_del.svg" alt="" />
                    삭제
                  </button>
                </div>
              </div>
              <div>
                <div className='label'>
                  <label htmlFor="">한줄 소개</label>
                </div>
                <div className='input'>
                  <input type="text" name="oneline" id="oneline" />
                </div>
              </div>
              <button type='submit'>회원 정보 수정</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
