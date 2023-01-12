import {
  Navbar,
  Link as Nextlink,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import SwitchComponent from "../components/Switch/Switch.js";
import { useTheme as useNextTheme } from "@nextui-org/react";
import { FaMoon, FaServer, FaSun } from "react-icons/fa";
import Link from "next/link";
import { icons } from "./Icons.js";

export function DropDownComponent() {
  return (
    <>
      <Dropdown isBordered>
        <Navbar.Item>
          <Dropdown.Button flat nonce="true" css={{
            p:0,
            width:"10px"
          }} icon={icons.chevron}>
            Features
          </Dropdown.Button>
        </Navbar.Item>
        <Dropdown.Menu
          aria-label="ACME features"
          css={{
            $$dropdownMenuWidth: "340px",
            $$dropdownItemHeight: "70px",
            "& .nextui-dropdown-item": {
              py: "$4",
              // dropdown item left icon
              svg: {
                color: "$secondary",
                mr: "$4",
              },
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
          }}
        >
          <Dropdown.Item
            key="autoscaling"
            showFullDescription
            description="ACME scales apps to meet user demand, automagically, based on load."
            icon={icons.scale}
          >
            Autoscaling
          </Dropdown.Item>
          <Dropdown.Item
            key="usage_metrics"
            showFullDescription
            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            icon={icons.activity}
          >
            Usage Metrics
          </Dropdown.Item>
          <Dropdown.Item
            key="production_ready"
            showFullDescription
            description="ACME runs on ACME, join us and others serving requests at web scale."
            icon={icons.flash}
          >
            Production Ready
          </Dropdown.Item>
          <Dropdown.Item
            key="99_uptime"
            showFullDescription
            description="Applications stay on the grid with high availability and high uptime guarantees."
            icon={icons.server}
          >
            +99% Uptime
          </Dropdown.Item>
          <Dropdown.Item
            key="supreme_support"
            showFullDescription
            description="Overcome any challenge with a supporting team ready to respond."
            icon={icons.user}
          >
            +Supreme Support
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default function NavbarComponent() {
  const { theme, isDark } = useNextTheme();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const mainNavigation = [
    { content: "Home", navigationTo: "/", active: true },
    { content: "About", navigationTo: "/About", active: false },
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky" hideIn="xs">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <DropDownComponent />
          {mainNavigation &&
            mainNavigation.map((item) => {
              return (
                <Link href={item.navigationTo}>
                  <Navbar>{item.content}</Navbar>
                </Link>
              );
            })}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="theme">
                <div className="flex">
                  {isDark ? (
                    <span>
                      <FaMoon style={{ display: "inline-block" }} /> Dark theme
                    </span>
                  ) : (
                    <span>
                      <FaSun style={{ display: "inline-block" }} /> Light Theme
                    </span>
                  )}
                </div>
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <SwitchComponent />
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
