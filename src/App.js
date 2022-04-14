import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// GENERAL
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";

// ADMIN
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import EmployeePreview from "./pages/EmployeePreviewPage/EmployeePreviewPage";
import EditEmployeePage from "./pages/EditEmployeePage/EditEmployeePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

// DOCTOR
import DoctorHomepage from "./pages/DoctorHomepage/DoctorHomepage";
import PatientPreview from "./pages/PatientPreviewPage/PatientPreviewPage";
import EditPatientPage from "./pages/EditPatientPage/EditPatientPage";
import PatientExamination from "./pages/PatientExaminationPage/PatientExaminationPage";

// NURSE
import NurseHomepage from "./pages/NurseHomepage/NurseHomepage";
import PatientPreviewNurses from "./pages/PatientPreviewPageNurses/PatientPreviewPageNurses";
import RegistrationPatientPage from "./pages/RegistrationPatientPage/RegistrationPatientPage";
import ScheduleAppointmentPage from "./pages/ScheduleAppointmentPage/ScheduleAppointmentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* DEMO */}
        <Route path="/demo-page" exact element={<DemoPage />} />

        {/* GENERAL */}
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} />

        {/* DOCTOR ROUTES */}
        <Route path="/" exact element={<DoctorHomepage />} />
        <Route path="/examination/:id" exact element={<PatientExamination />} />
        <Route path="/patient-preview" exact element={<PatientPreview />} />

        {/* NURSE ROUTES */}
        <Route path="/nurse" exact element={<NurseHomepage />} />
        <Route
          path="/nurse/patient-preview"
          exact
          element={<PatientPreviewNurses />}
        />
        <Route
          path="/nurse/schedule-appointment"
          exact
          element={<ScheduleAppointmentPage />}
        />
        <Route
          path="/nurse/register-patient"
          exact
          element={<RegistrationPatientPage />}
        />
        <Route
          path="/nurse/edit-patient/:lbp"
          exact
          element={<EditPatientPage />}
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin" exact element={<AdminHomepage />} />
        <Route
          path="/admin/employee-preview"
          exact
          element={<EmployeePreview />}
        />
        <Route
          path="/admin/register-employee"
          exact
          element={<RegistrationPage />}
        />
        <Route
          path="/admin/edit-employee/:lbz"
          exact
          element={<EditEmployeePage />}
        />
        <Route path="/edit-patient/:lbp" exact element={<EditPatientPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
