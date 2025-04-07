import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Button,
  Range,
  Block,
  f7,
  Popup,
} from "framework7-react";
import Layout from "@/layout/layout";
import HomeNavbar from "@/components/Home/HomeNavbar";
import { getDevice } from "framework7";
import { useState, useMemo, useEffect } from "react";

const ActivityPage = () => {
  const navigate = (path: string) => f7.tab.show(path);

  const handleLogout = () => {
    f7.popup.close("#logoutConfirm");
    navigate("#view-home");
  };
  const [isTablet, setIsTablet] = useState(false);

  const isMobile = useMemo(() => {
    const device = getDevice();
    return device.ios || device.android;
  }, []);

  const isSmallDevice = isMobile || isTablet;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 600 && width <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Page name="settings">
      {isSmallDevice && <HomeNavbar />}
      <Layout>
        <Navbar title="Settings" />
        <BlockTitle>Form Example</BlockTitle>
        <List strongIos outlineIos dividersIos>
          <ListInput label="Name" type="text" placeholder="Your name" />

          <ListInput label="E-mail" type="email" placeholder="E-mail" />

          <ListInput label="URL" type="url" placeholder="URL" />

          <ListInput label="Password" type="password" placeholder="Password" />

          <ListInput label="Phone" type="tel" placeholder="Phone" />

          <ListInput label="Gender" type="select">
            <option>Male</option>
            <option>Female</option>
          </ListInput>

          <ListInput
            label="Birth date"
            type="date"
            placeholder="Birth day"
            defaultValue="2014-04-30"
          />

          <ListItem title="Toggle">
            <Toggle slot="after" />
          </ListItem>

          <ListInput label="Range" input={false}>
            <Range slot="input" value={50} min={0} max={100} step={1} />
          </ListInput>

          <ListInput type="textarea" label="Textarea" placeholder="Bio" />
          <ListInput
            type="textarea"
            label="Resizable"
            placeholder="Bio"
            resizable
          />
        </List>

        <Button onClick={() => f7.popup.open("#logoutConfirm")}>Log out</Button>

        <Popup id="logoutConfirm">
          <p>Are you sure you want to log out?</p>
          <Block className="grid-gap grid grid-cols-2">
            <Button popupClose="#logoutConfirm">Cancel</Button>
            <Button fill onClick={handleLogout}>
              Log out
            </Button>
          </Block>
        </Popup>
      </Layout>
    </Page>
  );
};

export default ActivityPage;
