import { useState } from "react";
import "./dashboard.scss";
import { AppShell, Navbar, Header } from "@mantine/core";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard-component">
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {/* Navbar content */}
            <button
              className="mantine-UnstyledButton-root mantine-1fexinv"
              type="button"
            >
              <div className="mantine-Group-root mantine-1drzaq">
                <div className="mantine-ThemeIcon-root mantine-Group-child mantine-1eilc5s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-git-pull-request"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <desc>
                      Download more icon variants from
                      https://tabler-icons.io/i/git-pull-request
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="18" r="2"></circle>
                    <circle cx="6" cy="6" r="2"></circle>
                    <circle cx="18" cy="18" r="2"></circle>
                    <line x1="6" y1="8" x2="6" y2="16"></line>
                    <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                    <polyline points="14 9 11 6 14 3"></polyline>
                  </svg>
                </div>
                <div className="mantine-Text-root mantine-Group-child mantine-1nfksz">
                  Pull Requests
                </div>
              </div>
            </button>
            <button
              className="mantine-UnstyledButton-root mantine-1fexinv"
              type="button"
            >
              <div className="mantine-Group-root mantine-1drzaq">
                <div className="mantine-ThemeIcon-root mantine-Group-child mantine-9fkv7d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-alert-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <desc>
                      Download more icon variants from
                      https://tabler-icons.io/i/alert-circle
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div className="mantine-Text-root mantine-Group-child mantine-1nfksz">
                  Open Issues
                </div>
              </div>
            </button>
            <button
              className="mantine-UnstyledButton-root mantine-1fexinv"
              type="button"
            >
              <div className="mantine-Group-root mantine-1drzaq">
                <div className="mantine-ThemeIcon-root mantine-Group-child mantine-15fnrzu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-messages"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <desc>
                      Download more icon variants from
                      https://tabler-icons.io/i/messages
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                  </svg>
                </div>
                <div className="mantine-Text-root mantine-Group-child mantine-1nfksz">
                  Discussions
                </div>
              </div>
            </button>
            <button
              className="mantine-UnstyledButton-root mantine-1fexinv"
              type="button"
            >
              <div className="mantine-Group-root mantine-1drzaq">
                <div className="mantine-ThemeIcon-root mantine-Group-child mantine-1szkdgb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-database"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <desc>
                      Download more icon variants from
                      https://tabler-icons.io/i/database
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                    <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                    <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                  </svg>
                </div>
                <div className="mantine-Text-root mantine-Group-child mantine-1nfksz">
                  Databases
                </div>
              </div>
            </button>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {/* Your application here */}
      </AppShell>
    </div>
  );
}

export default Dashboard;
