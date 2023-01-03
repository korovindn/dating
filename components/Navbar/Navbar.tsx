import { MenuItem } from './MenuItem';
import { menuItems } from './routes';
import classes from './Navbar.module.css'

export const Navbar: React.FC = () => {
    return (
        <nav className={classes.navbar}>
            {menuItems.map(item => <MenuItem {...item} />)}
        </nav>
    )
}