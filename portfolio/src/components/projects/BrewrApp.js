import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import BrewrPic from "../../assets/brewr-img.jpg";

const Brewr = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={BrewrPic} alt="brewR App screenshot" />
        <CardBody>
          <CardTitle>brewR App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Brewr;


// bootstrap doc button drop down right for links to deployed site and repo
<ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>