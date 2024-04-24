<template>
  <div class="navbar">
    <div class="dropdown">
      <a class="dropbtn">
        <img
          src="../assets/account_obj_avatar.png"
          alt="User Image"
          class="user-img"
        />
        DMS_Administrator
      </a>
      <div class="dropdown-content">
        <a href="#">About</a>
        <a href="#">Log out</a>
      </div>
    </div>
  </div>
  <div class="navbar1">
    <p>About</p>
  </div>

  <div class="sidebar">
    <div class="sidebar-item">
      <img src="../assets/logo.png" alt="Image description 1" />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_01_normal.png"
        alt="Image description 2"
      />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_02_normal.png"
        alt="Image description 3"
      />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_03_normal.png"
        alt="Image description 4"
      />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_04_normal.png"
        alt="Image description 5"
      />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_05_normal.png"
        alt="Image description 6"
      />
    </div>
    <div class="sidebar-item">
      <img
        src="../assets/side_menu_btn_06_normal.png"
        alt="Image description 7"
      />
    </div>
  </div>
  <div id="nav_sub_menu_bg">
    <div class="status_content">
      <div class="status_bar">
        <div class="sync_bar"></div>
        <div id="user_bar" class="user_bar"></div>
        <div id="language_bar">
          <div class="language_name">
            <span id="language_name_text" class="language_name_link"></span>
          </div>
        </div>
      </div>
      <div class="sub_menu">
        <div class="sub_menu_content">
          <div id="btn_sub_menu_div_1" class="btn_sub_menu_div"></div>
          <div id="btn_sub_menu_div_2" class="btn_sub_menu_div"></div>
          <div id="btn_sub_menu_div_3" class="btn_sub_menu_div"></div>
          <div id="btn_sub_menu_div_4" class="btn_sub_menu_div"></div>
          <div id="btn_sub_menu_div_5" class="btn_sub_menu_div"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- main_content start -->
  <div id="main_content">
    <!-- first_content start -->
    <div id="first_content">
      <!-- mid_content start -->
      <div id="first_mid_content">
        <!-- title div start -->
        <div id="first_mid_content_title_div">
          <div class="first_result_div first_mid_content_div_first"></div>
        </div>
        <!-- title div end -->
      </div>
      <!-- mid_content end -->

      <!-- main_chart start -->
      <div id="first_main_chart">
        <div id="first_main_chart_div">
          <div id="first_list_div">
            <div class="first_about_div">
              <div class="first_about_line">
                <div class="first_about_title">
                  <p id="versionInfo"></p>
                  <p>
                    Copyright© 2023 Leadtek Research Inc. All Rights Reserved.
                  </p>
                </div>
              </div>
              <!--  <div class="first_about_line" style="height:10px;"></div>-->
              <div class="first_about_line">
                <!--  <div class="first_about_content"><p>Copyright© 2017 Leadtek Research Inc. All Rights Reserved.</p></div>-->
              </div>
              <div class="first_about_customer">
                <div class="first_about_line" style="height: 10px"></div>
                <div class="first_about_line">
                  <div class="first_about_content">
                    <p id="customer_copyright_notice"></p>
                  </div>
                </div>
              </div>
              <div class="first_about_lr">
                <div class="first_about_line" style="height: 10px"></div>
                <div class="first_about_line">
                  <div class="first_about_content">
                    <p data-langKey="about.content.copywrite.content1">
                      This Device Management Software (DMS) is a thin client and
                      zero client management console tool which lets
                      administrators centrally manage and deploy your client
                      devices. All right, title and interest in this DMS
                      including, without limitation, all copyrights, trademarks,
                      logo, brands, patent and other rights therein (and all
                      renewals and extensions thereof) shall be owned
                      exclusively by Leadtek Research Inc. or its licensor(s).
                    </p>
                  </div>
                </div>

                <div class="first_about_line" style="height: 220px"></div>
                <div class="first_about_line">
                  <div class="first_about_content">
                    <p data-langKey="about.content.copywrite.content2">
                      This DMS is protected by copyright law and international
                      treaties. Unauthorized modification, reproduction or
                      distribution of this DMS, or any portion of it, may result
                      in severe civil and criminal penalties and will be
                      prosecuted to the maximum extent possible under the law.
                    </p>
                  </div>
                </div>

                <div class="first_about_line" style="height: 20px"></div>
                <div class="first_about_line">
                  <div class="first_about_third_content">
                    <p
                      style="color: rgb(0, 0, 0)"
                      data-langKey="about.content.except.content"
                    >
                      EXCEPT AS OTHERWISE PROVIDED HEREIN, LEADTEK DISCLAIMS ALL
                      WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT
                      LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                      PARTICULAR PURPOSE AND NONINFRINGEMENT WITH RESPECT TO ANY
                      OF THE DMS AND THE PRODUCTS. IN NO EVENT SHALL LEADTEK BE
                      LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL
                      DAMAGES.
                    </p>
                  </div>
                </div>
              </div>
              <!--end div_lr-->
              <div class="first_about_line" style="height: 40px"></div>
              <div class="first_about_line">
                <div class="first_about_content">
                  <p data-langKey="about.content.softwareUsed.title">
                    The DMS uses the following server and web projects:
                  </p>
                </div>
              </div>
              <div class="first_about_line" style="height: 10px"></div>
              <div class="first_about_line">
                <div class="first_about_content">
                  <p data-langKey="about.content.softwareUsed.os.title">
                    # Ubuntu 14.04.1 LTS (https://www.ubuntu.com/)
                  </p>
                </div>
              </div>
              <div class="first_about_line" style="height: 10px"></div>
              <div class="first_about_line">
                <div class="first_about_content">
                  <p
                    data-langKey="about.content.softwareUsed.installPackage.title"
                  >
                    # Installed packages include:
                  </p>
                </div>
                <div class="first_about_second_content">
                  <p
                    data-langKey="about.content.softwareUsed.installPackage.content"
                  >
                    apache2 (Version: 2.4.7)<br />mysql-server-5.6 (Version:
                    5.6.33-0)<br />PHP (Version: 5.5.9)<br />Java (Version:
                    OpenJDK 1.7.0_131)<br />Tomcat6 (Version: 6.0.39)<br />vsftp
                    (Version: 3.0.2)<br />TFTP (tftp-hpa: 5.2, tftpd-hpa:
                    5.2)<br />miniupnpd (Version: 1.9)<br />ntpdate (Version:
                    4.2.6)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- main_chart end -->

      <div id="first_bottom_content">
        <div id="first_bottom_content_title_div"></div>
      </div>
    </div>
    <!-- first_content end -->

    <a href="#" class="go-top"></a>
  </div>
  <!-- main_content end -->

  <!--
      <div id="user_func_dialog" style="display:none">
        <span class="user_func_dialog_top"></span>
        <div>
          <div class="user_func_dialog_func"><a id="user_func_about"   class="user_func_dialog_func_text">About</a></div>
          <div class="user_func_dialog_func"><a id="user_func_logout"  class="user_func_dialog_func_text">Sign Out</a></div>
        </div>
      </div>
      -->

  <div id="language_change_dialog" style="display: none">
    <span class="language_change_dialog_top"></span>
    <div>
      <div class="language_change_dialog_eng_func">
        <a
          class="language_change_dialog_eng_func_text"
          href="javascript: return false;"
          data-langKey="column.language.en_us.text"
          >ENGLISH</a
        >
      </div>
      <div class="language_change_dialog_chi_func">
        <a
          class="language_change_dialog_chi_func_text_selected"
          href="javascript: return false;"
          data-langKey="column.language.zh_tw.text"
          >繁體中文</a
        >
      </div>
      <div class="language_change_dialog_chi_func">
        <a
          class="language_change_dialog_chi_func_text"
          href="javascript: return false;"
          data-langKey="column.language.zh_cn.text"
          >简体中文</a
        >
      </div>
    </div>
  </div>

  <div id="warning_message_dialog" class="_FX_warning_message_dialog">
    <div class="_FX_warning_message_dialog__overlay"></div>
    <div class="_FX_warning_message_dialog__content">
      <div
        id="wmd_warning_message"
        class="_FX_warning_message_dialog__message"
      ></div>
    </div>
  </div>

  <div id="confirm_logout_dialog" class="_FX_confirm_logout_dialog">
    <div class="_FX_confirm_logout_dialog__overlay"></div>
    <div class="_FX_confirm_logout_dialog__content">
      <div class="_FX_confirm_logout_dialog__body">
        <div class="_FX_confirm_logout_dialog__body_header_line"></div>
        <div class="_FX_confirm_logout_dialog__body_content">
          <div class="_FX_confirm_logout_dialog__body_field_line"></div>
        </div>
      </div>
      <div class="_FX_confirm_logout_dialog__func_buttons">
        <div class="_FX_confirm_logout_dialog__func_button_line"></div>
      </div>
    </div>
  </div>
