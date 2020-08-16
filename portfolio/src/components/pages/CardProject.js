import React, {
       Card, 
       CardImg, 
       CardBody,
       CardTitle,
       CardSubtitle, 
       CardText, 
       Button
}

function CardProject() {
    return(
      <Card>
        <CardImg top width="100%" src={Brewr} alt="Card image cap" />
        <CardBody>
          <CardTitle>brewR App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
          An application for craft beer lovers and breweries to search, favorite, and blog about craft breweries.
          </CardText>
          <Button href="https://brewrs.herokuapp.com/">Site</Button>
          <Button href="https://github.com/JMantis0/brewR">Repo</Button>
        </CardBody>
      </Card>

    )



}

export default CardProject;
