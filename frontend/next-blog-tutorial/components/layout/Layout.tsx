import Navigation from "./Navigation"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
                {children}
            </main>
            <footer className="flex items-center justify-center w-full h-20 text-sm border-t">
                @2022 NextJS Startup
            </footer>
        </div>
    );
}

export default Layout;