import React from 'react';
import PropTypes from 'prop-types';
// import GitHubButton from "react-github-button";
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';
// import BANNER_LOGO from './blue-breaking-news.jpg';


function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img alt="banner" src={BANNER_LOGO} width="70%" />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? 'bottom' : 'right'}
      >
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">Welcome to Hacker News</h1>
        <p key="content">Latest New Updates</p>
        <div key="button" className="button-wrapper">
          <a
            href="http://preview.pro.ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">Login</Button>
          </a>
          <Button style={{ margin: '0 16px' }} type="primary" ghost>
            Get Started
          </Button>
          {/* <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          /> */}
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
          {/* <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <div className="home-banner-image">
              <img alt="banner" src={BANNER_LOGO} width="70%" />
            </div>
          </TweenOne> */}
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