</template>

<style>
@charset "utf-8";
#wholeContainer {
  width: 100%;
  height: 100%;
  background-color: gray;
}
#main_content {
  position: relative;
  width: auto;
  margin-top: 10px;
  margin-left: 20%;
  float: left;
  overflow-y: hidden;
  flex: auto;
}
#first_content {
  position: relative;
  width: auto;
  height: 100%;
  float: left;
  overflow: hidden;
}
#first_mid_content {
  position: relative;
  width: 1238px;
  height: auto;
  margin-top: 37px;
  float: left;
}
#first_mid_content_title_div {
  position: relative;
  height: 48px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(235, 235, 235);
  border-radius: 12px 12px 0px 0px;
  border-bottom: none;
  float: left;
}

.first_mid_content_div_first {
  margin-left: 45px;
}
.first_result_div {
  position: relative;
  width: auto;
  height: 100%;
  margin-right: 10px;
  float: left;
}
.resultImg {
  position: relative;
  width: auto;
  height: auto;
  margin-top: 9px;
  float: left;
}
.titleText,
.resultText {
  width: auto;
  height: 32px;
  line-height: 28px;
  vertical-align: middle;
  border-style: none;
  font-size: 14px;
  font-weight: bolder;
  letter-spacing: 0.01em;
  text-align: left;
}
.titleText {
  padding-left: 10px;
}
.resultText {
  color: rgb(30, 123, 226);
}
.first_main_content_first_field_column_div,
.first_main_content_field_column_div {
  position: relative;
  height: 32px;
  width: auto;
  margin: 21px 0 0 0;
  float: left;
}
.first_main_content_field_column_div {
  float: right;
}
#first_search_text {
  width: 200px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  border-style: none;
  color: rgb(90, 90, 90);
  text-align: left;
  font-size: 14px;
  letter-spacing: -0.01em;
  font-family: 'Roboto-Regular', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR',
    'Noto Sans SC', 'Noto Sans TC';
}

