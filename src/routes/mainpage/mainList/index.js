import React, { Component } from "react";
import { connect } from "react-redux";

//import components
import Helmet from "../../../components/Helmet";
import PageTitleBar from "../../../components/PageTitleBar/PageTitleBar";
import * as mainHelper from "../../../helpers/mainURL"
import FeaturedPost from "../../app/components/Components/FeaturedPost";
import Grid from "@material-ui/core/Grid";

const featuredPosts = [
    {
        title: 'Article dummy 1',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 2',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 3',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 4',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 5',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 6',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 7',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 8',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 9',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Article dummy 10',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

class bargePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
      const { loading } = this.props.mainState;

      return (
          <Grid container spacing={4}>
              {featuredPosts.map(post => (
                    <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid>
      );
  }
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(
    mapStateToProps,
    {

    }
)(bargePage);