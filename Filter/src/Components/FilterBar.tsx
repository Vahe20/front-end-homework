export const FilterBar = ({ loadUsers }: { loadUsers: (gender?: string) => void }) => {
    return (
        <div>
            <button onClick={() => loadUsers()}>All</button>
            <button onClick={() => loadUsers("male")}>Male</button>
            <button onClick={() => loadUsers("female")}>Female</button>
        </div>
    );
};
