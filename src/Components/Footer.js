export const Footer = () => {
  return (
    <footer id="wb7" className="footer">
    <div className="container">
      <div className=" text-center">
        <h2 className="section-title" style={{ color: '#c3152c' }}>
          Where to find us
        </h2>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info ">
            <div className="contact-info-box">
              <i className="fa fa-map-marker" style={{ color: '#c3152c' }}>
                &nbsp;
              </i>
              <div className="contact-info-box-content">
                <h4 style={{ color: '#fff !important' }}>Address: </h4>
                <p>Azad Hind Fauz Marg, Sector-3,Dwarka, New Delhi-110078</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info ">
            <div className="contact-info-box ">
              <i className="fa fa-envelope-o" style={{ color: '#c3152c' }}>
                &nbsp;
              </i>
              <div className="contact-info-box-content">
                <h4 style={{ color: '#fff !important' }}>Email: </h4>
                <p>debsoc.nsut@gmail.com</p>
                <p className="colmail">colloquium.nsut@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info-box ">
            <i className="fa fa-phone" style={{ color: '#c3152c' }}>
              &nbsp;
            </i>
            <div className="contact-info-box-content">
              <h4 style={{ color: '#fff !important' }}>Phone: </h4>
              <p>Arjun Singh: +91-8979254865</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <div id="contact-social" className="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/DebSocNSUT/">
                  <i className="fa fa-facebook btn2" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/">
                  <i className="fa fa-linkedin btn2" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/debsocnsut/">
                  <i className="fa fa-instagram btn2" />
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-info">
            <span>Copyright © 2022 DebSoc NSUT. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}