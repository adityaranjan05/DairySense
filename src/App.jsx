// import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NewTest from "./pages/NewTest";
import SampleUpload from "./pages/SampleUpload";

function History() { return <h2>History Page</h2>; }
function Analytics() { return <h2>Analytics Page</h2>; }
function Profile() { return <h2>Profile Page</h2>; }


function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<NewTest />} />
        <Route path="/test/upload" element={<SampleUpload />} />
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppLayout>
  )
}

export default App
