// "use client";
// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/actionTypes/actionTypes";
import { addToCart } from "../../redux/actionCreators/actionCreators";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const ProductCard = ({ product }) => {
  const { image, keyFeature, model, price } = product;
  const dispatch = useDispatch();

  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{model}</Text>
          <Badge color="pink" variant="light">
            ${price}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {keyFeature.map((keyfeature) => (
            <>
              <p>{keyfeature}</p>
            </>
          ))}
        </Text>

        <Button onClick={() => dispatch(addToCart(product))} variant="light" color="blue" fullWidth mt="md" radius="md">
          add to cart
        </Button>
      </Card>
      {/* <Card sx={{ maxWidth: 345 }} className="border">
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {keyFeature.map((keyfeature) => (
                <>
                  <p>{keyfeature}</p>
                </>
              ))}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => dispatch(addToCart(product))} size="small" color="primary">
            add to cart
          </Button>
        </CardActions>
      </Card> */}
    </div>
  );
};

export default ProductCard;
