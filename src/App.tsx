import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Inbox } from './pages/Inbox';
import { Chat } from './pages/Chat';
import { Agents } from './pages/Agents';
import { Todos } from './pages/Todos';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Settings } from './pages/Settings';
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={
            localStorage.getItem('token') ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/agents" element={<Agents />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          } />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
