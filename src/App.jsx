// import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";

function Test() { return <h2>Test Page</h2>; }
function History() { return <h2>History Page</h2>; }
function Analytics() { return <h2>Analytics Page</h2>; }
function Profile() { return <h2>Profile Page</h2>; }


function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppLayout>
  )
}

export default App
