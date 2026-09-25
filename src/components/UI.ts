export const inputClass =
  "rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

const base =
  "rounded-md px-3 py-1.5 text-sm font-medium shadow-sm transition hover:shadow-md active:shadow-sm disabled:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-50";

export const btn = {
  primary: `${base} bg-indigo-600 text-white hover:bg-indigo-700`,
  secondary: `${base} border border-slate-300 bg-white text-slate-700 hover:bg-slate-50`,
  danger: `${base} border border-red-200 bg-white text-red-600 hover:bg-red-50`,
};

export const AGE_OPTIONS = Array.from({ length: 100 }, (_, i) => i + 1);
