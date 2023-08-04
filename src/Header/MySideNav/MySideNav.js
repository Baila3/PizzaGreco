import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './MySideNav.css';

function MySideNav() {
    return ( <SideNav id="sdb"
    onSelect={selected => {
        console.log(selected)
    }}
    >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home"  >
        <NavItem eventKey="Entrées">
            <NavIcon>
            <i class="fa-solid fa-drumstick-bite" style={{fontsize: "1.5em" }}></i>
            </NavIcon>
            <NavText>Entrées</NavText>
        </NavItem>
        <NavItem eventKey="Pizzas">
            <NavIcon>
            <i class="fa-solid fa-pizza-slice" style={{fonsize: "1.5em"}}></i>
            </NavIcon>
            <NavText>Pizzas</NavText>
        </NavItem>
        <NavItem eventKey="Casse-Croûte">
            <NavIcon>
                <i class="fa-solid fa-burger" style={{fontsize: "1.5em" }}></i>
            </NavIcon>
            <NavText>Casse-Croûte</NavText>
        </NavItem>
        <NavItem eventKey="Repas">
            <NavIcon>
            <i class="fa-solid fa-utensils" style={{fontsize: "1.5em" }}></i>
            </NavIcon>
            <NavText>Repas</NavText>
        </NavItem>
    
     </SideNav.Nav>
    </SideNav>
)}

export default MySideNav;