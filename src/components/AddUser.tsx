import { useState, type FormEvent, type KeyboardEvent } from "react";
import type { UserInput } from "../types";
import { btn, inputClass, AGE_OPTIONS } from "./UI";

interface  AddUserProps {
  initial?: UserInput;
  onSave: (data: UserInput) => void;
  onCancel: () => void;
}

const EMPTY: UserInput = { name: "", age: 10, nickname: "" };

export default function AddUser({ initial = EMPTY, onSave, onCancel }:  AddUserProps) {
  const [form, setForm] = useState<UserInput>(initial);
  const canSave = form.name.trim() !== "" && form.nickname.trim() !== "";
  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!canSave) return;
    onSave({ ...form, name: form.name.trim(), nickname: form.nickname.trim() });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onCancel();
  };

  return (
    <form className="mt-4 flex flex-wrap items-center gap-2" onSubmit={save} onKeyDown={onKeyDown}>
      <input
        autoFocus
        aria-label="Name"
        placeholder="Name"
        className={`${inputClass} w-40 flex-1`}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <select
        aria-label="Age"
        className={`${inputClass} w-20`}
        value={form.age}
        onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
      >
        {AGE_OPTIONS.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
      <input
        aria-label="Nickname"
        placeholder="Nickname"
        className={`${inputClass} w-36 flex-1`}
        value={form.nickname}
        onChange={(e) => setForm({ ...form, nickname: e.target.value })}
      />
      <button type="submit" className={btn.primary} disabled={!canSave}>
        Save
      </button>
      <button type="button" className={btn.secondary} onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
