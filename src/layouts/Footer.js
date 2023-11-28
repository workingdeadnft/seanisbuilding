const Footer = () => {
  return (
    <div className="dark-skin footer">
      <div className="dark-skin footer__builder">
        <div className="dark-skin container">
          <div className="dark-skin row">
            <div className="dark-skin col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="dark-skin social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="http://twitter.com/seanworkingdead">
                  <i aria-hidden="true" className="dark-skin fab fa-twitter" />
                </a>
              </div>
            </div>
            <div className="dark-skin col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="dark-skin copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2023 <strong>Worked</strong>. All rights reserved
              </div>
            </div>
            <div className="dark-skin col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="dark-skin copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>worked.dev</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
