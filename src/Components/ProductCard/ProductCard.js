import React from "react";
import { useDispatch } from "react-redux";

// import { addToCart } from "../../redux/actionCreators/actionCreators";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { image, keyFeature, model, price, brand } = product;
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
          <Badge color="pink" variant="light">
            ${brand}
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
    </div>
  );
};

export default ProductCard;
