import { useState } from 'react';

export function Settings() {
  const [name, setName] = useState('用户');
  const [email, setEmail] = useState('user@example.com');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现设置更新API调用
    alert('设置已保存');
  };

  return (
    <div className="bg-gray-1 p-4">
      <h1 className="text-2xl font-bold mb-6">账户设置</h1>

      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            用户名
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            邮箱
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            旧密码
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            新密码
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          保存设置
        </button>
      </form>
    </div>
  );
}
