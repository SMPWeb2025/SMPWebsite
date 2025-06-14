import "./date.css";

function Date() {
  return (
    <div className="datesmp bg-blue-200">
      <div className="dateContainer my-2">
        <div className="col-md-12 dateTitle py-3">
          <h1>Important Dates</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-content">
                <table className="section-table">
                  <tbody>
                    <tr className="dateItem">
                      <td className="dateEvent">
                        Results of JEE Advanced (2025)
                      </td>
                      <td className="dateDates">2nd June 2025</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Tentative Start of Seat Allotment</td>
                      <td className="dateDates">Oct 27 - Nov 20, 2021</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Start of JoSAA registration/choice filling</td>
                      <td className="dateDates">3rd June 2025</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Hostel Check-in for students</td>
                      <td className="dateDates">
                        29th July, 2023(saturday), 10:00 AM onwards
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Reporting Date (for IITB)</td>
                      <td className="dateDates">21st July 2025</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Orientation reporting (for IITB)</td>
                      <td className="dateDates">21st July 2025, 08:30 AM</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Orientation week (for IITB)</td>
                      <td className="dateDates">
                        21st July 2025 (Monday) to 25th July, 2025 (Friday)
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Instructions Begins (for IITB)</td>
                      <td className="dateDates">28th July 2025</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="pt-4">Sources</h3>
                <ul className="section-ul-list">
                  <li>
                    <a className="link" href="https://jeeadv.ac.in/">
                      JEE Advanced Website
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      href="https://acad.iitb.ac.in/files/Academic%20Calendar%202025-26_FINAL.pdf"
                    >
                      IITB Academic Calendar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;
