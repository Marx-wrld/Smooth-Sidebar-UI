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
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    const toggle = () => {
      toggleSidebar();
      if (toggled) {
        console.log(true);
        collapseSidebar();
      } else {
        console.log(false);
        collapseSidebar();
      }
    };
  return (
    //The component should take a full window height and use flexbox
    <div id="app" style={({ 
      //adding flex direction row-reverse here
      height: "100vh" }, 
      { display: "flex", 
      flexDirection: "row"}
      )}>
      {/* Adding a sidebar component that wraps a Menu component and a handful of other MenuItem components imported from react-pro-sidebar*/}
      <Sidebar 
      breakPoint='sm' //for small screen
      //Adding a transition of 800ms so that it makes it a bit slower
      transitionDuration={800}
      //Adding the style to change the background color
      backgroundColor="rgb(0, 249, 249, 0.7)"
      rtl={false}
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
          <h1 
          onClick={() => {
            toggle(); //Logs true or false to the console depending on whether the sidebar is toggled or not
          }}
          style={
            { color: "white",
             marginLeft: "5rem"}
             }>
            Smooth Pro-Sidebar
          </h1>
          { toggled ? (
            <h3 style={{ color: "white", marginLeft: "5rem"}}>Toggled</h3>
          ) : (
            <h3 style={{ color: "white", marginLeft: "5rem"}}>Not Toggled</h3>
          )}
          {broken && (
            //small screen text that appears only when the screen is smaller
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
          )}
        </main>
    </div>
  );
}

export default App;
