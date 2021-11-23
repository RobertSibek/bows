import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip,
} from "@mui/material";

const Item = (props) => {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
    props.onUpdateCart(props.id, "add");
  };

  const removeItem = () => {
    setCount(count > 0 ? count - 1 : 0);
    props.onUpdateCart(props.id, "remove");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Chip
          sx={{ mt: 2 }}
          label={"CZK " + props.price}
          color="primary"
          variant="outlined"
        />
        {/* <Typography variant="h6" color="text.primary">
          {props.price} CZK
        </Typography> */}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" size="small" onClick={addItem}>
          +
        </Button>
        <Button variant="text" size="small">
          {count}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={removeItem}
          disabled={count < 1}
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
