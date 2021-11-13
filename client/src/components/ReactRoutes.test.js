<<<<<<< HEAD
<<<<<<< HEAD
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import Dashboard from "./Dashboard"
||||||| parent of 94bf299 (moodFormSol)
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import CalendarSummary from "./CalendarSummary"
=======
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CalendarSummary from "./CalendarSummary";
>>>>>>> 94bf299 (moodFormSol)
||||||| deebd90
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import CalendarSummary from "./CalendarSummary"
=======
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CalendarSummary from "./CalendarSummary";
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import NavBar from "./NavBar";
import Registration from "./Registration";
import MoodForm from "./MoodForm";

/***************************Test initial React Routes to Render correctly */
<<<<<<< HEAD
<<<<<<< HEAD
test("it should display Dashboard component", () => {
    render(
        <MemoryRouter>
            <Dashboard />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Dashboard');
})
||||||| parent of 94bf299 (moodFormSol)
test("it should display CalendarSummary component", () => {
    render(
        <MemoryRouter>
            <CalendarSummary />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Calendar Summary');
})
=======
test("it should display CalendarSummary component", () => {
  render(
    <MemoryRouter>
      <CalendarSummary />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Calendar Summary");
});
>>>>>>> 94bf299 (moodFormSol)

test("it should display EditProfile component", () => {
  render(
    <MemoryRouter>
      <EditProfile />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Edit Profile");
});
||||||| deebd90
test("it should display CalendarSummary component", () => {
    render(
        <MemoryRouter>
            <CalendarSummary />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Calendar Summary');
})

test("it should display EditProfile component", () => {
    render(
        <MemoryRouter>
            <EditProfile />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Edit Profile');
    
})
=======
test("it should display CalendarSummary component", () => {
  render(
    <MemoryRouter>
      <CalendarSummary />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Calendar Summary");
});

test("it should display EditProfile component", () => {
  render(
    <MemoryRouter>
      <EditProfile />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Edit Profile");
});
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

test("it should display LandingPage component", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Landing Page");
});

test("it should display Login component", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Login");
});

test("it should display NavBar component", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("NavBar");
});

test("it should display ProfilePage component", () => {
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Profile Page");
});

test("it should display Registration component", () => {
  render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Registration");
});

test("it should display MoodForm component", () => {
  render(
    <MemoryRouter>
      <MoodForm />
    </MemoryRouter>
  );
  expect(document.body.textContent).toBe("Mood Form");
});
