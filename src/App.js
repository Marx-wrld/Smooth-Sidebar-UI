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
  //importing the rtl prop in the useProSidebar hook along with the collapseSidebar prop to enable us reverse the sidebar direction.
  const { collapseSidebar, rtl } = useProSidebar();
  return (
    //The component should take a full window height and use flexbox
    <div id="app" style={({ 
      //adding flex direction row-reverse here
      height: "100vh" }, 
      { display: "flex", flexDirection: "row-reverse"}
      )}>
      {/* Adding a sidebar component that wraps a Menu component and a handful of other MenuItem components imported from react-pro-sidebar*/}
      <Sidebar rtl={true}
      //Adding rtl={true} which is false by default
      style={
        { height: "100vh" }
        }> {/* a height of 100vh to the sidebar so that it takes up the full height of the screen*/}
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon/>}
            onClick={() => { //adding the onclick event that fires the collapseSidebar hook with help of useSidebar hook that helps us implement the collapse functionality.
              collapseSidebar();
            }}
            style={
              { textAlign: "center" }}
              >
              {" "}
            <h2>Admin</h2>
          </MenuItem>
          {/*Adding the remaining MenuItems inside the Menu wrapper*/}
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQs</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      {/* Adding a flex title for our sidebar*/}
       <main>
          <h1 style={{ color: "white", marginLeft: "5rem"}}>
            Smooth Pro-Sidebar
          </h1>
        </main>
    </div>
  );
}

export default App;
