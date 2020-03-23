import React, {Fragment} from "react";
import { connect } from "react-redux";

//import components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

import { Articles } from "../constants";

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
});

// class bargePage extends Component{
const HomeContainer = (props) => {
    const classes = useStyles();

    const { history } = props;

    const goArticle = (post) => {
        history.push({
            pathname: '/app/main/article/'+post.id,
            state: {
                id: post.id,
                title: post.title,
                description: post.description,
                date: post.date,
                video: post.video
            }
        });
    };

      return (
          <Fragment>
              <Grid container spacing={4} className="mt-30">
                  {Articles.map(post => (
                      <Grid key={post.id} item xs={12} md={4}>
                              <Card className={classes.root}>
                                  <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                                  <CardHeader
                                      title={post.title}
                                      subheader="March 22, 2020"
                                  />
                                  <CardContent>
                                      <Typography variant="body2" color="textSecondary" component="p">
                                          {post.description}
                                      </Typography>
                                  </CardContent>
                                  <CardActions disableSpacing>
                                      <Button onClick={() => goArticle(post)}
                                              variant="contained" style={{backgroundColor: "red", color: "white", marginLeft: "3%"}} disableElevation>
                                          See More
                                      </Button>
                                  </CardActions>
                              </Card>
                      </Grid>
                  ))}
              </Grid>
          </Fragment>
      );
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(
    mapStateToProps,
    {

    }
)(HomeContainer);