#first_search_text:focus {
  outline: 0;
}
#first_search_text[disabled] {
  background-color: rgb(255, 255, 255);
  color: rgb(168, 168, 168);
}
#first_search_text::-ms-clear {
  display: none;
}
/* do not group these rules */
#first_search_text::-webkit-input-placeholder {
  font-family: 'Roboto-Regular', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR',
    'Noto Sans SC', 'Noto Sans TC';
  font-size: 14px;
  letter-spacing: -0.01em;
  color: rgb(189, 189, 189);
}
#first_search_text:-moz-placeholder {
  /* FF 4-18 */
  font-family: 'Roboto-Regular', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR',
    'Noto Sans SC', 'Noto Sans TC';
  font-size: 14px;
  letter-spacing: -0.01em;
  color: rgb(189, 189, 189);
}
#first_search_text::-moz-placeholder {
  /* FF 19+ */
  font-family: 'Roboto-Regular', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR',
    'Noto Sans SC', 'Noto Sans TC';
  font-size: 14px;
  letter-spacing: -0.01em;
  color: rgb(189, 189, 189);
}
#first_search_text:-ms-input-placeholder {
  /* IE 10+ */
  font-family: 'Roboto-Regular', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR',
    'Noto Sans SC', 'Noto Sans TC';
  font-size: 14px;
  letter-spacing: -0.01em;
  color: rgb(189, 189, 189);
}
#first_progress_message_div {
  position: relative;
  height: 28px;
  width: auto;
  margin: 6px 12px 0 6px;
  float: right;
}
.progresstext {
  width: 134px;
  height: 26px;
  vertical-align: middle;
  border-style: none;
  color: #737373;
  text-align: left;
  font-size: 12px;
  letter-spacing: 0.02em;
}
.search_text_border {
  border: 1px rgb(189, 189, 189) solid;
  border-radius: 2px;
}
.search_text_focus_border {
  border: 1px rgb(163, 163, 163) solid;
  border-radius: 2px;
}
.titletext {
  width: auto;
  height: 28px;
  line-height: 32px;
  vertical-align: middle;
  border-style: none;
  color: #999999;
  text-align: left;
  font-size: 14px;
}
.titletext:focus {
  outline: 0;
}
.normaltext {
  width: 134px;
  height: 28px;
  vertical-align: middle;
  border-style: none;
  color: #737373;
  text-align: left;
  padding-left: 6px;
  font-size: 14px;
  letter-spacing: 0.02em;
}
.normaltext:focus {
  outline: 0;
}
.listtext {
  width: auto;
  height: 28px;
  line-height: 32px;
  vertical-align: middle;
  border-style: none;
  color: #999999;
  text-align: left;
  font-size: 14px;
}
.listtext:focus {
  outline: 0;
}

