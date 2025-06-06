import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    // TODO: 实现注册API调用
    localStorage.setItem('token', 'fake-jwt-token');
    navigate('/dashboard');
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo100 px-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">创建账户</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">邮箱</label>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="aioffice@example.com"
                  required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">密码</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="请输入密码"
                  required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">确认密码</label>
              <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="请再次输入密码"
                  required
              />
            </div>

            <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-md"
            >
              注册
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            已有账号？{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              立即登录
            </Link>
          </p>
        </div>
      </div>

  );
}
