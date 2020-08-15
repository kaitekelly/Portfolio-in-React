
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CardBtn from "./CardBtn";

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
          <CardBtn></CardBtn>
        </CardBody>
      </Card>
    </div>
  );
};

{/* <CardBtn
style={{ opacity: 1 }}
data-value="next"
/> */}

{/* <Wrapper></Wrapper>
<Title>Friends List</Title>
<FriendCard
  name={friends[0].name}
  image={friends[0].image}
  occupation={friends[0].occupation}
  location={friends[0].location}
/> */}

export default Example;


// bootstrap doc button drop down right for links to deployed site and repo
{/* <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown> */}