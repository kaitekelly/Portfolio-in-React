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
        <CardImg top width="100%" src={props.projects[1].img} alt="brewR App screenshot" />
        <CardBody>
          <CardTitle>{props.projects[1].title}</CardTitle> 
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.projects[1].text}</CardText>
          <Button>Button{props.projects[1].siteurl}</Button>
          <Button>Button{props.projects[1].repourl}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Brewr;
img={projects[0].img}
title={projects[0].title}
text={projects[0].text}
siteurl={projects[0].siteurl}
repourl={projects[0].repourl}

{/* <FriendCard
name={friends[1].name}
image={friends[1].image}
occupation={friends[1].occupation}
location={friends[1].location}
/> */}



"id": 11,
"img": "",
"title": "",
"subtitle": "",
"text": "",
"siteurl": "",
"repourl": "",


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