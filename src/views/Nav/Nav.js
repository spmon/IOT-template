import React from "react";
import './Nav.scss'
import { NavLink } from "react-router-dom";
import { GrDashboard } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { DatasetController } from "chart.js";
import { FaHistory, FaTable } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Dashboard<> </>
                    <MdDashboard/>
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Datasensor<> </>
                    <FaTable/>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    Action History<> </>
                    <FaHistory/>
                </NavLink>
                <NavLink to="/profile" activeClassName="active">
                    Profile<> </>
                    <CgProfile/>
                </NavLink>
            </div>
        );
    }
}

export default Nav;
