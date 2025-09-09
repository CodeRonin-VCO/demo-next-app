import NavBar from "../nav-bar/nav-bar";

export default function Header() {
    
    return (
        <>
            <header className="bg-emerald-600 text-amber-50 w-full flex flex-row h-10 items-center p-2 gap-2">
                <span>FE2024@DigitalCity</span>
                <div className="grow">
                    <NavBar />
                </div>
            </header>
        </>
    )
}