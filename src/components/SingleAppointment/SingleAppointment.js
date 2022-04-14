import "./styles.css";
import { format } from "date-fns";
import { updateAppointment } from "../../redux/actions/appointments";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SingleAppointment = ({ patient }) => {
  const { lbp, ime, prezime, datumRodjenja, pol } = patient;
  const time = 50656565;
  const appointmentStatus = "Ceka";
  let age = format(new Date(), "yyyy") - format(datumRodjenja, "yyyy");
  let appointTime = format(new Date(time), "HH:mm");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function updateAppointmentStatus(lbp, data) {
    // dispatch(updateAppointment(lbp, data));
    navigate(`examination/${lbp}`);
  }
  return (
    <div
      key={`prop-${lbp}`}
      className={` ${appointmentStatus === "Trenutno" ? "isCurrently" : null}`}
      onClick={() => updateAppointmentStatus(lbp, "Trenutno")}
    >
      <div className="d-flex flex-row align-items-center ">
        <div className="appTime">
          <span>{appointTime}</span>
        </div>
        <div className="customContainer">
          <div className="d-flex flex-row justify-content-around appointment">
            <span className="text-dark text1">
              {ime} {prezime}
            </span>
            <span className="text2">
              {age} {pol}
            </span>
            <div
              className={`badge flex-row text-white appointmentStatus ${
                appointmentStatus === "Zakazano" || appointmentStatus === "Ceka"
                  ? "isAppointed"
                  : appointmentStatus === "Otkazano"
                  ? "isCanceled"
                  : appointmentStatus === "Zavrseno"
                  ? "isFinished"
                  : null
              }`}
            >
              {appointmentStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
