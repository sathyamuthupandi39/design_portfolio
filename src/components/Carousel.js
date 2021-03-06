import React from "react";
import devgrub from "../assets/images/dash (1).png";
import youtube from "../assets/images/succi.jpg";
import evverest from "../assets/images/evverest.png";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Dashboard UI",
          subTitle: "Interface Design/Web",
          imgSrc: devgrub,
          link:
            "https://www.behance.net/gallery/100472605/Dashboard-for-E-Commerce-Retailer",
          selected: false,
        },
        {
          id: 1,
          title: "Under Progress",
          subTitle: "####",
          imgSrc: youtube,
          link: "https://www.youtube.com",
          selected: false,
        },
        {
          id: 2,
          title: "Under Progress",
          subTitle: "###",
          imgSrc: evverest,
          link: "https://github.com",
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
        <Card
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
        <h4 className="sadh p-3 pl-1">UX/UI</h4>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carousel;
