import { Fragment } from "react";
const PreLoader = () => {
  return (
    <Fragment>
      {/* Preloader */}
      <div className="dark-skin preloader">
        <div className="dark-skin centrize full-width">
          <div className="dark-skin vertical-center">
            <div className="dark-skin spinner-logo">
              <img
                src="assets/images/logo.png"
                alt="Luique - Personal Portfolio HTML Template"
              />
              <div className="dark-skin spinner-dot" />
              <div className="dark-skin spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
