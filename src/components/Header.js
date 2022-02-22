import MenuButton from './MenuButton';
import NavMain from './NavMain';

function Header() {
    return (
        <header>
            <h1><a href="#0">Scharbach News</a></h1>
            <NavMain />
            <MenuButton />
        </header>
    )
}

export default Header;