#first_mid_content_title_text {
  line-height: 32px;
  color: #a5a5a5;
  font-weight: bolder;
  text-align: center;
  vertical-align: middle;
  cursor: default;
}

.first_about_title,
.first_about_content,
.first_about_third_content,
.first_about_second_content {
  position: relative;
  width: calc(100% - 245px); /*180*/
  height: auto;
  float: left;
  margin: 0 135px 0 48px;
}
.first_about_title {
  height: 55px;
}
.first_about_second_content {
  width: calc(100% - 275px); /*180*/
  margin: 0 135px 0 60px;
}
.first_about_title p,
.first_about_content p,
.first_about_third_content p,
.first_about_second_content p {
  margin: 0;
  color: rgb(56, 56, 56);
  text-align: left;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: 0em;
  line-height: 24px;
}
.first_about_content p,
.first_about_second_content p,
.first_about_third_content p {
  color: rgb(138, 138, 138);
  font-size: 15px;
  font-weight: normal;
  line-height: 24px;
}
.first_about_third_content p {
  font-size: 14px;
}

.navbar {
  height: 60px;
  width: 100%;
  background-color: #007bff;
  border-bottom: 5px solid #ffffff;
  margin-top: -9px;
}

.navbar1 {
  height: 60px;
  width: 100%;
  background-color: white;
  border-bottom: 5px solid #ffffff;
  margin-top: 0px;
}

.navbar1 p {
  position: relative;
  display: inline-block;
  margin-left: 250px;
}

.navbar1 p::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: blue;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s;
}

.navbar1 p:hover::after {
  transform: scaleX(12);
}

.sidebar {
  width: 150px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0px;
  background-color: #201e1e;
}

.sidebar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.sidebar-item:last-child {
  border-bottom: none;
}

.sidebar-item img {
  width: 70px;
  max-width: 150px;
  height: 70px;
  margin-bottom: 10px;
}

.sidebar-item span {
  font-size: 14px;
  color: white;
}

.dropdown {
  margin-left: 85%;
}
.dropdown a {
  color: white;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.user-img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.dropbtn::after {
  content: '▼';
  padding-left: 5px;
  color: white;
}
</style>
