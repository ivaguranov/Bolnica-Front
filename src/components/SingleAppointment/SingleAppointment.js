import "./styles.css";
import { format } from "date-fns";
import { updateAppointment } from "../../redux/actions/appointments";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SingleAppointment = ({ appointment }) => {
  const dispatch = useDispatch();
  const { datumIVremePregleda, pacijent, zakazaniPregledId } = appointment;

  let age = format(new Date(), "yyyy") - format(pacijent.datumRodjenja, "yyyy");
  let appointTime = format(new Date(datumIVremePregleda), "HH:mm");
  let appointDate = format(new Date(datumIVremePregleda), "dd:MM:yyyy");

  const navigate = useNavigate();

  function updateAppointmentStatus(lbp, data) {
    dispatch(
      updateAppointment({
        appointmentId: zakazaniPregledId,
        appointmentStatus: data,
      })
    );
    navigate(`examination/${lbp}`);
  }

  return (
    <div
      key={zakazaniPregledId}
      className={` ${
        appointment.statusPregleda === "U_TOKU" ? "isCurrently" : null
      }`}
      onClick={() => updateAppointmentStatus(pacijent.lbp, "U_TOKU")}
    >
      <div className="d-flex flex-row align-items-center ">
        <div className="appTime">
          {appointTime} {appointDate}
        </div>
        <div className="customContainer">
          <div className="d-flex flex-row justify-content-around appointment">
            <span className="text-dark text1">
              {pacijent.ime} {pacijent.prezime}
            </span>
            <span className="text2">
              Starost: {age}, Pol: {pacijent.pol}
            </span>
            <div
              className={`badge flex-row text-white appointmentStatus ${
                appointment.statusPregleda === "ZAKAZANO" ||
                appointment.statusPregleda === "CEKA"
                  ? "isAppointed"
                  : appointment.statusPregleda === "OTKAZANO"
                  ? "isCanceled"
                  : appointment.statusPregleda === "ZAKAZANO"
                  ? "isFinished"
                  : null
              }`}
            >
              {appointment.statusPregleda}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
