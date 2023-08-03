import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/actionCreators/actionCreators";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{cart.length}</p>
      <div>
        <div className="d-flex gap-5 ">
          {cart
            .sort((a, b) => a._id - b._id)
            .map((product) => (
              <>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image src={product.image} height={160} alt="Norway" />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{product.model}</Text>
                    <Badge color="pink" variant="light">
                      ${product.price}
                    </Badge>
                    <Badge color="pink" variant="light">
                      quantity: {product.quantity}
                    </Badge>
                  </Group>

                  <Text size="sm" color="dimmed">
                    {product.keyFeature.map((keyfeature) => (
                      <>
                        <p>{keyfeature}</p>
                      </>
                    ))}
                  </Text>

                  <Button
                    onClick={() => dispatch(removeFromCart(product))}
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    delete
                  </Button>
                </Card>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
