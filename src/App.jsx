import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar'

function Home() { return <h2>Home Page</h2>; }
function Test() { return <h2>Test Page</h2>; }
function History() { return <h2>History Page</h2>; }
function Analytics() { return <h2>Analytics Page</h2>; }
function Profile() { return <h2>Profile Page</h2>; }


function App() {

  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-200">
        <SideBar />
      </div>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/history" element={<History />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
