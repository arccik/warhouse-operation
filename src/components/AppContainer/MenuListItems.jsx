import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import PublishIcon from "@mui/icons-material/Publish";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

export function MenuListItems({ index, open }) {
  const menuItemsTop = [
    {
      label: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      label: "Import Data",
      icon: <PublishIcon />,
      link: "/import-data",
    },
    {
      label: "Inventory",
      icon: <InventoryIcon />,
      link: "/inventory",
    },

    {
      label: "Scan Products",
      icon: <QrCodeScannerIcon />,
      link: "/add/items",
    },
  ];

  const menuItemLower = [
    {
      label: "User Management",
      icon: <DisplaySettingsIcon />,
      link: "/user-management",
    },

    {
      label: "Sign Out",
      icon: <Logout sx={{ color: "red" }} />,
      link: "/api/auth/signout",
    },
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
              bottom: 0,
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
