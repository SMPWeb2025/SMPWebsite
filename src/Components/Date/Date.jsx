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
                        Results of JEE Advanced (2026)
                      </td>
                      <td className="dateDates">1st June 2026</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Start of JoSAA registration/choice filling</td>
                      <td className="dateDates">2nd June 2026</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Tentative Start of Seat Allotment</td>
                      <td className="dateDates">13th June 2026</td> 
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Hostel Check-in for students</td>
                      <td className="dateDates">
                        20th July 2026 (Monday), 09:00 am onwards
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Reporting Date (for IITB)</td>
                      <td className="dateDates">20th July 2026</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Orientation reporting (for IITB)</td>
                      <td className="dateDates">21st July 2026, 08:30 AM</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Orientation week (for IITB)</td>
                      <td className="dateDates">
                        21st July 2026 (Tuesday) to 25th July, 2026 (Saturday)
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent">Instructions Begin (for IITB)</td>
                      <td className="dateDates">27th July 2026</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="pt-4">Sources</h3>
                <ul className="section-ul-list">
                  <li>
                    <a className="hover-underline text-blue-600" href="https://jeeadv.ac.in/">
                      JEE Advanced Website
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover-underline text-blue-600"
                      href="https://acad.iitb.ac.in/sites/default/files/Academic_Calendar_2026-27_FINAL.pdf"
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
