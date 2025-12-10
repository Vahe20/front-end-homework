import { useEffect, useState } from 'react';
import type { UserType } from './types/UserType.ts';
import { FilterBar } from './Components/FilterBar.tsx';
import { UsersList } from './Components/Userslist.tsx';
import './App.css';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const loadUsers = (gender?: string) => {
    const url = gender
      ? `https://randomuser.me/api/?results=10&gender=${gender}`
      : `https://randomuser.me/api/?results=10`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <FilterBar loadUsers={loadUsers}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
