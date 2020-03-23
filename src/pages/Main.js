import React, { Component } from "react";
import { connect } from "react-redux";

//import components
import FeaturedPost from "../components/MainComponent/FeaturedPost";
import Grid from "@material-ui/core/Grid";

const featuredPosts = [
    {
        id: '1',
        title: 'Article dummy 1',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/woods-104286986.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=EngW7tLk6R8'
    },
    {
        id: '2',
        title: 'Article dummy 2',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/warm-glow-fall-autumn-forest-woods-path-warm-glow-seasonal-fall-autumn-forest-woods-path-tree-trees-branches-160292025.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=uilkmUoXoLU'
    },
    {
        id: '3',
        title: 'Article dummy 3',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/woods-14670422.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=HjxYvcdpVnU'
    },
    {
        id: '4',
        title: 'Article dummy 4',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/young-plant-growing-sunshine-13638982.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=-Sk43fi7NHU'
    },
    {
        id: '5',
        title: 'Article dummy 5',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/woods-sunshine-21700835.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=k0oFcQLQNiU'
    },
    {
        id: '6',
        title: 'Article dummy 6',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/young-plant-morning-dew-13638955.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=aGByQ7Ye_KI'
    },
    {
        id: '7',
        title: 'Article dummy 7',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/fresh-juicy-young-grass-droplets-morning-dew-spring-soft-focus-fresh-juicy-young-grass-droplets-morning-dew-spring-175363959.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=rN6nlNC9WQA'
    },
    {
        id: '8',
        title: 'Article dummy 8',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/fresh-juicy-red-apples-stack-basket-sale-beautiful-natural-background-135297664.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=7KXGZAEWzn0'
    },
    {
        id: '9',
        title: 'Article dummy 9',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/bananas-pile-1271344.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=BHACKCNDMW8'
    },
    {
        id: '10',
        title: 'Article dummy 10',
        date: 'Article Date dummy 1',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content (dummy1).',
        image: 'https://thumbs.dreamstime.com/z/fresh-picked-bananas-pile-green-farm-84605446.jpg',
        imageText: 'Image Text',
        video: 'https://www.youtube.com/watch?v=HSsqzzuGTPo',
    },
];

class bargePage extends Component{
    render() {
      return (
          <Grid container spacing={4} className="mt-30">
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
