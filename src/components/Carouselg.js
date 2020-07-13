import React from "react";
import devgrub from "../assets/images/kalp.png";
import blue from "../assets/images/maaya.png";
import evverest from "../assets/images/ingen.png";
import Cardg from "../components/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
class Carouselg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Kalpana",
          subTitle: "Branding/Event",
          imgSrc: devgrub,
          link:
            "https://www.behance.net/gallery/100422817/Kalpana-Techno-Humanitarian-Event-%28IEEE-PesitBsc%29",

          selected: false,
        },
        {
          id: 1,
          title: "Maaya",
          subTitle: "Branding/Event/Cultural",
          imgSrc: blue,
          link:
            "https://www.behance.net/gallery/100377989/Maaya-19-Techno-Cultural-Event",
          selected: false,
        },
        {
          id: 2,
          title: "Hackathon Merch",
          subTitle: "Branding/Hackathon",
          imgSrc: evverest,
          link:
            "https://www.behance.net/gallery/100413513/Hackathon-Merchandise",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items]; //get all the items

    items[id].selected = items[id].selected ? false : true; //toogle feature

    items.forEach((item) => {
      //if its not the one being selected then set other sto false
      if (item.id !== id) {
        item.selected = false;
      }
    });
    //to make the state persistant
    this.setState({
      items,
    });
  };
  //simplyfying stuff ... basically mapping through all the elements in item and creating a card for it
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Cardg
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <h4 className="sadh p-3 pl-1 ">Graphic Designing</h4>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carouselg;
