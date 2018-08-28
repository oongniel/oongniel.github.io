import React, { Component } from "react";
import { DefaultView, VerticalView, HalfView } from "./views";
class Home extends Component {
  renderContent = content => {
    const isImage = content.match(/(svg|png|jpg|jpeg)/g);
    const type = isImage ? "image" : typeof content;
    console.log();
    switch (type) {
      case "string":
        return <p>{content}</p>;
      case "image":
        return <img src={content} width="100%" alt="" />;
      default:
        break;
    }
  };

  render() {
    const { params } = this.props;
    const { light, view } = params;
    return (
      <div className={`page page-details-type-c ${light ? "light" : "dark"}`}>
        {
          {
            default: (
              <DefaultView params={params} renderContent={this.renderContent} />
            ),
            vertical: (
              <VerticalView
                params={params}
                renderContent={this.renderContent}
              />
            ),
            half: (
              <HalfView params={params} renderContent={this.renderContent} />
            )
          }[view]
        }
      </div>
    );
  }
}

export default Home;
