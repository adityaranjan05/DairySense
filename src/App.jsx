// import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NewTest from "./pages/NewTest";
import SampleUpload from "./pages/SampleUpload";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";

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
