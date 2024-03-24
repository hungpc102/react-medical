import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faClock} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import SingUpModal from "../../features/Access/SingUp/signUp";
import LoginModal from "../../features/Access/Login/login";

function HomePage() {
  return (
    <div className="homepage">
      <nav className="nav" id="covit-header">
        <div className="col-7 pe-4 d-flex align-items-center justify-content-end">
          <h2 className="text-white mb-0 fw-bold ">Cập nhập mới nhất về COVID-19</h2>
        </div>
        <div className="col-5 ps-4  d-flex align-items-center justify-content-start">
          <button className="btn rounded-pill bg-light" type="button">
            <span className="fw-bold">Tìm hiểu thêm</span>
          </button>
        </div>
      </nav>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
          <div className="container">
            <span class="navbar-brand" href="#">
              <img src="./logo.jpeg" alt="logo" />
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-around col-8">
                <li class="nav-item">
                  <span class="nav-link active rounded-pill" aria-current="page" href="#">
                    Trang Chủ
                  </span>
                </li>
                <li class="nav-item dropdown">
                  <span
                    class="nav-link dropdown-toggle rounded-pill"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Các Dịch Vụ
                  </span>
                  <ul class="dropdown-menu">
                    <li>
                      <span class="dropdown-item" href="#">
                        Action
                      </span>
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Another action
                      </span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Something else here
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <span class="nav-link rounded-pill" aria-current="page" href="#">
                    Nhà Thuốc
                  </span>
                </li>
                <li class="nav-item dropdown">
                  <span
                    class="nav-link dropdown-toggle rounded-pill"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Gói Dịch Vụ
                  </span>
                  <ul class="dropdown-menu">
                    <li>
                      <span class="dropdown-item" href="#">
                        Action
                      </span>
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Another action
                      </span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Something else here
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <span class="nav-link rounded-pill" aria-current="page" href="#">
                    Đội Ngũ Bác Sĩ
                  </span>
                </li>
                <li class="nav-item dropdown">
                  <span
                    class="nav-link dropdown-toggle rounded-pill"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Tin Tức
                  </span>
                  <ul class="dropdown-menu">
                    <li>
                      <span class="dropdown-item" href="#">
                        Action
                      </span>
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Another action
                      </span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <span class="dropdown-item" href="#">
                        Something else here
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex justify-content-around">
               <button className="btn rounded-pill bg-light" id="login" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fw-bold text-white">Đăng nhập</span>
              </button>
              <button className="btn rounded-pill bg-light" id="signup" type="button" data-bs-toggle="modal" data-bs-target="#registrationModal">
                <span className="fw-bold text-white">Đăng kí</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./anh_cline.jpg" class="d-block w-100" alt="phòng khám 1"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Caiz Health</h1>
                <p className="fs-4">Bạn thấy không khỏe? Hãy để Caiz Health chăm sóc cho bạn!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268"
               class="d-block w-100" alt="phòng khám 2"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Caiz Health</h1>
                <p className="fs-4">Tư vấn sức khỏe từ xa 24/7 qua video & chat</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://gleneagles.hk/images/02-Clinic-B_resize.jpg" class="d-block w-100" alt="phòng khám 3"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Caiz Health</h1>
                <p className="fs-4">Hơn 100,000 khách hàng tin dùng dịch vụ</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="content background">
          <div className="container d-flex">
            <div className="col-6">
              <h1 className=" ">Khám phá các phòng khám</h1>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="rounded-pill bg-light wrap-province">
                <button className="btn rounded-pill bg-light ">
                  <span>TP.Hồ Chí Minh</span>
                </button>
                <button className="btn rounded-pill bg-light active">
                    <span>Hà Nội</span>
                </button>
              </div>
            </div>
          </div>
          <div className="container card-province">
            <div className="row">
              <div className="col-6 p-3 wrap-img">
                <img src="https://cdn.jiohealth.com/apps/clinic/2/feature-image/web/1_20221201_0.jpg" 
                class="img-fluid" alt="địa chỉ"/>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <div className="card-body">
                   <h1 className="text-primary">Capital Place Smart Clinic</h1>
                   <div className="d-flex">
                    <FontAwesomeIcon icon={faLocationDot} className="icon-location me-2"/>
                    <p className="fs-6">Tầng B1, Capital Place, 29 Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội</p>
                   </div>
                   <div className="d-flex">
                    <FontAwesomeIcon icon={faClock} className="icon-clock me-2"/>
                    <p className="fs-6">07:00 - 20:00 hằng ngày</p>
                   </div>
                   <div className="d-flex ">
                    <button className="btn rounded-pill bg-primary me-3 p-2" id="call" type="button">
                      <span className="fw-bold text-white px-4" >Gọi ngay</span>
                    </button>
                    <button className="btn rounded-pill" id="book" type="button">
                      <span className="fw-bold text-white px-4">Đặt lịch</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="text-white pt-4 pb-4">
        <div className="container">
        <img src="./logo.png" className="logo" alt="logo"/>
          <div className="row text-center text-md-start">
            {/* <!-- Cột 1 --> */}
            <div className="col-5 mb-3">
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Hotline 19001001</span></li>
                <li><span href="#" class="text-white">Hỗ trợ support@caizhealth.com</span></li>
                <li><span href="#" class="text-white">Copyright © 2017-2024 Rai and Rohl Technologies, Inc. All rights reserved.</span></li>
              </ul>
            </div>
            {/* <!-- Cột 2 --> */}
            <div className="col-2 mb-3">
              <h5 className="text-white">Dịch vụ</h5>
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Hẹn Bác Sĩ, Điều Dưỡng Đến Nhà</span></li>
                <li><span href="#" class="text-white">Nhà Thuốc Trực Tuyến Jio</span></li>
                <li><span href="#" class="text-white">Jio Prime</span></li>
                <li><span href="#" class="text-white">Vị Trí Tuyển Dụng</span></li>
              </ul>
            </div>
            {/* <!-- Cột 3 --> */}
            <div className="col-2 mb-3">
              <h5 className="text-white">Tìm Hiểu Thêm</h5>
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Đội Ngũ Bác Sĩ</span></li>
                <li><span href="#" class="text-white">Dịch Vụ Thăm Khám</span></li>
                <li><span href="#" class="text-white">Dành cho báo chí</span></li>
                <li><span href="#" class="text-white">Vị Trí Tuyển Dụng</span></li>
              </ul>
            </div>
            {/* <!-- Cột 4 --> */}
            <div className="col-3 mb-3">
              <h5 className="text-white">Hỗ Trợ Khách Hàng</h5>
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Câu Hỏi Thường Gặp</span></li>
                <li><span href="#" class="text-white">Chính Sách Bảo Mật</span></li>
                <li><span href="#" class="text-white">Chính Sách Hoạt Động</span></li>
                <li><span href="#" class="text-white">Liên hệ</span></li>
                <li><span href="#" class="text-white">Chính sách giải quyết khiếu nại</span></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row text-center text-md-start pb-5">
            {/* <!-- Cột 1 --> */}
            <div className="col-5 mb-3">
             <h5 className="text-white">CÔNG TY TNHH PHÒNG KHÁM ĐA KHOA JIO HEALTH</h5>
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Giấy CN ĐKDN số 0309145924, đăng ký lần đầu ngày 06/07/2009, đăng ký thay đổi lần thứ 9 ngày 06/07/2023, cấp bởi Sở KH&ĐT Thành phố Hồ Chí Minh.</span></li>
              </ul>
            </div>
            {/* <!-- Cột 2 --> */}
            <div className="col-4 mb-3">
              <h5 className="text-white">Địa chỉ</h5>
              <ul class="list-unstyled">
                <li><span href="#" class="text-white">Phòng khám Đa khoa Cao cấp Jio Health - Jio Smart Clinic</span></li>
                <li><span href="#" class="text-white">39 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM</span></li>
                <li className="mt-2"><span href="#" class="text-white fw-bold">Hãy theo dõi Jio Health tại</span></li>
                <li></li>
              </ul>
              <div className="d-flex mt-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-location me-2"/>
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-location me-2"/>
              </div>
            </div>
            {/* <!-- Cột 3 --> */}
            <div className="col-3 mb-3">
              <img className="notification" src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/dathongbao.png" alt="thông báo"/>
            </div>
          </div>
        </div>
      </footer>
      <SingUpModal/>
      <LoginModal/>
    </div>
  );
}

export default HomePage;
