import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@mui/material';

import Cloud from '@mui/icons-material/Cloud';

export default function LeftMenu() {
  return (
    <Paper sx={{ width: 340, maxWidth: '100%' }}>
      <MenuList>

        <MenuItem component={Link} href="/">
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>

        <MenuItem component={Link} href='/charts/'>
     
          <ListItemIcon>
            <CurrencyBitcoinIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Charts </ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
    
        </MenuItem>

        <MenuItem component={Link} href='/heatmap/'>
     
          <ListItemIcon>
            <LocalFireDepartmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>HeatMap </ListItemText>
        </MenuItem>

        <MenuItem component={Link} href='/backend/'>
          <ListItemIcon>
            <AlignHorizontalCenterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Backend</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem >
        <Divider />
        <MenuItem component={Link} href='/bybitapi/'>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bybit Axios</ListItemText>
        </MenuItem>

        <MenuItem component={Link} href='/coingeckoapi/'>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>CoinGecko Axios</ListItemText>
        </MenuItem>
        <Divider />

        <MenuItem component={Link} href='/test/'>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Flask test</ListItemText>
        </MenuItem>

      

        <MenuItem component={Link} href='/testapi/'>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Template Axios</ListItemText>
        </MenuItem>

      </MenuList>
    </Paper>
  );
}