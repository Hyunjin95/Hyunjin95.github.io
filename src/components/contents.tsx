import React from 'react';

import Image from './image';

const imageStyle = {
  maxWidth: '300px',
  marginBottom: '1.45rem',
};

const IndexContents: React.FC = () => (
  <>
    <p>헤더: 내 이름, 학교, 이메일 같은거. 내 깃헙 레포 링크도 걸면 좋을 듯</p>
    <p>
      메인: education: 학력.. Experience: 드라이어드 간거? 시스템 프로그래밍은
      컴파일러, 시프, OS에서 한거 대충 꾸며서? 언어: C, C++ 웹은 robotfriends
      한거랑, 프로젝트 한거.. 언어: JS, TS, React, Node.js, Express? PS는
      파이썬으로.. 백준 링크? 관심있는거: 웹 프론트엔드, 머신 러닝..?
    </p>
    <p>푸터: 개츠비로 만들었다는 거 적어두고 연락처 다시 한번?</p>
    <div style={imageStyle}>
      <Image />
    </div>
  </>
);

export default IndexContents;
