import type { User } from "../types";
import { btn } from "./UI";

interface  UserRowProps {
  user: User;
  disabled: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserRow({ user, disabled, onEdit, onDelete }:  UserRowProps) {
  return (
    <tr className="divide-x divide-slate-100 hover:bg-slate-50">
      <td className="px-3 py-2.5 font-medium text-slate-800">{user.name}</td>
      <td className="px-3 py-2.5 tabular-nums text-slate-600">{user.age}</td>
      <td className="px-3 py-2.5 text-slate-600">{user.nickname}</td>
      <td className="px-3 py-2.5">
        <div className="flex gap-2">
          <button type="button" className={btn.secondary} onClick={onEdit} disabled={disabled}>
            Edit
          </button>
          <button type="button" className={btn.danger} onClick={onDelete} disabled={disabled}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}