import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HomeIcon from "@mui/icons-material/Home";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SettingsIcon from "@mui/icons-material/Settings";

export function MenuListItems({ index, open }) {
  const menuItemsTop = [
    {
      label: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      label: "Orders",
      icon: <AddShoppingCartIcon />,
      link: "/orders",
    },
    {
      label: "Goods in",
      icon: <AddBusinessIcon />,
      link: "/goodsin",
    },
    {
      label: "Lines",
      icon: <AirlineSeatReclineNormalIcon />,
      link: "/lines",
    },
    {
      label: "Dispatch",
      icon: <AssignmentTurnedInIcon />,
      link: "/dispatch",
    },
  ];

  const menuItemLower = [
    { label: "Management", icon: <DisplaySettingsIcon />, link: "/management" },
    {
      label: "User Activities",
      icon: <VolunteerActivismIcon />,
      link: "/activities",
    },
    { label: "Settings", icon: <SettingsIcon />, link: "/settings" },
  ];

  return (
    <>
      <List>
        {menuItemsTop.map(({ label, icon, link }) => (
          <ListItem
            key={label}
            disablePadding
            sx={{
              display: "block",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              component={Link}
              href={link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItemLower.map(({ label, icon, link }) => (
          <ListItem
            key={label}
            disablePadding
            sx={{
              display: "block",
            }}
            component={Link}
            href={link}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}