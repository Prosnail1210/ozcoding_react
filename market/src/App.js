import './header.css'
import './banner.css'
import './footer.css'
import './info.css'
import './notice.css'
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
        <div className="container">
            <header className="header">
                <div className="header-content flex">
                    <div className="header-content_logo">더덕마켓</div>
                    <nav className="header-content_nav flex">
                        <ul>
                            <li>중고거래</li>
                            <li>동네가게</li>
                            <li className="active">알바</li>
                            <li>부동산 직거래</li>
                            <li>중고차 직거래</li>
                        </ul>
                    </nav>
                    <div className="header-content_input flex">
                        <span className="icon glass">
                            <input type="button" value="&#128269;"/>
                        </span>
                        <span>
                            <input type="text" className="search" placeholder="물품이나 동네를 검색해보세요"/>
                        </span>
                        <span className="icon menu">
                            <input type="button" value="&#9776;"/>
                        </span>
                        <span>
                            <input type="button" className="chat" value="채팅하기"/>
                        </span>
                    </div>
                </div>
            </header>
    
            <main className="main">
                <section className="info">
                    <div className="info_text">
                        <h1>우리 동네에서 찾는<br/> 더덕알바</h1>
                        <p>걸어서 10분 거리의<br/> 동네 알바들 여기 다 있어요.</p>
                    </div>
                </section>
                <section className="notice">
                    <h2 className="notice_title">인기 더덕알바</h2>
                    <div className="notice_container flex">
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                    </div>
                    <div className="banner flex">
                        <div className="banner_text">더덕알바 이용방법이 궁금하다면<br/> 지금 바로 알아보세요!</div>
                        <button className="banner_button">이용방법 알아보기</button>
                    </div>
                    <div className="notice_container flex">
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                        <article className="notice_item flex">
                            <div className="notice_thumb"></div>
                            <div className="notice_content">
                                <div className="notice_content_title">더덕마켓 고객센터 단기계약직 모집(1달 계약직)</div>
                                <div className="notice_content_address">주식회사 더덕서비스 - 대전광역시 대덕구 석봉동</div>
                                <div className="notice_content_pay">월급 3,000,000</div>
                            </div>
                        </article>
                    </div>
                    <div className="banner flex">
                        <div className="banner_text">더덕알바 이용방법이 궁금하다면<br/> 지금 바로 알아보세요!</div>
                        <button className="banner_button">이용방법 알아보기</button>
                    </div>
                </section>
            </main>
            
            <footer className="footer">
                <div className="footer_container">
                    <section className="footer_menu">
                        <div className="footer_apps">
                            <div className="footer_appdown">더덕마켓 앱 다운로드</div>
                            <div className="footer_appbtn flex">
                                <button>App Store</button>
                                <button>Google play</button>
                            </div>
                        </div>
                        <nav className="footer_nav flex">
                            <ul>
                                <li>중고거래</li>
                                <li>동네가게</li>
                                <li>더덕알바</li>
                                <li>부동산 직거래</li>
                                <li>중고차 직거래</li>
                            </ul>
                            <ul>
                                <li>더덕비즈니스</li>
                                <li>채팅하기</li>
                            </ul>
                            <ul>
                                <li>자주 묻는 질문</li>
                                <li>회사 소개</li>
                                <li>인재 채용</li>
                            </ul>
                        </nav>
                    </section>
                    <section className="footer_info">
                        <div>
                            <strong>대표</strong> 강윤호 | <strong>사업자번호</strong> 123-45-00678
                        </div>
                        <div>
                            <strong>직업정보제공사업 신고번호</strong> 2023-대전대덕-0011
                        </div>
                        <div>
                            <strong>주소</strong> 대전광역시 대덕구 석봉동 1길 1, 101호 (더덕서비스)
                        </div>
                        <div>
                            <strong>전화</strong>1588-8851 | <strong>고객문의</strong> cs@ddservice.com
                        </div>
                        <p>
                            <strong>이용약관</strong> &nbsp; &nbsp;
                            <strong style={{color: "black"}}>개인정보처리방침</strong> &nbsp; &nbsp;
                            <strong>위치기반 서비스 이용약관</strong>  &nbsp; &nbsp;
                            <strong>이용자보호 비전과 계획</strong>  &nbsp; &nbsp;
                        </p>
                    </section>
                </div>
            </footer>
        </div>
      );
  }
}

