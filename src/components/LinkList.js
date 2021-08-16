import React, { Component } from "react";
import Link from "./Link";
import { Query } from "@apollo/react-components";
import gql from "apollo-boost";

const GET_STORE = gql`
  {
    Retaurants {
      id
      name
      bgImag
      address
      owner
      category
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={GET_STORE}>
        {({ loading, error, data }) => {
          if (loading) return <div>Now Loading</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.Retaurants;

          return (
            <div>
              {linksToRender.map((link) => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
