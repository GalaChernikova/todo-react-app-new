import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteComment, deletePost } from "../../redux/postSlice";
import avatar from "./../../images/avatar.png";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddComments from "../comments/AddComments";
import './PostItem.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});

export default function PostItem({
  id,
  date,
  title,
  body,
  comments
}) {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ id }));
  };

  const handleDeleteComment = () => {
    dispatch(deleteComment({ id }));
  };

  return (
    <div>
      <Card id="card" key={id}>
        <CardHeader
          avatar={
            <Avatar src={avatar} id="avatar">
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleDeletePost}>
              <ClearIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
          id="cardHeader"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" id="postBody">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" id="heartButton">
            <StyledRating
              name="customized-color"
              defaultValue={3.5}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
              <div>
                <AddComments />
              </div>
              <div>
                {Array.from(comments).map((com) => {
                  return (
                    <div
                      key={com.id}
                      className="flex justify-between mb-3 border-t border-stone-600"
                    >
                      <div>
                        <p className="font-title my-1">{com.comName} </p>
                        <p className="font-main">{com.comText} </p>
                      </div>
                      <div>
                        <IconButton
                          aria-label="settings"
                          onClick={handleDeleteComment}
                        >
                          <ClearIcon />
                        </IconButton>
                      </div>
                    </div>
                  );
                })}
              </div>              
            </div>

          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
