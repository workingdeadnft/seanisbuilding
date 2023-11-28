import Link from "next/link";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className="dark-skin header">
        <div className="dark-skin header__builder">
          <div className="dark-skin row">
            <div className="dark-skin col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* logo */}
              <div className="dark-skin logo">
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
