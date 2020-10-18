import React from 'react';
import './Projects.css';
import AcidRain from './AcidRain.png';
import misae from './misae.png';

function Projects () {
    return (
    <div>
        <div className="Projects"> 
            <div className="left">
                <span className="name"> 산성비 </span>
                <div className="project">
                    <a href="https://github.com/oyeon-kwon/AcidRain">
                        <img className="AcidRain" src={AcidRain} />
                    </a>
                    <div className="projectDesc">
                        <div className="projectIntro">
                            코딩을 시작하는 우리에게는 타이핑마저 어렵다!<br />
                            추억의 타자연습 산성비 게임이 개발자를 위한 타이핑 연습 게임으로 재탄생했습니다.<br />
                            산성비 게임을 하다보면 낯설기만 했던 코드에 어느새 익숙해져있는 당신을 발견할거예요!
                        </div>
                        <div className="resumebox">
                            <div className="resume">Express 서버 구축</div>
                            <div className="resume">DB schema 작성</div>
                            <div className="resume">유저가 선택한 스테이지의 컨텐츠 정보 전송</div>
                            <div className="resume">기록된 모든 게임의 결과값 전송</div>
                            <div className="resume">현재 진행한 게임 결과를 playlog 테이블에 저장</div>
                            <div className="resume">마이페이지: 닉네임 수정 기능</div>
                            <div className="resume">랭킹페이지: 전체 유저의 게임 결과 리스트 확인</div>
                            <div className="resume">게임 실행 시 BGM 삽입</div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="right">
                <div className="name"> 미세톡톡 </div>
                <div className="project">
                    <div className="projectDesc">
                        <div className="projectIntro">
                            미세톡톡은 미세먼지 농도와 날씨를 알려주는 앱입니다. <br />
                            앱 내에서 발생하는 데일리 미션을 통해 포인트를 획득할 수 있습니다. <br />
                            적립한 포인트로는 기프티콘을 구매하거나 블록체인 기반의 HUM토큰으로 전환할 수 있습니다.
                        </div>
                        <div className="resumebox">
                            <div className="resume">만료된 기상청 API 업데이트</div>
                            <div className="resume">날씨 API 추가 및 fallback 구현</div>
                            <div className="resume">fallback 발생 시 슬랙 알림 설정</div>
                            <div className="resume">API 함수 분리, 코드 리팩토링</div>
                            <div className="resume">Admin 페이지 검색 기능 추가</div>
                        </div>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.finedustclient&hl=ko">
                        <img className="misae" src={misae} /> 
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;