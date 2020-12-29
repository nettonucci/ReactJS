import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button,
  Toast,
  ToastBody,
  ToastHeader,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toast = () => setIsToast(!isToast);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Netto Nucci</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/nettonucci" target="_blank">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button onClick={toast} color="light" outline>
            Notificações <Badge color="success">4</Badge>
          </Button>
        </Collapse>
      </Navbar>
      {isToast && (
        <div
          className="position-absolute p-3 my-2 rounded bg-docs-transparent-grid"
          style={{ zIndex: 5 }}
        >
          <Toast>
            <ToastHeader>Ola Netto</ToastHeader>
            <ToastBody>
              Você possui <Badge color="success">4</Badge> menssagens
            </ToastBody>
          </Toast>
        </div>
      )}
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;
