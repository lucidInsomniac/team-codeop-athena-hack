import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import Dashboard from "./Dashboard"
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import NavBar from "./NavBar";
import Registration from "./Registration";


/***************************Test initial React Routes to Render correctly */
test("it should display Dashboard component", () => {
    render(
        <MemoryRouter>
            <Dashboard />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Dashboard');
})

test("it should display EditProfile component", () => {
    render(
        <MemoryRouter>
            <EditProfile />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Edit Profile');
    
})

test("it should display LandingPage component", () => {
    render(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Landing Page');
    
})

test("it should display Login component", () => {
    render(
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Login');
    
})

test("it should display NavBar component", () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('NavBar');
    
})

test("it should display ProfilePage component", () => {
    render(
        <MemoryRouter>
            <ProfilePage />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Profile Page');
    
})

test("it should display Registration component", () => {
    render(
        <MemoryRouter>
            <Registration />
        </MemoryRouter>
    );
    expect(document.body.textContent).toBe('Registration');
    
})