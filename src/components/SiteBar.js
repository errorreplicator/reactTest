import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

function SiteBar() {
  return (
    <div style={{ display: "flex", height: "100vh"}}>
      <Sidebar>
            <Menu>
                <MenuItem icon={<CurrencyBitcoinIcon />} className="menu1">
                <h3>CryptoMIL</h3>
                </MenuItem>
                <MenuItem icon={<DashboardIcon />} component={<Link to="/documentation" />}> Dashboard</MenuItem>
                <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
                <SubMenu label="Wallets">
                    <MenuItem>Current Wallet</MenuItem>
                    <MenuItem>Savings Wallet</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default SiteBar
