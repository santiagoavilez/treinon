import UserButton from "./UserButton";


export default function Header() {
    return (
        <header className="flex w-full justify-between p-4 sticky">
            <h1>My App</h1>
            <UserButton />
        </header>
    );
}