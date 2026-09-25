import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { User, UserInput } from "./types";
import AddUser from "./components/AddUser";
import UserRow from "./components/UserRow";
import { btn } from "./components/UI";
import UserEditRow from "./components/EditUser";
import { MOCK_USERS } from "./mockUsers";

const STORAGE_KEY = "users";

function App() {
  const [users, setUsers] = useLocalStorage<User[]>(STORAGE_KEY, MOCK_USERS);
  const [editId, setEditId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const busy = isAdding || editId !== null;

  const addUser = (data: UserInput) => {
    setUsers((prev) => [
      ...prev,
      { ...data, id: Math.max(0, ...prev.map((u) => u.id)) + 1 },
    ]);
    setIsAdding(false);
  };

  const updateUser = (id: number, data: UserInput) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...data } : u)));
    setEditId(null);
  };

  const deleteUser = (user: User) => {
    if (!confirm(`Delete ${user.name}?`)) return;
    setUsers((prev) => prev.filter((u) => u.id !== user.id));
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-3xl">
        
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
               <tr className="divide-x divide-slate-200">
                <th className="px-3 py-2.5 font-medium">Name</th>
                <th className="w-28 px-3 py-2.5 font-medium">Age</th>
                <th className="px-3 py-2.5 font-medium">Nickname</th>
                <th className="w-44 px-3 py-2.5 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-3 py-10 text-center text-slate-500"
                  >
                    No users yet. Click “Add” to create the first one.
                  </td>
                </tr>
              )}

              {users.map((user) =>
                user.id === editId ? (
                  <UserEditRow
                    key={user.id}
                    user={user}
                    onSave={(data) => updateUser(user.id, data)}
                    onCancel={() => setEditId(null)}
                  />
                ) : (
                  <UserRow
                    key={user.id}
                    user={user}
                    disabled={busy}
                    onEdit={() => setEditId(user.id)}
                    onDelete={() => deleteUser(user)}
                  />
                ),
              )}
            </tbody>
          </table>
        </div>

        {isAdding && (
          <AddUser onSave={addUser} onCancel={() => setIsAdding(false)} />
        )}

        <button
          type="button"
          className={`${btn.primary} mt-4 block`}
          onClick={() => setIsAdding(true)}
          disabled={busy}
        >
          Add
        </button>
      </div>
    </main>
  );
}

export default App;
