import Link from "next/link";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        <div className="header__builder">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* logo */}
              <div className="logo">
                <Link href="/" legacyBehavior>
                  <a>
                    <img
                      src="assets/images/logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
