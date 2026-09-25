import { useState, type KeyboardEvent } from "react";
import type { User, UserInput } from "../types";
import { AGE_OPTIONS, btn, inputClass } from "./UI";

interface EditUserProps {
  user: User;
  onSave: (data: UserInput) => void;
  onCancel: () => void;
}

export default function UserEditRow({ user, onSave, onCancel }: EditUserProps) {
  const [form, setForm] = useState<UserInput>({ name: user.name, age: user.age, nickname: user.nickname });
  const canSave = form.name.trim() !== "" && form.nickname.trim() !== "";

  const save = () => {
    if (!canSave) return;
    onSave({ ...form, name: form.name.trim(), nickname: form.nickname.trim() });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") onCancel();
  };

  return (
    <tr className="divide-x divide-indigo-100 bg-indigo-50/60" onKeyDown={onKeyDown}>
      <td className="px-3 py-1.5">
        <input
          autoFocus
          aria-label="Name"
          placeholder="Name"
          className={`${inputClass} w-full`}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </td>
      <td className="px-3 py-1.5">
        <select
          aria-label="Age"
          className={`${inputClass} w-full`}
          value={form.age}
          onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
        >
          {AGE_OPTIONS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </td>
      <td className="px-3 py-1.5">
        <input
          aria-label="Nickname"
          placeholder="Nickname"
          className={`${inputClass} w-full`}
          value={form.nickname}
          onChange={(e) => setForm({ ...form, nickname: e.target.value })}
        />
      </td>
      <td className="px-3 py-1.5">
        <div className="flex gap-2">
          <button type="button" className={btn.primary} onClick={save} disabled={!canSave}>
            Save
          </button>
          <button type="button" className={btn.secondary} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}
