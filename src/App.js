import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"; //useProSidebar is a hook that lets us access and manage sidebar state
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    //The component should take a full window height and use flexbox
    <div id="app" style={({ height: "100vh" }, { display: "flex"})}>
      {/* Adding a sidebar component that wraps a Menu component and a handful of other MenuItem components imported from react-pro-sidebar*/}
      <Sidebar style={{ height: "100vh" }}> {/* a height of 100vh to the sidebar so that it takes up the full height of the screen*/}
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon/>}
            onClick={() => { //adding the onclick event that fires the collapseSidebar hook with help of useSidebar hook that helps us implement the collapse functionality.
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}>
              {" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default App;
