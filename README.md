# User CRUD (React + TypeScript + Tailwind)

Single page app to add, inline-edit and delete users (Name, Age, Nickname).
Data is stored in the browser's `localStorage` — no backend.


## Structure

src/
  App.tsx                  # state + CRUD handlers
  types.ts                 # User type
  mockUsers.ts             # mock user
  hooks/useLocalStorage.ts # state synced to localStorage
  components/
    AddUser.tsx            #  add row 
    EditUser.tsx           #  edit row 
    UserRow.tsx            # read-only row ( Delete)
    ui.ts                  # shared Tailwind class strings