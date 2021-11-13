import React from "react";
import CalendarSummary from "./CalendarSummary";
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import MoodForm from "./MoodForm";

const ReactRoutes = () => {
  return (
    <div className="react-routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/calendar" element={<CalendarSummary />} />

        <Route path="/moodform" element={<MoodForm />} />
      </Routes>
    </div>
  );
};

export default ReactRoutes;
