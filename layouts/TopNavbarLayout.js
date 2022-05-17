import Header from '../components/Header/Header'

function TopNavbarLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default TopNavbarLayout
